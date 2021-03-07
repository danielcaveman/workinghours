import { ACTIONS } from "../constants/actions";

export const changeDate = (payload) => {
  return {
    type: ACTIONS.DATE_PANEL_CHANGE_DATE,
    payload,
  };
};
