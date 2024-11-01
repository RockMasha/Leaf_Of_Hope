import { root } from "./root";
import { SearchCards } from "./SearchCards";

export const searchCard = root.leftSide
  ? new SearchCards(root.leftSide, root.form)
  : {};
