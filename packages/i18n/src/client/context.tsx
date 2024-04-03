"use client";

import { createContext, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DirectionProvider } from "@radix-ui/react-direction";
import Cookies from "js-cookie";

import { initialize } from ".";
import { Language } from "../types";
import { getDirection } from "../utils/getDirection";

export type I18nStrategy = "cookies" | "locale" | "both";

export const LocaleContext = createContext<{
  locale: Language;
  fallbackLocale: Language;
  strategy: I18nStrategy;
}>({ locale: "en", fallbackLocale: "en", strategy: "locale" });

export const LocaleProvider = ({
  children,
  locale,
  fallbackLocale = "en",
  strategy = "locale",
}: {
  children: React.ReactNode;
  locale: Language;
  fallbackLocale?: Language;
  strategy?: I18nStrategy;
}) => {
  initialize();

  const dir = getDirection(locale);

  const router = useRouter();

  useEffect(() => {
    if (!Cookies.get("NEXT_LOCALE") || Cookies.get("NEXT_LOCALE") !== locale) {
      Cookies.set("NEXT_LOCALE", locale);
      router.refresh();
    }
  }, []);

  return (
    <LocaleContext.Provider
      value={{ locale, strategy, fallbackLocale }}
      // i18nIsDynamicList
    >
      <DirectionProvider dir={dir}>{children}</DirectionProvider>
    </LocaleContext.Provider>
  );
};

export const useI18nConfig = () => {
  return useContext(LocaleContext)!;
};
