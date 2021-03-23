import { toastr } from "react-redux-toastr";
import { http } from "./http";

const employeeHoursApis = {
  getAll: async () => {
    const { data } = await http.get("/api/employeeHours");
    return data;
  },
  deleteById: async ({ _id }) => {
    await http.delete(`/api/employeeHours/${_id}`);
    toastr.success("Removed");
  },
  updateById: (data) => {
    return data._id
      ? http
          .put(`/api/employeeHours/${data._id}`, data)
          .then(() => {
            toastr.success("Updated");
          })
          .catch((error) => {
            const { errors } = error.response.data;
            errors.map((err) => toastr.error(err));
          })
      : http
          .post(`/api/employeeHours`, data)
          .then(() => {
            toastr.success("Saved");
          })
          .catch((error) => {
            const { errors } = error.response.data;
            errors.map((err) => toastr.error(err));
          });
  },
};

export { employeeHoursApis };
