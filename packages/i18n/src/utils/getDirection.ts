import { Language } from "../types";

const rtlLangs = ["ar"] as Language[];

export const getDirection = (lang: Language) => {
  if (rtlLangs.includes(lang)) return "rtl";
  else return "ltr";
};
