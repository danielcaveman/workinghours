import { ACTIONS } from "../constants/actions";

const INITIAL_STATE = {
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.EMPLOYEE_HOURS_SET_ALL:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
