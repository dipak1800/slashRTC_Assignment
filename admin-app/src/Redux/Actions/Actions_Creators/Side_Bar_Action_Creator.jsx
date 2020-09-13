import { TOGGLE_SIDEBAR } from "../Action_Constants/Side_Bar_Action_Contant";
const handleSidebar = () => {
  return {
    type: TOGGLE_SIDEBAR,
  };
};
export default handleSidebar;
