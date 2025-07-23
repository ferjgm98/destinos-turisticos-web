import Image from "next/image";
import HeroImage from "/images/hero.png";

export default function Home() {
  return (
    <div className="">
      <Image
        src="/images/hero.png"
        width={1920}
        height={800}
        alt="hero"
        className="w-full object-cover"
      />
      <Image
        src="/images/band.png"
        width={1920}
        height={77}
        className="w-full object-cover"
        alt="band"
      />
    </div>
  );
}
