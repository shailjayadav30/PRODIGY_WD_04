const openButton = document.querySelector('.menu-button')
const closeButton = document.querySelector('.close-button')
const menu = document.querySelector('.mob-menu')

openButton.addEventListener('click', () => {
    menu.classList.remove('hidden');
    openButton.classList.add('hidden')
})

closeButton.addEventListener('click', () => {
  menu.classList.add('hidden');
  openButton.classList.remove('hidden')
})