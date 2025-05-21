export default function NavigationMenuToggle() {
	document.addEventListener("DOMContentLoaded", () => {
		const navOpenBtn = document.querySelector<HTMLElement>("#nav-open-btn")
		const navCollapseBtn =
			document.querySelector<HTMLElement>("#nav-collapse-btn")
		const navOpen = document.querySelector<HTMLElement>(".nav-open")
		const navCollapsed =
			document.querySelector<HTMLElement>(".nav-collapsed")

		if (!navOpenBtn || !navCollapseBtn || !navOpen || !navCollapsed) return

		navOpenBtn.addEventListener("click", () => {
			navOpen.classList.remove("hidden")
			navCollapsed.classList.add("hidden")
			navOpenBtn.classList.add("hidden")
		})

		navCollapseBtn.addEventListener("click", () => {
			navOpen.classList.add("hidden")
			navCollapsed.classList.remove("hidden")
			navOpenBtn.classList.remove("hidden")
		})

		window.addEventListener("resize", () => {
			if (window.getComputedStyle(navOpenBtn).display === "none") {
				navOpen.classList.add("hidden")
				navCollapsed.classList.remove("hidden")
				navOpenBtn.classList.remove("hidden")
			}
		})
		window.addEventListener("hashchange", function () {
			navOpen.classList.add("hidden")
			navCollapsed.classList.remove("hidden")
			navOpenBtn.classList.remove("hidden")
		})
	})
}
