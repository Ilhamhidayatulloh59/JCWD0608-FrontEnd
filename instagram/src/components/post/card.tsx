import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { GoKebabHorizontal } from "react-icons/go";
import { IPost } from "@/types/post";
import { convertTime } from "@/utils/time";
import ActionButton from "./action";

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
              src={
                post.user.avatar ||
                "https://res.cloudinary.com/dn6uglajh/image/upload/v1733990935/blank-image_yfczs3.jpg"
              }
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
            <span className="text-gray-500 font-normal">
              • {convertTime(post.createdAt)}
            </span>
          </div>
        </div>
        <div>
          <GoKebabHorizontal />
        </div>
      </div>
      <div className="rounded-sm overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.user.username + "post"}
          width={500}
          height={500}
        />
      </div>
      <ActionButton
        likeCount={post.likeCount}
        liked={post.liked}
        postId={post.id}
      />
      <div>
        <div className="text-sm font-semibold mr-2 flex items-center gap-1 float-left">
          <span>{post.user.username}</span>
          <span className="inline text-blue-600">
            <MdVerified />
          </span>
        </div>
        <div className="text-sm font-normal">{post.caption}</div>
      </div>
    </div>
  );
}
