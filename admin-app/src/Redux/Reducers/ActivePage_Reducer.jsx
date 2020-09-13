import { Active_Page_Initial_State } from "./Initial_State/Active_Page_Initial_State";
import { ACTIVE_PAGE } from "../Actions/Action_Constants/Active_Page_Action_Constant";
export const ActivePage_Reducer = (
  state = Active_Page_Initial_State,
  action
) => {
  switch (action.type) {
    case ACTIVE_PAGE:
      return {
        ...state,
        current_Active_Page: action.payload,
      };
    default:
      return state;
  }
};
