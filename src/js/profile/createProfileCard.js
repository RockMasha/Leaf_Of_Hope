import { getAdvertCardInner } from "../universal/getAdvertCardInner";

export const createProfileCard = (info) => {
  return `
          <li class="profile-adverts__card">
            ${getAdvertCardInner(info)}
            <ul class="profile-adverts__btn-list">
              <li>
                <button type="button" class="profile-adverts__btn edit-btn"></button>
              </li>
              <li>
                <button type="button" class="profile-adverts__btn delete-btn"></button>
              </li>
            </ul>
          </li>
        `;
};
