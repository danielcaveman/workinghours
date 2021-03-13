import axios from "axios";
import { toastr } from "react-redux-toastr";

const employeeHoursApis = {
  getAll: async () =>
    axios.get("http://localhost:3001/api/employeeHours").then((response) => {
      return response.data;
    }),
  deleteById: ({ _id }) =>
    axios
      .delete(`http://localhost:3001/api/employeeHours/${_id}`)
      .then((response) => {
        toastr.success("Removed");
      }),
  updateById: (data, expectedHours) => {
    return data._id
      ? axios
          .put(`http://localhost:3001/api/employeeHours/${data._id}`, data)
          .then((response) => {
            toastr.success("Updated");
          })
          .catch((error) => {
            const { errors } = error.response.data;
            errors.map((err) => toastr.error(err));
          })
      : axios
          .post(`http://localhost:3001/api/employeeHours`, data)
          .then((response) => {
            toastr.success("Saved");
          })
          .catch((error) => {
            const { errors } = error.response.data;
            errors.map((err) => toastr.error(err));
          });
  },
};

export { employeeHoursApis };
