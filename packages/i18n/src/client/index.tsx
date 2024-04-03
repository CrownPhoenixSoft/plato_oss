"use client";

import { useCallback, useContext, useEffect, useLayoutEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import i18next from "i18next";
// import LocizeBackend from 'i18next-locize-backend'
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import Cookies from "js-cookie";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";

import { defaultNS, getOptions, languages, NameSpace } from "../settings";
import { Language, LanguageJson } from "../types";
import { getDirection } from "../utils/getDirection";
import { LocaleContext, useI18nConfig } from "./context";

const runsOnServerSide = typeof window === "undefined";

let hasInit = false;

export const initialize = () => {
  if (hasInit) {
    return;
  }
  hasInit = true;

  // on client side the normal singleton is ok
  i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`../../public/locales/${language}/${namespace}.json`),
      ),
    )
    // .use(LocizeBackend) // locize backend could be used on client side, but prefer to keep it in sync with server side
    .init({
      ...getOptions(),
      lng: undefined, // let detect the language on client side
      detection: {
        order: ["htmlTag", "cookie", "navigator"],
      },
      preload: runsOnServerSide ? languages : [],
    });
};

export function useTranslation(
  ns: NameSpace | NameSpace[] = defaultNS,
  options: any = {},
) {
  const { locale: lng } = useContext(LocaleContext);
  const ret = useTranslationOrg(ns, options);

  useEffect(() => {
    if (ret[1].language !== lng) ret[1].changeLanguage(lng);
  }, [lng]);

  return ret;
}

export const getLangJsonValue = (text: any, lang?: string) => {
  const content = text as LanguageJson;
  if (!content) return null;

  if (lang) return content[lang as Language] || null;

  const { locale, fallbackLocale } = useI18nConfig();

  return (content?.[locale] || content?.[fallbackLocale]) ?? null;
};

export const useLangJsonValue = () => {
  const { locale, fallbackLocale } = useI18nConfig();

  const getValue = useCallback(
    (c: any) => {
      const content = c as LanguageJson;
      if (!content) return null;
      return (content?.[locale] || content?.[fallbackLocale]) ?? null;
    },
    [locale, fallbackLocale],
  );

  return { getValue };
};

export const useLocale = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { locale, strategy } = useI18nConfig();

  const handleLocaleChange = (newLocale: Language) => {
    if (locale === newLocale) return;

    if (strategy === "locale" || strategy === "both") {
      let newUrl = pathname.replace(`/${locale}`, `/${newLocale}`);

      Cookies.set("NEXT_LOCALE", newLocale);
      router.replace(newUrl);
    } else if (strategy === "cookies") {
      Cookies.set("NEXT_LOCALE", newLocale);
      router.refresh();
    }
  };

  return [locale, handleLocaleChange] as const;
};

export const useDirection = () => {
  const { locale } = useI18nConfig();
  const dir = getDirection(locale);

  return dir;
};

export * from "./context";
export * from "./render";
