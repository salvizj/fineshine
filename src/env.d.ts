declare module "*.jpg?*" {
	import type { ImageMetadata } from "astro:assets"
	const image: ImageMetadata
	export default image
}
