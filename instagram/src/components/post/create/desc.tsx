"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

interface PostDescriptionProps {
  onChange?: (value: string) => void;
}

export default function PostDescription({ onChange }: PostDescriptionProps) {
  const [caption, setCaption] = useState("");
  const { data } = useSession();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setCaption(value);
    onChange?.(value);
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex items-center gap-3 px-4 py-3">
        <Image
          src={
            data?.user.avatar ||
            "https://res.cloudinary.com/dn6uglajh/image/upload/v1733990935/blank-image_yfczs3.jpg"
          }
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
        <span className="font-semibold text-sm">{data?.user.fullname}</span>
      </div>

      <div className="p-4 flex-1">
        <textarea
          placeholder="Tulis caption..."
          value={caption}
          onChange={handleChange}
          maxLength={200}
          className="w-full h-full resize-none outline-none border-none text-sm placeholder:text-gray-400"
        />
      </div>

      <div className="px-4 pb-3 text-xs text-gray-400 text-right">
        {caption.length}/200
      </div>
    </div>
  );
}
