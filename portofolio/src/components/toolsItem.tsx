import Image from "next/image";
import React from "react";

interface ToolsProps {
  desc: string;
  src: string;
}

export default function ToolsItem({ desc, src }: ToolsProps) {
  return (
    <div className="flex items-center gap-2 mx-2 bg-white/30 px-5 py-1.5 rounded-full text-black hover:bg-transparent hover:text-white hover:border hover:border-white/30 cursor-pointer transition-all">
      <Image
        src={src}
        alt={desc}
        width={32}
        height={32}
        className="w-5 sm:w-7 md:w-8 h-5 sm:h-7 md:h-8"
      />
      <span className="font-bold text-xs sm:text-sm md:text-base">{desc}</span>
    </div>
  );
}
