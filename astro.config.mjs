import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import { languageOptions, defaultLanguageCode } from "./src/locales/index"

export default defineConfig({
	vite: { plugins: [tailwindcss()] },

	i18n: {
		locales: Object.keys(languageOptions),
		defaultLocale: defaultLanguageCode,
		routing: {
			prefixDefaultLocale: true,
		},
	},
})
