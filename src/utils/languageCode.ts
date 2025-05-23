export default function GetLanguageCodeFromPathname(url: string): string {
	const withoutDomain = url.replace(/^https?:\/\/[^/]+/, "")
	const segments = withoutDomain.split("/").filter(Boolean)
	return segments[0] || ""
}
