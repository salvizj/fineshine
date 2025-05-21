export default function NavigationMenuToggle() {
	let navOpenBtn = null
	let navCollapseBtn: HTMLElement | null = null
	let navOpen: HTMLElement | null = null
	let navCollapsed: HTMLElement | null = null

	const resetNavIfHidden = () => {
		if (!navOpenBtn || !navOpen || !navCollapsed) return

		const navOpenBtnIsVisible =
			window.getComputedStyle(navOpenBtn).display !== "none"

		if (!navOpenBtnIsVisible) {
			navOpen.classList.add("hidden")
			navCollapsed.classList.remove("hidden")
			navOpenBtn.classList.remove("hidden")
		}
	}

	document.addEventListener("DOMContentLoaded", () => {
		navOpenBtn = document.getElementById("nav-open-btn")
		navCollapseBtn = document.getElementById("nav-collapse-btn")
		navOpen = document.querySelector(".nav-open")
		navCollapsed = document.querySelector(".nav-collapsed")

		if (navOpenBtn && navCollapseBtn && navOpen && navCollapsed) {
			navOpenBtn.addEventListener("click", () => {
				navOpen!.classList.remove("hidden")
				navCollapsed!.classList.add("hidden")
				navOpenBtn!.classList.add("hidden")
			})

			navCollapseBtn.addEventListener("click", () => {
				navOpen!.classList.add("hidden")
				navCollapsed!.classList.remove("hidden")
				navOpenBtn!.classList.remove("hidden")
			})
		}
	})

	window.addEventListener("resize", resetNavIfHidden)
}
