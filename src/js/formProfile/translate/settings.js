import { errorSettings } from "../../universal/translate/universal/templeSettings/errorSettings";

export const settings = {
  mainTitle: {
    ua: `Редагування`,
    en: `Editing`,
  },
  nameText: {
    ua: `Ім'я`,
    en: `Name`,
  },
  namePlaceholder: {
    placeholder: true,
    ua: `Введіть ім'я`,
    en: `Enter a name`,
  },
  locationText: {
    ua: `Місце проживання`,
    en: `Place of residence`,
  },
  locationPlaceholder: {
    placeholder: true,
    ua: `Ведіть місце проживання`,
    en: `Enter your place of residence`,
  },
  phoneText: {
    ua: `Телефон`,
    en: `Phone`,
  },
  phonePlaceholder: {
    placeholder: true,
    ua: `Починайте з коду країни`,
    en: `Start with the country code`,
  },
  passwordText: {
    ua: `Пароль`,
    en: `Password`,
  },
  passwordPlaceholder: {
    placeholder: true,
    ua: `Введіть пароль`,
    en: `Enter your password`,
  },
  emailText: {
    ua: `Пошта`,
    en: `Email`,
  },
  emailPlaceholder: {
    placeholder: true,
    ua: `Введіть ваш емейл`,
    en: `Enter your email`,
  },
  submitText: {
    ua: `Зберегти`,
    en: `Save`,
  },
  backText: {
    ua: `← Вхід`,
    en: `← Login`,
  },
};

Object.assign(settings, errorSettings);
