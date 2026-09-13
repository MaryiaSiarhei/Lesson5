// Провести рефакторинг задачи так, чтобы код (toString().padStart(2, "0")) не повторялся, вынести его в отдельную функцию и использовать
// Саму задачу обернуть в отдельную функцию getDate, которая принимает в качестве параметра произвольную дату в формате '2026-10-22T22:10:15'
//* Проверить валидна ли дата в переданном параметре

function addZero(value: number): string {
  return value.toString().padStart(2, "0");
}
function getDate(dateString: string): string {
  const checkFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/;
  if (!checkFormat.test(dateString)) {
    return "Неверный формат даты";
  }
  const now: Date = new Date(dateString);
  if (isNaN(now.getTime())) {
    return "Некорректная дата";
  }
  const day = addZero(now.getDate());
  const month = addZero(now.getMonth() + 1);
  const year = now.getFullYear();

  const hours = addZero(now.getHours());
  const minutes = addZero(now.getMinutes());
  const seconds = addZero(now.getSeconds());

  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  return formattedDate;
}
console.log(getDate("2026-10-22T22:10:15"));
