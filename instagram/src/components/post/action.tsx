"use client";

import axios from "@/lib/axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { IoBookmarkOutline, IoPaperPlaneOutline } from "react-icons/io5";

interface IProps {
  likeCount: number;
  liked: boolean;
  postId: number;
}

export default function ActionButton({ likeCount, liked, postId }: IProps) {
  const [isLike, setIsLike] = useState<boolean>(liked || false);
  const [count, setCount] = useState<number>(likeCount || 0);
  const { data } = useSession()

  const onLike = async () => {
    try {
      await axios.post("/posts/like", { postId }, {
        headers: { Authorization: `Bearer ${data?.accessToken}` }
      });
      setIsLike(!isLike);
      setCount(isLike ? count - 1 : count + 1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center text-2xl py-3">
        <div className="flex gap-4">
          {isLike ? (
            <AiFillHeart onClick={onLike} className="text-red-500" />
          ) : (
            <AiOutlineHeart onClick={onLike} />
          )}
          <GoComment />
          <IoPaperPlaneOutline />
        </div>
        <IoBookmarkOutline />
      </div>
      <div className="text-sm mb-1 font-bold">
        <p>{count} suka</p>
      </div>
    </div>
  );
}
