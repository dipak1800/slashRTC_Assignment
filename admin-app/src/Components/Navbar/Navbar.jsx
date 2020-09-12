import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { AiFillCaretDown } from "react-icons/ai";
import Style from "./Navbar.module.scss";
import SideBar from "../Side_Nav_Bar/SideBar";
function Navbar() {
  const [side_Bar, set_Side_Bar] = useState(false);
  const toggleSideBar = () => {
    set_Side_Bar(!side_Bar);
  };
  return (
    <div className={Style.main_container}>
      <div className={Style.sub_container}>
        <div className={Style.handleIcon}>
          <VscThreeBars onClick={toggleSideBar} className={Style.bar} />
        </div>
        <div className={Style.NavbarContent}>
          <p>breadcrumb</p>
          <div className={Style.adminPanel}>
            <span>Admin</span>
            <div className={Style.symbol}>A</div>
            <AiFillCaretDown className={Style.down} />
          </div>
        </div>
      </div>
      <SideBar toggleSideBar={toggleSideBar} side_Bar={side_Bar} />
    </div>
  );
}

export default Navbar;
