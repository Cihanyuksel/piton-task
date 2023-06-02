import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="h-auto flex flex-col items-center gap-y-12">
      <h2 className="text-4xl self-start md:text-2xl 3xl:text-8xl">Who we are</h2>
      <p className="text-2xl leading-10 md:text-base 3xl:text-6xl 3xl:leading-normal">
        We love what we do and create partnerships with our clients to ensure their digital transformation is positioned
        for long-term success.We believe that the human dimensions essential to start any successful project and that
        this is where splendid emotional relationships between the company and people are born.
      </p>
      <Image src="/images/mid-image.png" alt="mid image" width={1200} height={300} />
    </div>
  );
}
