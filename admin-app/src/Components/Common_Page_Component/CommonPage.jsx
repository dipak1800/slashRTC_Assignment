import React from "react";
import Style from "./Common_Page.module.scss";
function CommonPage({ iconName, pageName }) {
  return (
    <div className={Style.common_Pages}>
      <div className={Style.icon}>{iconName}</div>
      <h2 className={Style.not_active}>
        {pageName} page is not active <b>😠</b>
      </h2>
      <p className={Style.explore}>Please go to settings ⚙ to explore more</p>
    </div>
  );
}

export default CommonPage;
