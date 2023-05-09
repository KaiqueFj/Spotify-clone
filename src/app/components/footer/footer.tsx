import Image from "next/image";

import FooterSong from "./footerSong/footerSong";
import FooterPlayer from "./footerPlayer/footerPlayer";
import OtherOptions from "./otherOptions/otherOptions";

export default function Footer() {
  return (
    <footer className="flex   items-center justify-between h-min bg-blackBg p-1 z-50">
      <FooterSong />
      <FooterPlayer />
      <OtherOptions />
    </footer>
  );
}
