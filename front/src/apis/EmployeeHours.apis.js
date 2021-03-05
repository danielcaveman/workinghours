import axios from "axios";

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
};

export { employeeHoursApis };
