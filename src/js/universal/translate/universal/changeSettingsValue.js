export function changeSettingsValue(settings, data) {
  const { property, ua, en } = data;
  settings[property].ua = ua;
  settings[property].en = en;
}
