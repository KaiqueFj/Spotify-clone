import MainPlaylists from "./components/playlistPage/mainPlaylist";
import Aside from "./components/aside/asidePage";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className=" bg-blackBg  h-screen  w-screen flex flex-col">
      <div className="flex flex-1">
        <Aside />
        <MainPlaylists />
      </div>
    
      <Footer/>
    </div>
  );
}
