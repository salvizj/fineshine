import { ui, defaultLanguageCode, languageOptions } from "./ui"

export type LanguageCode = keyof typeof languageOptions
export type TranslationKeys = keyof (typeof ui)[typeof defaultLanguageCode]

export function useTranslations(languageCode: LanguageCode) {
	return function t(key: string): string {
		const keys = key.split(".")
		let result: any = ui[languageCode] ?? ui[defaultLanguageCode]

		for (const k of keys) {
			if (result && k in result) {
				result = result[k]
			} else {
				return key
			}
		}

		return typeof result === "string" ? result : key
	}
}
// TOOD: remove later

export type Service = {
	name: string
	description?: string
}

export function useServiceTranslations(languageCode: LanguageCode) {
	return (
		ui[languageCode]?.service_list ?? ui[defaultLanguageCode].service_list
	)
}
