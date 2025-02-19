import Hero from "@/components/hero";
import Tools from "@/components/tools";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-60px)] py-5 px-[20px] md:px-[50px] lg:px-[100px] bg-gradient-to-bl from-green-200 via-[#478d68] to-[#191919] dark:from-[#F3F8FF] dark:via-[#416D19] dark:to-[#416D19]">
      <Hero />
      <Tools />
    </div>
  );
}
