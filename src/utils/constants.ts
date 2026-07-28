import dogModalImg from "../assets/images/modals/dog-modal.webp";
import catModalImg from "../assets/images/modals/cat-modal.webp";

export interface AuthModalMessage {
  imgUrl: string;
  name: string;
  birthday: string;
  comment: string;
}

export const LoginMessage: AuthModalMessage = {
  imgUrl: dogModalImg,
  name: "Rich",
  birthday: "21.09.2020",
  comment:
    "Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!",
};

export const RegisterMessage: AuthModalMessage = {
  imgUrl: catModalImg,
  name: "Jack",
  birthday: "18.10.2021",
  comment:
    "Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys.",
};

export interface LinkData {
  to: string;
  label: string;
}

export const linksData: LinkData[] = [
  { to: "/news", label: "News" },
  { to: "/notices", label: "Find pet" },
  { to: "/friends", label: "Our friends" },
];
