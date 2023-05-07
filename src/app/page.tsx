import MainPlaylists from "./components/playlistPage/mainPlaylist";
import Aside from "./components/aside/asidePage";

export default function Home() {
  return (
    <div className=" bg-blackBg  h-screen  w-screen flex flex-col">
      <div className="flex flex-1">
        <Aside />
        <MainPlaylists />
      </div>
      <footer className=" h-screen  w-screen bg-blackBg flex-1">
        
        footer
      </footer>
    </div>
  );
}
