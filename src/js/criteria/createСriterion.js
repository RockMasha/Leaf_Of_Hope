export function createCriterion(info) {
  const { name: variableName, data, lang } = info;
  const { name, text, variables } = data;

  return `
      <li class="criteria-info-criteria__item">   
        <div class="criteria-info-criteria__title-box">
          <img
            class="criteria-info-criteria__img"
            src="./img/criteria/${variableName}.svg"
            alt="${name[lang]}"
          />
          <h2 class="criteria-info-criteria__title" id="${variableName}">
            ${name[lang]}
          </h2>
        </div>
        <p class="criteria-info-criteria__text">${text[lang]}</p>
        <table class="criteria-info-criteria-table">
          <thead>
            <tr>
              <td>${lang === "ua" ? "Значення" : "Value"}</td>
              <td>${lang === "ua" ? "Пояснення" : "Explanation"}</td>
            </tr>
          </thead>
          ${getInnerTable(variables, lang)}
        </table>
      </li>
    `;
}

function getInnerTable(variables, lang) {
  let inner = ``;
  for (const key in variables) {
    inner += `<tr>
                <td>${variables[key].name[lang]}</td>
                <td>${variables[key].text[lang]}</td>
            </tr>`;
  }
  return inner;
}
