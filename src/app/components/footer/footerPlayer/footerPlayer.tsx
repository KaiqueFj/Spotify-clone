import {
  ShuffleIcon,
  ArrowLeftIcon,
  PlayIcon,
  ArrowRightIcon,
  Repeat1Icon,
} from "lucide-react";

export default function FooterPlayer() {
  return (
    <div className=" w-md flex flex-row  items-center justify-center  text-center text-whiteText">
      <a>
        <ShuffleIcon size={23} />
      </a>
      <a>
        <ArrowLeftIcon size={23} />
      </a>
      <a>
        <PlayIcon size={23} />
      </a>
      <a>
        <ArrowRightIcon size={23} />
      </a>
      <a>
        <Repeat1Icon size={23} />
      </a>
    </div>
  );
}
