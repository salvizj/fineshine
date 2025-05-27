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
			auto_detailings: "Car detailing",
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
		prices: {
			price_title: "Prices",
			interior_and_body: {
				title: "Interior and body:",
				services: [
					{ title: "Body paint touch-up", price: "25€" },
					{
						title: "Removal of bitumen / iron particles",
						price: "80€",
					},
					{
						title: "Car wash, interior vacuuming",
						price: "40€",
					},
					{
						title: "Detailed car body wash",
						description:
							"bitumen, iron particles, rims, arches, etc.",
						price: "90€",
					},
					{
						title: "Pet hair",
						description: "extra",
						price: "15–30€",
					},
					{
						title: "One seat cleaning",
						description: "except",
						price: "30€",
					},
					{
						title: "Interior chemical cleaning",
						description:
							"the entire interior is maximally disassembled, sand is blown out with a tornado air flow, then the interior is cleaned with alkaline chemicals, which is then neutralized with acid eliminating allergen risk. Bonus: the car is washed",
						price: "from 160–220€",
					},
					{
						title: "Interior chemical cleaning without disassembly",
						price: "from 120–180€",
					},
					{
						title: "Interior ozonation",
						description:
							"Cleaning of the interior and ventilation from bacteria, mold, and unpleasant odors, e.g., spills, smoking, etc. Highly recommended after winter and for people with allergies",
						price: "50€",
					},
					{
						title: "Leather coloring",
						description: "elastic component is added to the color",
						price: "price on site",
					},
					{
						title: "Plastic coloring",
						description: "elastic component is added to the color",
						price: "price on site",
					},
				],
			},
			polishing: {
				title: "Polishing:",
				services: [
					{
						title: "Single-stage body polishing",
						price: "from 160–210€",
					},
					{
						title: "Two-stage body polishing",
						price: "from 240–280€",
					},
					{
						title: "Deep body polishing",
						price: "from 550–650€",
					},
					{
						title: "Interior part polishing",
						price: "from 70€",
					},
					{
						title: "Headlight grinding / polishing",
						description: "with coating",
						price: "from 50€",
					},
				],
			},
			protection_and_extras: {
				title: "Protective coatings and other additional services:",
				services: [
					{
						title: "Nano coating for front car glass",
						description: "effective up to 1 year",
						price: "70€",
					},
					{
						title: "Ceramic coating for rims",
						price: "120€",
					},
					{
						title: "Ceramic coating for plastic / leather",
						price: "80–140€",
					},
					{
						title: "Wax protective coating",
						price: "60€",
					},
					{
						title: "Graphene ceramic coating",
						description: "effective up to 2 years",
						price: "180–220€",
					},
					{
						title: "Convertible roof cleaning and nano coating",
						price: "220€",
					},
					{
						title: "Pre-sale preparation",
						description:
							"Price from 350€, depending on body condition, paint thickness, car size, dirt level, and actual headlight condition. Includes – car polishing, interior chemical cleaning, body treatment with wax or ceramic, and headlight polishing.",
						price: "from 350€",
					},
				],
			},
			packages: {
				title: "Full Set",

				every_cars_owners_dream: {
					title: "Every Car Owner's Dream",
					services: [
						{
							title: "Interior chemical cleaning with protective coatings for seats",
						},
						{
							title: "Glass treatment with water-repellent protective coating",
							description: "valid up to 1 year",
						},
						{
							title: "Headlight grinding/polishing and ceramic coating application",
						},
						{
							title: "In-depth 3-step car body polishing",
						},
						{
							title: "Graphene protective coating application on car body",
							description: "durability up to 2 years",
						},
					],
					price: "From €950",
				},

				mirror: {
					title: "Mirror",
					services: [
						{
							title: "Interior chemical cleaning with protective coatings for seats",
							description: "",
						},
						{
							title: "Glass treatment with water-repellent protective coating",
							description: "valid up to 1 year",
						},
						{
							title: "Headlight grinding/polishing and ceramic coating application",
						},
						{
							title: "2-step car body polishing",
						},
						{
							title: "Graphene protective coating application on car body",
							description: "durability up to 2 years",
						},
					],
					price: "From €750",
				},
			},
		},
	},
	lv: {
		nav: {
			socials: "Sociālie tīkli",
			contacts: "Kontakti",
			location: "Atrašanās vieta",
			services: "Pakalpojumi",
			auto_detailings: "Auto detailings",
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
		auto_detailing: {
			detailing: {
				what_is_detailing_title: "Kas tad īsti ir tas detailings?",
				description_1:
					"Auto detailing, kas tulkojumā no angļu valodas nozīmē 'detalizācija', – rūpīgas revīzijas un automobiļa apstrādes process no ārpuses un tā iekšpusē, kas sevī ietver tā tīrīšanu, nepieciešamo elementu korekciju un turpmākā darba rezultāta aizsardzību. Katrs centimetrs un katra detaļa tiks pilnveidota, un auto izskatīsies maksimāli tuvu jaunam, neskatoties uz auto iepriekšējo stāvokli vai izlaiduma gadu.",
				description_2:
					"Auto detailings dalās divās kategorijās – eksterjers (ārējās apdares apkope) un interjers (iekšējās apdares apkope), un pateicoties visam kopumam jūs viegli sagatavosiet savu automobili pārdošanai, izstādei vai vienkārši priekš sevis kā arī aizsargāsiet automašīnu no priekšlaicīgas novecošanas paralēli nezaudējot arī tālākpārdošanas iespējas.",
			},
			exterior: {
				exterior_title: "Eksterjers",
				description:
					"Eksterjera detailings – maksimāla vizuālā skata uzlabošana, atjaunošana un aizsardzība ar individuālu pieeju pie katras virsbūves ņemot vērā klienta vēlmes un vēlamo gala iznākumu.",
				steps: {
					washing:
						"Rūpīgu automašīnas mazgāšanu. Virsbūvi, riepas, diskus, stiklus, arkas un visas citas grūti sasniedzamās vietas. Pilnīga virsbūves attīrīšana no vispārējiem vides faktoriem (bitumena, dzelzs daļiņām, un visiem citiem nelabvēlīgiem virsmas ietekmējošiem netīrumiem).",
					polishing:
						"Vienas pakāpes, divu pakāpju vai padziļinātā virsbūves pulēšana maksimāli labam rezultātam, kā arī lukturu slīpēšana un pulēšana pēc vajadzības.",
					protection:
						"Auto tiek pārklāts ar aizsargpārklājumu pēc klienta vēlmes un nepieciešamības. Vaska aizsargpārklājums (darbības laiks ir līdz 3 mēnešiem), vai grafēna keramiskais aizsargpārklājums, (kas pie pareizas kopšanas darbojās līdz pat 2 gadi). Keramika lukturiem (kas pasargā viņus no izblēšanas, dzeltēšanas un visādiem citādiem vides iespaidojošiem faktoriem līdz 1 gadam), un anti lietus pārklājums priekš jūsu vējstikla un spoguļiem (ērtākai un drošākai braukšanai nelabvēlīgu laikapstākļu iespaidā).",
				},
			},
			interior: {
				interior_title: "Interjers",
				description:
					"Interjera detailings – tā nav vienkārši iekšējās apdares apkope un tīrīšana, bet gan visaptverošas rūpes par katru jūsu auto detaļu, sākot ar paneli un beidzot ar jūsu bagāžnieka tumšāko stūri.",
				steps: {
					deep_cleaning:
						"Pilnu salona detalizētu tīrīšanu maksimāli velkot ārā smiltis, putekļus, pleķus, spalvas un cita veida netīrumus izjauktā vai neizjauktā salona veidā ar profesionālu aprīkojumu un ķīmiju.",
					bacteria_removal:
						"Maksimāla baktēriju, smaku un alergēnu izraisošu faktoru mazināšana.",
					protective_coatings:
						"Aizsargpārklājumu un citu pārklājumu uzklāšana nepieciešamajām auto interjera detaļām.",
					restoration:
						"Padarīt vidi maksimāli tuvu jauna auto sajūtai.",
				},
				client_approach:
					"Tiek izprastas klienta vēlmes un vajadzības pēc kurām arī tiek veikts viss darba saraksts cenšoties sasniegt labāko iespējamo rezultātu. Katram auto ir individuāla pieeja.",
			},
			advantages: {
				title: "Priekšrocības",
				benefits: {
					improved_appearance: {
						title: "Uzlabots izskats",
						description:
							"Viena no ievērojamākajām priekšrocībām ir jūsu transportlīdzekļa izskata uzlabojums. Veicot rūpīgu tīrīšanu, mazgāšanu, pulēšanu un aizsargpārklājuma uzlikšanu jūsu auto būs tik tuvu jaunam, cik vien tas ir iespējams. Kā arī pasargās no visdažādākajiem vides faktoriem. Investējot automašīnas tīrīšanā, jūs pasargājat sava transportlīdzekļa virsbūvi no laikapstākļiem un pagarinat tā kalpošanas laiku.",
					},
					increased_resale_value: {
						title: "Paaugstināta tālākpārdošanas vērtība",
						description:
							"Regulāra automašīnas tīrīšana var ievērojami palielināt jūsu transportlīdzekļa tālākpārdošanas vērtību. Kad pienāks laiks pārdot vai iemainīt automašīnu, potenciālos pircējus, visticamāk, piesaistīs transportlīdzeklis, kas ir labi uzturēts un izceļās uz kopējā fona. Tīra un rūpīgi kopta automašīna uzreiz 'iekritīs acīs' daudz ātrāk nekā nobružāta, un pircēji bieži vien ir gatavi maksāt krietni vairāk par transportlīdzekli lieliskā stāvoklī. Investējot automašīnu tīrīšanā, jūs ne tikai baudāt nevainojami tīru vidi, bet arī maksimāli nezaudēsiet tās vērtību, kad un ja pienāks laiks šķirties.",
					},
					health_and_hygiene: {
						title: "Veselība un higiēna",
						description:
							"Jūsu transportlīdzekļa salons ir telpa, kurā jūs pavadāt ievērojamu daļu sava laika, un ir svarīgi to uzturēt tīru un patīkamu. Automašīnas salona tīrīšana koncentrējas uz virsmu, tostarp sēdekļu, paklāju un ventilācijas sistēmu, dziļo tīrīšanu un dezinfekciju. Tas palīdz likvidēt baktērijas, alergēnus un nepatīkamas smakas, kas var uzkrāties laika gaitā. Veicot salona tīrīšanu un, ja nepieciešams, arī ozonēšanu, jūs padarat daudz ērtāku un veselīgāku vidi gan sev, gan saviem pasažieriem, samazinot alerģiju, elpošanas ceļu problēmu un nepatīkamu smaku risku.",
					},
					increased_driving_safety: {
						title: "Paaugstināta braukšanas drošība",
						description:
							"Detailinga pakalpojumi, piemēram, lukturu pulēšana un vējstikla apstrāde ievērojami uzlabo redzamību, īpaši braucot tumšajās nakts stundās vai nelabvēlīgos laikapstākļos. Apmākušies vai miglaini priekšējie lukturi var samazināt transportlīdzekļa apgaismojuma sistēmas efektivitāti, pasliktinot spēju redzēt ceļu. Tāpēc ieteikums no manis būtu tomēr pēc nepieciešamības un iespējām novērst visus riskus gan savai, gan citu drošībai! ",
					},
				},
			},
			body_condition: {
				What_affects_the_condition_of_the_bodywork:
					"Kas ietekmē virsbūves stāvokli? ",
				factors: [
					"Visa veida automātiskās automazgātavas ar birstēm /Circle K, u.c./ (liekoties, ka tā ir kā ļoti laba opcija kā kopt auto ikdienā, pa īstam ir un notiek tieši pretējais ilgtermiņā)",
					"Putnu izkārnījumi uz auto virsbūves. (ļoti ātri noēdīs laku. It īpaši esot tiešā saulē).",
					"Visādi koku, zaru vai citu veidu uzsitumi pa virsbūvi.",
					"Ne līdz galam nomazgātas virsbūves (netīras) virsbūves tīrīšana ar lupatiņu, un/vai putu birstes izmantošana pa auto virsbūvi.",
					"Bitums, dzelzs daļiņas",
					"Sniega tīrīšana ar cietu, sarainu birsti pa virsbūvi.",
					"Sāls un citi reaģenti, u.c.",
				],
			},
		},
		prices: {
			price_title: "Cenas",
			interior_and_body: {
				title: "Salons un virsbūve:",
				services: [
					{ title: "Virsbūves piepunktošana", price: "25€" },
					{ title: "Bituma / dzelzs daļiņu noņemšana", price: "80€" },
					{
						title: "Auto. mazgāšana, salona izsūknēšana",
						price: "40€",
					},
					{
						title: "Detalizēta auto. virsbūves mazgāšana",
						description:
							"bitums, dzelzs daļiņas, diski, arkas, utt.",
						price: "90€",
					},
					{
						title: "Dzīvnieka spalvas",
						description: "extra",
						price: "15–30€",
					},
					{
						title: "Viena beņķa tīrīšana",
						description: "izņemot",
						price: "30€",
					},
					{
						title: "Salona ķīmiskā tīrīšana",
						description:
							"viss salons tiek maksimāli izjaukts, ar tornadora gaisa plūsmu tiek sista ārā smilts, pēc tam ar sārmveida ķīmiju tiek tīrīts salons, kurš pēc tam arī tiek neitralizēts ar skābi novēršot alergēna risku. Bonusā tiek nomazgāta mašīna",
						price: "no 160–220€",
					},
					{
						title: "Salona ķīmiskā bez izjaukšanas",
						price: "no 120–180€",
					},
					{
						title: "Salona ozonēšana",
						description:
							"Salona un ventilācijas un salona attīrīšana no baktērijām, pelējuma, un nepatīkamām smakām, piemēram, ja ir bijis kas izliets, ir smēķēts, utt. Īpaši ieteicams pēc ziemas un cilvēkiem ar alerģijām",
						price: "50€",
					},
					{
						title: "Ādas krāsošana",
						description: "krāsai klāt ir elastīgais komponents",
						price: "cena klātienē",
					},
					{
						title: "Plastmasas krāsošana",
						description: "krāsai klāt ir elastīgais komponents",
						price: "cena klātienē",
					},
				],
			},
			polishing: {
				title: "Pulēšana:",
				services: [
					{
						title: "Virsbūves pulēšana vienā pakāpē",
						price: "no 160–210€",
					},
					{
						title: "Virsbūves pulēšana divās pakāpēs",
						price: "no 240–280€",
					},
					{
						title: "Virsbūves padziļinātā pulēšana",
						price: "no 550–650€",
					},
					{
						title: "Salona detaļu pulēšana",
						price: "no 70€",
					},
					{
						title: "Lukturu slīpēšana / pulēšana",
						description: "ar pārklājumu",
						price: "no 50€",
					},
				],
			},
			protection_and_extras: {
				title: "Aizsargpārklājumi un citi papildpakalpojumi:",
				services: [
					{
						title: "Nano pārklājums priekšējam auto. stiklam",
						description: "darbība līdz 1 gadam",
						price: "70€",
					},
					{
						title: "Keramiskais pārklājums diskiem",
						price: "120€",
					},
					{
						title: "Keramiskais pārklājums plastmasai / ādai",
						price: "80–140€",
					},
					{
						title: "Vaska aizsargpārklājums",
						price: "60€",
					},
					{
						title: "Grafēna keramiskais pārklājums",
						description: "darbības laiks līdz 2 gadiem",
						price: "180–220€",
					},
					{
						title: "Kabrioleta jumta attīrīšana un pārklāšana ar nano pārklājumu",
						price: "220€",
					},
					{
						title: "Pirmspārdošanas sagatavošana",
						description:
							"Cena no 350€, jo viss ir atkarīgs no virsbūves stāvokļa, krāsas biezuma, auto izmēra, netīrības pakāpes, kā arī reālā lukturu stāvokļa. Ietilpst – auto pulēšana, salona ķīmiskā tīrīšana, virsbūves apstrāde ar vasku vai keramiku un lukturu pulēšana.",
						price: "no 350€",
					},
				],
			},
			packages: {
				title: "Pilns komplekts",

				every_cars_owners_dream: {
					title: "Katra auto īpašnieka sapnis",
					services: [
						{
							title: "Salona ķīmiskā tīrīšana ar aizsargpārklājumiem priekš sēdekļiem",
						},
						{
							title: "Stiklu apstrāde ar ūdeni atgrūdošu aizsargpārklājumu",
							description: "not. līdz 1g.",
						},
						{
							title: "Lukturu slīpēšana/pulēšana un keramikas uzklāšana",
						},
						{
							title: "Padziļinātā 3 pakāpju auto virsbūves pulēšana",
						},
						{
							title: "Grafēna aizsargpārklājuma uzklāšana uz auto virsbūves",
							description: "noturība līdz 2g.",
						},
					],
					price: "No 950€",
				},

				mirror: {
					title: "Spogulis",
					services: [
						{
							title: "Salona ķīmiskā tīrīšana ar aizsargpārklājumiem priekš sēdekļiem",
							description: "",
						},
						{
							title: "Stiklu apstrāde ar ūdens atgrūdošu aizsargpārklājumu",
							description: "not. līdz 1g.",
						},
						{
							title: "Lukturu slīpēšana/pulēšana un keramikas uzklāšana",
						},
						{
							title: "Auto virsbūves pulēšana 2 pakāpēs",
						},
						{
							title: "Grafēna aizsargpārklājuma uzklāšana uz auto virsbūves",
							description: "noturība līdz 2g.",
						},
					],
					price: "No 750€",
				},
			},
		},
	},
	ru: {
		nav: {
			socials: "Социальные сети",
			contacts: "Контакты",
			location: "Местоположение",
			services: "Услуги",
			auto_detailings: "Детейлинг автомобиля",
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
		prices: {
			price_title: "Цены",
			interior_and_body: {
				title: "Салон и кузов:",
				services: [
					{ title: "Подкраска кузова", price: "25€" },
					{
						title: "Удаление битума / железных частиц",
						price: "80€",
					},
					{
						title: "Мойка автомобиля, пылесос салона",
						price: "40€",
					},
					{
						title: "Детальная мойка кузова автомобиля",
						description:
							"битум, железные частицы, диски, арки и т.д.",
						price: "90€",
					},
					{
						title: "Животные волосы",
						description: "дополнительно",
						price: "15–30€",
					},
					{
						title: "Чистка одного сиденья",
						description: "кроме",
						price: "30€",
					},
					{
						title: "Химчистка салона",
						description:
							"весь салон максимально разбирается, песок выбивается воздушным потоком «торнадо», затем салон очищается щелочной химией, которая затем нейтрализуется кислотой, устраняя риск аллергии. В бонусе моется машина",
						price: "от 160–220€",
					},
					{
						title: "Химчистка салона без разборки",
						price: "от 120–180€",
					},
					{
						title: "Озонирование салона",
						description:
							"Очистка салона и вентиляции от бактерий, плесени и неприятных запахов, например, если что-то проливалось, курили и т.д. Особенно рекомендуется после зимы и для людей с аллергией",
						price: "50€",
					},
					{
						title: "Покраска кожи",
						description: "в краску добавлен эластичный компонент",
						price: "цена на месте",
					},
					{
						title: "Покраска пластика",
						description: "в краску добавлен эластичный компонент",
						price: "цена на месте",
					},
				],
			},
			polishing: {
				title: "Полировка:",
				services: [
					{
						title: "Одноступенчатая полировка кузова",
						price: "от 160–210€",
					},
					{
						title: "Двухступенчатая полировка кузова",
						price: "от 240–280€",
					},
					{
						title: "Глубокая полировка кузова",
						price: "от 550–650€",
					},
					{
						title: "Полировка деталей салона",
						price: "от 70€",
					},
					{
						title: "Шлифовка / полировка фар",
						description: "с покрытием",
						price: "от 50€",
					},
				],
			},
			protection_and_extras: {
				title: "Защитные покрытия и другие дополнительные услуги:",
				services: [
					{
						title: "Нано покрытие переднего стекла автомобиля",
						description: "действует до 1 года",
						price: "70€",
					},
					{
						title: "Керамическое покрытие дисков",
						price: "120€",
					},
					{
						title: "Керамическое покрытие пластика / кожи",
						price: "80–140€",
					},
					{
						title: "Восковое защитное покрытие",
						price: "60€",
					},
					{
						title: "Графеновое керамическое покрытие",
						description: "действует до 2 лет",
						price: "180–220€",
					},
					{
						title: "Очистка и покрытие нанопокрытием крыши кабриолета",
						price: "220€",
					},
					{
						title: "Подготовка к продаже",
						description:
							"Цена от 350€, так как все зависит от состояния кузова, толщины краски, размера автомобиля, степени загрязнения и фактического состояния фар. Включает – полировку автомобиля, химчистку салона, обработку кузова воском или керамикой и полировку фар.",
						price: "от 350€",
					},
				],
			},
			packages: {
				title: "Полный набор",

				every_cars_owners_dream: {
					title: "Мечта каждого автовладельца",
					services: [
						{
							title: "Химчистка салона с защитными покрытиями для сидений",
						},
						{
							title: "Обработка стекол водоотталкивающим защитным покрытием",
							description: "действует до 1 года",
						},
						{
							title: "Шлифовка/полировка фар и нанесение керамического покрытия",
						},
						{
							title: "Глубокая 3-ступенчатая полировка кузова автомобиля",
						},
						{
							title: "Нанесение графенового защитного покрытия на кузов автомобиля",
							description: "стойкость до 2 лет",
						},
					],
					price: "От 950€",
				},

				mirror: {
					title: "Зеркало",
					services: [
						{
							title: "Химчистка салона с защитными покрытиями для сидений",
							description: "",
						},
						{
							title: "Обработка стекол водоотталкивающим защитным покрытием",
							description: "действует до 1 года",
						},
						{
							title: "Шлифовка/полировка фар и нанесение керамического покрытия",
						},
						{
							title: "2-ступенчатая полировка кузова автомобиля",
						},
						{
							title: "Нанесение графенового защитного покрытия на кузов автомобиля",
							description: "стойкость до 2 лет",
						},
					],
					price: "От 750€",
				},
			},
		},
	},
} as const
