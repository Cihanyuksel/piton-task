import Image from "next/image";

export default function OurTeam() {
  return (
    <div>
      <div>
        <h2 className="w-100 text-center mb-14 text-5xl md:text-3xl">Meet the herous behind the magic</h2>
        <div className="flex justify-evenly gap-x-10 md:flex-col md:gap-y-5 md:items-center ">
          <div className="flex flex-col items-center justify-center gap-3 p-3 shadow-md rounded">
            <Image src="/images/rectangle-582.png" alt="Founder" width={700} height={700} />
            <h3 className="self-start text-2xl lg:text-lg">Esther Howard</h3>
            <p className="self-start text-xl lg:text-base opacity-50">Founder</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 p-3 shadow-lg rounded">
            <Image src="/images/rectangle-581.png" alt="Developer" width={700} height={700} />
            <h3 className="self-start text-2xl lg:text-lg">Cody Fisher</h3>
            <p className="self-start text-xl lg:text-base opacity-50">Developer</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 p-3 shadow-lg rounded">
            <Image src="/images/rectangle-583.png" alt="Designer" width={700} height={700} />
            <h3 className="self-start text-2xl lg:text-lg">Brooklyn Simmons</h3>
            <p className="self-start text-xl lg:text-base opacity-50">Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
