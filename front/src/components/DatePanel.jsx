function DatePanel() {
  return (
    <div>
      <div>
        <label htmlFor="start">Start date:</label>
        <input type="date" id="start" name="start" min="2020-01-01" />
      </div>
      <div>
        <label htmlFor="end">End date:</label>
        <input type="date" id="end" name="end" min="2020-01-01" />
      </div>
    </div>
  );
}

export default DatePanel;
