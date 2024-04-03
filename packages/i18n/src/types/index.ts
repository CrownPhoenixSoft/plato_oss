import { languages } from "../settings";

export type Language = (typeof languages)[number];
export type LanguageJson = Partial<{ [key in Language]?: any }>;
export type Direction = "ltr" | "rtl";
