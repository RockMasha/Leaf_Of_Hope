import { getCard } from "./getCard";

export function createAdverts(info) {
  return info.map((advert) => getCard(advert));
}

// alergenicity : false
//
// humidity:"low"
//
// image:
// "https://res.cloudinary.com/dk3syrsg5/image/upload/v1727429815/leafofhopeAdverts/zwfsw6jzvtf0edis3cyx.jpg"
//
// keeper:
//// adress: "somewhere"
//// avatar: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1727420443/leafofhope/lznwsvrvnvi0p3jrwmnd.jpg"
//// email:"ema3675667il@gmail.com"
//// phone:"0505401644"
//// username:"abcd"
//
// lifeDuration: "perennial"
//
// light: "many"
//
// name: "cactus"
//
// owner: "66f6581982917a78a2512b44"
//
// size: "small"
//
// temperature: "high"
//
// way:"give"
//
// wish:"Обміняв(ла) би на будь-яку рослинку"
//
// _id: "66f67cb777abf15cc572641a"
