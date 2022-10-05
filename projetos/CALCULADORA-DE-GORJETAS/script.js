var inputs = document.querySelectorAll('.input')
var selectTip = document.getElementById('selectTip');
var tipAmountPerson = document.getElementById('tipAmountPerson')
var totalPerson = document.getElementById('totalPerson')
var porcents = 0

const btnPorcents = selectTip.getElementsByClassName('porcent')
const btnReset = document.getElementById('btnReset')
const txtAlertZero = document.getElementById('txtAlertZero')

inputs[1].style.textAlign = 'center'
tipAmountPerson.value = 0
totalPerson.value = 0

if(inputs[2].value == '' || inputs[2].value == 0) {
    porcents = 10
    for (var i = 0; i < btnPorcents.length; i++) {
        btnPorcents[i].addEventListener("click", function () {
            var current = document.getElementsByClassName('btnActive');
            current[0].className = current[0].className.replace(' btnActive', '');
            this.className += ' btnActive';
            var btnValue = parseInt(this.value)
            parseInt(btnValue)
            porcents = btnValue
            inputs[1].value = null
            if (inputs[2].value == '') {
                txtAlertZero.style.display = 'none'
            } else if (inputs[2].value == 0) {
                txtAlertZero.style.display = 'block'
            } else if (inputs[0].value == 0 || inputs[0].value == '' || inputs[2].value == 0 || inputs[2].value == '') {
                txtAlertZero.style.display = 'none'
            } else {
                calcularGorjeta()
            }
        })
    }
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onkeyup = () => {
        if (inputs[2].value == '') {
            txtAlertZero.style.display = 'none'
        } else if (inputs[2].value == 0) {
            txtAlertZero.style.display = 'block'
        } else if (inputs[0].value == 0 || inputs[0].value == '' || inputs[2].value == 0 || inputs[2].value == '') {
            txtAlertZero.style.display = 'none'
        } else if (inputs[1].value == 0 || inputs[1].value == '' ) {
            calcularGorjeta()
        } else {
            porcents = inputs[1].value
            calcularGorjeta()
        }
    }
}

function calcularGorjeta() {
    txtAlertZero.style.display = 'none'
    tipAmountPerson.value = `$ ${((parseInt(inputs[0].value) * (porcents / 100)) / parseInt(inputs[2].value)).toFixed(2)}`
    totalPerson.value = `$ ${((parseInt(inputs[0].value) + (parseInt(inputs[0].value) * (porcents / 100))) / parseInt(inputs[2].value)).toFixed(2)}`
}

btnReset.onclick = () => {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = ''
    }

    tipAmountPerson.value = 0
    totalPerson.value = 0
}