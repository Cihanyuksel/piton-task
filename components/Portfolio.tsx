import HomeContainer from "../container/HomeContainer";

export default function Portfolio() {
  return (
    <div className="bg-black">
      <div className="w-container flex justify-between mx-auto py-8 3xl:py-16">
        <div className="flex flex-col gap-y-2">
          <p className="text-primary text-6xl 3xl:text-9xl lg:text-4xl md:text-2xl sm:text-xl">350+</p>
          <p className="text-white text-lg md:text-base sm:text-xs">Client Worldwide</p>
        </div>

        <div className="flex flex-col gap-y-2">
          <p className="text-primary text-6xl 3xl:text-9xl lg:text-4xl md:text-2xl sm:text-xl">20+</p>
          <p className="text-white text-lg md:text-base sm:text-xs">Team Members</p>
        </div>

        <div className="flex flex-col gap-y-2">
          <p className="text-primary text-6xl 3xl:text-9xl lg:text-4xl md:text-2xl sm:text-xl">100+</p>
          <p className="text-white text-lg md:text-base sm:text-xs">Project Completed</p>
        </div>

        <div className="flex flex-col gap-y-2">
          <p className="text-primary text-6xl 3xl:text-9xl lg:text-4xl md:text-2xl sm:text-xl">85M+</p>
          <p className="text-white text-lg md:text-base sm:text-xs">Revenue Generated</p>
        </div>
      </div>
    </div>
  );
}
