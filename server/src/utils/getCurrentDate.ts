export function getCurrentDate(): string {
  const currentDate = new Date();
  const date = currentDate.getDate() < 10 ?
    `0${currentDate.getDate()}` :
    currentDate.getDate();

  const  month = currentDate.getMonth() + 1;
  const currentMonth = month < 10 ? `0${month}` : month;

  const year = currentDate.getFullYear();

  return `${date}/${currentMonth}/${year}`;
}
