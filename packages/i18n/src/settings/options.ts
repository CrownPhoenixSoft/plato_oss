import { defaultNS, NameSpace } from "./ns";

export const fallbackLng = "en";
export const languages = [fallbackLng, "ar", "tr"] as const;

export function getOptions(
  lng = fallbackLng,
  ns: NameSpace | NameSpace[] = defaultNS,
) {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS: Array.isArray(ns) ? ns[0] : ns,
    ns,
  };
}
