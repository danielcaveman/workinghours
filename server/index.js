module.exports = () => {
  const date = new Date();
  const data = { days: [] };
  let firstDayMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDayMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  for (
    firstDayMonth;
    firstDayMonth <= lastDayMonth;
    firstDayMonth.setDate(firstDayMonth.getDate() + 1)
  ) {
    data.days.push({
      id: new Date(firstDayMonth),
      begin: "",
      end: "",
      lunchBegin: "",
      lunchEnd: "",
    });
  }
  return data;
};
