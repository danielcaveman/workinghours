import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import employeeHoursReducer from "./EmployeeHours.reducer";

const rootReducer = combineReducers({
  toastr: toastrReducer,
  employeeHours: employeeHoursReducer,
});

export default rootReducer;
