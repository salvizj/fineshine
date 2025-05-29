export function HandleRecentWorkImageViewer(): void {
	const modal = document.getElementById("modal")
	const modalImg = document.getElementById("modal-img")
	const imageGrid = document.getElementById("image-grid")

	if (!(modal && modalImg instanceof HTMLImageElement && imageGrid)) {
		console.warn("Modal image viewer: invalid element(s) provided")
		return
	}

	imageGrid.addEventListener("click", (event: MouseEvent) => {
		const target = event.target

		if (target instanceof HTMLElement) {
			let element: HTMLElement | null = target

			if (element.tagName === "IMG") {
				element = element.parentElement
			}

			if (element && element.dataset && element.dataset.src) {
				modalImg.src = element.dataset.src
				modal.classList.remove("opacity-0", "pointer-events-none")
			}
		}
	})

	modal.addEventListener("click", () => {
		modal.classList.add("opacity-0", "pointer-events-none")
		modalImg.src = ""
	})
}
