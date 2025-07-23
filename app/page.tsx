import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Image src="/images/hero.png" width={1920} height={800} alt="hero" />
      <Image src="/images/band.png" width={1920} height={77} alt="band" />
    </div>
  );
}
