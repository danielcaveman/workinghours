import { ACTIONS } from "../constants/actions";

export const getAll = () => {
  return {
    type: ACTIONS.EMPLOYEE_HOURS_GET_ALL,
  };
};

export const deleteById = (id) => {
  return {
    type: ACTIONS.EMPLOYEE_HOURS_DELETE_BY_ID,
    id,
  };
};

export const updateById = (data) => {
  return {
    type: ACTIONS.EMPLOYEE_HOURS_UPDATE_BY_ID,
    data,
  };
};
