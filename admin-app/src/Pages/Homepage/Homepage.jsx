import React from "react";
import Style from "./Homepage.module.scss";
import PIC from "../../Assets/Images/admin.jpg";
function HomePage() {
  return (
    <div className={Style.homepage} style={{ backgroundImage: `url(${PIC})` }}>
      <h2 style={{ color: "whitesmoke" }} className={Style.information}>
        Welcome to admin Page{" "}
        <b role="img" className={Style.smile}>
          😊
        </b>
      </h2>
    </div>
  );
}

export default HomePage;
