export function HandleRecentWorkImageViewer(): void {
	const modal = document.getElementById("modal")
	const modalImg = document.getElementById("modal-img")
	const modalClose = document.getElementById("modal-close")
	const imageGrid = document.getElementById("image-grid")

	if (
		!(
			modal &&
			modalImg instanceof HTMLImageElement &&
			modalClose &&
			imageGrid
		)
	) {
		console.warn("Modal image viewer: invalid element(s) provided")
		return
	}

	const closeModal = () => {
		modal.classList.add("opacity-0", "pointer-events-none")
		modalImg.src = ""
	}

	const openModal = (src: string) => {
		modalImg.src = src
		modal.classList.remove("opacity-0", "pointer-events-none")
	}

	imageGrid.addEventListener("click", (event: MouseEvent) => {
		const target = event.target

		if (target instanceof HTMLElement) {
			let element: HTMLElement | null = target

			if (element.tagName === "IMG") {
				element = element.parentElement
			}

			if (element?.dataset?.src) {
				openModal(element.dataset.src)
			}
		}
	})

	modalClose.addEventListener("click", closeModal)

	// Close on escape key
	document.addEventListener("keydown", (event: KeyboardEvent) => {
		if (event.key === "Escape" && !modal.classList.contains("opacity-0")) {
			closeModal()
		}
	})

	// Prevent clicks on the image from closing the modal
	modalImg.addEventListener("click", (event: Event) => {
		event.stopPropagation()
	})

	modalClose.addEventListener("click", closeModal)
}
