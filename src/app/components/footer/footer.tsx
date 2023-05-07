import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" h-screen  w-screen bg-blackBg flex-1 p-2">
      <div className="flex items-center">
        <a href="#">
          <Image
            className="flex ml-4 rounded-lg pb-3 float-left pr-2"
            src="/images/motown.jpg"
            alt="Album image of chamber of reflection"
            width={80}
            height={90}
          />

          <strong className="text-base  text-center float-right text-whiteText l font-bold ">
            Chamber of Reflection
          </strong>
          <p className=" text-left text-subTextGrey text-sm font-semibold">
            Mac Demarco
          </p>
        </a>
      </div>
    </footer>
  );
}
