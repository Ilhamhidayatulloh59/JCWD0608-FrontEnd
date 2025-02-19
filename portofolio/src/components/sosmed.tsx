import React from "react";
import { IconType } from "react-icons";
import Motion from "./motion";

interface ISocialBtn {
  desc: string;
  Icon: IconType;
  className?: string;
  delay: number;
}

export const SosialBtn: React.FC<ISocialBtn> = ({
  desc,
  Icon,
  className = "",
  delay,
}) => {
  return (
    <Motion direction="left" delay={delay}>
      <button
        className={`flex items-center gap-2 px-3 py-2 text-white rounded-md max-w-[120px] text-xs sm:text-sm md:text-sm transition ${className}`}
      >
        <Icon className="text-lg" />
        {desc}
      </button>
    </Motion>
  );
};
