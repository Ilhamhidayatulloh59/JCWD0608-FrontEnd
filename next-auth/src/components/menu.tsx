"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Menu() {
  const router = useRouter();
  const { data } = useSession();

  return (
    <div>
      {data ? (
        <div
          onClick={() => signOut({ redirectTo: "/login" })}
          className="flex items-center cursor-pointer"
        >
          <div className="w-10 h-10 relative">
            <Image
              className="rounded-full object-cover"
              src={
                data.user?.image ||
                "https://res.cloudinary.com/dn6uglajh/image/upload/v1733990935/blank-image_yfczs3.jpg"
              }
              alt={data.user?.name || "author"}
              fill
              priority
            />
          </div>
          <div className="flex-1 min-w-0 ms-2 max-sm:hidden">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {data.user?.name}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {data.user?.email}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex gap-2 h-[30px]">
          <button
            onClick={() => router.push("/register")}
            className="inline-flex items-center border px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-gray-100"
          >
            Register
          </button>
          <button
            onClick={() => router.push("/login")}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}
