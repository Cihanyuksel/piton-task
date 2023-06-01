import Image from "next/image";

export default function HeroSection() {
  return (
    <header className=" w-full h-screen max-lg:h-96 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src="/images/hero-section.png" alt="hero section" fill />
        <h1 className="text-9xl mb-10 max-2xl:text-6xl max-lg:text-3xl  max-sm:text-xl w-3/5 text-center font-roboto z-10 absolute">
          Let's create something great together.
        </h1>
      </div>
    </header>
  );
}
