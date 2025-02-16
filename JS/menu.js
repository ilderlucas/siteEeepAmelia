window.addEventListener("scroll", function(){
    let header = this.document.querySelector('#header');
    header.classList.toggle('rolagemMenu', this.window.scrollY > 0);
})

let btnMenu = document.getElementById('btn-abrir-menu')
let menuMobile = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay')

btnMenu.addEventListener('click', ()=>{
    menuMobile.classList.add('abrir-menu')
})

menuMobile.addEventListener('click', ()=>{
    menuMobile.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menuMobile.classList.remove('abrir-menu')
})

