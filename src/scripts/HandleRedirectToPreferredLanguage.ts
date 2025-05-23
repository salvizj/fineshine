import { defaultLanguageCode } from "../i18n/ui"
import { getCookie } from "../utils/cookie"

export function HandleRedirectToPreferredLanguage(): void {
	const savedLang = getCookie("lang") || defaultLanguageCode

	const segments = window.location.pathname.split("/").filter(Boolean)

	if (segments[0] !== savedLang) {
		segments[0] = savedLang
		const newPath = "/" + segments.join("/") + "/"
		const fullUrl = newPath + window.location.search + window.location.hash
		window.location.replace(fullUrl)
	}
}
