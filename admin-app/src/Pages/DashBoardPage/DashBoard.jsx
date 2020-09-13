import React from "react";
import { BiUserVoice } from "react-icons/bi";
import CommonPage from "../../Components/Common_Page_Component/CommonPage";
import { FaDesktop } from "react-icons/fa";
function DashBoard() {
  return (
    <div>
      <CommonPage iconName={<FaDesktop />} pageName="DashBoard" />
    </div>
  );
}

export default DashBoard;
