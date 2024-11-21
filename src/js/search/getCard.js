import { getAdvertCardInner } from "../universal/getAdvertCardInner/getAdvertCardInner";

export function getCard(info) {
  const result = `
  <li class="left-side__item item-card">
    ${getAdvertCardInner(info)}
  </li>
`;

  return result;
}
