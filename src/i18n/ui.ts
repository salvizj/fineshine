export const languageOptions = {
	en: "en",
	lv: "lv",
	ru: "ru",
} as const

export const defaultLanguageCode = "lv"

export const ui = {
	en: {
		nav: {
			socials: "Socials",
			contacts: "Contacts",
			location: "Location",
			services: "Services",
		},
		footer: {
			socials: "Socials",
			contacts: "Contacts",
			location: "Location",
			services: "Services",
			other_links: "Other links",
			cookie_policy: "Cookie Policy",
		},
		hero: {
			title: "Professional Car Detailing Services",
			subtitle:
				"Make your car look brand new with our expert cleaning, waxing, and polishing services.",
			description:
				"Our experienced team uses top-quality products to restore your vehicle's shine and protect its finish.",
		},
		gallery_title: "Our Work",
		gallery_image_alt: "Before and After",
		pricing_title: "Services & Pricing",
		service_list: [
			{
				name: "Full Exterior Detail",
				description:
					"Thorough hand wash, clay bar treatment, tar removal, and machine polish to restore paint clarity and shine.",
			},
			{
				name: "Ceramic Coating Application",
				description:
					"Long-lasting hydrophobic protection for your vehicle's paint, enhancing gloss and shielding from contaminants.",
			},
			{
				name: "Interior Deep Cleaning",
				description:
					"Vacuuming, shampooing of carpets and seats, steam cleaning, and full interior sanitization for a like-new feel.",
			},
			{
				name: "Paint Correction",
				description:
					"Multi-stage machine polishing to remove swirl marks, light scratches, and oxidation for a flawless finish.",
			},
			{
				name: "Engine Bay Detailing",
				description:
					"Careful cleaning and dressing of engine components to improve appearance and spot potential leaks.",
			},
			{
				name: "Headlight Restoration",
				description:
					"Polishing and sealing of cloudy or yellowed headlights to restore brightness and improve nighttime visibility.",
			},
			{
				name: "Odor Removal & Ozone Treatment",
				description:
					"Eliminates stubborn odors like smoke, pet, or mold using professional ozone generator and interior treatment.",
			},
			{
				name: "Wheel & Tire Detailing",
				description:
					"Deep cleaning of rims, brake dust removal, and tire dressing for a clean, showroom-ready look.",
			},
		],

		location_header: "Our Location",
		cookie: {
			btn_description: "Got it",
			description:
				"This site uses cookies to remember your theme and language preferences.",
			read_more: "Read more",
		},
		cookie_policy: {
			title: "Cookie Policy",

			what_are_cookies: {
				title: "What are cookies?",
				description:
					"Cookies are small text files stored on your device to remember preferences such as theme and language.",
			},

			cookies_used: {
				title: "What cookies do we use?",
				description:
					"We only use essential cookies to store your theme and language preferences.",
			},

			table: {
				theme_purpose: "Stores theme preference (dark/light mode)",
				language_purpose: "Stores selected language",
				functional: "Functional",
			},

			third_party: {
				title: "Do we use third-party cookies?",
				description:
					"No, we do not use any third-party cookies or trackers.",
			},

			personal_data: {
				title: "Is personal data collected?",
				description:
					"No personal data or IP addresses are collected or stored.",
			},
		},
	},
	lv: {
		nav: {
			socials: "Sociālie tīkli",
			contacts: "Kontakti",
			location: "Atrašanās vieta",
			services: "Pakalpojumi",
		},
		footer: {
			socials: "Sociālie tīkli",
			contacts: "Kontakti",
			location: "Atrašanās vieta",
			services: "Pakalpojumi",
			other_links: "Citas saites",
			cookie_policy: "Sīkdatņu politika",
		},
		hero: {
			title: "Profesionālas automašīnu detalizēšanas pakalpojumi",
			subtitle:
				"Padariet savu automašīnu kā jaunu ar mūsu eksperta tīrīšanas, vaskošanas un pulēšanas pakalpojumiem.",
			description:
				"Mūsu pieredzējusī komanda izmanto augstākās kvalitātes produktus, lai atjaunotu jūsu transportlīdzekļa spīdumu un aizsargātu tā virsmu.",
		},
		gallery_title: "Mūsu darbi",
		gallery_image_alt: "Pirms un pēc",
		pricing_title: "Pakalpojumi un cenas",
		service_list: [
			{
				name: "Pilna eksterjera apkope",
				description:
					"Rūpīga roku mazgāšana, tīrīšana ar māla stieni, darvas noņemšana un pulēšana, lai atjaunotu krāsas spīdumu un skaidrību.",
			},
			{
				name: "Keramiskā pārklājuma uzklāšana",
				description:
					"Ilgstoša hidrofobiska aizsardzība, kas uzlabo krāsas spīdumu un pasargā virsmu no netīrumiem un UV stariem.",
			},
			{
				name: "Salona dziļā tīrīšana",
				description:
					"Paklāju, sēdekļu un apdares putekļu sūkšana, šampūnēšana, tvaika tīrīšana un pilnīga salona dezinfekcija.",
			},
			{
				name: "Krāsas korekcija",
				description:
					"Vairāku posmu mašīnas pulēšana, lai novērstu skrāpējumus, riņķveida nospiedumus un oksidāciju, atjaunojot ideālu virsmu.",
			},
			{
				name: "Dzinēja nodalījuma tīrīšana",
				description:
					"Saudzīga dzinēja komponentu mazgāšana un kopšana, uzlabojot izskatu un atklājot iespējamos bojājumus.",
			},
			{
				name: "Lukturu restaurācija",
				description:
					"Apmeklētu vai dzeltenīgu lukturu pulēšana un aizsardzība, lai atjaunotu caurspīdīgumu un uzlabotu redzamību naktī.",
			},
			{
				name: "Smaku likvidēšana un ozona apstrāde",
				description:
					"Izvada dūmu, pelējuma vai dzīvnieku izcelsmes smakas ar profesionālu ozona ģeneratoru un ķīmisko apstrādi.",
			},
			{
				name: "Riteņu un riepu tīrīšana",
				description:
					"Dziļa disku un riepu tīrīšana, bremžu putekļu noņemšana un riepu apstrāde ar spīduma atjaunošanu.",
			},
		],
		location_header: "Mūsu atrašanās vieta",
		cookie: {
			btn_description: "Sapratu",
			description:
				"Šī vietne izmanto sīkdatnes, lai atcerētos jūsu tēmas un valodas preferences.",
			read_more: "Lasīt vairāk",
		},
		cookie_policy: {
			title: "Sīkfailu politika",

			what_are_cookies: {
				title: "Kas ir sīkfaili?",
				description:
					"Sīkfaili ir mazi teksta faili, kas tiek saglabāti jūsu ierīcē, lai atcerētos iestatījumus, piemēram, motīvu un valodu.",
			},

			cookies_used: {
				title: "Kādus sīkfailus mēs izmantojam?",
				description:
					"Mēs izmantojam tikai būtiskus sīkfailus, lai saglabātu jūsu motīvu un valodas izvēli.",
			},

			table: {
				theme_purpose: "Saglabā motīva izvēli (tumšs/gaišs režīms)",
				language_purpose: "Saglabā izvēlēto valodu",
				functional: "Funkcionāls",
			},

			third_party: {
				title: "Vai mēs izmantojam trešo pušu sīkfailus?",
				description:
					"Nē, mēs neizmantojam trešo pušu sīkfailus vai izsekotājus.",
			},

			personal_data: {
				title: "Vai tiek vākti personas dati?",
				description:
					"Netiek vākti vai saglabāti personas dati vai IP adreses.",
			},
		},
	},
	ru: {
		nav: {
			socials: "Социальные сети",
			contacts: "Контакты",
			location: "Местоположение",
			services: "Услуги",
		},
		footer: {
			socials: "Социальные сети",
			contacts: "Контакты",
			location: "Местоположение",
			services: "Услуги",
			other_links: "Другие ссылки",
			cookie_policy: "Политика файлов cookie",
		},
		hero: {
			title: "Профессиональные услуги по детализированной уборке автомобилей",
			subtitle:
				"Сделайте вашу машину как новую с помощью наших экспертов по чистке, восковой обработке и полировке.",
			description:
				"Наша опытная команда использует высококачественные продукты для восстановления блеска вашего автомобиля и защиты его поверхности.",
		},
		gallery_title: "Наши работы",
		gallery_image_alt: "До и после",
		pricing_title: "Услуги и цены",
		service_list: [
			{
				name: "Полная внешняя детайлинг-обработка",
				description:
					"Тщательная ручная мойка, обработка глиной, удаление битума и машинная полировка для восстановления блеска и чистоты лакокрасочного покрытия.",
			},
			{
				name: "Нанесение керамического покрытия",
				description:
					"Долговечная гидрофобная защита, усиливающая блеск и защищающая кузов от загрязнений и ультрафиолета.",
			},
			{
				name: "Глубокая чистка салона",
				description:
					"Пылесос, химчистка ковров и сидений, паровая обработка и полная дезинфекция интерьера.",
			},
			{
				name: "Коррекция лакокрасочного покрытия",
				description:
					"Многоступенчатая машинная полировка для удаления царапин, голограмм и окислов, придающая зеркальный блеск.",
			},
			{
				name: "Детейлинг моторного отсека",
				description:
					"Аккуратная мойка и обработка компонентов двигателя для улучшения внешнего вида и выявления возможных утечек.",
			},
			{
				name: "Реставрация фар",
				description:
					"Полировка и герметизация пожелтевших или помутневших фар для восстановления прозрачности и улучшения освещённости.",
			},
			{
				name: "Удаление запахов и озоновая обработка",
				description:
					"Эффективное устранение стойких запахов (табака, животных, плесени) с помощью озонатора и профессиональных средств.",
			},
			{
				name: "Чистка дисков и шин",
				description:
					"Глубокая очистка колёсных дисков, удаление тормозной пыли и нанесение состава для блеска шин.",
			},
		],
		location_header: "Наше местоположение",
		cookie: {
			btn_description: "Понятно",
			description:
				"Этот сайт использует файлы cookie для сохранения ваших предпочтений темы и языка.",
			read_more: "Подробнее",
		},
		cookie_policy: {
			title: "Политика файлов cookie",

			what_are_cookies: {
				title: "Что такое файлы cookie?",
				description:
					"Файлы cookie — это небольшие текстовые файлы, сохраняемые на вашем устройстве для запоминания настроек, таких как тема и язык.",
			},

			cookies_used: {
				title: "Какие файлы cookie мы используем?",
				description:
					"Мы используем только необходимые файлы cookie для хранения ваших предпочтений темы и языка.",
			},

			table: {
				theme_purpose:
					"Хранит предпочтение темы (тёмный/светлый режим)",
				language_purpose: "Хранит выбранный язык",
				functional: "Функциональный",
			},

			third_party: {
				title: "Используем ли мы сторонние файлы cookie?",
				description:
					"Нет, мы не используем сторонние файлы cookie или трекеры.",
			},

			personal_data: {
				title: "Собираются ли личные данные?",
				description:
					"Личные данные или IP-адреса не собираются и не хранятся.",
			},
		},
	},
} as const
