import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <div className="h-screen flex max-md:flex-col max-md:items-center gap-x-10">
        <div className="w-1/3 h-full max-md:hidden relative">
          <Image src="/images/side-image.png" alt="form image" fill></Image>
        </div>
        <div className="w-2/3 h-full flex flex-col items-center justify-between max-md:w-full max-md:justify-evenly max-xs:gap-y-2">
          <h4 className="text-3xl text-end self-end min-3xl:text-6xl">We'd love to hear from you</h4>
          <form className="flex flex-col gap-y-5 w-full">
            <input
              type="text"
              className="border-2 border-black px-5 h-16 max-xl:h-12 min-3xl:h-40 placeholder-black"
              placeholder="Name*"
            />
            <input
              type="email"
              className="border-2 border-black px-5 h-16 max-xl:h-12 min-3xl:h-40 placeholder-black"
              placeholder="Email*"
            />
            <input
              type="text"
              className="border-2 border-black px-5 h-16 max-xl:h-12 min-3xl:h-40 placeholder-black"
              placeholder="Website URL*"
            />
            <textarea
              className="border-2 border-black p-5 h-32 max-xl:h-24 placeholder-black"
              placeholder="Project Detail*"
            />
            <button className="text-white bg-black hover:bg-black/75 transition-colors h-16 max-md:h-12 min-3xl:h-40 min-3xl:text-5xl">
              Send Proposal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
