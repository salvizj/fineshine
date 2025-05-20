export const languageOptions = {
	en: "en",
	lv: "lv",
	ru: "ru",
} as const

export const defaultLanguageCode = "lv"

export const ui = {
	en: {
		nav: {
			home: "Home",
		},
		hero_title: "Professional Car Detailing Services",
		hero_subtitle:
			"Make your car look brand new with our expert cleaning, waxing, and polishing services.",
		gallery_title: "Our Work",
		gallery_image_alt: "Before and After",
		pricing_title: "Services & Pricing",
		services: [
			{
				name: "Exterior Cleaning",
				description:
					"Complete wash and detail of the car's exterior surfaces.",
			},
			{
				name: "Waxing & Polishing",
				description:
					"Enhance shine and protect the paint with professional wax.",
			},
			{
				name: "Interior Detailing",
				description:
					"Deep clean and vacuum of seats, carpets, and interior panels.",
			},
			{
				name: "Engine Bay Cleaning",
				description:
					"Remove grime and improve engine appearance safely.",
			},
		],
	},
	lv: {
		nav: {
			home: "Mājas",
		},
		hero_title: "Profesionāli auto detaļu tīrīšanas pakalpojumi",
		hero_subtitle:
			"Padariet savu auto kā jaunu ar mūsu ekspertu tīrīšanu, vaskošanu un pulēšanu.",
		gallery_title: "Mūsu darbi",
		gallery_image_alt: "Pirms un pēc",
		pricing_title: "Pakalpojumi un cenas",
		services: [
			{
				name: "Eksterjera tīrīšana",
				description:
					"Pilnīga automašīnas virsbūves mazgāšana un tīrīšana.",
			},
			{
				name: "Vaskošanas un pulēšanas darbi",
				description:
					"Uzlabojiet spīdumu un aizsargājiet krāsojumu ar profesionālu vasku.",
			},
			{
				name: "Interjera tīrīšana",
				description:
					"Dziļa tīrīšana un putekļu sūkšana sēdekļiem, paklājiem un apdarei.",
			},
			{
				name: "Motortelpas tīrīšana",
				description:
					"Noņemiet netīrumus un uzlabojiet dzinēja izskatu droši.",
			},
		],
	},
	ru: {
		nav: {
			home: "Дом",
		},
		hero_title: "Профессиональная мойка и детейлинг автомобилей",
		hero_subtitle:
			"Сделайте ваш автомобиль как новый с помощью нашей чистки, воска и полировки.",
		gallery_title: "Наши работы",
		gallery_image_alt: "До и после",
		pricing_title: "Услуги и цены",
		services: [
			{
				name: "Внешняя мойка",
				description:
					"Полная мойка и очистка внешних поверхностей автомобиля.",
			},
			{
				name: "Полировка и нанесение воска",
				description:
					"Улучшение блеска и защита краски с профессиональным воском.",
			},
			{
				name: "Чистка салона",
				description:
					"Глубокая чистка сидений, ковров и панелей салона.",
			},
			{
				name: "Мойка подкапотного пространства",
				description:
					"Удаление грязи и улучшение внешнего вида двигателя.",
			},
		],
	},
} as const
