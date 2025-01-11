const monthsUA = [
  "Січня",
  "Лютого",
  "Березеня",
  "Квітеня",
  "Травеня",
  "Червеня",
  "Липеня",
  "Серпеня",
  "Вересеня",
  "Жовтня",
  "Листопада",
  "Грудня",
];

const monthsEn = [
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

export function redactDate(date, lang = "ua") {
  const time = new Date(date);
  const day = time.getDate();
  const mouth = time.getMonth();
  const year = time.getFullYear();
  const hours = time.getHours();
  const minutes =
    Number(time.getMinutes()) > 9 ? time.getMinutes() : "0" + time.getMinutes();

  const changeDate = `${day} ${
    lang === "ua" ? monthsUA[mouth] : monthsEn[mouth]
  }, ${year}, ${hours}:${minutes}`;

  return changeDate;
}
