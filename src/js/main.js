'use strict'

const offerItems = document.querySelectorAll('.offer-item__btn');
for (let offerItem of offerItems) {
  offerItem.addEventListener('click', () => {
    offerItem.classList.toggle('offer-item__btn--open');
    offerItem.nextElementSibling.classList.toggle('offer-item__body--open');
  })
}
const paymentItems = document.querySelectorAll('.payment__btn');
for (let paymentItem of paymentItems) {
  paymentItem.addEventListener('click', () => {
    paymentItem.classList.toggle('payment__btn--open');
    paymentItem.nextElementSibling.classList.toggle('payment__description--open');
  })
}
