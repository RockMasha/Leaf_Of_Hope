const months = [
  "Січеня",
  "Лютого",
  "Березеня",
  "Квітеня",
  "Травеня",
  "Червеня",
  "Липеня",
  "Серпеня",
  "Вересеня",
  "Жовтеня",
  "Листопада",
  "Грудня",
];

export function redactDate(date) {
  const time = new Date(date);
  const day = time.getDate();
  const mouth = time.getMonth();
  const year = time.getFullYear();
  const hours = time.getHours();
  const minutes =
    Number(time.getMinutes()) > 9 ? time.getMinutes() : "0" + time.getMinutes();

  const changeDate = `${day} ${
    months[mouth - 1]
  }, ${year}, ${hours}:${minutes}`;

  return changeDate;
}
