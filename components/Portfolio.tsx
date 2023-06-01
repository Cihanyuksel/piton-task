import HomeContainer from "../container/HomeContainer";

export default function Portfolio() {
  return (
    <div>
      <div className="flex justify-between bg-black p-10">
        <div className="flex flex-col gap-y-2">
          <p className="text-primary text-7xl max-lg:text-4xl max-md:text-2xl max-sm:text-xl">350+</p>
          <p className="text-white text-lg max-md:text-base max-sm:text-xs">Client Worldwide</p>
        </div>

        <div className="flex flex-col gap-y-2">
          <p className="text-primary text-7xl max-lg:text-4xl max-md:text-2xl max-sm:text-xl">20+</p>
          <p className="text-white text-lg max-md:text-base max-sm:text-xs">Team Members</p>
        </div>

        <div className="flex flex-col gap-y-2">
          <p className="text-primary text-7xl max-lg:text-4xl max-md:text-2xl max-sm:text-xl">100+</p>
          <p className="text-white text-lg max-md:text-base max-sm:text-xs">Project Completed</p>
        </div>

        <div className="flex flex-col gap-y-2">
          <p className="text-primary text-7xl max-lg:text-4xl max-md:text-2xl max-sm:text-xl">85M+</p>
          <p className="text-white text-lg max-md:text-base max-sm:text-xs">Revenue Generated</p>
        </div>
      </div>
    </div>
  );
}
