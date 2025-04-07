import Image from "next/image";
import { IPost } from "./data";
import { MdVerified } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { IoPaperPlaneOutline, IoBookmarkOutline } from "react-icons/io5";
import { GoKebabHorizontal, GoComment } from "react-icons/go";

interface IProps {
  post: IPost;
}

export default function CardPost({ post }: IProps) {
  return (
    <div className="md:w-[500px] border-b border-gray-300 pb-5">
      <div className="flex justify-between items-center">
        <div className="flex py-3 items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={post.user.profile_pic}
              alt={post.user.username}
              width={40}
              height={40}
            />
          </div>
          <div className="text-sm font-semibold flex items-center gap-1">
            <span>{post.user.username}</span>
            <span className="inline text-blue-600">
              <MdVerified />
            </span>
            <span className="text-gray-500 font-normal">• 10 Menit</span>
          </div>
        </div>
        <div>
          <GoKebabHorizontal />
        </div>
      </div>
      <div className="rounded-sm overflow-hidden">
        <Image
          src={post.image_url}
          alt={post.user.username + "post"}
          width={500}
          height={500}
        />
      </div>
      <div className="flex justify-between items-center text-2xl py-3">
        <div className="flex gap-4">
          <AiOutlineHeart />
          <GoComment />
          <IoPaperPlaneOutline />
        </div>
        <IoBookmarkOutline />
      </div>
      <div className="text-sm mb-1 font-bold">
        <p>1.000 suka</p>
      </div>
      <div>
        <div className="text-sm font-semibold mr-2 flex items-center gap-1 float-left">
          <span>{post.user.username}</span>
          <span className="inline text-blue-600">
            <MdVerified />
          </span>
        </div>
        <div className="text-sm font-normal">{post.content}</div>
      </div>
    </div>
  );
}
