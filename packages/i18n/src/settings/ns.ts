export const nameSpaces = ["global", "console", "menu"] as const;
export const defaultNS = "global";

export type NameSpace = (typeof nameSpaces)[number];
