import Image from "next/image";

export default function PlaylistAside() {
  return (
    <nav className=" mt-8 pt-10 border-t border-spotifyContainerBG">
      <div className="flex items-center gap-3 mb-6">
        <a href="">
          <Image
            className=" flex rounded-xl"
            src="/images/playlists/pac.webp"
            alt="Album image of shark Playlist"
            width={80}
            height={120}
          />
        </a>
        <p className="  text-whiteText text-base font-semibold ">
          Rap old school
        </p>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <a href="">
          <Image
            className=" flex rounded-xl"
            src="/images/playlists/soul.jpg"
            alt="Album image of shark Playlist"
            width={80}
            height={120}
          />
        </a>
        <p className="  text-whiteText text-base font-semibold ">Soul </p>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <a href="">
          <Image
            className=" flex rounded-xl"
            src="/images/playlists/classical.webp"
            alt="Album image of shark Playlist"
            width={80}
            height={120}
          />
        </a>
        <p className="  text-whiteText text-base font-semibold ">Classical</p>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <a href="">
          <Image
            className=" flex rounded-xl"
            src="/images/playlists/vintage.webp"
            alt="Album image of shark Playlist"
            width={80}
            height={120}
          />
        </a>
        <p className="  text-whiteText text-base font-semibold ">Vintage</p>
      </div>
    </nav>
  );
}
