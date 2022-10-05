var modal = document.querySelector('.modal')
var body = document.querySelector('body')
var btnMenuMobile = document.querySelector('.menu-mobile')
var spanMenuMobile = document.querySelector('.menu-mobile span')
var menu = document.querySelector('.menu')


function carregarPagina() {

    setTimeout(() => {

        abrirModal()

        setTimeout(() => {

            fecharModal()

        }, 4000)
    }) // tempo de aparecimento do modal imediato

}

function abrirModal() {
    modal.style.display = 'flex'
    body.style.overflow = 'hidden'
}

function fecharModal() {
    modal.style.display = 'none'
    body.style.overflow = 'auto'
}

document.onload = carregarPagina()

btnMenuMobile.addEventListener("click", () => {
    menu.classList.toggle('active')

    if(spanMenuMobile.textContent == 'close') {
        spanMenuMobile.textContent = 'menu'
        spanMenuMobile.value = 'menu'
    } else {
        spanMenuMobile.textContent = 'close'
        spanMenuMobile.value = 'close'
    }
    // console.log(menu)
})
