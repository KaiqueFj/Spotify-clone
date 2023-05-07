import Image from "next/image";

export default function DailyMix() {
  return (
    <>
      <div className="flex px-4 ">
        <h3 className="text-zinc-100 text-3xl font-bold mt-8">
          Made for Ferraz
        </h3>
      </div>

      <nav className="grid grid-cols-5 grid-rows-1  mt-2 pt-2 pl-6 pr-6  gap-4 ">
        <div className="flex flex-row bg-neutral-900 p-2 h-6/6 w-auto ">
          <a href="#">
            <Image
              className="ml-4 rounded-lg pb-3"
              src="/images/motown.jpg"
              alt="Album image of motown-mix Playlist"
              width={180}
              height={180}
            />
            <strong className="text-lg text-zinc-100 l font-bold ">
              Daily Mix 1
            </strong>
            <p className=" text-zinc-300 text-base fodnt-semibold">
              The Manhattans, Marvin Gaye, Zapp and more
            </p>
          </a>
        </div>

        <div className="flex flex-row bg-neutral-900 p-2 h-6/6 w-auto ">
          <a href="#">
            <Image
              className="ml-4 rounded-lg pb-3"
              src="/images/rock.webp"
              alt="Album image of rock-mix Playlist"
              width={180}
              height={180}
            />
            <strong className="text-lg text-zinc-100 l font-bold ">
              Daily Mix 2
            </strong>
            <p className=" text-zinc-300 text-base fodnt-semibold">
              AC/DC, Metallica, Guns & Roses and more
            </p>
          </a>
        </div>

        <div className="flex flex-row bg-neutral-900 p-2 h-6/6 w-auto ">
          <a href="#">
            <Image
              className="ml-4 rounded-lg pb-3"
              src="/images/rap-cover.jpg"
              alt="Album image of rap-mix Playlist"
              width={180}
              height={180}
            />
            <strong className="text-lg text-zinc-100 l font-bold ">
              Daily Mix 3
            </strong>
            <p className=" text-zinc-300 text-base font-semibold">
              The Weekend, Drake, ASAP Rocky and more
            </p>
          </a>
        </div>

        <div className=" bg-neutral-900 p-2 h-6/6 w-auto ">
          <a href="#">
            <Image
              className="ml-4 rounded-lg pb-3"
              src="/images/baco-exu.jpg"
              alt="Album image of Baco-exu Playlist"
              width={180}
              height={180}
            />
            <strong className="text-lg text-zinc-100 l font-bold ">
              Daily Mix 4
            </strong>
            <p className=" text-zinc-300 text-base fodnt-semibold">
              Baco Exu do Blues, Djonga, Mc Hariel and more
            </p>
          </a>
        </div>
        <div className="flex flex-row bg-neutral-900 p-2 h-6/6 w-auto ">
          <a href="#">
            <Image
              className="ml-4 rounded-lg pb-3"
              src="/images/racionais.jpg"
              alt="Album image of racionais Playlist"
              width={180}
              height={180}
            />
            <strong className="text-lg text-zinc-100 l font-bold ">
              Daily Mix 5
            </strong>
            <p className=" text-zinc-300 text-base fodnt-semibold">
              Racioanis Mc´s, 509-E, Facção Central and more
            </p>
          </a>
        </div>
      </nav>
    </>
  );
}
