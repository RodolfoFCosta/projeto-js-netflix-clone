const setupScrooling = () => {
    const container = [...document.querySelectorAll
        (".movie-container")]
    const prevBtn = [...document.querySelectorAll(".next-btn")]
    const nextBtn = [...document.querySelectorAll(".prev-btn")]

    container.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect()
        let containerWidth = containerDimensions.width

        nextBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth
        })

        prevBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth
        })

    })
}