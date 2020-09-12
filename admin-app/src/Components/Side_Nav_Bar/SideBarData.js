import React from "react";
import { GiCrossedBones } from "react-icons/gi";
import { BiMessageRounded, BiUserVoice } from "react-icons/bi";
import { FaDesktop, FaUserFriends } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
export let side_Nav_Data = [
  {
    iconName: <BiMessageRounded />,
    path: "messages",
  },
  {
    iconName: <BiUserVoice />,
    path: "voiceMessages",
  },
  {
    iconName: <FaDesktop />,
    path: "latestNews",
  },
  {
    iconName: <FaUserFriends />,
    path: "friendRequest",
  },
  {
    iconName: <MdWork />,
    path: "Work",
  },
  {
    iconName: <AiFillSetting />,
    path: "setting",
  },
];
export default GiCrossedBones;
