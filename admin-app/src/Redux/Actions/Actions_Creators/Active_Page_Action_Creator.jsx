import { ACTIVE_PAGE } from "../Action_Constants/Active_Page_Action_Constant";
export const changeActivePage = current_page => {
  return {
    type: ACTIVE_PAGE,
    payload: current_page,
  };
};
