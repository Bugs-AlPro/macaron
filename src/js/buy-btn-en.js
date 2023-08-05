'use strict'
const windowBtns = document.querySelectorAll('.payment-window__btn');
const windowLink = document.querySelector('.payment-window__links');
for (let windowBtn of windowBtns) {
    windowBtn.addEventListener('click', () => {
        for (let windowBtn of windowBtns) {
            windowBtn.classList.remove('payment-window__btn--active');
        }
        windowBtn.classList.toggle('payment-window__btn--active');
    })
}
const windowBtn1 = document.querySelector('.payment-window__btn1');
const windowBtn2 = document.querySelector('.payment-window__btn2');
const windowBtn3 = document.querySelector('.payment-window__btn3');


windowBtn1.addEventListener('click', () => {
    if (windowBtn1.classList.contains('payment-window__btn--active')) {
        windowLink.classList.remove('payment-window__links-2');
        windowLink.classList.remove('payment-window__links-3');
        windowLink.classList.add('payment-window__links-1');
    }
}
)
windowBtn2.addEventListener('click', () => {
    if (windowBtn2.classList.contains('payment-window__btn--active')) {
        windowLink.classList.remove('payment-window__links-1');
        windowLink.classList.remove('payment-window__links-3');
        windowLink.classList.add('payment-window__links-2');
    }
}
)
windowBtn3.addEventListener('click', () => {
    if (windowBtn3.classList.contains('payment-window__btn--active')) {
        windowLink.classList.remove('payment-window__links-1');
        windowLink.classList.remove('payment-window__links-2');
        windowLink.classList.add('payment-window__links-3');
    }
}
)

const windowCover = document.querySelector('.payment-window-cover');
const windowCloseBtn = document.querySelector('.payment-window__close');
const paymentWindow = document.querySelector('.payment-window');
const paymentWindowBtn1 = document.querySelector('.payment-button__btn1');
const paymentWindowBtn2 = document.querySelector('.payment-button__btn2');

paymentWindowBtn1.addEventListener('click', () => {
    windowCover.classList.add('payment-window-cover--show');
    paymentWindow.classList.add('payment-window--show');
}
)
paymentWindowBtn2.addEventListener('click', () => {
    windowCover.classList.add('payment-window-cover--show');
    paymentWindow.classList.add('payment-window--show');
}
)
windowCover.addEventListener('click', () => {
    windowCover.classList.remove('payment-window-cover--show');
    paymentWindow.classList.remove('payment-window--show');
}
)
windowCloseBtn.addEventListener('click', () => {
    windowCover.classList.remove('payment-window-cover--show');
    paymentWindow.classList.remove('payment-window--show');
    windowCloseBtn.classList.remove('payment__window--show');
}
)

const buyOfferBtn1 = document.querySelector('.offer-i-head__btn1');
buyOfferBtn1.addEventListener('click', () => {
    windowCover.classList.add('payment-window-cover--show');
    paymentWindow.classList.add('payment-window--show');

    windowBtn3.classList.remove('payment-window__btn--active');
    windowBtn2.classList.remove('payment-window__btn--active');
    windowBtn1.classList.add('payment-window__btn--active');

    windowLink.classList.remove('payment-window__links-1');
    windowLink.classList.remove('payment-window__links-2');
    windowLink.classList.add('payment-window__links-1');
}
)
const buyOfferBtn2 = document.querySelector('.offer-i-head__btn2');
buyOfferBtn2.addEventListener('click', () => {
    windowCover.classList.add('payment-window-cover--show');
    paymentWindow.classList.add('payment-window--show');

    windowBtn3.classList.remove('payment-window__btn--active');
    windowBtn1.classList.remove('payment-window__btn--active');
    windowBtn2.classList.add('payment-window__btn--active');


    windowLink.classList.remove('payment-window__links-3');
    windowLink.classList.remove('payment-window__links-1');
    windowLink.classList.add('payment-window__links-2');
}
)
const buyOfferBtn3 = document.querySelector('.offer-i-head__btn3');
buyOfferBtn3.addEventListener('click', () => {
    windowCover.classList.add('payment-window-cover--show');
    paymentWindow.classList.add('payment-window--show');


    windowBtn2.classList.remove('payment-window__btn--active');
    windowBtn1.classList.remove('payment-window__btn--active');
    windowBtn3.classList.add('payment-window__btn--active');

    windowLink.classList.remove('payment-window__links-2');
    windowLink.classList.remove('payment-window__links-1');
    windowLink.classList.add('payment-window__links-3');
}
)

const paymentWindowLinks = document.querySelectorAll('.payment-window__link');
for (let paymentWindowLink of paymentWindowLinks) {
    paymentWindowLink.addEventListener('click', () => {
        gtag('event', 'lava-btn');
    }
    )
}

paymentWindowBtn1.addEventListener('click', () => {
    gtag('event', 'buy-btn1');
}
)
paymentWindowBtn2.addEventListener('click', () => {
    gtag('event', 'buy-btn2');
}
)
const anotherPayment = document.querySelector('.payment-list__btn');
anotherPayment.addEventListener('click', () => {
    gtag('event', 'another');
}
)