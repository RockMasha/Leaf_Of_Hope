import { defaultCardListSettings } from "../../universal/translate/universal/templeSettings/defaultCardListSettings";
import { signinSettings } from "../../universal/translate/universal/templeSettings/signinSettings";

export const settings = {
  logoutText: {
    ua: `Вийти`,
    en: `Go out`,
  },
  advertsTitle: {
    ua: `Мої оголошення:`,
    en: `My adverts:`,
  },

  deleteModalTitle: {
    ua: `Ви дійсно хочете видалити це оголошення?`,
    en: `Are you sure you want to delete this advert?`,
  },
  deleteModalFalse: {
    ua: `Ні`,
    en: `No`,
  },
  deleteModalTrue: {
    ua: `Так`,
    en: `Yes`,
  },
  advertsStateActiveState: {
    ua: `Активні`,
    en: `Active`,
  },
  advertsStateInactiveState: {
    ua: `Неактивні`,
    en: `Inactive`,
  },
};

Object.assign(settings, signinSettings, defaultCardListSettings);
