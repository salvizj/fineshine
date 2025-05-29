import type { LanguageCode } from "~/i18n/utils"

export type LanguageMeta = {
	title: string
	description: string
	keywords: string
}

const metaData: Record<LanguageCode, LanguageMeta> = {
	lv: {
		title: "fineshine auto detalizācijas Studija",
		description:
			"Sertificēti auto detailing pakalpojumi Latvijā: ķīmiskā tīrīšana, auto pulēšana, aizsargpārklājumi, lukturu restaurācija, ādas krāsošana un ozonēšana.",
		keywords:
			"auto detailing, auto ķīmiskā tīrīšana, auto pulēšana, aizsargpārklājumi, lukturu pulēšana, ādas restaurācija, ozonēšana, auto salons, detailing Latvija",
	},
	en: {
		title: "Fineshine Auto Detailing Studio",
		description:
			"Certified auto detailing services in Latvia: chemical cleaning, polishing, protective coatings, headlight restoration, leather coloring, and ozone treatment.",
		keywords:
			"auto detailing, car cleaning, polishing, protective coatings, headlight polishing, leather restoration, ozone treatment, car interior, detailing Latvia",
	},
	ru: {
		title: "Студия авто детайлинга Fineshine",
		description:
			"Сертифицированные услуги авто детайлинга в Латвии: химчистка, полировка, защитные покрытия, восстановление фар, окраска кожи и озонирование.",
		keywords:
			"авто детайлинг, химчистка авто, полировка авто, защитные покрытия, полировка фар, реставрация кожи, озонирование, салон авто, детайлинг Латвия",
	},
}

export function getMetaData(lang: LanguageCode): LanguageMeta {
	return metaData[lang] ?? metaData.en
}
