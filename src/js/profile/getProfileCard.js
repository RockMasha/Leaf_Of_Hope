import { getAdvertCardInner } from "../universal/getAdvertCardInner";

export const getProfileCard = (info) => {
  const id = info._id;

  return `
          <li class="profile-adverts__card" data-id="${id}">
            ${getAdvertCardInner(info)}
            <ul class="profile-adverts__btn-list">
              <li>
                <a href="formAdvert.html?id=${id}" class="profile-adverts__btn edit-btn" 
                aria-label="redact advert ${info.name}">
                </a>
              </li>
              <li>
                <button type="button" class="profile-adverts__btn delete-btn" aria-label="delete advert ${
                  info.name
                }"></button>
              </li>
            </ul>
          </li>
        `;
};
