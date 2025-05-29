import type { ImageMetadata } from "astro"

export interface Service {
	title: string
	description?: string
	price?: string
}

export interface PriceSection {
	title: string
	services: Service[]
}

export interface PricePackage {
	title: string
	services: Service[]
	price: string
}
export interface PackagesContainer {
	title: string
	every_cars_owners_dream: PricePackage
	mirror: PricePackage
}
export interface SubService {
	sub_title: string
	description: string
}

export interface Service {
	title: string
	image?: ImageMetadata
	description?: string
	sub_services?: SubService[]
}
