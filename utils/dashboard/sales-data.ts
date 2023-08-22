import { BsFileBarGraphFill, BsFillPersonPlusFill } from "react-icons/bs";
import { HiDocumentReport } from "react-icons/hi";
import { AiFillTag } from "react-icons/ai";

export const data = [
  {
    id: 1,
    number: "$1k",
    title: "Total Sales",
    percentage: "+8% from yesterday",
    icon: BsFileBarGraphFill,
    bgColor: "#FFE2E5",
    iconColor: "#FA5A7D",
  },
  {
    id: 2,
    number: "300",
    title: "Total Order",
    percentage: "+5% from yesterday",
    icon: HiDocumentReport,
    bgColor: "#FFF4DE",
    iconColor: "#FF947A",
  },
  {
    id: 3,
    number: "5",
    title: "Product Sold",
    percentage: "+1,2% from yesterday",
    icon: AiFillTag,
    bgColor: "#DCFCE7",
    iconColor: "#3CD856",
  },
  {
    id: 4,
    number: "8",
    title: "New Customers",
    percentage: "0,5% from yesterday",
    icon: BsFillPersonPlusFill,
    bgColor: "#F3E8FF",
    iconColor: "#BF83FF",
  },
];
