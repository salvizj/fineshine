export default function CookieBanner() {
	document.addEventListener("DOMContentLoaded", () => {
		function getCookie(name: string) {
			const value = `; ${document.cookie}`
			const parts = value.split(`; ${name}=`)
			if (parts.length === 2) return parts.pop().split(";").shift()
			return null
		}

		const languageCode = getCookie("lang") || "lv"

		const dismissed = localStorage.getItem("cookieBannerDismissed")

		if (dismissed === "true") return

		const banner = document.querySelector("#cookie-banner")
		const bannerBtn = document.querySelector("#cookie-banner-btn")
		const readMoreBtn = document.querySelector("#cookie-read-more-btn")

		if (banner && bannerBtn) {
			banner.classList.remove("hidden")

			bannerBtn.addEventListener("click", () => {
				localStorage.setItem("cookieBannerDismissed", "true")
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
