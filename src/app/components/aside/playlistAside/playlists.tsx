import Image from "next/image";

export default function PlaylistAside() {
  return (
    <nav className=" mt-7">
      <div className="flex items-center gap-3 mb-6">
        <a href="">
          <Image
            className=" flex rounded-xl"
            src="/images/playlists/pac.webp"
            alt="Album image of shark Playlist"
            width={60}
            height={70}
          />
        </a>
        <p className="  text-whiteText text-base font-normal ">
          Rap old school
        </p>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <a href="">
          <Image
            className=" flex rounded-xl"
            src="/images/playlists/soul.jpg"
            alt="Album image of shark Playlist"
            width={60}
            height={70}
          />
        </a>
        <p className="  text-whiteText text-base font-normal ">Soul </p>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <a href="">
          <Image
            className=" flex rounded-xl"
            src="/images/playlists/classical.webp"
            alt="Album image of shark Playlist"
            width={60}
            height={70}
          />
        </a>
        <p className="  text-whiteText text-base font-normal ">Classical</p>
      </div>

      <div className="flex items-center gap-3">
        <a href="">
          <Image
            className=" flex rounded-xl"
            src="/images/playlists/vintage.webp"
            alt="Album image of shark Playlist"
            width={60}
            height={70}
          />
        </a>
        <p className="  text-whiteText text-base font-normal ">Vintage</p>
      </div>
    </nav>
  );
}
