import { changeSettingsValue } from "../universal/translate/universal/changeSettingsValue";
import { root } from "./root";
import { setInputs } from "./setInputs";
import { settings } from "./translate/settings";

export async function redactAdvert() {
  await setInputs();
  root.btnSubmit.textContent = "Зберегти";
  
  const changeData = { property: "submitText", en: "Save", ua: "Зберегти" };
  changeSettingsValue(settings, changeData);
}
