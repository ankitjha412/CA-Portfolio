import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

(gsap as any).config({ trialWarn: false });
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother | null = null;

const Navbar = () => {
  useEffect(() => {
    const shouldEnableSmoother = () => window.innerWidth > 1024;

    const destroySmoother = () => {
      if (!smoother) return;
      smoother.kill();
      smoother = null;
      ScrollTrigger.refresh(true);
    };

    const ensureSmootherState = () => {
      const enable = shouldEnableSmoother();
      if (enable && !smoother) {
        smoother = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 1.7,
          speed: 1.7,
          effects: true,
          autoResize: true,
          ignoreMobileResize: true,
        });

        smoother.scrollTop(0);
        smoother.paused(true);
      } else if (!enable && smoother) {
        destroySmoother();
      }
    };

    ensureSmootherState();

    const onResize = () => {
      ensureSmootherState();
      if (smoother) smoother.refresh();
      else ScrollTrigger.refresh(true);
    };

    const links = document.querySelectorAll(".header ul a");
    const onLinkClick = (e: Event) => {
      if (!smoother) return;
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const section = target.getAttribute("data-href");
      if (section) smoother.scrollTo(section, true, "top top");
    };

    links.forEach((link) => {
      link.addEventListener("click", onLinkClick);
    });

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      links.forEach((link) => {
        link.removeEventListener("click", onLinkClick);
      });
      destroySmoother();
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          NI
        </a>
        <a
          href="mailto:natwarishwar@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          natwarishwar@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
