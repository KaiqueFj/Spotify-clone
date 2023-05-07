import NavigationAside from "./asidePlaylist/navigation-aside";
import PlaylistAside from "./playlistAside/playlists";

export default function Aside() {
  return (
    <aside className=" w-160 p-6 bg-blackBg  rounded-xl">
      <NavigationAside />
      <PlaylistAside />
    </aside>
  );
}
