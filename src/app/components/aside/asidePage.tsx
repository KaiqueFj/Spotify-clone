import NavigationAside from "./asidePlaylist/navigation-aside";
import PlaylistAside from "./playlistAside/playlists";

export default function Aside() {
  return (
    <aside className=" w-160 p-10 h-fit  rounded-xl">
      <NavigationAside />
      <PlaylistAside />
    </aside>
  );
}
