import { useMotionValue, useAnimationFrame, MotionValue } from "motion/react";
import { useState } from "react";
import type { RefObject } from "react";
type UseVelocityProps<T extends HTMLElement> = {
  containerRef: RefObject<T | null>;
  baseSpeed: number;
  direction: 1 | -1;
  initialMultiplier?: number;
};

type UseVelocityReturn = {
  x: MotionValue<number>;
  speedMultiplier: number;
  setSpeedMultiplier: React.Dispatch<React.SetStateAction<number>>;
};

const useVelocity = <T extends HTMLElement>({
  containerRef,
  baseSpeed,
  direction,
  initialMultiplier = 1,
}: UseVelocityProps<T>): UseVelocityReturn => {
  const x = useMotionValue(0);
  const [speedMultiplier, setSpeedMultiplier] =
    useState<number>(initialMultiplier);

  useAnimationFrame((time, delta) => {
    const containerWidth = containerRef?.current?.scrollWidth
      ? containerRef.current.scrollWidth / 2
      : 0;

    if (!containerWidth) return;

    const moveBy = (baseSpeed * speedMultiplier * delta) / 1000;
    let currentX = x.get() + moveBy * direction;

    if (Math.abs(currentX) >= containerWidth) {
      currentX = 0;
    }

    x.set(currentX);
  });

  return {
    x,
    speedMultiplier,
    setSpeedMultiplier,
  };
};

export default useVelocity;
