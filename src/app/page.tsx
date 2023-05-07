import MainPlaylists from "./components/playlistPage/mainPlaylist";
import Aside from "./components/aside/asidePage";

export default function Home() {
  return (
    <div className="bg-black  h-screen flex flex-col  p-3">
      <div className="flex flex-1">
        <Aside />
        <MainPlaylists />
      </div>
      <footer className=" h-screen bg-black flex-1"> footer </footer>
    </div>
  );
}
