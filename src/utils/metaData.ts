import type { LanguageCode } from "~/i18n/utils"

export type LanguageMeta = {
	title: string
	description: string
	keywords: string
}

const metaData: Record<LanguageCode, LanguageMeta> = {
	lv: {
		title: "Fineshine auto detailing studija",
		description:
			"Sertificēta detailera pakalpojumi tepat ārpus Rīgas - Salaspilī — auto ķīmiskā tīrīšana, pulēšana, aizsargpārklājumi, lukturu restaurācija, ādas krāsošana un ozonēšana.",
		keywords:
			"auto detailing, auto ķīmiskā tīrīšana, auto pulēšana, aizsargpārklājumi, lukturu restaurācija, ādas krāsošana, ozonēšana, auto salons, detailing tepat ārpus Rīgas Salaspilī.",
	},
	en: {
		title: "Fineshine auto detailing studio",
		description:
			"Certified detailer services just outside Riga – in Salaspils — car chemical cleaning, polishing, protective coatings, headlight restoration, leather coloring, and ozonation.",
		keywords:
			"auto detailing, chemical cleaning, polishing, protective coatings, headlight restoration, leather coloring, ozone treatment, car interior, detailing outside Riga in Salaspils",
	},
	ru: {
		title: "Студия авто детайлинга Fineshine",
		description:
			"Сертифицированные услуги детейлера недалеко от Риги — в Саласпилсе — химчистка автомобиля, полировка, защитные покрытия, реставрация фар, покраска кожи и озонирование.",
		keywords:
			"авто детайлинг, химчистка авто, полировка авто, защитные покрытия, восстановление фар, окраска кожи, озонирование, салон авто, детайлинг, недалеко от Риги  в Саласпилсе",
	},
}

export function getMetaData(lang: LanguageCode): LanguageMeta {
	return metaData[lang] ?? metaData.en
}
