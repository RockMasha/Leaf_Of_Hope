import { redactDate } from "../redactDate";

export function getEnglishDataValue(info) {
  const {
    alergenicity,
    humidity,
    image,
    keeper,
    lifeDuration,
    light,
    size,
    temperature,
    way,
    translated,
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
  const { name, wish, description } = translated;

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
    name: name?.transEng,
    wish: wish?.transEng,
    description: description?.transEng,
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
