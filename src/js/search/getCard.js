import { getAdvertCardInner } from "../universal/getAdvertCardInner";

export function getCard(info) {
  return `
      <li class="left-side__item item-card">
        ${getAdvertCardInner(info)}
      </li>
    `;
}
