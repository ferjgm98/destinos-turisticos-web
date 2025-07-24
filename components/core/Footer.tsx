import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-td-base">
      <Image
        src="/images/band.png"
        width={1920}
        height={67}
        className="w-full object-cover h-[67px]"
        alt="band"
      />
    </footer>
  );
}
