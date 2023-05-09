import Image from "next/image";
import {
  ShuffleIcon,
  ArrowLeftIcon,
  PlayIcon,
  ArrowRightIcon,
  Repeat1Icon,
} from "lucide-react";
import FooterSong from "./footerSong/footerSong";

export default function Footer() {
  return (
    <footer className=" h-screen  w-screen bg-blackBg flex-1 p-2">
      <FooterSong />

      <div className="flex flex-row justify-left w-48 text-center text-whiteText">
        <a>
          <ShuffleIcon size={10} />
        </a>
        <a>
          <ArrowLeftIcon size={10} />
        </a>
        <a>
          <PlayIcon size={10} />
        </a>
        <a>
          <ArrowRightIcon size={10} />
        </a>
      </div>
    </footer>
  );
}
