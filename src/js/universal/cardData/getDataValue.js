import { redactDate } from "../redactDate";
import { cardData } from "./cardData";

export function getDataValue(info) {
  const {
    alergenicity,
    humidity,
    image,
    keeper,
    lifeDuration,
    light,
    name,
    size,
    temperature,
    way,
    wish,
    description,
    createdAt,
    attention,
    survive,
    state,
    flowering,
    growthRate,
    edible,
    _id: id,
  } = info;
  const date = redactDate(createdAt);
  const { username, email, avatar, adress, phone } = keeper;

  const result = {
    light: translateProperty({ light }),
    alergenicity: translateProperty({ alergenicity }),
    humidity: translateProperty({ humidity }),
    size: translateProperty({ size }),
    temperature: translateProperty({ temperature }),
    lifeDuration: translateProperty({ lifeDuration }),
    way: translateProperty({ way }),
    attention: translateProperty({ attention }),
    survive: translateProperty({ survive }),
    state: translateProperty({ state }),
    flowering: translateProperty({ flowering }),
    growthRate: translateProperty({ growthRate }),
    edible: translateProperty({ edible }),
    image,
    name,
    wish,
    description,
    username,
    email,
    avatar,
    adress,
    phone,
    date,
    id,
  };

  return result;
}

function translateProperty(item) {
  const name = Object.keys(item)[0];
  const property = item[name];

  return `${property}` !== "undefined" ? cardData[name][property] : "не вказано";
}
