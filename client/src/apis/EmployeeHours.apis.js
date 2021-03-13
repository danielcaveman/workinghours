import axios from "axios";
import { toastr } from "react-redux-toastr";
import { DateService } from "../services/DateService";

const employeeHoursApis = {
  getAll: async () =>
    axios.get("http://localhost:3001/api/employeeHours").then((response) => {
      return response.data;
    }),
  deleteById: (id) =>
    axios
      .delete(`http://localhost:3001/api/employeeHours/${id}`)
      .then((response) => {
        toastr.success("Removed");
      }),
  updateById: (data, expectedHours) => {
    const dateService = new DateService();
    data.total = dateService.calculateTotal(data, expectedHours);
    return data._id
      ? axios
          .put(`http://localhost:3001/api/employeeHours/${data._id}`, data)
          .then((response) => {
            toastr.success("Updated");
          })
      : axios
          .post(`http://localhost:3001/api/employeeHours`, data)
          .then((response) => {
            toastr.success("Saved");
          });
  },
};

export { employeeHoursApis };
