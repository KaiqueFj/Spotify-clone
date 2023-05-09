import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  ChevronDown,

} from "lucide-react";

export default function NavigationAside() {
  return (
    <nav className=" space-y-4">
      <a
        href=""
        className="flex items-center gap-2 text-sm font-semibold text-whiteText"
      >
        <HomeIcon  size={22}/>
        Home
      </a>
      <a
        href=""
        className="flex items-center gap-2 text-sm font-semibold text-whiteText "
      >
        <SearchIcon  size={22}/>
        Search
      </a>
      <a
        href=""
        className="flex items-center gap-2 text-sm font-semibold text-whiteText"
      >
        <LibraryIcon  size={22}/>
        Your Library
      </a>

      <div className="  py-3 flex justify-start gap-4">
        <a
          href=""
          className=" text-whiteText text-sm text-center bg-zinc-600 rounded-xl  p-1  "
        >
          Playlists
        </a>
        <a
          href=""
          className="   text-whiteText text-sm text-center bg-zinc-600  rounded-xl p-1  "
        >
          Albums
        </a>
        <a
          href=""
          className="   text-whiteText text-sm text-center bg-zinc-600 rounded-xl   p-1 "
        >
          Artists
        </a>
      </div>

      <div className="py-3 flex justify-between gap-4 ">
        <a href="" className=" text-whiteText text-sm text-left ">
          <SearchIcon size={22} />
        </a>

        <a href="" className=" flex text-whiteText text-sm  ">
          Recent
          <ChevronDown size={22} />
        </a>
      </div>
    </nav>
  );
}
