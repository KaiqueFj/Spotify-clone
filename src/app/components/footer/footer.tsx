import Image from "next/image";

import FooterSong from "./footerSong/footerSong";
import FooterPlayer from "./footerPlayer/footerPlayer";

export default function Footer() {
  return (
    <footer className="flex h-screen  w-screen bg-blackBg p-2">
      <FooterSong />
      <FooterPlayer />

    </footer>
  );
}
