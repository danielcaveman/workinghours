import { ACTIONS } from "../constants/actions";

const INITIAL_STATE = {
  date: new Date(),
};

function DatePanelReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.DATE_PANEL_CHANGE_DATE:
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
}

export default DatePanelReducer;
