export type Messages = Readonly<Record<string, string>>;
export interface I18nConfig { defaultLocale: string; fallbackLocale: string; messages: Readonly<Record<string, Messages>>; }
export function createI18n(config: I18nConfig) { return { locale: config.defaultLocale, t(key: string, values?: Record<string, string | number>) { const message = config.messages[config.defaultLocale]?.[key] ?? config.messages[config.fallbackLocale]?.[key] ?? key; return values ? message.replace(/\{(\w+)\}/g, (_, name: string) => String(values[name] ?? `{${name}}`)) : message; } }; }
export function formatNumber(value: number, locale: string, options?: Intl.NumberFormatOptions) { return new Intl.NumberFormat(locale, options).format(value); }
export function formatCurrency(value: number, currency: string, locale: string) { return new Intl.NumberFormat(locale, { style: "currency", currency }).format(value); }
export function formatDate(value: Date | number | string, locale: string, options?: Intl.DateTimeFormatOptions) { return new Intl.DateTimeFormat(locale, options).format(new Date(value)); }
