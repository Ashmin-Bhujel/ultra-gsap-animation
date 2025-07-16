"use client";
import { Hero, Loader } from "@/components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

export default function Home() {
  const [loaderAnimationFinished, setLoaderAnimationFinished] = useState(false);
  const [animationTimeline, setAnimationTimeline] =
    useState<GSAPTimeline | null>(null);

  // Create global animation timeline
  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => setLoaderAnimationFinished(true),
    });
    setAnimationTimeline(tl);
  });

  return (
    <main>
      {loaderAnimationFinished ? (
        <Hero />
      ) : (
        <Loader animationTimeline={animationTimeline} />
      )}
    </main>
  );
}
