import { getAdvertCardInner } from "../universal/getAdvertCardInner/getAdvertCardInner";

export const getProfileCard = (info) => {
  const id = info._id;
  const { active } = info;

  return `
          <li class="profile-adverts__card" ${active} data-id="${id}">
            ${getAdvertCardInner(info)}
            <ul class="profile-adverts__btn-list">
              <li>
                <a href="formAdvert.html?id=${id}" class="profile-adverts__btn edit-btn" 
                aria-label="redact advert ${info.name}">
                </a>
              </li>
               ${
                 active
                   ? ""
                   : `<li>
                      <button type="button" class="profile-adverts__btn active-btn" aria-label="active advert ${info.name}"></button>
                    </li>`
               }
              <li>
                <button type="button" class="profile-adverts__btn delete-btn" aria-label="${
                  active ? "inactive" : "delete"
                }  advert ${info.name}"></button>
              </li>           
            </ul>
          </li>
        `;
};
