var idConselho = document.querySelector('.idConselho')
var conselho = document.querySelector('.conselho')
var btnDado = document.querySelector('.btnDado')
const url = `https://api.adviceslip.com/advice`

btnDado.addEventListener('click', () => {
    gerarConselho()
})

window.onload = () => {
    gerarConselho()
}

function gerarConselho() {
    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(adviceData => {
            const Adviceobj = adviceData.slip
            idConselho.innerHTML = `${Adviceobj.id}`
            conselho.innerHTML = `<p>"${Adviceobj.advice}"</p>`
        })
        .catch(error => {
            console.log(error)
        })
}