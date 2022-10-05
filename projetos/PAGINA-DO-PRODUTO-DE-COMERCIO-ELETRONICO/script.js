var btnMinus = document.querySelector('.minus-icon')
var btnPlus = document.querySelector('.plus-icon')
var inputAmount = document.querySelector('.input-amount')
var btnAdd = document.querySelector('.btn-add')
var contentCart = document.querySelector('.content-cart')
var contentCartContent = document.querySelector('.content-cart .content')
var btnCart = document.querySelector('.nav-right svg')
var body = document.querySelector('body')
var amountCart = document.querySelector('.amount-cart')
var btnPrevious = document.querySelector('.btn-previous')
var btnNext = document.querySelector('.btn-next')
var img = document.querySelector('.slider img')
var btnCloseMenu = document.getElementById('btnCloseMenu')
var btnOpenMenu = document.getElementById('btnOpenMenu')
var menu = document.getElementById('menu')
var bigPicture = document.getElementById('image-principal')
var miniPictures = document.getElementById('image-secondary')
var btnMiniPictures = miniPictures.getElementsByClassName('miniPicture')
var cont = 1

for (var i = 0; i < btnMiniPictures.length; i++) {
    btnMiniPictures[i].addEventListener("click", function () {
        var current = document.getElementsByClassName('image-active');
        current[0].className = current[0].className.replace(' image-active', '');
        this.className += ' image-active';

        var altImg = justNumbers(this.alt)
        bigPicture.src = `images/image-product-${altImg}.jpg`
        bigPicture.alt = `Picture ${altImg}`
    })
}


function justNumbers(text) {
    var numbers = text.replace(/[^0-9]/g, '');
    return parseInt(numbers);
}

btnPrevious.addEventListener('click', () => {
    cont -= 1
    if (cont <= 0) cont = 4
    img.src = `images/image-product-${cont}.jpg`
})

btnNext.addEventListener('click', () => {
    cont += 1
    if (cont >= 5) cont = 1
    img.src = `images/image-product-${cont}.jpg`
})

btnCart.onclick = () => {
    contentCart.classList.toggle('active')
}

btnMinus.addEventListener('click', () => {
    inputAmount.value -= 1
    if (inputAmount.value < 0) {
        inputAmount.value = 0
    }
})

btnPlus.addEventListener('click', () => {
    inputAmount.value -= 1 * (-1)
})

btnAdd.addEventListener('click', () => {
    contentCartContent.innerHTML = `<div class="content-img-text">
    <img src="images/image-product-1.jpg" alt="Product 1">
    <div>
      <p>Fall Limited Edition Sneakers</p>
      <p>$125.00 x ${inputAmount.value} <span class="res">$${125.00 * inputAmount.value}</span>
      </p>
    </div>
    <svg class="deleteItem" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
  </div>
  <div class="btn-checkout">
    Checkout
  </div> `

    let deleteItem = document.querySelector('.content-cart .content svg')

    deleteItem.addEventListener('click', () => {
        contentCartContent.innerHTML = `Your cart is empty.`
        amountCart.innerHTML = `<input type="number" value="0" readonly>`
    })

    amountCart.innerHTML = `<input type="number" value="${inputAmount.value}" readonly>`
    inputAmount.value = 0
})

btnOpenMenu.onclick = () => {
    menu.style.display = 'block'
    btnPrevious.style.opacity = '0'
}

btnCloseMenu.onclick = () => {
    menu.style.display = 'none'
    btnPrevious.style.opacity = '1'
}