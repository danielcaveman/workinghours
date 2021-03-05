import moment from "moment";

export class DateService {
  generateMonth(dateParameter) {
    const date = new Date();
    const data = [];
    let firstDayMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    for (
      firstDayMonth;
      firstDayMonth <= lastDayMonth;
      firstDayMonth.setDate(firstDayMonth.getDate() + 1)
    ) {
      data.push({
        day: new Date(firstDayMonth),
        begin: "",
        end: "",
        lunchBegin: "",
        lunchEnd: "",
      });
    }
    return data;
  }

  formatDate(value, format) {
    const dateUTC = moment.utc(value);
    return moment(dateUTC).format(format);
  }
}
