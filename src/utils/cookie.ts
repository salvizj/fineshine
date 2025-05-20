export function getCookie(name: string): string | null {
	const value = `; ${document.cookie}`
	const parts = value.split(`; ${name}=`)
	if (parts.length === 2) return parts.pop()!.split(";").shift() || null
	return null
}

export function setCookie(
	cname: string,
	cvalue: string,
	exdays: number = 365
): void {
	const d = new Date()
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
	const expires = "expires=" + d.toUTCString()
	document.cookie = `${cname}=${cvalue};${expires};path=/`
}
