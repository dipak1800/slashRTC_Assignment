import React, { Fragment } from "react";
import Style from "./SideBar.module.scss";
import GiCrossedBones, { side_Nav_Data } from "./SideBarData";
import handleSidebar from "../../Redux/Actions/Actions_Creators/Side_Bar_Action_Creator";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { changeActivePage } from "../../Redux/Actions/Actions_Creators/Active_Page_Action_Creator";
function SideBar({ is_SideBar_Open, handleSidebar, changeActivePage }) {
  return (
    <div
      className={`${Style.side_Nav} ${is_SideBar_Open && Style.side_Nav_On}`}
    >
      <ul className={Style.handleIconsList}>
        <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
          <li className={Style.handle_SideNav_Close}>
            <GiCrossedBones
              onClick={() => {
                handleSidebar();
                changeActivePage("HOME");
              }}
            />
          </li>
        </NavLink>
        <div className={Style.handleIcons}>
          {side_Nav_Data.map((icon, index) => (
            <Fragment key={index}>
              <NavLink
                to={`/${icon.path}`}
                activeClassName={Style.activeIcon}
                style={{ textDecoration: "none" }}
              >
                <li
                  onClick={() =>
                    changeActivePage(icon.path.toLocaleUpperCase())
                  }
                  className={Style.icons}
                >
                  {icon.iconName}
                </li>
              </NavLink>
            </Fragment>
          ))}
        </div>
      </ul>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    is_SideBar_Open: state.SideBar_Reducer.is_SideBar_Open,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleSidebar: () => dispatch(handleSidebar()),
    changeActivePage: pathName => dispatch(changeActivePage(pathName)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
