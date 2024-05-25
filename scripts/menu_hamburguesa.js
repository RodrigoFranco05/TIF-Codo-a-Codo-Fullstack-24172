document.addEventListener('DOMContentLoaded', (event) => {
const toggleMenuElement = document.getElementById('toggle_menu');
const mainMenuElement = document.getElementById('hamburger_nav_lista_de_paginas');

toggleMenuElement.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('hamburger_nav_lista_de_paginas--show');
})


const barraDolaresElement = document.getElementById('barra_dolares');

toggleMenuElement.addEventListener('click', ()=>{
    barraDolaresElement.classList.toggle('barra_dolares--show');
})
})