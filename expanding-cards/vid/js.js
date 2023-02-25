const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActive()
        panel.classList.add('active')
    })
})

removeActive = () => {
    panels.forEach((panels) => {
        panels.classList.remove('active')
    })
}