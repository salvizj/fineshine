export default function getLanguageCodeFromPathname(url: string): string {
	const withoutDomain = url.replace(/^https?:\/\/[^/]+/, "")
	const segments = withoutDomain.split("/").filter(Boolean)
	return segments[0] || ""
}
