import getLanguageCodeFromPathname from "../utils/languageCode"

export default function HandleMissingAnchorRedirects() {
	document.addEventListener("DOMContentLoaded", () => {
		const languageCode = getLanguageCodeFromPathname(
			window.location.pathname
		)

		document.querySelectorAll("a[href^='#']").forEach((anchor) => {
			anchor.addEventListener("click", (event) => {
				const targetId = anchor.getAttribute("href").substring(1)

				const targetElement = document.getElementById(targetId)

				if (!targetElement) {
					event.preventDefault()
					window.location.href = `/${languageCode}/#${targetId}`
				}
			})
		})
	})
}
