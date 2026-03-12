declare module "gsap/SplitText" {
  import type { GSAPPlugin } from "gsap"

  export class SplitText {
    constructor(
      target: string | string[] | Element | Element[] | NodeListOf<Element>,
      vars?: unknown
    )

    chars: HTMLElement[]
    words: HTMLElement[]
    lines: HTMLElement[]

    revert(): void
  }

  export const SplitTextPlugin: GSAPPlugin
}

