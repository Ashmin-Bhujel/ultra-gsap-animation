"use client";
import { useGSAP } from "@gsap/react";
import { words } from "./data";
import styles from "./loader.module.scss";
import { useRef } from "react";
import { collapseWords, introAnimation, progressAnimation } from "./animations";

export default function Loader({
  animationTimeline,
}: {
  animationTimeline: GSAPTimeline | null;
}) {
  // Refs
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const wordsGroupRef = useRef(null);

  // GSAP animation timeline
  useGSAP(
    () => {
      if (animationTimeline) {
        animationTimeline
          .add(introAnimation(wordsGroupRef))
          .add(progressAnimation(progressRef, progressNumberRef), 0)
          .add(collapseWords(loaderRef), "-=2");
      }
    },
    { dependencies: [animationTimeline] }
  );

  return (
    <div className={styles.loader__wrapper}>
      <div className={styles.loader__progressWrapper}>
        <div className={styles.loader__progress} ref={progressRef}></div>
        <span className={styles.loader__progressNumber} ref={progressNumberRef}>
          0
        </span>
      </div>
      <div className={styles.loader} ref={loaderRef}>
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div className={styles.loader__wordsGroup} ref={wordsGroupRef}>
            {words.map((word, index) => {
              return (
                <span key={index} className={styles.loader__word}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
