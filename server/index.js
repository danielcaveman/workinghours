module.exports = () => {
  const now = new Date();
  const data = { days: [] };
  for (let i = new Date(2020, 0, 1); i < now; i.setDate(i.getDate() + 1)) {
    data.days.push({
      id: new Date(i),
      begin: "",
      end: "",
      lunchBegin: "",
      lunchEnd: "",
    });
  }
  return data;
};
