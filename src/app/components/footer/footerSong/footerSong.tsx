import Image from "next/image";
import { HeartIcon } from "lucide-react";

export default function FooterSong() {
  return (
    <div className="flex  items-center">
      <a href="#" className="ml-2 pr-4  pb-3">
        <Image
          className=" rounded-lg"
          src="/images/playlists/macDemarcoAlbum.png"
          alt="Album image of chamber of reflection"
          width={70}
          height={80}
        />
      </a>

      <div>
        <strong className="text-sm  text-left  text-whiteText  font-medium">
          Chamber of Reflection
        </strong>
        <p className=" text-left text-subTextGrey text-xs font-normal">
          Mac demarco
        </p>
      </div>

      <div>
        <a>
          <HeartIcon size={32} className=" pl-4 text-subTextGrey  font-thin" />
        </a>
      </div>
    </div>
  );
}
