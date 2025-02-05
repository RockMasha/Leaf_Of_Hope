const criteriaTextData = {
  toxicity: {
    img: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1737382709/toxicity_myazvz.svg",
    mainText: {
      ua: `Цей критерій описує отруйніть рослини. Він потрібен, аби людина розуміла, чи
          буде безпечно тримати цю рослину враховцчі умови її проживання`,
      en: `This criterion describes poisonous plants. It is needed so that a person
          understands whether it will be safe to keep this plant, given its habitat
          conditions.`,
    },
    "very-poisonous": {
      ua: `при торкані до кімнатної рослини може сприсинити негативний ефект`,
      en: `touching a houseplant can have a negative effect`,
    },
    "highly-toxic": {
      ua: `може спричиняти негативні ефект при споживані`,
      en: `may cause negative effects when consumed`,
    },
    toxic: {
      ua: `небезпечні лише при значній дозі або тривалому контакті`,
      en: `dangerous only in large doses or with prolonged contact`,
    },
    "non-toxic": {
      ua: `не мають негативного впливу, підходять для життя з тваринами`,
      en: `have no negative impact, suitable for living with animals`,
    },
  },

  plantCondition: {
    img: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1737382653/plantCondition_ulr3sn.svg",
    mainText: {
      ua: `Ознака описує стан рослини, наскільки вона себе добре почуває`,
      en: `The sign describes the condition of the plant, how well it feels.`,
    },
    conditioned: {
      ua: `рослин в гарному стані, добре себе почуває`,
      en: `the plant is in good condition, doing well.`,
    },
    unconditioned: {
      ua: `рослин в поганому стані, недобре себе почуває`,
      en: `the plant is in poor condition, not feeling well.`,
    },
  },

  plantType: {
    img: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1737382669/plantType_n7c8ed.svg",
    mainText: {
      ua: `Критерій визначає декоративну переважаючю функцію рослини`,
      en: `The criterion determines the decorative predominant function of the plant`,
    },
    flowering: {
      ua: `рослина має чудові квіти і саме через них її зазвичай заводять`,
      en: `the plant has beautiful flowers and it is because of them that it is usually planted.`,
    },
    foliage: {
      ua: `рослина має чудові лисят і саме через ниї її зазвичай заводять`,
      en: `the plant has beautiful leaves and it is because of them that it is usually planted.`,
    },
  },

  height: {
    img: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1737382755/height_rdx0gx.svg",
    mainText: {
      ua: `Ознака позначає висоту рослини. Вона потрібна, аби людина розуміла, чи помістиця
          рослина у неї дома`,
      en: `The criterion determines the height of the plant. It is needed so that a person 
          understands whether the plant will fit in their home.`,
    },
    dwarf: {
      ua: `висота кімнатної рослини до 10 см`,
      en: `height of houseplant up to 10 cm`,
    },
    low: {
      ua: `висота кімнатної рослини від 11 до 20 см`,
      en: `height of the houseplant from 11 to 20 cm`,
    },
    average: {
      ua: `висота кімнатної рослини від 21 до 40 см`,
      en: `height of the houseplant from 21 to 40 cm`,
    },
    high: {
      ua: `висота кімнатної рослини від 41 см до 1м`,
      en: `height of houseplant from 41 cm to 1 m`,
    },
    "very high": {
      ua: `висота кімнатної рослини більше 1 м`,
      en: `the height of the houseplant is more than 1 m`,
    },
  },

  light: {
    img: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1737382650/light_vag89b.svg",
    mainText: {
      ua: `Критерій позначає потреби рослин до освітлення`,
      en: `The criterion indicates the lighting needs of plants`,
    },
    "light-loving": {
      ua: `рослина потребує багато освітлення, 5000-100000 люкс`,
      en: `the plant needs a lot of lighting, 5000-100000 lux`,
    },
    "relatively light-loving": {
      ua: `рослина потребує помірного освітлення, 5000-15000 люкс`,
      en: `the plant needs moderate lighting, 5000-15000 lux.`,
    },
    "shade-tolerant": {
      ua: `рослина може виживати при невеликому освітлені, 1000-5000 люкс`,
      en: `the plant can survive in low light, 1000-5000 lux`,
    },
  },

  temperature: {
    img: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1737382690/temperature_frosfh.svg",
    mainText: {
      ua: `Позначає, при якій темпаратурі повітря буде добре кімнатні рослині`,
      en: `Indicates at what air temperature indoor plants will be comfortable`,
    },
    "heat-loving": {
      ua: `повітря повинно бути при температурі +18°C і більше`,
      en: `the air temperature should be +18°C and above.`,
    },
    medium: {
      ua: `повітря повинно бути при температурі +13°C – +18°C`,
      en: `the air temperature should be +13°C – +18°C.`,
    },
    "cold-resistant": {
      ua: `повітря повинно бути при температурі менше +13°C`,
      en: `the air temperature must be below +13°C.`,
    },
  },

  watering: {
    img: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1737382716/watering_u6btqk.svg",
    mainText: {
      ua: `Критерій позначає скільки разів на яку кількість часу треба поливати рослину`,
      en: `The criterion indicates how many times and with what frequency the plant should 
          be watered.`,
    },
    "three days": {
      ua: `полив раз на три дні`,
      en: `watering once every three days`,
    },
    week: {
      ua: `полив раз на тиждень`,
      en: `watering once a week`,
    },
    "two weeks": {
      ua: `полив раз на два тижні`,
      en: `watering once every two weeks`,
    },
    month: {
      ua: `полив раз на місяць`,
      en: `watering once every mouth`,
    },
  },

  care: {
    img: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1737382747/care_bovl09.svg",
    mainText: {
      ua: `Критерій позначає чи є вибагливим у догляді кімнатна рослина`,
      en: `The criterion indicates whether a houseplant is demanding in care.`,
    },
    picky: {
      ua: `потребує уваги та часу від доглядача`,
      en: `requires attention and time from the caregiver`,
    },
    unassuming: {
      ua: `не потребує великої уваги від доглядача, займає небагато часу`,
      en: `does not require much attention from the caregiver, takes little time`,
    },
  },

  substrate: {
    img: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1737382685/substrate_amd80q.svg",
    mainText: {
      ua: `Грунт, в якому буде добре рости кімнатна рослина`,
      en: `Soil in which a houseplant will grow well`,
    },
    universal: {
      ua: `має всього потроху: торф, перліт (вермикуліт), компост, листову (дернову) земля,
          пісок. Середнє утримає вологу та середньо пористий`,
      en: `It has a little bit of everything: peat, perlite (vermiculite), compost, leaf (sod)
          soil, sand. Medium will retain moisture and medium porosity`,
    },
    peat: {
      ua: `легкий, утримує вологу, пористий. Основний компонет – Торф`,
      en: `light, moisture-retaining, porous. The main component is Peat.`,
    },
    cactus: {
      ua: `легкий, пористий, швидко дренує воду. Велика частка припадає на пісок, містить
          перліт (пемзу), трохи торфу та глини, камінців (щебінь)`,
      en: `light, porous, quickly drains water. A large proportion is sand, contains perlite 
          (pumice), some peat and clay, pebbles (crushed stone)`,
    },
    orchids: {
      ua: `пористий, швидко висихає, але зберігає вологість. Велика частка припадає на 
          кору дерев, містить мох, перліт, трохи вугіля та кокосового волокна`,
      en: `porous, dries quickly but retains moisture. A large proportion is tree bark, 
          contains moss, perlite, some charcoal and coconut fiber`,
    },
    palm: {
      ua: `пухкий, помірно дренуючий, утримує вологу. Дві п'ятих припадає на дернову 
          та листяну землі, одна четверта припадає на торф, містить пісок, трохи кокосового 
          волокана та зовсім трохи вугіля`,
      en: `loose, moderately draining, retains moisture. Two-fifths is turf and leafy soil, 
          one-fourth is peat, contains sand, a little coconut fiber and a very small amount 
          of charcoal`,
    },
    other: {
      ua: `усі інші типу субстрату, які непідійшли під п'ять перших значень`,
      en: `all other substrate types that did not fit the first five values`,
    },
  },

  windowDistance: {
    img: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1737382727/windowDistance_de0vcn.svg",
    mainText: {
      ua: `Позначає, на яку відстань від південого вікна треба ставити кімнатну рослину`,
      en: `means how far from a south window you should place a houseplant`,
    },
    "up to 0.5m": {
      ua: `треба розташоувати кімнатну рослину до 0.5 метрів від вікна`,
      en: `you need to place the houseplant up to 0.5 meters from the window`,
    },
    "up to 1m": {
      ua: `треба розташоувати кімнатну рослину до 1 метра від вікна`,
      en: `you need to place the houseplant up to 1 meter from the window`,
    },
    "up to 2m": {
      ua: `треба розташоувати кімнатну рослину до 2 метрів від вікна`,
      en: `you need to place the houseplant up to 2 meters from the window`,
    },
    "over 2m": {
      ua: `треба розташоувати кімнатну рослину на відстані більше 2 метрів. Сюдиш входит 
          і рослини, які потребують додаткового освітлення, тобто не від сонця`,
      en: `You should place your houseplant at a distance of more than 2 meters. This 
          includes plants that need additional lighting, i.e. not from the sun.`,
    },
  },

  allergenicity: {
    img: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1737382731/allergenicity_nyxjl0.svg",
    mainText: {
      ua: `Позначає, чи викликає кімнатна рослин алергію у людей-алергіків`,
      en: `Indicates whether the houseplant causes allergies in allergic people`,
    },
    available: {
      ua: `частіше викликає, ніж не викликає алергію`,
      en: `more likely to cause allergies than not`,
    },
    absent: {
      ua: `частіше не викликає алергію, ніж викликає`,
      en: `more often does not cause allergies than does`,
    },
  },

  growthRate: {
    img: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1737382751/growthRate_v84upu.svg",
    mainText: {
      ua: `Критерій позначає, наскільки швидко росте рослина`,
      en: `The criterion indicates how fast the plant grows.`,
    },
    "fast-growing": {
      ua: `кімнатна рослина росте 25 і більше см на рік`,
      en: `houseplant grows 25 cm or more per year`,
    },
    "medium-growing": {
      ua: `кімнатна рослина росте 10-25 см на рік`,
      en: `houseplant grows 10-25 cm per year`,
    },
    "slow-growing": {
      ua: `кімнатна рослина росте менше 10 см на рік`,
      en: `houseplant grows less than 10 cm per year`,
    },
  },

  lifeDuration: {
    img: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1737382635/lifeDuration_byna4v.svg",
    mainText: {
      ua: `Позначає, тривалість життевого циклу рослини, чи розрахована вона на довге 
          перебування в домі `,
      en: `Determine the duration of the plant's life cycle and whether it is designed 
          for a long stay in the house`,
    },
    "short-lived": {
      ua: `розрахована на життя до 4 років. Часто в цю групу входять орхідеї`,
      en: `designed to live up to 4 years. Orchids often belong to this group`,
    },
    "long-lived": {
      ua: `розрахована на життя більше 4 років`,
      en: `designed to last more than 4 years`,
    },
  },

  rarity: {
    img: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1737382671/rarity_gpxov3.svg",
    mainText: {
      ua: `Критерій позначає статус за червоною книгою, розроблених IUCN. Він не є актуальним 
          у суспільстві, тому його було додано з метою популеризувати для збереження рослин 
          під загрозою вимерання`,
      en: `The criterion indicates the status according to the IUCN Red List. It is not 
          relevant in society, so it was added to popularize the preservation of plants under 
          threat of extinction.`,
    },
    NE: {
      ua: `рослина не оцінювалося`,
      en: `the plant was not evaluated`,
    },
    DD: {
      ua: `для визначення раритетності недостатньо даних`,
      en: `insufficient data to determine rarity`,
    },
    LC: {
      ua: `кімнатні рослини мають найменший ризик вимирання`,
      en: `houseplants have the lowest risk of extinction`,
    },
    NT: {
      ua: `рослини близькі до загрозливого статусу`,
      en: `plants close to threatened status`,
    },
    VU: {
      ua: `рослини вразливі та можуть невдовзі стати зникаючими`,
      en: `plants are vulnerable and may soon become extinct`,
    },
    EN: {
      ua: `зникаючі рослини`,
      en: `endangered plants`,
    },
    CR: {
      ua: `критично зникаючі види`,
      en: `critically endangered species`,
    },
    EW: {
      ua: `рослини зниклі в дикій природі`,
      en: `plants extinct in the wild`,
    },
  },
};

export function getCriteriaTextData() {
  return { ...criteriaTextData };
}
