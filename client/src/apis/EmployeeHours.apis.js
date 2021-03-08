import axios from "axios";
import { toastr } from "react-redux-toastr";
import { DateService } from "../services/DateService";

const employeeHoursApis = {
  getAll: async () =>
    axios.get("http://localhost:3001/days").then((response) => {
      return response.data;
    }),
  deleteById: (id) =>
    axios.delete(`http://localhost:3001/days/${id}`).then((response) => {
      toastr.success("Removed");
    }),
  updateById: (data, expectedHours) => {
    const dateService = new DateService();
    data.total = dateService.calculateTotal(data, expectedHours);
    return data.id
      ? axios
          .put(`http://localhost:3001/days/${data.id}`, data)
          .then((response) => {
            toastr.success("Updated");
          })
      : axios.post(`http://localhost:3001/days`, data).then((response) => {
          toastr.success("Saved");
        });
  },
};

export { employeeHoursApis };
