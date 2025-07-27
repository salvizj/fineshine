import {
	defaultLanguageCode,
	languageOptions,
	languageTranslations,
} from "../locales"

export type LanguageCode = keyof typeof languageOptions
export type TranslateKeys =
	keyof (typeof languageTranslations)[typeof defaultLanguageCode]

export function useTranslate(languageCode: LanguageCode) {
	return function t(key: string): string {
		const keys = key.split(".")
		let result: unknown =
			languageTranslations[languageCode] ??
			languageTranslations[defaultLanguageCode]

		for (const k of keys) {
			if (
				result !== null &&
				typeof result === "object" &&
				Object.prototype.hasOwnProperty.call(result, k)
			) {
				result = (result as Record<string, unknown>)[k]
			} else {
				return key
			}
		}

		return typeof result === "string" ? result : key
	}
}
export function useTranslateObject(languageCode: LanguageCode) {
	return function tObj(key: string): unknown {
		const keys = key.split(".")

		let result: unknown =
			languageTranslations[languageCode] ??
			languageTranslations[defaultLanguageCode]

		for (const k of keys) {
			if (
				result !== null &&
				typeof result === "object" &&
				Object.prototype.hasOwnProperty.call(result, k)
			) {
				result = (result as Record<string, unknown>)[k]
			} else {
				return undefined
			}
		}

		return result
	}
}
