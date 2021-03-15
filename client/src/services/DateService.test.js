import { DateService } from "./DateService";

describe("DateService", () => {
  const dateService = new DateService();

  it("Should format a date string in a especific format:", () => {
    const mockedDate = "2021-03-01T03:00:00.000Z";
    const expectedFormatDefault = "03/01/2021";
    const expectedFormatMonthYear = "March 2021";
    const expectedNoValueResponse = "Invalid Date";

    expect(dateService.formatDate(mockedDate, "MM/DD/YYYY")).toEqual(
      expectedFormatDefault
    );

    expect(dateService.formatDate(mockedDate, "MMMM YYYY")).toEqual(
      expectedFormatMonthYear
    );

    expect(dateService.formatDate(mockedDate)).toEqual(expectedFormatDefault);

    expect(dateService.formatDate()).toEqual(expectedNoValueResponse);
  });

  it("Should create data table:", () => {
    const date = new Date(2021, 2, 15);
    const data = [
      {
        begin: "08:15",
        day: "2021-03-01T03:00:00.000Z",
        end: "18:15",
        id: "604cc4bc3890e0211c0759f1",
        lunchBegin: "12:01",
        lunchEnd: "13:00",
        total: "1:01",
      },
    ];
    const tableData = dateService.createTableData(date, data);

    expect(tableData[0]).toMatchObject(data[0]);
  });
});
