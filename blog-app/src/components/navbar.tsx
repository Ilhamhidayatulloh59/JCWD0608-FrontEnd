import Link from "next/link";
import Wrapper from "./wrapper";
import Image from "next/image";
import Menu from "./menu";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10 bg-white">
      <Wrapper>
        <div className="flex justify-between w-full h-[60px] items-center px-4">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              alt="logo-blog"
              src={"/logo.png"}
              width={100}
              height={100}
              className="h-8 w-8"
              priority
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Blogger
            </span>
          </Link>
          <Menu />
        </div>
      </Wrapper>
    </div>
  );
}
