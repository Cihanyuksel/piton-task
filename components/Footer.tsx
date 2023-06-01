import Image from "next/image";

export default function Footer() {
  return (
    <div className="h-20 w-full bg-red-700 text-white items-center justify-center 3xl:text-4xl 3xl:h-40">
      <div className="w-1/2 h-full inline-flex items-center justify-center bg-black">
        <p>Cihan YÜKSEL &copy;2023</p>
      </div>
      <a
        href="https://github.com/cihanyuksel"
        className="w-1/2 h-full inline-flex items-center justify-center bg-red-700 hover:bg-white hover:text-red-700 transition-colors"
      >
        <p className="font-bold tracking-wider">Github</p>
      </a>
    </div>
  );
}
