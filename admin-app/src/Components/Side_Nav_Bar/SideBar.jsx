import React, { Fragment } from "react";
import Style from "./SideBar.module.scss";
import GiCrossedBones, { side_Nav_Data } from "./SideBarData";
function SideBar({ toggleSideBar, side_Bar }) {
  return (
    <div className={!side_Bar ? Style.side_Nav : Style.side_Nav_On}>
      <ul className={Style.handleIconsList}>
        <li className={Style.handle_SideNav_Close}>
          <GiCrossedBones onClick={() => toggleSideBar()} />
        </li>
        <div className={Style.handleIcons}>
          {" "}
          {side_Nav_Data.map((icon, index) => (
            <Fragment key={index}>
              <li className={Style.icons}>{icon.iconName}</li>
            </Fragment>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default SideBar;
