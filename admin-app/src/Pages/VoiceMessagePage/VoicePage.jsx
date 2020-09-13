import React from "react";
import { BiUserVoice } from "react-icons/bi";
import CommonPage from "../../Components/Common_Page_Component/CommonPage";
function VoicePage() {
  return (
    <div>
      <CommonPage iconName={<BiUserVoice />} pageName="Voice-Messages" />
    </div>
  );
}

export default VoicePage;
