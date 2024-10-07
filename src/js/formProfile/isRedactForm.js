export function isRedactForm() {
  const url = new URL(window.location.href);
  if (url.searchParams.get("redact")) {
    return true;
  }
  return false;
}
