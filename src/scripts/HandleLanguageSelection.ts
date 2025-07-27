import type { LanguageCode } from "../utils/translationHooks.js"
import { setCookie } from "../utils/cookie.js"

export default function HandleLanguageSelection() {
	document.addEventListener("DOMContentLoaded", () => {
		const langLinks = document.querySelectorAll("[data-lang-code]")

		langLinks.forEach((link) => {
			link.addEventListener("click", (event) => {
				event.preventDefault()

				const target = event.target
				if (!(target instanceof HTMLElement)) return

				const selectedLang = target.dataset.langCode as LanguageCode

				const currentPath = window.location.pathname

				const pathSegments = currentPath.split("/").filter(Boolean)

				if (pathSegments.length === 0) {
					setCookie("lang", selectedLang)
					window.location.pathname = "/" + selectedLang + "/"
					return
				}

				pathSegments[0] = selectedLang

				const newPath = "/" + pathSegments.join("/") + "/"

				setCookie("lang", selectedLang)
				window.location.pathname = newPath
			})
		})
	})
}
