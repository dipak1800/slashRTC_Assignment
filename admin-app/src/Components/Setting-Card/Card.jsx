import React from "react";
import Style from "./Card.module.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeActivePage } from "../../Redux/Actions/Actions_Creators/Active_Page_Action_Creator";
function Card({ IconName, title }) {
  let current_Active_Page = useSelector(
    state => state.ActivePage_Reducer.current_Active_Page
  );
  let dispatch = useDispatch();
  return (
    <Link to={`/settings/${title}`} exact style={{ textDecoration: "none" }}>
      <div
        onClick={() =>
          dispatch(changeActivePage(`${current_Active_Page} > ${title}`))
        }
        className={Style.setting_cards}
      >
        <div className={Style.icon}>{IconName}</div>
        <h5 className={Style.title}>{title}</h5>
      </div>
    </Link>
  );
}

export default Card;
