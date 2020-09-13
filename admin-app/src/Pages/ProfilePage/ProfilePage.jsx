import React from "react";
import { FaUserFriends } from "react-icons/fa";

import CommonPage from "../../Components/Common_Page_Component/CommonPage";
function Profile() {
  return (
    <div>
      <CommonPage iconName={<FaUserFriends />} pageName="Profile" />
    </div>
  );
}

export default Profile;
