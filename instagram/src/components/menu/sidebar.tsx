import Image from "next/image";
import Menu from "./menu";

export default function Sidebar() {
  return (
    <div className="hidden md:block">
      <div className="flex flex-col w-[300px] h-screen border-r border-gray-300 p-10">
        <Image src={"/text-ig.png"} alt="Logo IG" width={100} height={100} />
        <Menu />
      </div>
    </div>
  );
}
