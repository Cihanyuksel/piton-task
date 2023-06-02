import Image from "next/image";

export default function OurTeam() {
  return (
    <div>
      <div className="w-100 text-center mb-14 text-5xl md:text-3xl">
        <h2>Meet the herous behind the magic</h2>
      </div>

      <div className="flex justify-evenly gap-x-10 sm:flex-col md:gap-y-5 md:items-center">
        <div className="flex flex-col items-center justify-center gap-3 p-3 shadow-lg rounded">
          <Image src="/static/founder.png" alt="Founder" width={1200} height={1200} />
          <h3 className="self-start text-2xl lg:text-base shrink-0">Esther Howard</h3>
          <p className="self-start text-xl lg:text-base opacity-50">Founder</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-3 shadow-lg rounded">
          <Image src="/static/developer.png" alt="Developer" width={1200} height={1200} />
          <h3 className="self-start text-2xl lg:text-base shrink-0">Cody Fisher</h3>
          <p className="self-start text-xl lg:text-base opacity-50">Developer</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-3 shadow-lg rounded">
          <Image src="/static/designer.png" alt="Designer" width={1200} height={1200} />
          <h3 className="self-start text-2xl lg:text-base shrink-0">Brooklyn Simmons</h3>
          <p className="self-start text-xl lg:text-base opacity-50">Designer</p>
        </div>
      </div>
    </div>
  );
}
