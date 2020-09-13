import React from "react";
import { MdWork } from "react-icons/md";

import CommonPage from "../../Components/Common_Page_Component/CommonPage";
function Pending() {
  return (
    <div>
      <CommonPage iconName={<MdWork />} pageName="Pending-Work" />
    </div>
  );
}

export default Pending;
