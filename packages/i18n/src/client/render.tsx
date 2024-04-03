"use client";

import { useI18nConfig } from "./context";

export const RenderLangJsonValue = (content: any) => {
  const { locale, fallbackLocale } = useI18nConfig();

  return content[locale] || content[fallbackLocale] || null;
};
