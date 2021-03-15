import moment from "moment";

export class DateService {
  formatDate(value, format) {
    if (!value) return "Invalid Date";
    const dateFormat = format ? format : "MM/DD/YYYY";
    const dateUTC = moment.utc(value);
    return moment(dateUTC).format(dateFormat);
  }

  createTableData(date, data) {
    const month = this._generateMonth(date);
    return month.map((m) => {
      data.forEach((d) => {
        const isEqual = m.day === d.day;
        if (isEqual) {
          m = d;
        }
      });
      return m;
    });
  }

  _generateMonth(dateParameter) {
    const date = dateParameter ? dateParameter : new Date();
    const data = [];
    let firstDayMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    for (
      firstDayMonth;
      firstDayMonth <= lastDayMonth;
      firstDayMonth.setDate(firstDayMonth.getDate() + 1)
    ) {
      data.push({
        day: moment(firstDayMonth).toISOString(),
        begin: "",
        end: "",
        lunchBegin: "",
        lunchEnd: "",
        total: "",
      });
    }
    return data;
  }
}
