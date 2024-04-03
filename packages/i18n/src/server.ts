import { cookies } from "next/headers";
import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";

import { defaultNS, getOptions, NameSpace } from "./settings";
import { Language, LanguageJson } from "./types";

const initI18next = async (lng: string, ns: NameSpace | NameSpace[]) => {
  // on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`../public/locales/${language}/${namespace}.json`),
      ),
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export async function useTranslation(
  ns: NameSpace | NameSpace[] = defaultNS,
  options: any = {},
) {
  const lng = cookies().get("NEXT_LOCALE")?.value as unknown as Language;

  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix,
    ),
    i18n: i18nextInstance,
  };
}

export const getLangJsonValue = (
  text: any,
  config: {
    lang?: string;
    defaultLang?: string;
  },
) => {
  const content = text as LanguageJson;
  if (!content) return null;

  return (
    content[config?.lang as Language] ||
    content[config?.defaultLang as Language] ||
    null
  );
};

export const useLangJsonValue = (config?: {
  lang?: string;
  defaultLang?: string;
}) => {
  const lng = cookies().get("NEXT_LOCALE")?.value as unknown as Language;

  const getValue = (content?: any) =>
    getLangJsonValue(content, {
      ...config,
      lang: lng || config?.lang,
    });

  return { getValue };
};

export type TFuncType = Awaited<ReturnType<typeof useTranslation>>["t"];
