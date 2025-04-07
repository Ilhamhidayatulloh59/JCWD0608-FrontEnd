import { IconType } from "react-icons";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineGlobal,
  AiOutlineVideoCamera,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlinePlusSquare,
  AiOutlineLineChart,
} from "react-icons/ai";

interface IMenu {
  desc: string;
  type: "All" | "Desktop";
  icon: IconType;
}

export const menu: IMenu[] = [
  { desc: "Beranda", type: "All", icon: AiFillHome },
  { desc: "Cari", type: "Desktop", icon: AiOutlineSearch },
  { desc: "Jelajahi", type: "All", icon: AiOutlineGlobal },
  { desc: "Reels", type: "All", icon: AiOutlineVideoCamera },
  { desc: "Notifikasi", type: "Desktop", icon: AiOutlineHeart },
  { desc: "Buat", type: "All", icon: AiOutlinePlusSquare },
  { desc: "Pesan", type: "All", icon: AiOutlineMessage },
  { desc: "Dasbor", type: "All", icon: AiOutlineLineChart },
];
