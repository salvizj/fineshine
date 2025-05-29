import leatherImage from "../assets/ceramic_coating_for_leather.jpg"
import bitumenIronImage from "../assets/bitumen_iron_particles.jpg"
import grapheneImage from "../assets/graphene_ceramics.jpg"
import convertibleRoofImage from "../assets/convertible_roof_cleaning.jpg"
import leatherPaintingImage from "../assets/leather_painting.jpg"
import discCeramicsImage from "../assets/ceramics_for_discs.jpg"
import plasticCeramicsImage from "../assets/ceramics_for_plastic.jpg"
import chemicalCleaning1Image from "../assets/chemical_cleaning_1.jpg"
import chemicalCleaning2Image from "../assets/chemical_cleaning_2.jpg"
import chemicalCleaning3Image from "../assets/chemical_cleaning_3.jpg"
import headlightPolishingImage from "../assets/headlight_sanding_and_polishing.jpg"
import nanoGlassCoatingImage from "../assets/nano_coating_for_glass.jpg"
import ozonationImage from "../assets/ozonation.jpg"
import polishingImage from "../assets/polishing.jpg"
import preSalePrepImage from "../assets/pre_sale_preparation.jpg"
import interiorCleaningImage from "../assets/interior_cleaning_vacuuming_washing.jpg"
import interiorPolishingImage from "../assets/interior_detail_polishing.jpg"
import waxImage from "../assets/wax.jpg"
import bodyWashImage from "../assets/body_wash.jpg"
import fullPackageImage from "../assets/full_package.jpg"
import whoAmIImage from "../assets/who_am_i_really_and_what_is_my_purpose.jpg"

export const languageOptions = {
	en: "en",
	lv: "lv",
	ru: "ru",
} as const

export const defaultLanguageCode = "lv"

export const ui = {
	en: {
		nav: {
			contacts: "Contacts",
			services: "Services",
			location: "Location",
			socials: "Socials",
			auto_detailing: "Auto detailing",
			pricing: "Pricing",
			recent_work: "Recent work",
		},

		footer: {
			socials: "Socials",
			contacts: "Contacts",
			location: "Location",
			services: "Services",
			other_links: "Other links",
			cookie_policy: "Cookie policy",
			auto_detaling: "Auto detailing",
			recent_work: "Recent work",
		},

		location_header: "Our location",
		recent_work: "Recent work",
		cookie: {
			btn_description: "Got it",
			description:
				"This site uses cookies to remember your theme and language preferences.",
			read_more: "Read more",
		},
		cookie_policy: {
			title: "Cookie policy",

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
		auto_detailing: {
			detailing: {
				what_is_detailing_title: "What exactly is detailing?",
				description_1:
					"Auto detailing, which literally means 'detailing', is a thorough revision and treatment process of a vehicle both externally and internally. It involves cleaning, necessary corrections, and protecting the results of the work. Every centimeter and detail will be perfected, and the car will look as close to new as possible regardless of its previous condition or year of manufacture.",
				description_2:
					"Auto detailing is divided into two categories – exterior (maintenance of the outer finish) and interior (maintenance of the inner finish). Thanks to the entire process, you can easily prepare your car for sale, exhibition, or just for yourself, as well as protect the vehicle from premature aging without losing resale potential.",
			},
			exterior: {
				exterior_title: "Exterior",
				description:
					"Exterior detailing – maximum improvement, restoration, and protection of the visual appearance of the body with an individual approach to each vehicle considering the client’s wishes and desired final result.",
				steps: {
					washing:
						"Thorough washing of the car. Body, tires, rims, windows, wheel arches, and all other hard-to-reach places. Complete cleaning of the body from environmental contaminants (bitumen, iron particles, and all other harmful surface dirt).",
					polishing:
						"One-stage, two-stage, or advanced body polishing for the best possible result, as well as headlight sanding and polishing if necessary.",
					protection:
						"The car is coated with a protective layer according to client’s wishes and needs. Wax protective coating (lasting up to 3 months), or graphene ceramic protective coating (lasting up to 2 years with proper care). Ceramic coating for headlights (protecting them from fading, yellowing, and other environmental effects for up to 1 year), and anti-rain coating for your windshield and mirrors (for safer and more comfortable driving in adverse weather).",
				},
			},
			interior: {
				interior_title: "Interior",
				description:
					"Interior detailing is not just cleaning and maintenance of the inner finish but comprehensive care for every detail of your car, from the dashboard to the darkest corner of your trunk.",
				steps: {
					deep_cleaning:
						"Complete detailed cleaning of the cabin, extracting maximum sand, dust, stains, hair, and other dirt either with disassembled or intact interior using professional equipment and chemicals.",
					bacteria_removal:
						"Maximum reduction of bacteria, odors, and allergen-causing factors.",
					protective_coatings:
						"Application of protective and other coatings to necessary interior parts of the car.",
					restoration:
						"Making the environment as close to the feel of a new car as possible.",
				},
				client_approach:
					"Client wishes and needs are understood and the entire work list is carried out accordingly, striving for the best possible result. Each car gets an individual approach.",
			},
			advantages: {
				title: "Advantages",
				benefits: {
					improved_appearance: {
						title: "Improved Appearance",
						description:
							"One of the most notable advantages is the improvement in your vehicle’s appearance. Through thorough cleaning, washing, polishing, and applying protective coatings, your car will look as close to new as possible. Additionally, it will be protected from various environmental factors. Investing in vehicle cleaning protects the body from weathering and extends its lifespan.",
					},
					increased_resale_value: {
						title: "Increased Resale Value",
						description:
							"Regular car cleaning can significantly increase your vehicle’s resale value. When it’s time to sell or trade the car, potential buyers are more likely to be attracted to a well-maintained vehicle. A clean and well-cared-for car stands out much faster than a worn one, and buyers are often willing to pay significantly more for a vehicle in excellent condition. Investing in cleaning means you enjoy a pristine environment and minimize value loss when the time comes to part with the car.",
					},
					health_and_hygiene: {
						title: "Health and Hygiene",
						description:
							"Your vehicle’s cabin is a space where you spend a significant amount of time, so it’s important to keep it clean and pleasant. Cleaning focuses on surfaces including seats, carpets, and ventilation systems, with deep cleaning and disinfection. This helps eliminate bacteria, allergens, and unpleasant odors that accumulate over time. Cleaning and ozone treatment, if necessary, create a more comfortable and healthier environment for you and your passengers, reducing the risk of allergies, respiratory issues, and unpleasant smells.",
					},
					increased_driving_safety: {
						title: "Increased Driving Safety",
						description:
							"Detailing services such as headlight polishing and windshield treatment greatly improve visibility, especially when driving at night or in adverse weather. Cloudy or foggy headlights reduce the efficiency of the vehicle’s lighting system, impairing the ability to see the road. Therefore, it is advisable to eliminate all risks when possible for your safety and the safety of others.",
					},
				},
			},
			body_condition: {
				What_affects_the_condition_of_the_bodywork:
					"What affects the condition of the bodywork?",
				factors: [
					"All types of automatic car washes with brushes (e.g. Circle K and others) – although they seem like a good option for daily car care, in reality, they cause opposite long-term effects.",
					"Bird droppings on the car body (quickly damage the paint, especially in direct sunlight).",
					"Various impacts from trees, branches, or other objects on the body.",
					"Not thoroughly washed body – cleaning with a cloth or foam brush on a dirty body.",
					"Bitumen, iron particles.",
					"Snow removal with hard, bristled brushes on the body.",
					"Salt and other reagents.",
				],
			},
		},

		prices: {
			title: "Prices",
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
						description: "elastic component is added to the color.",
						price: "price on site",
					},
					{
						title: "Plastic coloring",
						description: "elastic component is added to the color.",
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
						description: "with coating.",
						price: "from 50€",
					},
				],
			},
			protection_and_extras: {
				title: "Protective coatings and other additional services:",
				services: [
					{
						title: "Nano coating for front car glass",
						description: "durability up to 1 year.",
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
						description: "durability up to 2 years.",
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
							description: "durability up to 1 year.",
						},
						{
							title: "Headlight grinding/polishing and ceramic coating application",
						},
						{
							title: "In-depth 3-step car body polishing",
						},
						{
							title: "Graphene protective coating application on car body",
							description: "durability up to 2 years.",
						},
					],
					price: "From €950",
				},

				mirror: {
					title: "Mirror",
					services: [
						{
							title: "Interior chemical cleaning with protective coatings for seats",
						},
						{
							title: "Glass treatment with water-repellent protective coating",
							description: "durability up to 1 year.",
						},
						{
							title: "Headlight grinding/polishing and ceramic coating application",
						},
						{
							title: "2-step car body polishing",
						},
						{
							title: "Graphene protective coating application on car body",
							description: "durability up to 2 years.",
						},
					],
					price: "From €750",
				},
			},
		},
		services: {
			title: "Services",
			list: [
				{
					title: "Leather Ceramic Coating",
					image: leatherImage,
					description:
						"All leather lovers understand how important leather preservation and protection methods are. Leather ceramic coating provides easy maintenance and keeps leather products in impeccable condition and shape despite continuous use. So, is ceramic coating worth it for your leather car seats? Yes! Its high dust-repellent properties help keep your leather surfaces more durable and cleaner.",
				},
				{
					title: "Bitumen and Iron Particle Removal",
					image: bitumenIronImage,
					description:
						"Using professional cleaning agents, we remove bitumen and iron particles from the car body that have accumulated over time due to various environmental factors. These particles not only worsen the car’s appearance and body condition, but cannot be simply washed off with regular car washing. They must be removed before polishing and applying protective coatings.",
				},
				{
					title: "Graphene Ceramic Protective Coating",
					image: grapheneImage,
					description:
						"Graphene is known for its exceptional durability. When applied as a coating, it forms a protective layer highly resistant to scratches, UV rays, and harsh weather conditions. This means your car’s paint remains flawless for a long time. It has excellent hydrophobic properties, effectively repelling water. This creates the famous 'water beading' effect where water rolls off the car surface, carrying dirt and contaminants away. Graphene coatings give your car’s paint a deep, mirror-like shine. The enhanced gloss provides a luxurious look and highlights your car.",
				},
				{
					title: "Convertible Roof Cleaning and Nano Coating",
					image: convertibleRoofImage,
					description:
						"Highly hydrophobic, stain-resistant, fast-drying, does not affect the fabric’s tactile properties, and is UV resistant.",
				},
				{
					title: "Leather Restoration and Painting",
					image: leatherPaintingImage,
					description:
						"The seat or any other interior part is restored as close as possible to the original condition. Elastic component paint is used.",
				},
				{
					title: "Ceramic Coating for Wheels",
					image: discCeramicsImage,
					description:
						"Scratch resistance, hydrophobic effect – repels water, oil, dust – requiring less time for cleaning. Resistant to brake dust adhesion. Improves gloss. Helps prevent damage from UV radiation or high temperatures. Can be applied to all types of wheels.",
				},
				{
					title: "Ceramic Coating for Plastics",
					image: plasticCeramicsImage,
					description:
						"A sealant based on silicon-carbon technology designed for refreshing and protecting unpainted exterior plastic parts such as trim strips and bumpers. Also suitable for tire care and protects against UV-induced fading.",
				},
				{
					title: "Interior Chemical Cleaning",
					image: chemicalCleaning1Image,
					description:
						"With or without full interior disassembly. Complete interior chemical cleaning to make your car’s interior look as close to new as possible. Special equipment and agents are used for professional results, performing deep cleaning and eliminating maximum odors, dirt, hair, and all other harmful bacteria while protecting the interior itself. The result is an interior in the best possible condition—clean, fresh, and pleasantly scented.",
				},
				{
					title: "Headlight Sanding/Polishing",
					image: headlightPolishingImage,
					description:
						"Improved road safety – bright, focused headlights provide faster reaction time, reducing the risk of collisions. Cost-effective compared to replacement – headlight replacement can be expensive. Restoration offers a more affordable solution while achieving similar results. Improved vehicle aesthetics – crystal-clear headlights give your car a more attractive look. When your headlights look new, it increases your car’s resale value.",
				},
				{
					title: "Glass Protective Coating (Anti-Rain)",
					image: nanoGlassCoatingImage,
					description:
						"Anyone who struggles to see at night while driving knows that rain combined with oncoming headlights can be annoying (and dangerous). Using innovative Aquapel technology, a long-lasting rain repellent can be applied to the windshield that reduces glare and improves visibility while driving. Aquapel creates a non-stick surface on the car windshield. This chemical bond protects against rain, snow, and ice; you will see water bead off the windshield! Aquapel also helps clean debris, insects, dirt, and oil from the windshield, providing protection for up to one year.",
				},
				{
					title: "Ozonation",
					image: ozonationImage,
					description:
						"Ozone treatment eliminates odors at the molecular level by oxidizing odor-causing compounds and providing long-lasting freshness. It also disinfects by neutralizing bacteria, mold, and allergens.",
				},
				{
					title: "Polishing",
					image: polishingImage,
					sub_services: [
						{
							sub_title: "Single-Stage Car Polishing",
							description:
								"Using special techniques and products, we ensure the best possible result. Surface dullness is removed and the car’s shine is restored. Typically used for new cars, as even brand-new cars from the showroom should be polished to a perfect condition before applying a protective coating because during transport and handling the body may have minor scratches and defects. After that, applying wax or ceramic protection is recommended.",
						},
						{
							sub_title: "Two-Stage Car Polishing",
							description:
								"Using special techniques and products, we ensure the best possible result. The car’s shine is restored and small scratches and defects on the body are removed along with holograms. A distinct mirror effect is achieved. Afterwards, applying wax or ceramic protection is recommended.",
						},
						{
							sub_title: "Three-Stage Deep Car Polishing",
							description:
								"Suitable for cars with pronounced swirl marks, scratches, and other paint defects. It involves using three different polishing products and pad combinations. Removes up to 70% of all body defects. Anything deeper than the clear coat unfortunately cannot be polished out. However, on the overall surface, this will be barely noticeable as the car will look as good as possible. A distinct mirror effect is achieved. Afterwards, applying wax or ceramic protection is recommended.",
						},
					],
				},
				{
					title: "Pre-Sale Preparation",
					image: preSalePrepImage,
					description:
						"The scope of work depends on the client’s wishes, goals, the real condition of the car, wear and dirt level.",
				},
				{
					title: "Car Wash and Interior Vacuuming",
					image: bodyWashImage,
					description:
						"We provide professional interior cleaning using specialized equipment and products. The interior, dashboard, seats are cleaned thoroughly, vacuumed, windows washed, and the car is washed.",
				},
			],
		},
	},
	lv: {
		nav: {
			contacts: "Kontakti",
			services: "Pakalpojumi",
			location: "Atrašanās vieta",
			socials: "Sociālie tīkli",
			auto_detailing: "Auto detailings",
			pricing: "Cenas",
			recent_work: "Pēdējie darbi",
		},

		footer: {
			socials: "Sociālie tīkli",
			contacts: "Kontakti",
			location: "Atrašanās vieta",
			services: "Pakalpojumi",
			other_links: "Citas saites",
			cookie_policy: "Sīkdatņu politika",
			auto_detaling: "Auto detailings",
			recent_work: "Pēdējie darbi",
		},
		location_header: "Mūsu atrašanās vieta",
		recent_work: "Pēdējie darbi",
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
			title: "Cenas",
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
						description: "krāsai klāt ir elastīgais komponents.",
						price: "cena klātienē",
					},
					{
						title: "Plastmasas krāsošana",
						description: "krāsai klāt ir elastīgais komponents.",
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
						description: "ar pārklājumu.",
						price: "no 50€",
					},
				],
			},
			protection_and_extras: {
				title: "Aizsargpārklājumi un citi papildpakalpojumi:",
				services: [
					{
						title: "Nano pārklājums priekšējam auto. stiklam",
						description: "noturība līdz 1 gadam.",
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
						description: "noturība līdz 2 gadiem.",
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
							description: "noturība līdz 1 gadam.",
						},
						{
							title: "Lukturu slīpēšana/pulēšana un keramikas uzklāšana",
						},
						{
							title: "Padziļinātā 3 pakāpju auto virsbūves pulēšana",
						},
						{
							title: "Grafēna aizsargpārklājuma uzklāšana uz auto virsbūves",
							description: "noturība līdz 2 gadiem.",
						},
					],
					price: "No 950€",
				},

				mirror: {
					title: "Spogulis",
					services: [
						{
							title: "Salona ķīmiskā tīrīšana ar aizsargpārklājumiem priekš sēdekļiem",
						},
						{
							title: "Stiklu apstrāde ar ūdens atgrūdošu aizsargpārklājumu",
							description: "noturība līdz 1 gadam.",
						},
						{
							title: "Lukturu slīpēšana/pulēšana un keramikas uzklāšana",
						},
						{
							title: "Auto virsbūves pulēšana 2 pakāpēs",
						},
						{
							title: "Grafēna aizsargpārklājuma uzklāšana uz auto virsbūves",
							description: "noturība līdz 2 gadiem.",
						},
					],
					price: "No 750€",
				},
			},
		},
		services: {
			title: "Pakalpojumi",
			list: [
				{
					title: "Keramika ādai",
					image: leatherImage,
					description:
						"Visi ādas mīļotāji saprot, cik svarīgas ir ādas saglabāšanas un aizsardzības metodes. Ādas keramikas pārklājums nodrošina vieglu kopšanu un saglabā ādas izstrādājumus nevainojamā stāvoklī un formā, neskatoties uz nepārtrauktu lietošanu. Tātad, vai keramikas pārklājums jūsu ādas automašīnas sēdekļiem ir tā vērts? Jā! Tā augstās putekļu atgrūšanas īpašības palīdz saglabāt jūsu ādas virsmas izturīgākas un tīrākas.",
				},
				{
					title: "Bituma un dzelzs daļiņu noņemšana",
					image: bitumenIronImage,
					description:
						"Izmantojot profesionālus tīrīšanas līdzekļus ņemam nost bituma un dzelzs daļiņas no auto virsbūves, kas laika gaitā ir radušies no dažādiem vides faktoriem. Šīs daļiņas ne tikai pasliktina auto izskatu un virsbūves stāvokli, bet arī nav iespējams vienkārši nomazgāt nost no virsbūves ar parastu auto mazgāšanu. Pirms auto virsbūves pulēšanas un aizsargpārklājuma obligāti ir jānoņem.",
				},
				{
					title: "Grafēna keramiskais aizsargpārklājums",
					image: grapheneImage,
					description:
						'Grafēns ir pazīstams ar savu izcilo izturību. Uzklājot to kā pārklājumu, tas veido aizsargslāni, kas ir ļoti izturīgs pret skrāpējumiem, UV stariem un skarbajiem laikapstākļiem. Tas nozīmē, ka jūsu automašīnas krāsa ilgstoši saglabājas nevainojamā stāvoklī. piemīt izcilas hidrofobas īpašības, kas nozīmē, ka tie efektīvi atgrūž ūdeni. Tas rada slaveno "ūdens pērlīšu" efektu, kur ūdens noripo no automašīnas virsmas, aizvadot netīrumus un piesārņotājus. Grafēna pārklājumi nodrošina jūsu automašīnas krāsai dziļu, spoguļspīdumu. Uzlabotais spīdums piešķir greznu izskatu un izceļ jūsu automašīnu.',
				},
				{
					title: "Kabrioleta jumta attīrīšana un pārklāšana ar nano pārklājumu",
					image: convertibleRoofImage,
					description:
						"Īpaši hidrofobs, traipu izturīgs, ātri žūstošs, neietekmē auduma taktiālās īpašības, kā arī UV izturīgs.",
				},
				{
					title: "Ādas restaurācija un krāsošana",
					image: leatherPaintingImage,
					description:
						"Sēdeklis vai jebkura cita salona detaļa tiek atgriesta maksimāli tuvu orģinālam stāvoklim. Tiek izmantota krāsa ar elastīgo komponentu.",
				},
				{
					title: "Keramika diskiem",
					image: discCeramicsImage,
					description:
						"Izturība pret skrāpējumiem, hidrofobs efekts – atgrūž ūdeni, eļļu, putekļus – tīrīšanai nepieciešams mazāk laika. Izturīgs pret bremžu putekļu pielipšanu. Uzlabo spīdumu. Palīdz novērst bojājumus UV starojumā vai augstas temperatūras dēļ. Var uzklāt uz visa veida diskiem.",
				},
				{
					title: "Keramika plastmasai",
					image: plasticCeramicsImage,
					description:
						"Uz silīcija-oglekļa tehnoloģijas bāzes veidots hermētiķis, kas paredzēts nekrāsotu ārējo plastmasas detaļu, piemēram, apdares līstu un bamperu, atsvaidzināšanai un aizsardzībai. Tas ir piemērots arī riepu kopšanai un aizsargā pret UV starojuma izraisītu izbalēšanu.",
				},
				{
					title: "Salona ķīmiskā tīrīšana",
					image: chemicalCleaning1Image,
					description:
						"Ar pilnu salona izjaukšanu, vai bez. Pilna salona ķīmiskā tīrīšana, lai jūtu auto interjers izskatītos maksimāli tuvu jaunam. Tiek izmantotas speciālas iekārtas un līdzekļi profesionālam rezultātam veicot padziļinātu tīrīšanu un apkarotu maksimāli daudz smakas, netīrumus, spalvas un visas citas nelabvēlīgās baktērijas tai pat laikā saudzējot interjeru kā tādu. Rezultātā salons būs maksimāli vislabākajā iespējamajā stāvoklī. Tīrs, svaigs un ar labu aromātu.",
				},
				{
					title: "Lukturu slīpēšana/pulēšana",
					image: headlightPolishingImage,
					description:
						"Uzlabota ceļu satiksmes drošība – spilgti, fokusēti priekšējie lukturi nodrošina ātrāku reakcijas laiku, samazinot sadursmju iespējamību. Izmaksu efektivitāte salīdzinājumā ar nomaiņu – priekšējo lukturu nomaiņa var būt dārga. Restaurācija piedāvā pieejamāku risinājumu, vienlaikus sasniedzot līdzīgus rezultātus. Uzlabota transportlīdzekļa estētika – kristāldzidri priekšējie lukturi piešķirs jūsu automašīnai pievilcīgāku izskatu. Kad jūsu priekšējie lukturi izskatās kā jauni, tas palielinās jūsu automašīnas tālākpārdošanas vērtību.",
				},
				{
					title: "Stiklu aizsargpārklājums, jeb anti lietus",
					image: nanoGlassCoatingImage,
					description:
						"Ikvienam, kam naktī ir grūtības redzēt pie stūres, lietus un pretimbraucošo lukturu gaismas var būt kaitinoša (un bīstama) kombinācija. Taču, izmantojot Aquapel inovatīvo tehnoloģiju, uz vējstikla var uzklāt ilgstošu lietus atgrūšanas līdzekli, kas samazinās atspīdumu un uzlabos redzamību braukšanas laikā. Aquapel uz automašīnas vējstikla izveido nepielīpošu virsmu. Šī ķīmiskā saite ar stiklu pasargā to no lietus, sniega un ledus; jūs redzēsiet, kā ūdens pilienveidīgi norip no vējstikla! Aquapel arī palīdz notīrīt no automašīnas stikla gružus, kukaiņus, netīrumus un eļļu, vienlaikus nodrošinot vējstikla aizsardzību līdz pat vienam gadam.",
				},
				{
					title: "Ozonēšana",
					image: ozonationImage,
					description:
						"Ozona apstrāde molekulārā līmenī likvidē smakas, oksidējot smakas izraisošus savienojumus un nodrošinot ilgstošu svaigumu. Tāpat dezinficē, neitralizējot baktērijas, pelējumu un alergēnus.",
				},
				{
					title: "Pulēšana",
					image: polishingImage,
					sub_services: [
						{
							sub_title: "Auto pulēšana vienā pakāpē",
							description:
								"Izmaintojot speciālu tehniku un līdzekļus nodrošināsim jums vislabāko iespējamo rezultātu. Tiek noņemts virsmas matējums un atjaunots automašīnas spīdums. Parasti tiek pielietots jauniem auto, jo arī tie kaut arī ir pilnībā jauni, no salona, pirms aizsargpārklājuma uzklāšanas ir jānopulē līdz tiešām perfektam stāvoklim, jo visādu faktoru un pārvešanas brīdī virsbūve pavisam noteikti ir tikusi pie kādām švīkām un defektiem. Pēc tam vēlams ir uzklāt vaska vai keramikas aizsargpārklājumu.",
						},
						{
							sub_title: "Auto pulēšana divās pakāpēs",
							description:
								"Izmaintojot speciālu tehniku un līdzekļus nodrošināsim jums vislabāko iespējamo rezultātu. Automašīnai ne tikai tiek atjaunots tās spīdums, bet arī likvidēs nelielus skrāpējumus un defektus, kas ir radušies uz virsbūves kā arī noņems hologrammu. Konkrēts spoguļa efekts. Pēc tam vēlams ir uzklāt vaska vai keramikas aizsargpārklājumu.",
						},
						{
							sub_title: "Auto padziļinātā pulēšana trīs pakāpēs",
							description:
								"Ir piemērots automašīnām ar izteiktām virpuļveida švīkām, skrambām un citiem krāsas defektiem, un tas ietver 3 dažādu pulēšanas līdzekļu un padu kombināciju izmantošanu. Noņem līdz pat 70% no visas virsbūves defektiem. Viss kas ir dziļāks par lakas kārtu diemžēl ārā nepulējās. Bet uz kopējā fona to vispār būs ļoti grūti ieraudzīt, jo auto izskatīsies tik labi cik vien tas ir iespējams. Konkrēts spoguļa efekts. Pēc tam vēlams ir uzklāt vaska vai keramikas aizsargpārklājumu.",
						},
					],
				},
				{
					title: "Pirmspārdošanas sagatavošana",
					image: preSalePrepImage,
					description:
						"Veicamais darbu saraksts ir atkarīgs no klienta vēlmēm, mērķiem, paša reālā auto stāvokļa, nolietujuma, kā arī netīrības pakāpes.",
				},
				{
					title: "Auto mazgāšana, salona izsūknēšana",
					image: bodyWashImage,
					description:
						"Nodrošinam profesionālu salona tīrīšanu, izmantojot specializētas iekārtas un līdzekļus. Viegli iztīrīts salons, panelis, sēdekļi, izsūknēšana ar putekļusūcēju, logu tīrīšana, un auto nomazgāšana.",
				},
			],
		},
	},
	ru: {
		nav: {
			contacts: "Контакты",
			services: "Услуги",
			location: "Местоположение",
			socials: "Социальные сети",
			auto_detailing: "Детейлинг автомобиля",
			pricing: "Цены",
			recent_work: "Последние работы",
		},

		footer: {
			socials: "Социальные сети",
			contacts: "Контакты",
			location: "Местоположение",
			services: "Услуги",
			other_links: "Другие ссылки",
			cookie_policy: "Политика файлов cookie",
			auto_detailing: "Детейлинг автомобиля",
			recent_work: "Последние работы",
		},
		recent_work: "Последние работы",
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
		auto_detailing: {
			detailing: {
				what_is_detailing_title: "Что такое детейлинг?",
				description_1:
					"Авто детейлинг, что в переводе означает «детализация», — это тщательный процесс ревизии и обработки автомобиля снаружи и внутри, включающий чистку, необходимую коррекцию элементов и защиту результата работы. Каждый сантиметр и деталь будут усовершенствованы, и автомобиль будет выглядеть максимально близко к новому, независимо от предыдущего состояния и года выпуска.",
				description_2:
					"Авто детейлинг делится на две категории – экстерьер (уход за внешней отделкой) и интерьер (уход за внутренней отделкой). Благодаря этому процессу вы легко подготовите автомобиль к продаже, выставке или просто для себя, а также защитите машину от преждевременного старения, не потеряв при этом возможности перепродажи.",
			},
			exterior: {
				exterior_title: "Экстерьер",
				description:
					"Детейлинг экстерьера – максимальное улучшение, восстановление и защита внешнего вида кузова с индивидуальным подходом к каждому автомобилю с учётом пожеланий клиента и желаемого конечного результата.",
				steps: {
					washing:
						"Тщательная мойка автомобиля. Кузов, шины, диски, стекла, арки и все труднодоступные места. Полная очистка кузова от загрязнений окружающей среды (битум, железные частицы и другие вредные загрязнения поверхности).",
					polishing:
						"Одноступенчатая, двухступенчатая или углублённая полировка кузова для максимального результата, а также шлифовка и полировка фар по необходимости.",
					protection:
						"Автомобиль покрывается защитным слоем в зависимости от пожеланий и необходимости клиента. Защитный слой воска (срок действия до 3 месяцев), или графеновый керамический защитный слой (при правильном уходе до 2 лет). Керамическое покрытие для фар (защищает их от выцветания, пожелтения и других воздействий окружающей среды до 1 года), и антирефлексное покрытие для лобового стекла и зеркал (для более безопасного и комфортного вождения в неблагоприятных погодных условиях).",
				},
			},
			interior: {
				interior_title: "Интерьер",
				description:
					"Детейлинг интерьера – это не просто уход и чистка внутренней отделки, а всесторонний уход за каждой деталью вашего автомобиля, начиная с панели приборов и заканчивая самым тёмным углом багажника.",
				steps: {
					deep_cleaning:
						"Полная детальная уборка салона с максимальным удалением песка, пыли, пятен, шерсти и других загрязнений, с разбором или без разборки салона, с использованием профессионального оборудования и химии.",
					bacteria_removal:
						"Максимальное удаление бактерий, запахов и аллергенов.",
					protective_coatings:
						"Нанесение защитных и других покрытий на необходимые детали интерьера автомобиля.",
					restoration:
						"Создание среды, максимально приближенной к ощущениям нового автомобиля.",
				},
				client_approach:
					"Учитываются пожелания и потребности клиента, по которым выполняется весь перечень работ с целью достижения наилучшего результата. Для каждого автомобиля используется индивидуальный подход.",
			},
			advantages: {
				title: "Преимущества",
				benefits: {
					improved_appearance: {
						title: "Улучшенный внешний вид",
						description:
							"Одно из самых заметных преимуществ – улучшение внешнего вида вашего транспортного средства. Благодаря тщательной чистке, мойке, полировке и нанесению защитного покрытия ваш автомобиль будет выглядеть максимально новым. Кроме того, он будет защищён от различных воздействий окружающей среды. Инвестиции в чистку автомобиля защищают кузов от погодных условий и продлевают срок службы.",
					},
					increased_resale_value: {
						title: "Повышенная стоимость перепродажи",
						description:
							"Регулярная чистка автомобиля может значительно повысить его стоимость при перепродаже. Когда придёт время продавать или менять автомобиль, потенциальных покупателей скорее привлечёт хорошо ухоженный автомобиль. Чистый и ухоженный автомобиль сразу бросается в глаза, и покупатели часто готовы платить значительно больше за автомобиль в отличном состоянии. Инвестируя в чистку, вы не только наслаждаетесь безупречной чистотой, но и минимизируете потерю стоимости при продаже.",
					},
					health_and_hygiene: {
						title: "Здоровье и гигиена",
						description:
							"Салон вашего автомобиля — это пространство, где вы проводите значительное время, поэтому важно поддерживать его чистоту и комфорт. Чистка включает поверхности, такие как сиденья, ковры и вентиляционные системы, глубокую уборку и дезинфекцию. Это помогает устранить бактерии, аллергены и неприятные запахи, которые накапливаются со временем. Уборка и, при необходимости, озонирование создают более комфортную и здоровую среду для вас и ваших пассажиров, снижая риск аллергий, проблем с дыханием и неприятных запахов.",
					},
					increased_driving_safety: {
						title: "Повышенная безопасность вождения",
						description:
							"Услуги детейлинга, такие как полировка фар и обработка лобового стекла, значительно улучшают видимость, особенно при вождении в ночное время или в неблагоприятных погодных условиях. Помутневшие или запотевшие фары снижают эффективность системы освещения автомобиля, ухудшая видимость дороги. Поэтому рекомендуется при необходимости устранять все риски для вашей безопасности и безопасности окружающих.",
					},
				},
			},
			body_condition: {
				What_affects_the_condition_of_the_bodywork:
					"Что влияет на состояние кузова?",
				factors: [
					"Все виды автоматических мойок с щётками (например, Circle K и др.) – хотя кажется, что это хороший вариант для повседневного ухода, на самом деле они вызывают противоположный эффект в долгосрочной перспективе.",
					"Птичий помёт на кузове (быстро повреждает лакокрасочное покрытие, особенно под прямыми солнечными лучами).",
					"Различные удары деревьев, веток или других предметов по кузову.",
					"Не полностью вымытый кузов – очистка тряпкой или поролоновой щёткой по грязной поверхности.",
					"Битум, железные частицы.",
					"Удаление снега жёсткими щётками с щетиной по кузову.",
					"Соль и другие реагенты.",
				],
			},
		},

		prices: {
			title: "цены",
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
						description: "в краску добавлен эластичный компонент.",
						price: "цена на месте",
					},
					{
						title: "Покраска пластика",
						description: "в краску добавлен эластичный компонент.",
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
						description: "действует до 1 года.",
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
						description: "действует до 2 лет.",
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
							description: "действует до 1 года.",
						},
						{
							title: "Шлифовка/полировка фар и нанесение керамического покрытия",
						},
						{
							title: "Глубокая 3-ступенчатая полировка кузова автомобиля",
						},
						{
							title: "Нанесение графенового защитного покрытия на кузов автомобиля",
							description: "стойкость до 2 лет.",
						},
					],
					price: "От 950€",
				},

				mirror: {
					title: "Зеркало",
					services: [
						{
							title: "Химчистка салона с защитными покрытиями для сидений",
						},
						{
							title: "Обработка стекол водоотталкивающим защитным покрытием",
							description: "действует до 1 года.",
						},
						{
							title: "Шлифовка/полировка фар и нанесение керамического покрытия",
						},
						{
							title: "2-ступенчатая полировка кузова автомобиля",
						},
						{
							title: "Нанесение графенового защитного покрытия на кузов автомобиля",
							description: "стойкость до 2 лет.",
						},
					],
					price: "От 750€",
				},
			},
		},
		services: {
			title: "Услуги",
			list: [
				{
					title: "Керамика для кожи",
					image: leatherImage,
					description:
						"Все любители кожи понимают, насколько важны методы сохранения и защиты кожи. Керамическое покрытие кожи обеспечивает легкий уход и сохраняет кожаные изделия в безупречном состоянии и форме несмотря на постоянное использование. Так стоит ли керамическое покрытие для ваших кожаных автомобильных сидений? Да! Его высокая пылеотталкивающая способность помогает сохранять кожаные поверхности более прочными и чистыми.",
				},
				{
					title: "Удаление битума и железных частиц",
					image: bitumenIronImage,
					description:
						"Используя профессиональные средства очистки, мы удаляем битум и железные частицы с кузова автомобиля, которые со временем появились из-за различных факторов окружающей среды. Эти частицы не только ухудшают внешний вид автомобиля и состояние кузова, но и их нельзя просто смыть обычной мойкой. Их необходимо удалить перед полировкой и нанесением защитного покрытия.",
				},
				{
					title: "Графеновое керамическое защитное покрытие",
					image: grapheneImage,
					description:
						"Графен известен своей исключительной прочностью. Нанесённый в виде покрытия, он образует защитный слой, который очень устойчив к царапинам, УФ-лучам и суровым погодным условиям. Это значит, что краска вашего автомобиля долгое время сохраняет безупречный вид. Обладает отличными гидрофобными свойствами, эффективно отталкивая воду. Создаётся знаменитый эффект 'водяных капель', когда вода скатывается с поверхности автомобиля, унося грязь и загрязнения. Графеновые покрытия придают краске глубокий зеркальный блеск. Усиленный блеск придаёт роскошный вид и выделяет ваш автомобиль.",
				},
				{
					title: "Очистка и нанесение нанопокрытия на крышу кабриолета",
					image: convertibleRoofImage,
					description:
						"Особо гидрофобное, устойчивое к пятнам, быстро сохнущее, не влияет на тактильные свойства ткани, а также устойчиво к УФ-лучам.",
				},
				{
					title: "Восстановление и окраска кожи",
					image: leatherPaintingImage,
					description:
						"Сиденье или любая другая деталь салона восстанавливается максимально близко к оригинальному состоянию. Используется краска с эластичным компонентом.",
				},
				{
					title: "Керамика для дисков",
					image: discCeramicsImage,
					description:
						"Устойчивость к царапинам, гидрофобный эффект – отталкивает воду, масло, пыль – требует меньше времени на чистку. Устойчив к прилипанию тормозной пыли. Улучшает блеск. Помогает предотвратить повреждения от УФ-излучения или высоких температур. Может наноситься на все виды дисков.",
				},
				{
					title: "Керамика для пластика",
					image: plasticCeramicsImage,
					description:
						"Герметик на основе кремний-углеродной технологии, предназначенный для освежения и защиты неокрашенных внешних пластиковых деталей, таких как декоративные молдинги и бамперы. Также подходит для ухода за шинами и защиты от выцветания, вызванного УФ-лучами.",
				},
				{
					title: "Химчистка салона",
					image: chemicalCleaning1Image,
					description:
						"С полной разборкой салона или без. Полная химчистка салона, чтобы интерьер автомобиля выглядел максимально близко к новому. Используются специальные аппараты и средства для профессионального результата, выполняется глубокая очистка и максимально устраняются запахи, грязь, шерсть и все другие вредные бактерии, при этом бережно защищая сам интерьер. В результате салон будет в наилучшем возможном состоянии. Чистый, свежий и с приятным ароматом.",
				},
				{
					title: "Шлифовка/полировка фар",
					image: headlightPolishingImage,
					description:
						"Повышение безопасности дорожного движения – яркие, сфокусированные фары обеспечивают более быстрое время реакции, снижая риск столкновений. Экономия средств по сравнению с заменой – замена фар может быть дорогой. Восстановление предлагает более доступное решение с аналогичным эффектом. Улучшение внешнего вида автомобиля – кристально чистые фары делают автомобиль более привлекательным. Когда фары выглядят как новые, это повышает стоимость перепродажи автомобиля.",
				},
				{
					title: "Защитное покрытие стекол (антидождь)",
					image: nanoGlassCoatingImage,
					description:
						"Каждый, кто сталкивается с плохой видимостью ночью из-за дождя и встречных фар, знает, как это раздражает (и опасно). С использованием инновационной технологии Aquapel наносится долговременный водоотталкивающий состав на лобовое стекло, который уменьшает блики и улучшает видимость при вождении. Aquapel создаёт неприлипающую поверхность на лобовом стекле автомобиля. Эта химическая связь защищает от дождя, снега и льда; вы увидите, как вода стекает с лобового стекла! Aquapel также помогает очистить стекло от мусора, насекомых, грязи и масла, обеспечивая защиту до одного года.",
				},
				{
					title: "Озонирование",
					image: ozonationImage,
					description:
						"Обработка озоном устраняет запахи на молекулярном уровне, окисляя соединения, вызывающие запахи, обеспечивая длительную свежесть. Также дезинфицирует, нейтрализуя бактерии, плесень и аллергены.",
				},
				{
					title: "Полировка",
					image: polishingImage,
					sub_services: [
						{
							sub_title: "Одноступенчатая полировка автомобиля",
							description:
								"Используя специальные техники и средства, обеспечиваем лучший возможный результат. Устраняется тусклость поверхности, восстанавливается блеск автомобиля. Обычно используется для новых автомобилей, так как даже новые машины из салона следует отполировать до идеального состояния перед нанесением защитного покрытия, поскольку при транспортировке и обращении на кузове могут быть небольшие царапины и дефекты. После этого рекомендуется нанесение воска или керамической защиты.",
						},
						{
							sub_title: "Двухступенчатая полировка автомобиля",
							description:
								"Используя специальные техники и средства, обеспечиваем лучший возможный результат. Восстанавливается блеск автомобиля, удаляются мелкие царапины и дефекты на кузове, а также голограммы. Добивается выраженный зеркальный эффект. После этого рекомендуется нанесение воска или керамической защиты.",
						},
						{
							sub_title:
								"Трёхступенчатая глубокая полировка автомобиля",
							description:
								"Подходит для автомобилей с выраженными завихрениями, царапинами и другими дефектами краски. В процессе используется три различных продукта для полировки и комбинации насадок. Удаляет до 70% всех дефектов кузова. Всё, что глубже верхнего слоя лака, к сожалению, полировкой не исправить. Однако на общей поверхности это будет почти незаметно, так как автомобиль будет выглядеть максимально хорошо. Добивается выраженный зеркальный эффект. После этого рекомендуется нанесение воска или керамической защиты.",
						},
					],
				},
				{
					title: "Подготовка к продаже",
					image: preSalePrepImage,
					description:
						"Объём работ зависит от пожеланий клиента, целей, реального состояния автомобиля, степени износа и загрязнения.",
				},
				{
					title: "Мойка кузова и уборка салона пылесосом",
					image: bodyWashImage,
					description:
						"Профессиональная уборка салона с использованием специализированного оборудования и средств. Интерьер, приборная панель, сиденья тщательно очищаются, пылесосятся, моются окна и сам автомобиль.",
				},
			],
		},
	},
} as const
