import Image from "next/image";

export default function Playlist() {
  return (
    <nav className=" mt-8 pt-10 border-t border-zinc-700">
      <div className="flex items-center gap-3 mb-6">
        <a href="">
          <Image
            className=" flex rounded-xl"
            src="/images/pac.webp"
            alt="Album image of shark Playlist"
            width={80}
            height={120}
          />
        </a>
        <p className="  text-zinc-100 text-base font-semibold ">
          Rap old school
        </p>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <a href="">
          <Image
            className=" flex rounded-xl"
            src="/images/soul.jpg"
            alt="Album image of shark Playlist"
            width={80}
            height={120}
          />
        </a>
        <p className="  text-zinc-100 text-base font-semibold ">Soul </p>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <a href="">
          <Image
            className=" flex rounded-xl"
            src="/images/classical.webp"
            alt="Album image of shark Playlist"
            width={80}
            height={120}
          />
        </a>
        <p className="  text-zinc-100 text-base font-semibold ">Classical</p>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <a href="">
          <Image
            className=" flex rounded-xl"
            src="/images/vintage.webp"
            alt="Album image of shark Playlist"
            width={80}
            height={120}
          />
        </a>
        <p className="  text-zinc-100 text-base font-semibold ">Vintage</p>
      </div>
    </nav>
  );
}
