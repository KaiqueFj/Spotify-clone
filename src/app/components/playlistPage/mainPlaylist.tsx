import DailyMix from "./dailyMix/dailyMix";
import PlaylistMain from "./mainPlaylist/playlists";

export default function MainPlaylists() {
  return (
    <main className="flex-1 bg-gradient-to-b from-spotifyHeadColor via-spotifyMidColor to-spotifyMidColor rounded-lg">
      <PlaylistMain />
      <DailyMix />
    </main>
  );
}
