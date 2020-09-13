import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { AiFillCaretDown } from "react-icons/ai";
import Style from "./Navbar.module.scss";
import SideBar from "../Side_Nav_Bar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import handleSidebar from "../../Redux/Actions/Actions_Creators/Side_Bar_Action_Creator";
function Navbar() {
  let is_SideBar_Open = useSelector(
    state => state.SideBar_Reducer.is_SideBar_Open
  );
  let current_Active_Page = useSelector(
    state => state.ActivePage_Reducer.current_Active_Page
  );
  let dispatch = useDispatch();
  return (
    <div className={Style.main_container}>
      <div className={Style.sub_container}>
        <div className={Style.handleIcon}>
          <VscThreeBars
            onClick={() => dispatch(handleSidebar())}
            className={!is_SideBar_Open ? Style.bar : Style.hideBar}
          />
        </div>
        <div className={Style.NavbarContent}>
          <p className={Style.pageRoute}>{current_Active_Page}</p>
          <div className={Style.adminPanel}>
            <span>Admin</span>
            <div className={Style.symbol}>A</div>
            <AiFillCaretDown className={Style.down} />
          </div>
        </div>
      </div>
      <SideBar />
    </div>
  );
}

export default Navbar;
