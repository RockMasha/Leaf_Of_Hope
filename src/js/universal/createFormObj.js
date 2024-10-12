export function createFormObj(form) {
  let formData = new FormData(form);
  
  const data = {};
  for (let key of formData.entries()) {
    data[key[0]] = key[1];
  }
  
  return data;
}
