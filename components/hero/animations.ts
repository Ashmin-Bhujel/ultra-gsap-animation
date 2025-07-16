import gsap from "gsap";

// Animating hero title
export function animateTitle() {
  const tl = gsap.timeline({
    defaults: {
      duration: 2,
      ease: "expo.out",
    },
  });

  tl.to("[data-hero-line]", {
    scaleX: 1,
  })
    .fromTo(
      "[data-title-first]",
      {
        x: 100,
        autoAlpha: 0,
        skewX: -10,
      },
      {
        x: 0,
        autoAlpha: 1,
        skewX: 0,
      },
      "<15%"
    )
    .fromTo(
      "[data-title-last]",
      {
        x: -100,
        autoAlpha: 0,
        skewX: 10,
      },
      {
        x: 0,
        autoAlpha: 1,
        skewX: 0,
      },
      "<"
    );

  return tl;
}

// Animating hero image
export function animateImage() {
  const tl = gsap.timeline({
    defaults: {
      duration: 1.5,
      ease: "expo.out",
    },
  });

  tl.to("[data-image-overlay]", {
    scaleY: 1,
  })
    .from(
      "[data-image]",
      {
        yPercent: 100,
      },
      "<"
    )
    .to("[data-image-overlay]", {
      scaleY: 0,
      transformOrigin: "top center",
    })
    .from(
      "[data-image]",
      {
        duration: 2,
        scale: 1.3,
      },
      "<"
    )
    .to(
      "[data-image]",
      {
        autoAlpha: 1,
      },
      "0"
    );

  return tl;
}

// Animate menu
export function animateMenu() {
  const tl = gsap.timeline();

  tl.fromTo(
    "[data-menu-item]",
    {
      autoAlpha: 0,
      y: 32,
    },
    {
      autoAlpha: 1,
      y: 1,
      ease: "expo.out",
      duration: 2,
      stagger: 0.2,
    }
  );

  return tl;
}
