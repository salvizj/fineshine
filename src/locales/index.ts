import { en } from "./en/en"
import { lv } from "./lv/lv"
import { ru } from "./ru/ru"

export const languageOptions = {
	en: "en",
	lv: "lv",
	ru: "ru",
} as const

export const defaultLanguageCode = "lv"

export const languageTranslations = { lv, en, ru }
