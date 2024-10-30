const monthsUA = [
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
  const mouth = time.getMonth() - 1;
  const year = time.getFullYear();
  const hours = time.getHours();
  const minutes =
    Number(time.getMinutes()) > 9 ? time.getMinutes() : "0" + time.getMinutes();

  const changeDate = `${day} ${
    lang === "ua" ? monthsUA[mouth] : monthsEn[mouth]
  }, ${year}, ${hours}:${minutes}`;

  return changeDate;
}
