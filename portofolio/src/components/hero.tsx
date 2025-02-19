import Image from "next/image";
import { TypeAnimation } from "./type";
import { SosialBtn } from "./sosmed";
import { FaDiscord, FaInstagram, FaGithub } from "react-icons/fa6";
import Motion from "./motion";

export default function Hero() {
  return (
    <div className="flex max-sm:justify-start max-sm:pt-3 flex-col md:flex-row gap-5 min-h-[calc(100vh-60px)]">
      <div className="md:flex-1 flex flex-col md:justify-center gap-5 md:gap-10">
        <Motion direction="left">
          <div className="flex items-center gap-2">
            <span className="relative font-bold text-green-200 dark:text-green-100 text-2xl sm:text-3xl md:text-4xl">
              <span className="absolute bottom-[-1px] md:bottom-[-5px] left-0 w-full bg-green-500 bg-opacity-[0.6] h-[20%] md:h-[30%]" />
              <TypeAnimation
                sequence={["Hi, I'm Lorem Ipsum", "Hi, I'm Web Developer"]}
                delay={3000}
              />
            </span>
            <Image
              src="/giphy.gif"
              alt="tangan"
              priority
              width={25}
              height={25}
            />
          </div>
        </Motion>
        <Motion direction="left" delay={0.25}>
          <p className="font-bold text-xl sm:text-2xl md:text-3xl text-white">
            I&apos;m a Full Stack Web Developer, WordPress Development & UI/UX
            Design
          </p>
        </Motion>

        <Motion direction="left" delay={0.5}>
          <p className="text-base text-white">
            I&apos;m from Indonesia and I&apos;ve been working as a freelancer
            for 1 year. Right now, I&apos;m looking forward to collaborating
            with you!
          </p>
        </Motion>

        <div className="flex gap-[10px] flex-wrap">
          <SosialBtn
            desc="discord"
            Icon={FaDiscord}
            className="bg-blue-500"
            delay={0.5}
          />
          <SosialBtn
            desc="github"
            Icon={FaGithub}
            className="bg-black"
            delay={0.25}
          />
          <SosialBtn
            desc="instagram"
            Icon={FaInstagram}
            className="bg-pink-500"
            delay={0}
          />
        </div>
      </div>
      <div className="md:flex-1 flex md:items-center">
        <Motion direction="right">
          <Image
            className="rounded-bl-[50px] rounded-tr-[50px] md:rounded-bl-[100px] md:rounded-tr-[100px]"
            src={"/welcoming.jpeg"}
            alt="welcoming"
            width={600}
            height={600}
          />
        </Motion>
      </div>
    </div>
  );
}
