import { setCookie } from "../utils/cookie"

export default function ThemeToggle() {
	document.addEventListener("DOMContentLoaded", () => {
		const themeToggleButtons = document.querySelectorAll(".theme-toggle")

		if (!themeToggleButtons.length) {
			console.warn("Theme toggle buttons not found")
			return
		}

		const toggleTheme = () => {
			const isDarkModeEnabled =
				document.documentElement.classList.toggle("dark")
			const theme = isDarkModeEnabled ? "dark" : "light"
			setCookie("theme", theme)
		}

		themeToggleButtons.forEach((button) => {
			button.addEventListener("click", toggleTheme)
		})
	})
}
