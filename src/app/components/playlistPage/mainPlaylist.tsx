import DailyMix from "./dailyMix/dailyMix";
import PlaylistMain from "./mainPlaylist/playlists";

export default function MainPlaylists() {
  return (
    <main className="flex-1 bg-gradient-to-b from-zinc-700 via-zinc-900 to-zinc-900 rounded-xl">
      <PlaylistMain />
      <DailyMix />
    </main>
  );
}
