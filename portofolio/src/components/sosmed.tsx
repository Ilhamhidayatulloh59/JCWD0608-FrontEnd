import React from "react";
import { IconType } from "react-icons";

interface ISocialBtn {
  desc: string;
  Icon: IconType;
  className?: string;
}

export const SosialBtn: React.FC<ISocialBtn> = ({
  desc,
  Icon,
  className = "",
}) => {
  return (
    <button
      className={`flex items-center gap-2 px-3 py-2 text-white rounded-md max-w-[120px] text-xs sm:text-sm md:text-sm transition ${className}`}
    >
      <Icon className="text-lg" />
      {desc}
    </button>
  );
};
