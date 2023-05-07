import { ChevronRight, ChevronLeft } from "lucide-react";

import Playlist from "../app/components/playlists";
import NavigationAside from "../app/components/navigation-aside";
import MainPlaylists from "./components/mainPlaylist";

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black  h-screen flex flex-col  p-3">
      <div className="flex flex-1">
        <aside className=" w-160 p-6 bg-zinc-950  rounded-xl">
          <NavigationAside />
          <Playlist />
        </aside>
        <MainPlaylists />
      </div>
      <footer className="flex flex-1"> footer </footer>
    </div>
  );
}
