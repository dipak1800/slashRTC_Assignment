import React from "react";
import CommonPage from "../../Components/Common_Page_Component/CommonPage";
import { BiMessageRounded } from "react-icons/bi";
function Message() {
  return (
    <div>
      <CommonPage iconName={<BiMessageRounded />} pageName="Message" />
    </div>
  );
}

export default Message;
