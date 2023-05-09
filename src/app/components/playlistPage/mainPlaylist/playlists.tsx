import { ChevronRight, ChevronLeft, PlayIcon } from "lucide-react";
import Image from "next/image";

export default function PlaylistMain() {
  return (
    <>
      <nav className="flex gap-2 p-4">
        <a className="rounded-full bg-spotifyBlack  text-whiteText text-lg p-1">
          <ChevronLeft />
        </a>

        <a className="rounded-full bg-spotifyBlack  text-whiteText text-lg p-1">
          <ChevronRight />
        </a>
      </nav>

      <div className="flex px-4 py-2 ">
        <h3 className="text-whiteText text-3xl font-bold">Good Evening</h3>
      </div>

      <div>
        <nav className="  grid grid-rows-2  grid-cols-3 mt-4 pl-8  pr-8 border-t  gap-6 border-spotifyContainerBG ">
          <div className="flex items-center h-18 bg-spotifyContainerBG rounded-lg  group transition ease-in-out delay-400  hover:bg-spotifybgCardHover  duration-300   ">
          <a href="" className="pr-3">
              <Image
                src="/images/playlists/likedSong.jpg"
                alt="Album image of liked songs"
                width={80}
                height={70}
              />
            </a>
            <p className="  text-center text-whiteText text-base font-semibold ">
              Liked Songs
            </p>

            <button className=" flex ml-24 rounded-full bg-spotifyBtColor  text-blackBg text-lg p-3 invisible  group-hover:visible  ">
              <PlayIcon />
            </button>
          </div>

          <div className="flex items-center h-18 bg-spotifyContainerBG rounded-lg  group transition ease-in-out delay-400  hover:bg-spotifybgCardHover  duration-300   ">
            <a href="" className="pr-3">
              <Image
                src="/images/playlists/Eletronic Hits.jpg"
                alt="Album image of Eletronic hits Playlist"
                width={80}
                height={70}
              />
            </a>
            <p className="  text-center text-whiteText text-base font-semibold ">
              Eletronic Hits
            </p>

            <button className=" flex ml-24 rounded-full bg-spotifyBtColor  text-end text-blackBg text-lg p-3 invisible  group-hover:visible  ">
              <PlayIcon />
            </button>
          </div>

          <div className="flex items-center h-18 bg-spotifyContainerBG rounded-lg  group transition ease-in-out delay-400  hover:bg-spotifybgCardHover  duration-300   ">
            <a href="" className="pr-3">
              <Image
                className=" h-max"
                src="/images/playlists/rap-songs.png"
                alt="Album image of rao-songs Playlist"
                width={80}
                height={70}
              />
            </a>
            <p className="  text-center text-whiteText text-base font-semibold ">
              Rap Songs
            </p>

            <button className=" flex ml-24 rounded-full bg-spotifyBtColor  text-end text-blackBg text-lg p-3 invisible  group-hover:visible  ">
              <PlayIcon />
            </button>
          </div>

          <div className="flex items-center h-18 bg-spotifyContainerBG rounded-lg  group transition ease-in-out delay-400  hover:bg-spotifybgCardHover  duration-300   ">
            <a href="" className="pr-3">
              <Image
                src="/images/playlists/disco.png"
                alt="Album image of disco Playlist"
                width={80}
                height={70}
              />
            </a>
            <p className="  text-center text-whiteText text-base font-semibold ">
              80´s Moments
            </p>

            <button className=" flex ml-24 rounded-full bg-spotifyBtColor  text-end text-blackBg text-lg p-3 invisible  group-hover:visible  ">
              <PlayIcon />
            </button>
          </div>

          <div className="flex items-center h-18 bg-spotifyContainerBG rounded-lg  group transition ease-in-out delay-400  hover:bg-spotifybgCardHover  duration-300   ">
            <a href="" className="pr-3">
              <Image
                src="/images/playlists/vintage.webp"
                alt="Album image of Vintage Playlist"
                width={80}
                height={70}
              />
            </a>
            <p className="  text-center text-whiteText text-base font-semibold ">
              Vintage Hits
            </p>

            <button className=" flex ml-24 rounded-full bg-spotifyBtColor  text-end text-blackBg text-lg p-3 invisible  group-hover:visible  ">
              <PlayIcon />
            </button>
          </div>

          <div className="flex items-center h-18 bg-spotifyContainerBG rounded-lg  group transition ease-in-out delay-400  hover:bg-spotifybgCardHover  duration-300   ">
            <a href="" className="pr-3">
              <Image
                src="/images/playlists/jazz-vibes.png"
                alt="Album image of jazz-vibes Playlist"
                width={80}
                height={70}
              />
            </a>
            <p className="  text-center text-whiteText text-base font-semibold ">
              Jazz Vibes
            </p>

            <button className=" flex ml-24 rounded-full bg-spotifyBtColor  text-end text-blackBg text-lg p-3 invisible  group-hover:visible  ">
              <PlayIcon />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
