import Link from "next/link";
import { IconType } from "react-icons";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io5";

interface IShare {
  Icon: IconType;
  link: string;
  style: string;
}

const share: IShare[] = [
  {
    Icon: IoLogoFacebook,
    link: "https://www.facebook.com/sharer/sharer.php?u=",
    style: "text-blue-500",
  },
  {
    Icon: IoLogoLinkedin,
    link: "https://www.linkedin.com/sharing/share-offsite/?url=",
    style: "text-blue-600",
  },
  {
    Icon: IoLogoTwitter,
    link: "https://www.twitter.com/intent/tweet?url=",
    style: "text-blue-400",
  },
  {
    Icon: IoLogoWhatsapp,
    link: "https://wa.me/?text=",
    style: "text-green-500",
  },
];

export default function ShareButton({ id }: { id: string }) {
  const domain = "http://localhost:3000/blog/";
  return (
    <div className="my-4">
      <p className="text-[12px] uppercase font-bold">bagikan</p>
      <div className="flex text-xl gap-2 my-2">
        {share.map((item, idx) => {
          return (
            <Link
              target="_blank"
              key={idx}
              className={`${item.style}`}
              href={`${item.link}${domain}${id}`}
            >
              <item.Icon />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
