'use strict'

const offerItems = document.querySelectorAll('.offer-item__btn');
for (let offerItem of offerItems) {
  offerItem.addEventListener('click', () => {
    offerItem.classList.toggle('offer-item__btn--open');
    offerItem.nextElementSibling.classList.toggle('offer-item__body--open');
  })
}
const paymentItems = document.querySelectorAll('.payment-type__btn');
for (let paymentItem of paymentItems) {
  paymentItem.addEventListener('click', () => {
    paymentItem.classList.toggle('payment-type__btn--open');
    paymentItem.nextElementSibling.classList.toggle('payment-type__payment--open');
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

const paymentBtn = document.querySelector('.payment-list__btn');
paymentBtn.addEventListener('click', () => {
  paymentBtn.classList.toggle('payment-list__btn--open');
  paymentBtn.nextElementSibling.classList.toggle('payment-list__payment--open');
})


const summaryBtns = document.querySelectorAll('.summary__btn');

for (let summaryBtn of summaryBtns) {
  summaryBtn.addEventListener('click', () => {
    for (let summaryBtn of summaryBtns) {
      summaryBtn.classList.remove('summary__btn--open');
      summaryBtn.nextElementSibling.classList.remove('popup--open');
    }
    summaryBtn.classList.toggle('summary__btn--open');
    summaryBtn.nextElementSibling.classList.toggle('popup--open');
  })

}
