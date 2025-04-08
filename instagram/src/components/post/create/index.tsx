'use client';

import { useModal } from "@/context/modal";
import CreatePostModal from "./modal";


export default function CreatePost() {
  const { isOpen, closeModal } = useModal();

  if (!isOpen) return null;

  return <CreatePostModal onClose={closeModal} />;
}
