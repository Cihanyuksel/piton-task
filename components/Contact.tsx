import Image from "next/image";

export default function Contact() {
  return (
    <div className="h-[500px] flex gap-x-10 md:flex-col md:items-center 3xl:justify-between 3xl:h-[1000px]">
      <div className="w-1/3 h-[500px] md:hidden md:w-1/2 3xl:h-[1000px] relative">
        <Image src="/images/side-image.png" alt="form image" fill style={{ objectFit: "cover" }}></Image>
      </div>
      <div className="w-2/3 h-full flex flex-col items-center justify-between xs:gap-y-2 md:w-full 2xl:gap-y-5 3xl:justify-evenly ">
        <h4 className="w-2/5 text-3xl mb-5 text-end self-end xs:text-xl md:text-center lg:w-full 3xl:text-6xl 3xl:mb-16">
          We&apos;d love to hear from you
        </h4>
        <form className="w-full h-full flex flex-col gap-y-5">
          <input
            type="text"
            className="h-1/6 border-2 border-black opacity-60 px-5 outline-none placeholder-black xs:h-10 3xl:placeholder:text-4xl"
            placeholder="Name*"
          />
          <input
            type="email"
            className="h-1/6 border-2 border-black opacity-60 px-5 outline-none placeholder-black xs:h-10 3xl:placeholder:text-4xl"
            placeholder="Email*"
          />
          <input
            type="text"
            className="h-1/6 border-2 border-black opacity-60 px-5 outline-none placeholder-black 3xl:placeholder:text-4xl"
            placeholder="Website URL*"
          />
          <textarea
            className="h-2/6 border-2 border-black opacity-60 p-3 outline-none placeholder-black resize-none 3xl:placeholder:text-4xl"
            placeholder="Project Detail*"
          />
          <button className="h-1/6 text-white bg-black hover:bg-black/75 transition-colors 3xl:text-4xl">
            Send Proposal
          </button>
        </form>
      </div>
    </div>
  );
}
