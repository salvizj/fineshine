export function HandleRecentWorkImageViewer(): void {
	const modal = document.getElementById("modal") as HTMLElement | null
	const modalImg = document.getElementById(
		"modal-img"
	) as HTMLImageElement | null
	const modalClose = document.getElementById("modal-close")
	const imageGrid = document.getElementById("image-grid")

	if (!modal || !modalImg || !modalClose || !imageGrid) {
		return
	}

	const openModal = (src: string) => {
		modalImg.src = src
		modal.classList.remove("opacity-0", "pointer-events-none")
	}

	const closeModal = () => {
		modal.classList.add("opacity-0", "pointer-events-none")
		modalImg.src = ""
	}

	imageGrid.addEventListener("click", (e) => {
		const el = (e.target as HTMLElement).closest<HTMLElement>("[data-src]")
		if (el?.dataset.src) openModal(el.dataset.src)
	})

	modalClose.addEventListener("click", closeModal)
}
