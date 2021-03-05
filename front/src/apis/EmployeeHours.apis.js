import axios from "axios";
import { toastr } from "react-redux-toastr";

const employeeHoursApis = {
  getAll: () => {
    return axios.get("http://localhost:3001/days").then((response) => {
      return response.data;
    });
  },
  deleteById: (id) => {
    return axios.delete(`http://localhost:3001/days/${id}`).then((response) => {
      return response.data;
    });
  },
  updateById: (data) => {
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
