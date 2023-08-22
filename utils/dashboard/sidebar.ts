import { FiBarChart2, FiSettings } from "react-icons/fi";
import {
  HiOutlineShoppingCart,
  HiOutlineShoppingBag,
  HiChartPie,
} from "react-icons/hi";
import { BiLineChart } from "react-icons/bi";
import { RiMessage2Line } from "react-icons/ri";
import { PiSignOutBold } from "react-icons/pi";

export const links = [
  {
    id: 1,
    name: "Dashboard",
    icon: HiChartPie,
    url: "/",
  },
  {
    id: 2,
    name: "Leaderboard",
    icon: FiBarChart2,
    url: "/",
  },
  {
    id: 3,
    name: "Order",
    icon: HiOutlineShoppingCart,
    url: "/",
  },
  {
    id: 4,
    name: "Blog",
    icon: HiOutlineShoppingBag,
    url: "/blog",
  },
  {
    id: 5,
    name: "Sales Report",
    icon: BiLineChart,
    url: "/",
  },
  {
    id: 6,
    name: "Messages",
    icon: RiMessage2Line,
    url: "/",
  },
  {
    id: 7,
    name: "Settings",
    icon: FiSettings,
    url: "/",
  },
  {
    id: 8,
    name: "SignOut",
    icon: PiSignOutBold,
    url: "/",
  },
];
