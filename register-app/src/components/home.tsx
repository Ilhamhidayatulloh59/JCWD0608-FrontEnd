"use client";

import { RootState } from "@/redux/store";
import { logout } from "@/redux/userSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function HomeComp() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const onLogout = () => {
    dispatch(logout());
    router.push("/login");
  };
  return (
    <div>
      <h1 className="text-4xl font-bold">Username : {user.username}</h1>
      <h1 className="text-4xl font-bold">Email : {user.email}</h1>
      <button
        onClick={onLogout}
        className="p-2 bg-gray-600 text-white rounded-lg"
      >
        Log Out
      </button>
    </div>
  );
}
