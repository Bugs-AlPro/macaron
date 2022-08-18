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

const costsBtns = document.querySelectorAll('.currency__btn');
const costsBtnUsd = document.querySelector('.currency__btn--usd');
const costsBtnRub = document.querySelector('.currency__btn--rub');
const costsBtnEur = document.querySelector('.currency__btn--eur');
const costsBox = document.querySelector('.costs__box');
const costsBoxes = document.querySelectorAll('.costs__box');

costsBtnUsd.addEventListener('click', () => {
  if (costsBtnUsd.classList.contains('currency__btn--current')) {
    costsBtnUsd.classList.remove('currency__btn--current');
  } else {
    costsBtnUsd.classList.add('currency__btn--current');
    costsBtnRub.classList.remove('currency__btn--current');
    costsBtnEur.classList.remove('currency__btn--current');

    for (let item of costsBoxes) {
      item.classList.add('costs__box--left');
      item.classList.remove('costs__box--center');
      item.classList.remove('costs__box--right');
    }


  }
}
)
costsBtnEur.addEventListener('click', () => {
  if (costsBtnEur.classList.contains('currency__btn--current')) {
    costsBtnEur.classList.remove('currency__btn--current');
  } else {
    costsBtnEur.classList.add('currency__btn--current');
    costsBtnRub.classList.remove('currency__btn--current');
    costsBtnUsd.classList.remove('currency__btn--current');

    for (let item of costsBoxes) {
      item.classList.add('costs__box--right');
      item.classList.remove('costs__box--center');
      item.classList.remove('costs__box--left');
    }

  }
}
)

costsBtnRub.addEventListener('click', () => {
  if (costsBtnRub.classList.contains('currency__btn--current')) {
    costsBtnRub.classList.remove('currency__btn--current');
  } else {
    costsBtnRub.classList.add('currency__btn--current');
    costsBtnUsd.classList.remove('currency__btn--current');
    costsBtnEur.classList.remove('currency__btn--current');

    for (let item of costsBoxes) {
      item.classList.add('costs__box--center');
      item.classList.remove('costs__box--left');
      item.classList.remove('costs__box--right');
    }
  }
}
)

const costsBtnMenu = document.querySelector('.header-menu');
const costsNav = document.querySelector('.nav');
costsBtnMenu.addEventListener('click', () => {
  costsBtnMenu.classList.toggle('header-menu--open');
  costsBtnMenu.nextElementSibling.classList.toggle('nav--open');
})

const headerElement = document.querySelector('.header-top');
window.addEventListener('scroll', (evt) => {
  headerElement.classList.toggle('color', window.pageYOffset > 100);
  headerElement.classList.toggle('color2', window.pageYOffset > 400);
});

const videoBtn = document.querySelector('.video__btn');
const videoBox = document.querySelector('.video');
videoBtn.addEventListener('click', () => {
  videoBox.classList.toggle('video--open');
  videoBtn.classList.toggle('video__btn--open');
})