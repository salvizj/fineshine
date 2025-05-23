import { defaultLanguageCode } from "../i18n/ui"
import { getCookie } from "../utils/cookie"
import getLanguageCodeFromPathname from "../utils/languageCode"

export function HandleRedirectToLocalizedPath(): void {
	const languageCode = getLanguageCodeFromPathname(window.location.pathname)
	if (languageCode) return

	const savedLanguageCode = getCookie("lang")
	const targetLanguage = savedLanguageCode || defaultLanguageCode

	const targetPath = `/${targetLanguage}/`

	if (window.location.pathname !== targetPath) {
		window.location.replace(targetPath)
	}
}
