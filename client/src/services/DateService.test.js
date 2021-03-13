import { DateService } from "./DateService";

const mock = [
  {
    day: "2021-03-01T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-02T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-03T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-04T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-05T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-06T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-07T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-08T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-09T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-10T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-11T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-12T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-13T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-14T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-15T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-16T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-17T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-18T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-19T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-20T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-21T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-22T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-23T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-24T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-25T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-26T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-27T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-28T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-29T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-30T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
  {
    day: "2021-03-31T03:00:00.000Z",
    begin: "",
    end: "",
    lunchBegin: "",
    lunchEnd: "",
    total: "",
  },
];

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

  it("Should generate a month array without parameter:", () => {
    const month = dateService.generateMonth();

    expect(mock[0]).toMatchObject(month[0]);
  });

  it("Should generate a month array with parameter:", () => {
    const date = new Date(2021, 2, 15);
    const month = dateService.generateMonth(date);

    expect(mock[0]).toMatchObject(month[0]);
  });
});
