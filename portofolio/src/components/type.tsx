"use client";

import { TypeAnimation as TypeAnimationComponent } from "react-type-animation";
import React from "react";

interface TypeAnimationProps {
  sequence: string[];
  delay?: number;
}
export const TypeAnimation: React.FC<TypeAnimationProps> = ({
  sequence,
  delay = 1000,
}) => {
  const modifiedSequence: (string | number)[] = [];

  sequence.forEach((item, index) => {
    modifiedSequence.push(item);

    if (index < sequence.length) {
      modifiedSequence.push(delay);
    }
  });

  return (
    <TypeAnimationComponent
      sequence={modifiedSequence}
      speed={40}
      deletionSpeed={70}
      repeat={Infinity}
      aria-label={sequence[0]}
      cursor={true}
    />
  );
};
