import type { LanguageCode } from "../i18n/utils.js"
import { setCookie } from "../utils/cookie.js"
export default function LanguageSwitcher() {
	function onLanguageSelected(
		languageCode: LanguageCode,
		redirectLink: string
	) {
		setCookie("lang", languageCode)
		window.location.href = redirectLink
	}

	document.addEventListener("DOMContentLoaded", () => {
		const langLinks = document.querySelectorAll("[data-lang-code]")

		langLinks.forEach((link) => {
			link.addEventListener("click", (event) => {
				event.preventDefault()

				const target = event.target
				if (!(target instanceof HTMLElement)) return

				const languageCode = target.dataset.langCode as LanguageCode
				const redirectLink = link.getAttribute("href") || "/"

				if (languageCode) {
					onLanguageSelected(languageCode, redirectLink)
				}
			})
		})
	})
}
