export function getAdvertId() {
  const url = new URL(window.location.href);
  return url.searchParams.get("id");
}
