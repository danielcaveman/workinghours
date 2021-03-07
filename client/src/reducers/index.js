import { combineReducers } from "redux";
import { reducer as ToastrReducer } from "react-redux-toastr";
import EmployeeHoursReducer from "./EmployeeHours.reducer";
import DatePanelReducer from "./DatePanel.reducer";

const rootReducer = combineReducers({
  toastr: ToastrReducer,
  employeeHours: EmployeeHoursReducer,
  datePanel: DatePanelReducer,
});

export default rootReducer;
