import Marquee from "react-fast-marquee";
import ToolsItem from "./toolsItem";
import Motion from "./motion";

export default function Tools() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Motion direction="right">
        <h2 className="text-white dark:text-black text-lg sm:text-xl md:text-2xl font-bold">
          Tools And Skills
        </h2>
      </Motion>
      <div className="w-full">
        <Motion direction="left">
          <Marquee pauseOnHover={true}>
            <ToolsItem
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              desc="Node js"
            />
            <ToolsItem
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              desc="Javascript"
            />
            <ToolsItem
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              desc="Typescript"
            />
            <ToolsItem
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              desc="React js"
            />
            <ToolsItem
              src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/nextjs-icon.svg"
              desc="Next js"
            />
            <ToolsItem
              src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/tailwindcss-icon.svg"
              desc="Tailwind CSS"
            />
            <ToolsItem
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
              desc="My SQL"
            />
            <ToolsItem
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              desc="HTML5"
            />
            <ToolsItem
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              desc="CSS"
            />
          </Marquee>
        </Motion>
      </div>
    </div>
  );
}
