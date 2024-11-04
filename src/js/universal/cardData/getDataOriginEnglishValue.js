import { redactDate } from "../redactDate";

export function getDataOriginEnglishValue(info) {
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
  const date = redactDate(createdAt, "en");
  const { username, email, avatar, adress, phone } = keeper;

  const result = {
    light: processProperty(light),
    alergenicity: processProperty(alergenicity),
    humidity: processProperty(humidity),
    size: processProperty(size),
    temperature: processProperty(temperature),
    lifeDuration: processProperty(lifeDuration),
    way: processProperty(way),
    attention: processProperty(attention),
    survive: processProperty(survive),
    state: processProperty(state),
    flowering: processProperty(flowering),
    growthRate: processProperty(growthRate),
    edible: processProperty(edible),
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

function processProperty(item) {
  return item !== undefined ? item : "not choose";
}
