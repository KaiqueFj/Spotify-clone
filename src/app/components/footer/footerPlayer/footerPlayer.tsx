import {
  ShuffleIcon,
  ArrowLeftIcon,
  PlayIcon,
  ArrowRightIcon,
  Repeat1Icon,
} from "lucide-react";

export default function FooterPlayer() {
  return (
    <div className="flex flex-col justify-center text-whiteText">
      <div className="flex items-center justify-center gap-6">
        <ShuffleIcon size={20} className="text-subTextGrey" />

        <ArrowLeftIcon size={20} className="text-subTextGrey" />

        <button className="flex items-center pl-2 w-10 h-10 bg-whiteText rounded-full text-blackBg">
          <PlayIcon size={22} />
        </button>
        <ArrowRightIcon size={20} className="text-subTextGrey" />
        <Repeat1Icon size={20} className="text-subTextGrey" />
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs text-whiteText">00:31</span>
        <div className="h-1 rounded-full w-96 bg-spotifyHeadColor">
          <div className="h-1 rounded-full w-40 bg-whiteText"></div>
        </div>
        <span className="text-xs text-whiteText">2:31</span>
      </div>
    </div>
  );
}
