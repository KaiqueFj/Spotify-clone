import {
  Maximize2Icon,
  MenuIcon,
  Mic2,
  MonitorSpeakerIcon,
  Volume1Icon,
} from "lucide-react";

export default function OtherOptions() {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-4 pr-8">
        <Mic2 size={18} className="text-subTextGrey" />

        <MenuIcon size={18} className="text-subTextGrey" />

        <MonitorSpeakerIcon size={18} className="text-subTextGrey" />

        <Volume1Icon size={18} className="text-subTextGrey" />

        <div className="h-1 rounded-full w-24  bg-spotifyHeadColor">
          <div className="h-1 rounded-full w-12 bg-whiteText"></div>
        </div>

        <Maximize2Icon size={18} className="text-subTextGrey" />
      </div>
    </div>
  );
}
