import Image from "next/image";
import FormComp from "./_components";

export default function Page() {
  return (
    <section>
      <div className="flex justify-center items-center min-h-screen">
        <div className="hidden md:block">
          <Image
            src="/home-ig.png"
            alt="Home Instagram"
            width={400}
            height={400}
          />
        </div>
        <FormComp />
      </div>
    </section>
  );
}
