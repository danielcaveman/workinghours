import { employeeHoursApis } from "./EmployeeHours.apis";
import { http } from "./http";

const mock = [
  {
    _id: "604cc237ef6b6827747f1b14",
    day: "2021-03-03T03:00:00.000Z",
    begin: "08:10",
    end: "18:00",
    lunchBegin: "12:12",
    lunchEnd: "13:05",
    __v: 0,
    total: "0:57",
    id: "604cc237ef6b6827747f1b14",
  },
  {
    _id: "604cc4bc3890e0211c0759f1",
    day: "2021-03-04T03:00:00.000Z",
    begin: "08:15",
    end: "18:00",
    lunchBegin: "12:01",
    lunchEnd: "13:00",
    __v: 0,
    total: "0:46",
    id: "604cc4bc3890e0211c0759f1",
  },
];
jest.mock("./http");

describe("EmployeeHoursApis", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  beforeEach(async () => {
    http.get.mockImplementation(() =>
      Promise.resolve({
        data: mock,
      })
    );
    employeeHoursApis.getAll();
  });

  it("Should fetch employee hours the correct number of times", () => {
    expect(http.get).toHaveBeenCalledTimes(1);
  });

  it("Should call employee hours correct URL", () => {
    expect(http.get).toHaveBeenCalledWith("/api/employeeHours");
  });

  it("Should fetch employee hours successfully", async () => {
    await expect(employeeHoursApis.getAll()).resolves.toEqual(mock);
  });
});
