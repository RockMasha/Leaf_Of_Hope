import { redactDate } from "../redactDate";
import { cardData } from "./cardData";

export function getUkraineDataValue(info) {
  const {
    translated,
    alergenicity,
    humidity,
    image,
    keeper,
    lifeDuration,
    light,
    size,
    temperature,
    way,
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
  const { name, wish, description } = translated;

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
    name: name?.transUa,
    wish: wish?.transUa,
    description: description?.transUa,
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

  return `${property}` !== "undefined"
    ? cardData[name][property]
    : "не вказано";
}
