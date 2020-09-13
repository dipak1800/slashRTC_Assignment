import { sideBarInitialState } from "./Initial_State/SideBar_Initial_State";
import { TOGGLE_SIDEBAR } from "../Actions/Action_Constants/Side_Bar_Action_Contant";

const SideBarReducer = (state = sideBarInitialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        is_SideBar_Open: !state.is_SideBar_Open,
      };
    default:
      return state;
  }
};
export default SideBarReducer;
