export default function HandleCookieBanner() {
	document.addEventListener("DOMContentLoaded", () => {
		function getCookie(name: string): string | null {
			const value = `; ${document.cookie}`
			const parts = value.split(`; ${name}=`)
			if (parts.length === 2)
				return parts.pop()?.split(";").shift() || null
			return null
		}

		function setCookie(name: string, value: string, days = 365) {
			const d = new Date()
			d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000)
			const expires = "expires=" + d.toUTCString()
			document.cookie = `${name}=${value};${expires};path=/`
		}

		const languageCode = getCookie("lang") || "lv"
		const dismissed = getCookie("cookieBannerDismissed")

		if (dismissed === "true") return

		const banner = document.querySelector("#cookie-banner")
		const bannerBtn = document.querySelector("#cookie-banner-btn")
		const readMoreBtn = document.querySelector("#cookie-read-more-btn")

		if (banner && bannerBtn) {
			banner.classList.remove("hidden")

			bannerBtn.addEventListener("click", () => {
				setCookie("cookieBannerDismissed", "true", 365)
				banner.classList.add("hidden")
			})

			if (readMoreBtn) {
				readMoreBtn.addEventListener("click", () => {
					window.location.href = `/${languageCode}/cookie-policy`
				})
			}
		}
	})
}
