import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useLoading } from "../../context/LoadingProvider";
import { setCharTimeline, setAllTimeline } from "../utils/GsapScroll";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setProgress } from "../Loading";
import avatarImage from "../../assets/image (8).png";

/** Set to true for 2D avatar image, false for 3D character model */
const USE_2D_AVATAR = true;

function Scene() {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef(new THREE.Scene());
  const { setLoading } = useLoading();
  const [character, setChar] = useState<THREE.Object3D | null>(null);

  useEffect(() => {
    if (!canvasDiv.current) return;

    const container = canvasDiv.current;
    container.classList.add("character-loaded");

    if (USE_2D_AVATAR) {
      // ── 2D avatar path: same scroll/timeline behaviour, no WebGL ──
      let percent = 0;
      const interval = setInterval(() => {
        percent += Math.min(10, 100 - percent);
        setLoading(percent);
        if (percent >= 100) clearInterval(interval);
      }, 80);

      const t = setTimeout(() => {
        setCharTimeline(null, null);
        setAllTimeline();
      }, 400);

      return () => {
        clearInterval(interval);
        clearTimeout(t);
        container.classList.remove("character-loaded");
      };
    }

    // ── 3D character path: full original architecture ──
    const rect = canvasDiv.current.getBoundingClientRect();
    const size = { width: rect.width, height: rect.height };
    const aspect = size.width / size.height;
    const scene = sceneRef.current;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    canvasDiv.current.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(14.5, aspect, 0.1, 1000);
    camera.position.z = 10;
    camera.position.set(0, 13.1, 24.7);
    camera.zoom = 1.1;
    camera.updateProjectionMatrix();

    let headBone: THREE.Object3D | null = null;
    let screenLight: THREE.Object3D | null = null;
    let mixer: THREE.AnimationMixer | undefined;

    const clock = new THREE.Clock();
    const light = setLighting(scene);
    const progress = setProgress(setLoading);
    const { loadCharacter } = setCharacter(renderer, scene, camera);

    let resizeHandler: (() => void) | null = null;

    loadCharacter().then((gltf) => {
      if (!gltf) return;

      const animations = setAnimations(gltf);
      if (hoverDivRef.current) animations.hover(gltf, hoverDivRef.current);
      mixer = animations.mixer;
      const char = gltf.scene;
      setChar(char);
      scene.add(char);
      headBone = char.getObjectByName("spine006") ?? null;
      screenLight = char.getObjectByName("screenlight") ?? null;

      progress.loaded().then(() => {
        setTimeout(() => {
          light.turnOnLights();
          animations.startIntro();
        }, 2500);
      });

      resizeHandler = () => handleResize(renderer, camera, canvasDiv, char);
      window.addEventListener("resize", resizeHandler);
    });

    let mouse = { x: 0, y: 0 };
    let interpolation = { x: 0.1, y: 0.2 };

    const onMouseMove = (e: MouseEvent) => {
      handleMouseMove(e, (x, y) => (mouse = { x, y }));
    };

    let debounce: number | undefined;
    const onTouchStart = (e: TouchEvent) => {
      const el = e.target as HTMLElement;
      debounce = window.setTimeout(() => {
        el?.addEventListener("touchmove", (ev: TouchEvent) =>
          handleTouchMove(ev, (x, y) => (mouse = { x, y }))
        );
      }, 200);
    };

    const onTouchEnd = () => {
      handleTouchEnd((x, y, ix, iy) => {
        mouse = { x, y };
        interpolation = { x: ix, y: iy };
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    const landingDiv = document.getElementById("landingDiv");
    if (landingDiv) {
      landingDiv.addEventListener("touchstart", onTouchStart);
      landingDiv.addEventListener("touchend", onTouchEnd);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      if (headBone) {
        handleHeadRotation(
          headBone,
          mouse.x,
          mouse.y,
          interpolation.x,
          interpolation.y,
          THREE.MathUtils.lerp
        );
        if (screenLight) light.setPointLight(screenLight);
      }
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (debounce !== undefined) clearTimeout(debounce);
      if (resizeHandler) window.removeEventListener("resize", resizeHandler);
      scene.clear();
      renderer.dispose();
      if (canvasDiv.current?.contains(renderer.domElement)) {
        canvasDiv.current.removeChild(renderer.domElement);
      }
      document.removeEventListener("mousemove", onMouseMove);
      if (landingDiv) {
        landingDiv.removeEventListener("touchstart", onTouchStart);
        landingDiv.removeEventListener("touchend", onTouchEnd);
      }
      container.classList.remove("character-loaded");
    };
  }, [setLoading]);

  return (
    <div className="character-container">
      <div className="character-model" ref={canvasDiv}>
        <div className="character-rim" />
        <div className="character-hover" ref={hoverDivRef} />
        {USE_2D_AVATAR && (
          <div className="landing-image">
            <img
              src={avatarImage}
              alt="Portrait"
              className="avatar-image"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Scene;
