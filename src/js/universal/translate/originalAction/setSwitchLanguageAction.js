export function setSwitchLanguageAction(action) {
  const { setUkrainian, setEnglish } = action;

  const switchEl = document.querySelector(".translate__input");
  switchEl.addEventListener("change", switchEvent);

  function switchEvent(event) {  
    const targetEl = event.target;
    const isEnglish = targetEl.checked;
    isEnglish ? setEnglish() : setUkrainian();
  }
}
