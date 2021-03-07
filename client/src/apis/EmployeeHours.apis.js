import axios from "axios";
import { toastr } from "react-redux-toastr";
import { DateService } from "../services/DateService";

const employeeHoursApis = {
  getAll: () => {
    return axios.get("http://localhost:3001/days").then((response) => {
      return response.data;
    });
  },
  deleteById: (id) => {
    return axios.delete(`http://localhost:3001/days/${id}`).then((response) => {
      toastr.success("Removed");
    });
  },
  updateById: (data) => {
    const dateService = new DateService();
    data.total = dateService.calculateTotal(data);
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
