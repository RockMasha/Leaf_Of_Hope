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
    _id: id,
  } = info;
  const date = redactDate(createdAt);
  const { username, email, avatar, adress, phone } = keeper;

  const result = {
    light: cardData.light[light],
    alergenicity: cardData.alergenicity[alergenicity],
    humidity: cardData.humidity[humidity],
    size: cardData.size[size],
    temperature: cardData.temperature[temperature],
    lifeDuration: cardData.lifeDuration[lifeDuration],
    way: cardData.way[way],
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
