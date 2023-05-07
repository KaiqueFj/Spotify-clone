import { ChevronRight, ChevronLeft, PlayIcon } from "lucide-react";
import Image from "next/image";

export default function PlaylistMain() {
  return (
    <>
      <nav className="flex gap-2 p-4">
        <a className="rounded-full bg-spotifyBlack  text-whiteText text-lg p-2">
          <ChevronLeft />
        </a>

        <a className="rounded-full bg-spotifyBlack  text-whiteText text-lg p-2">
          <ChevronRight />
        </a>
      </nav>

      <div className="flex px-4 py-2 ">
        <h3 className="text-whiteText text-3xl font-bold">Good Evening</h3>
      </div>

      <div>
        <nav className="  grid grid-rows-2  grid-cols-3 mt-8 pt-10 pl-8  pr-8 border-t  gap-6 border-spotifyContainerBG ">
          <div className=" p-1 flex items-center gap-4  h-20 bg-spotifyContainerBG rounded-lg  group hover:bg-spotifybgCardHover  transition-colors ">
            <a href="">
              <Image
                src="/images/likedSong.jpg"
                alt="Album image of liked songs"
                width={90}
                height={110}
              />
            </a>
            <p className="  text-center text-whiteText text-base font-semibold ">
              Liked Songs
            </p>

            <button className="ml-32 rounded-full bg-spotifyBtColor text-black text-lg p-4 invisible  group-hover:visible  ">
              <PlayIcon />
            </button>
          </div>

          <div className=" p-1 flex items-center gap-4  h-20 bg-spotifyContainerBG rounded-lg  group hover:bg-spotifybgCardHover  transition-colors ">
            <a
              href=""
              className=" hover:bg-spotifybgCardHover  transition-colors"
            >
              <Image
                src="/images/Eletronic Hits.jpg"
                alt="Album image of Eletronic hits Playlist"
                width={90}
                height={140}
              />
            </a>
            <p className="  text-center text-whiteText text-base font-semibold ">
              Eletronic Hits
            </p>

            <button className="ml-32 rounded-full bg-spotifyBtColor text-black text-lg p-4 invisible  group-hover:visible  ">
              <PlayIcon />
            </button>
          </div>

          <div className=" p-1 flex items-center gap-4  h-20 bg-spotifyContainerBG rounded-lg  group hover:bg-spotifybgCardHover  transition-colors ">
            <a href="">
              <Image
                src="/images/rap-songs.png"
                alt="Album image of rao-songs Playlist"
                width={90}
                height={140}
              />
            </a>
            <p className="  text-center text-whiteText text-base font-semibold ">
              Rap Songs
            </p>

            <button className="ml-32 rounded-full bg-spotifyBtColor text-black text-lg p-4 invisible  group-hover:visible  ">
              <PlayIcon />
            </button>
          </div>

          <div className=" p-1 flex items-center gap-4  h-20 bg-spotifyContainerBG rounded-lg  group hover:bg-spotifybgCardHover  transition-colors ">
            <a href="">
              <Image
                src="/images/disco.png"
                alt="Album image of disco Playlist"
                width={90}
                height={140}
              />
            </a>
            <p className="  text-center text-whiteText text-base font-semibold ">
              80´s Moments
            </p>

            <button className="ml-32 rounded-full bg-spotifyBtColor text-black text-lg p-4 invisible  group-hover:visible  ">
              <PlayIcon />
            </button>
          </div>

          <div className=" p-1 flex items-center gap-4  h-20 bg-spotifyContainerBG rounded-lg  group hover:bg-spotifybgCardHover  transition-colors ">
            <a href="">
              <Image
                src="/images/vintage.webp"
                alt="Album image of Vintage Playlist"
                width={90}
                height={140}
              />
            </a>
            <p className="  text-center text-whiteText text-base font-semibold ">
              Vintage Hits
            </p>

            <button className="ml-32 rounded-full bg-spotifyBtColor text-black text-lg p-4 invisible  group-hover:visible  ">
              <PlayIcon />
            </button>
          </div>

          <div className=" p-1 flex items-center gap-4 h-20 bg-spotifyContainerBG rounded-lg  group hover:bg-spotifybgCardHover  transition-colors  ">
            <a href="">
              <Image
                src="/images/jazz-vibes.png"
                alt="Album image of jazz-vibes Playlist"
                width={90}
                height={140}
              />
            </a>
            <p className="  text-center text-whiteText text-base font-semibold ">
              Jazz Vibes
            </p>

            <button className="ml-32 rounded-full bg-spotifyBtColor text-black text-lg p-3 invisible  group-hover:visible  ">
              <PlayIcon />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
