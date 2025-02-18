import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex h-[60px] w-screen items-center px-[20px] md:px-[50px] lg:px-[100px] justify-between ">
      <h1 className="font-bold text-xl">
        <span className="text-teal-700">LOREM</span>IPSUM
      </h1>
      <div className="h-[60px] flex gap-3 items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
      </div>
    </div>
  );
}
