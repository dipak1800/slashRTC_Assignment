import React from "react";
import Style from "./Page_Not_Found.module.scss";
import PIC from "../../Assets/Images/pnf.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeActivePage } from "../../Redux/Actions/Actions_Creators/Active_Page_Action_Creator";
function Page_Not_Found() {
  let dispatch = useDispatch();

  return (
    <div className={Style.mainContainer}>
      <h1
        className={Style.Page_Not_Found}
        style={{ backgroundImage: `url(${PIC})` }}
      >
        404
      </h1>
      <p className={Style.appeal}>
        The page you are requesting is not in service at the moment ⛔
      </p>
      <Link to="/settings">
        <button
          onClick={() => dispatch(changeActivePage("SETTINGS"))}
          className={Style.goBack}
        >
          GO Back
        </button>
      </Link>
    </div>
  );
}

export default Page_Not_Found;
