'use strict'

const offerItems = document.querySelectorAll('.offer-item__btn');
for (let offerItem of offerItems) {
  offerItem.addEventListener('click', () => {
    offerItem.classList.toggle('offer-item__btn--open');
    offerItem.nextElementSibling.classList.toggle('offer-item__list--open');
  })
}
