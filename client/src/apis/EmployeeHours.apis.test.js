import { employeeHoursApis } from "./EmployeeHours.apis";
import { http } from "./http";

jest.mock("../reducers/EmployeeHours.reducer");
jest.mock("./http");

describe("EmployeeHoursApis", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  beforeEach(() => {
    http.get.mockImplementation(() => Promise.resolve({ data: [] }));
  });

  it("Should fetch employee hours successfully", () => {
    employeeHoursApis.getAll();

    expect(http.get).toHaveBeenCalledTimes(1);
  });
});
