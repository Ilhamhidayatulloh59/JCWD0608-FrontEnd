import Logout from "@/components/logout";
import PostList from "@/components/post";
import { auth } from "@/lib/auth";
import Image from "next/image";

export default async function Home() {
  const data = await auth();
  return (
    <div className="flex">
      <div className="sm:flex-2/3 flex justify-center">
        <PostList />
      </div>
      <div className="hidden lg:flex flex-1/3">
        <div className="h-[60px] flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={
                data?.user.avatar ||
                "https://res.cloudinary.com/dn6uglajh/image/upload/v1733990935/blank-image_yfczs3.jpg"
              }
              alt={data?.user.email || ""}
              width={40}
              height={40}
            />
          </div>
          <div className="text-sm font-semibold flex items-center gap-1">
            <span>{data?.user.fullname}</span>
          </div>
          <Logout />
        </div>
      </div>
    </div>
  );
}
