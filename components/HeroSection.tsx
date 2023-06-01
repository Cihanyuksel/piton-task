import Image from "next/image";

export default function HeroSection() {
  return (
    <div className=" w-full h-screen lg:h-96 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src="/images/hero-section.png" alt="hero section" fill />
        <h1 className="text-9xl mb-10 2xl:text-6xl lg:text-3xl sm:text-xl w-3/5 text-center font-roboto z-10 absolute">
          Let&apos;s create something great together.
        </h1>
      </div>
    </div>
  );
}
