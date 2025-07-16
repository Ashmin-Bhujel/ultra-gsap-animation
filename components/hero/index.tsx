import Image from "next/image";
import styles from "./hero.module.scss";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { animateImage, animateMenu, animateTitle } from "./animations";

export default function Hero() {
  const heroRef = useRef(null);

  // GSAP animation timeline
  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.add(animateTitle()).add(animateImage(), 0).add(animateMenu(), 0);
    },
    { scope: heroRef }
  );

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.hero__top}>
        <div data-menu-item data-hidden>
          Ultra
        </div>
        <span data-menu-item data-hidden>
          GSAP
        </span>
        <span data-menu-item data-hidden>
          Animation
        </span>
      </div>

      <h1 className={styles.hero__title}>
        <span data-title-first data-hidden>
          GSAP
        </span>
        <span data-hero-line className={styles.hero__line}></span>
        <span data-title-last data-hidden>
          ANIMATION
        </span>
      </h1>

      <div className={styles.hero__image}>
        <div data-image-overlay className={styles.hero__imageOverlay}></div>
        <Image
          data-image
          src="/images/blob.jpg"
          width={1728}
          height={650}
          alt="Blob"
          style={{ objectFit: "cover" }}
          priority={true}
          data-hidden
        />
      </div>
    </section>
  );
}
