export const PLATO_LOGO = `/logo-icon.png`;
export const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL!;
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL!;

export const IS_CLIENT = typeof window !== "undefined";
export const IS_SERVER = typeof window === "undefined";
