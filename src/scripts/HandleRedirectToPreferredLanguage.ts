import { defaultLanguageCode, languageOptions } from "../i18n/ui"
import { getCookie } from "../utils/cookie"

export function HandleRedirectToPreferredLanguage(): void {
	const savedLang = getCookie("lang") || defaultLanguageCode
	const path = window.location.pathname

	// Check if current path already starts with the preferred language segment
	if (!path.startsWith(`/${savedLang}/`) && path !== `/${savedLang}`) {
		const segments = path.split("/").filter(Boolean)

		// If path is empty (root), redirect directly to /savedLang/
		if (segments.length === 0) {
			window.location.replace(
				`/${savedLang}/` + window.location.search + window.location.hash
			)
			return
		}

		// If the first segment is a language code, replace it with savedLang
		if (isLanguageCode(segments[0])) {
			segments[0] = savedLang
		} else {
			// Otherwise, insert the savedLang as the first segment
			segments.unshift(savedLang)
		}

		// Rebuild the new path and append query string and hash if present
		const newPath = "/" + segments.join("/") + "/"
		const fullUrl = newPath + window.location.search + window.location.hash

		window.location.replace(fullUrl)
	}
}

function isLanguageCode(lang: string): boolean {
	return Object.values(languageOptions).includes(
		lang as (typeof languageOptions)[keyof typeof languageOptions]
	)
}
