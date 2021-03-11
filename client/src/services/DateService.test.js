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
});
