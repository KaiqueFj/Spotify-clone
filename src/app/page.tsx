import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black  h-screen flex flex-col  p-3">
      <div className="flex flex-1">
        <aside className=" w-160 p-6 bg-zinc-950  rounded-xl">
          <nav className=" space-y-4">
            <a
              href=""
              className="flex items-center gap-2 text-sm font-semibold text-zinc-100"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-sm font-semibold text-zinc-100 "
            >
              <SearchIcon />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-sm font-semibold text-zinc-100"
            >
              <LibraryIcon />
              Your Library
            </a>

            <div className="  py-3 flex justify-start gap-4">
              <a
                href=""
                className=" text-zinc-100 text-center bg-zinc-600 rounded-xl  p-1  "
              >
                Playlists
              </a>
              <a
                href=""
                className="   text-zinc-100 text-center bg-zinc-600  rounded-xl p-1  "
              >
                Albums
              </a>
              <a
                href=""
                className="   text-zinc-100 text-center bg-zinc-600 rounded-xl   p-1 "
              >
                Artists
              </a>
            </div>

            <div className="py-3 flex justify-between gap-4 ">
              <a href="" className=" text-zinc-100 text-left ">
                <SearchIcon />
              </a>

              <a href="" className=" flex text-zinc-100  ">
                Recent
                <ChevronDown />
              </a>
            </div>
          </nav>

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
              <p className="  text-zinc-100 text-base font-semibold ">
                Classical
              </p>
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
              <p className="  text-zinc-100 text-base font-semibold ">
                Vintage
              </p>
            </div>
          </nav>
        </aside>

        <main className="flex-1 bg-gradient-to-b from-zinc-700 via-zinc-900 to-zinc-900 rounded-xl">
          <nav className="flex gap-2 p-4">
            <a className="rounded-full bg-zinc-900  text-zinc-100 text-lg p-2">
              <ChevronLeft />
            </a>

            <a className="rounded-full bg-zinc-900  text-zinc-100 text-lg p-2">
              <ChevronRight />
            </a>
          </nav>

          <div className="flex px-4 py-2 ">
            <h3 className="text-zinc-100 text-3xl font-bold">Good Evening</h3>
          </div>
        </main>
      </div>
      <footer className="flex-1"> footer </footer>
    </div>
  );
}
