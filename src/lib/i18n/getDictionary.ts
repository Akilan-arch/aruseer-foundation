import { Locale } from "./config";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  ta: () => import("./dictionaries/ta.json").then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();