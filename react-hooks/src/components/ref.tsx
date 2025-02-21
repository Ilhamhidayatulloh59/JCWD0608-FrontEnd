"use client";

import { useEffect, useRef } from "react";

export default function CompRef() {
  const inputRef = useRef<null | HTMLInputElement>(null);

  const onSubmit = () => {
    if (inputRef.current) {
      console.log(inputRef.current?.value);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex gap-2 justify-center mt-4">
      <input
        ref={inputRef}
        type="text"
        className="p-1 border border-gray-400 rounded-md"
      />
      <button onClick={onSubmit} className="py-1 px-3 bg-blue-400 rounded-md">
        submit
      </button>
    </div>
  );
}
