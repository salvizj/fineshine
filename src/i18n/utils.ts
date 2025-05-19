import { ui, defaultLang } from "./ui"

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split("/")
	if (lang in ui) return lang as keyof typeof ui
	return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] || ui[defaultLang][key]
	}
}
export function useServiceTranslations(lang: keyof typeof ui) {
	return function getService(id: 1 | 2 | 3 | 4) {
		return ui[lang].services[id] || ui[defaultLang].services[id]
	}
}
