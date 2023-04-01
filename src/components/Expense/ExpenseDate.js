import "./ExpenseDate.css";

function ExpenseDate(props) {
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(props.date);

  const date1 = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return (
    <div className="ExpenseItemDate">
      <div>{monthName[month]}</div>
      <div>{year}</div>
      <div>{date1}</div>
    </div>
  );
}

export default ExpenseDate;
