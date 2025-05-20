import { ui, defaultLanguageCode, languageOptions } from "./ui"

export type LanguageCode = keyof typeof languageOptions
export type TranslationKeys = keyof (typeof ui)[typeof defaultLanguageCode]

export function getLanguageCodeFromUrl(url: URL): LanguageCode | undefined {
	const [, lang] = url.pathname.split("/")
	if (lang && lang in languageOptions) {
		return lang as LanguageCode
	}
	return undefined
}

export function useTranslations(languageCode: LanguageCode) {
	return function t(key: TranslationKeys): string {
		if (ui[languageCode] && ui[languageCode][key] !== undefined) {
			return ui[languageCode][key] as string
		}
		return ui[defaultLanguageCode][key] as string
	}
}

export function useServiceTranslations(languageCode: LanguageCode) {
	return ui[languageCode]?.services ?? ui[defaultLanguageCode].services
}
