export const locales = ["en", "ta"] as const;
export const defaultLocale = "en" as const;
export type Locale = typeof locales[number];
