import { defaultLanguageCode, languageOptions } from "../i18n/ui"
import { getCookie } from "../utils/cookie"

export function HandleRedirectToPreferredLanguage(): void {
	const path = window.location.pathname
	const segments = path.split("/").filter(Boolean)

	const urlLang =
		segments.length > 0 && isLanguageCode(segments[0]) ? segments[0] : null
	const savedLang = getCookie("lang")

	// 1. If URL does NOT have language code
	if (!urlLang) {
		// Redirect to cookie language if valid, else default language
		const redirectLang =
			savedLang && isLanguageCode(savedLang)
				? savedLang
				: defaultLanguageCode
		const newPath =
			`/${redirectLang}/` + window.location.search + window.location.hash
		window.location.replace(newPath)
		return
	}

	// 2. URL has language code, but no savedLang cookie -> do nothing
	if (!savedLang || !isLanguageCode(savedLang)) {
		return
	}

	// 3. URL lang matches savedLang cookie -> do nothing
	if (urlLang === savedLang) {
		return
	}

	// 4. URL lang differs from savedLang cookie -> redirect to savedLang version
	segments[0] = savedLang
	const newPath =
		"/" +
		segments.join("/") +
		"/" +
		window.location.search +
		window.location.hash
	window.location.replace(newPath)
}

function isLanguageCode(lang: string): boolean {
	return Object.values(languageOptions).includes(
		lang as (typeof languageOptions)[keyof typeof languageOptions]
	)
}
