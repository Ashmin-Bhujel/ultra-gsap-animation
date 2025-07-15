import gsap from "gsap";
import { RefObject } from "react";

// Translate words group up by -80%
export function introAnimation(wordsGroupRef: RefObject<null>) {
  const tl = gsap.timeline();

  tl.to(wordsGroupRef.current, {
    yPercent: -80,
    duration: 5,
    ease: "power3.inOut",
  });

  return tl;
}

// Scale progress form scaleX 0 to 1
export function progressAnimation(
  progressRef: RefObject<null>,
  progressNumberRef: RefObject<null>
) {
  const tl = gsap.timeline({
    defaults: {
      duration: 5,
      ease: "power3.inOut",
    },
  });

  tl.to(progressRef.current, {
    scaleX: 1,
  })
    .to(
      progressNumberRef.current,
      {
        x: "100vw",
      },
      0
    )
    .to(
      progressNumberRef.current,
      {
        textContent: 100,
        roundProps: "textContent",
      },
      0
    )
    .to(progressNumberRef.current, {
      y: 25,
      autoAlpha: 0,
      duration: 1,
    });

  return tl;
}

// Collapse word animation using clip-path
export const collapseWords = (loaderRef: RefObject<null>) => {
  const tl = gsap.timeline();
  tl.to(loaderRef.current, {
    "clip-path": "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
    duration: 3,
    ease: "expo.inOut",
  });

  return tl;
};
