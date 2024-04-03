export const COUNTRIES = {
  AE: {
    country: "United Arab Emirates",
    cities: [
      "Abu Dhabi",
      "Ajman",
      "Dubai",
      "Fujairah",
      "Ras Al Khaimah",
      "Sharjah",
      "Umm Al Quwain",
    ],
    phone: {
      dial_code: "+971",
      mask: "## ### ####",
    },
    currency: {
      code: "AED",
      name: "United Arab Emirates Dirham (AED)",
      symbol: "د.إ",
    },
    timezones: ["Asia/Dubai"],
  },
  SA: {
    country: "Saudi Arabia",
    cities: [
      "Riyadh",
      "Jeddah",
      "Mecca",
      "Medina",
      "Dammam",
      "Khobar",
      "Abha",
      "Tabuk",
      "Hail",
      "Najran",
      "Buraidah",
      "Jizan",
    ],
    phone: {
      dial_code: "+966",
      mask: "### ### ####",
    },
    currency: {
      code: "SAR",
      name: "Saudi Riyal (SAR)",
      symbol: "ر.س",
    },
    timezones: ["Asia/Riyadh"],
  },
  EG: {
    country: "Egypt",
    cities: [
      "Cairo",
      "Alexandria",
      "Giza",
      "Shubra El Kheima",
      "Port Said",
      "Suez",
      "Luxor",
      "Aswan",
      "Ismailia",
      "Faiyum",
      "Mansoura",
      "Tanta",
    ],
    phone: {
      dial_code: "+20",
      mask: "## ### ####",
    },
    currency: {
      code: "EGP",
      name: "Egyptian Pound (EGP)",
      symbol: "ج.م",
    },
    timezones: ["Africa/Cairo"],
  },
  KW: {
    country: "Kuwait",
    cities: ["Kuwait City", "Hawalli", "Salmiya", "Jahra", "Farwaniya"],
    phone: {
      dial_code: "+965",
      mask: "## ### ###",
    },
    currency: {
      code: "KWD",
      name: "Kuwaiti Dinar (KWD)",
      symbol: "د.ك",
    },
    timezones: ["Asia/Kuwait"],
  },
  OM: {
    country: "Oman",
    cities: ["Muscat", "Salalah", "Sohar", "Nizwa", "Sur"],
    phone: {
      dial_code: "+968",
      mask: "## ### ###",
    },
    currency: {
      code: "OMR",
      name: "Omani Rial (OMR)",
      symbol: "ر.ع.",
    },
    timezones: ["Asia/Muscat"],
  },
  JO: {
    country: "Jordan",
    cities: ["Amman", "Irbid", "Zarqa", "Aqaba", "Madaba", "Karak"],
    phone: {
      dial_code: "+962",
      mask: "## ### ####",
    },
    currency: {
      code: "JOD",
      name: "Jordanian Dinar (JOD)",
      symbol: "د.ا",
    },
    timezones: ["Asia/Amman"],
  },
  TR: {
    country: "Turkey",
    cities: ["Istanbul", "Ankara", "Izmir", "Bursa", "Antalya", "Adana"],
    phone: {
      dial_code: "+90",
      mask: "(###) ###-####",
    },
    currency: {
      code: "TRY",
      name: "Turkish Lira (TRY)",
      symbol: "₺",
    },
    timezones: ["Europe/Istanbul"],
  },
} as const;

export const COUNTRIES_LIST = Object.keys(COUNTRIES).map((key) => ({
  code: key as CountryCode,
  ...COUNTRIES[key as CountryCode],
}));

export const currencies = COUNTRIES_LIST.map((country) => country.currency);
export const timezones = COUNTRIES_LIST.flatMap((country) => country.timezones);

export type CountryCode = keyof typeof COUNTRIES;

export const getCountryFlagUrl = (
  code: CountryCode,
  size?: {
    w?: "20" | "40" | "80" | "160" | "320" | "640";
    h?: "20" | "24" | "40" | "60" | "80" | "120" | "240";
  },
) =>
  `https://flagcdn.com/${
    size?.h ? `h${size.h}` : `w${size?.w || 20}`
  }/${code.toLowerCase()}.png`;

export const getCountryCities = (
  code?: string | null,
  method: "code" | "name" = "code",
) => {
  if (!code) return [];
  else if (method === "name")
    return COUNTRIES_LIST.find((i) => i.country === code)?.cities ?? [];
  return COUNTRIES[code as CountryCode]?.cities ?? [];
};

export const getCountryTimeZones = (
  code?: string | null,
  method: "code" | "name" = "code",
) => {
  if (!code) return [];
  else if (method === "name")
    return COUNTRIES_LIST.find((i) => i.country === code)?.timezones ?? [];
  return COUNTRIES[code as CountryCode]?.timezones ?? [];
};
