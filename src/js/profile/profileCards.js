import { getUserAdverts } from "../servise/api";
import { getProfileCard } from "./getProfileCard";
import { ProfileCard } from "./ProfileCard";
import { root } from "./root";

export const profileCards = new ProfileCard(
  root.profileAdverts,
  getUserAdverts,
  getProfileCard
);
