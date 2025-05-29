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
			"Sertificēti auto detailing pakalpojumi Latvijā: ķīmiskā tīrīšana, auto pulēšana, aizsargpārklājumi, lukturu restaurācija, ādas krāsošana un ozonēšana.",
		keywords:
			"auto detailing, auto ķīmiskā tīrīšana, auto pulēšana, aizsargpārklājumi, lukturu restaurācija, ādas krāsošana, ozonēšana, auto salons, detailing Latvija",
	},
	en: {
		title: "Fineshine auto detailing studio",
		description:
			"Certified auto detailing services in Latvia: chemical cleaning, polishing, protective coatings, headlight restoration, leather coloring, and ozone treatment.",
		keywords:
			"auto detailing, chemical cleaning, polishing, protective coatings, headlight restoration, leather coloring, ozone treatment, car interior, detailing Latvia",
	},
	ru: {
		title: "Студия авто детайлинга Fineshine",
		description:
			"Сертифицированные услуги авто детайлинга в Латвии: химчистка, полировка, защитные покрытия, восстановление фар, окраска кожи и озонирование.",
		keywords:
			"авто детайлинг, химчистка авто, полировка авто, защитные покрытия, восстановление фар, окраска кожи, озонирование, салон авто, детайлинг Латвия",
	},
}

export function getMetaData(lang: LanguageCode): LanguageMeta {
	return metaData[lang] ?? metaData.en
}
