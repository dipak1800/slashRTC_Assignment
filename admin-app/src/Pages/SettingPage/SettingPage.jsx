import React from "react";
import { RiShieldUserLine } from "react-icons/ri";
import { GiHorseHead } from "react-icons/gi";
import { IoIosPaper } from "react-icons/io";
import { MdSecurity } from "react-icons/md";

import { FaPuzzlePiece, FaLaptopCode, FaChartBar } from "react-icons/fa";
import Card from "../../Components/Setting-Card/Card";
import Style from "./SettingPage.module.scss";
function SettingPage() {
  return (
    <div>
      <h2 className={Style.heading}>General Settings </h2>
      <div className={Style.handleCards}>
        <Card IconName={<RiShieldUserLine />} title="Users" />
        <Card IconName={<GiHorseHead />} title="Tags" />
        <Card IconName={<FaPuzzlePiece />} title="Dialogues" />
        <Card IconName={<FaLaptopCode />} title="Intents" />
        <Card IconName={<FaChartBar />} title="Carriers" />
        <Card IconName={<IoIosPaper />} title="Histories" />
        <Card IconName={<MdSecurity />} title="Permissions" />
      </div>
      <marquee behavior="alternate" scrollamount="10">
        <h3 className={Style.appeal}>
          Please select Dialogues Card to explore further 😎
        </h3>
      </marquee>
    </div>
  );
}

export default SettingPage;
