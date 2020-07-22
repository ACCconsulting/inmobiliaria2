import { MENU_OPTION } from "../Types";

export function menuOptionAction(title) {
  return (dispatch) => {
    dispatch(menuOption(title));
  };
}
const menuOption = (title) => ({
  type: MENU_OPTION,
  payload: title,
});
