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

// const windowBtn1 = document.querySelector('.payment-window__btn1');
// const windowBtn2 = document.querySelector('.payment-window__btn2');
// const windowBtn3 = document.querySelector('.payment-window__btn3');
// const windowBtn4 = document.querySelector('.payment-window__btn4');
// const windowBtn5 = document.querySelector('.payment-window__btn5');

// windowBtn1.addEventListener('click', () => {
//     if (windowBtn1.classList.contains('payment-window__btn--active')) {
//         windowLink.classList.remove('payment-window__links-2');
//         windowLink.classList.remove('payment-window__links-3');
//         windowLink.classList.remove('payment-window__links-4');
//         windowLink.classList.remove('payment-window__links-5');
//         windowLink.classList.add('payment-window__links-1');
//     }
// }
// )
// windowBtn2.addEventListener('click', () => {
//     if (windowBtn2.classList.contains('payment-window__btn--active')) {
//         windowLink.classList.remove('payment-window__links-1');
//         windowLink.classList.remove('payment-window__links-3');
//         windowLink.classList.remove('payment-window__links-4');
//         windowLink.classList.remove('payment-window__links-5');
//         windowLink.classList.add('payment-window__links-2');
//     }
// }
// )
// windowBtn3.addEventListener('click', () => {
//     if (windowBtn3.classList.contains('payment-window__btn--active')) {
//         windowLink.classList.remove('payment-window__links-1');
//         windowLink.classList.remove('payment-window__links-2');
//         windowLink.classList.remove('payment-window__links-4');
//         windowLink.classList.remove('payment-window__links-5');
//         windowLink.classList.add('payment-window__links-3');
//     }
// }
// )
// windowBtn4.addEventListener('click', () => {
//     if (windowBtn4.classList.contains('payment-window__btn--active')) {
//         windowLink.classList.remove('payment-window__links-1');
//         windowLink.classList.remove('payment-window__links-2');
//         windowLink.classList.remove('payment-window__links-3');
//         windowLink.classList.remove('payment-window__links-5');
//         windowLink.classList.add('payment-window__links-4');
//     }
// }
// )
// windowBtn5.addEventListener('click', () => {
//     if (windowBtn5.classList.contains('payment-window__btn--active')) {
//         windowLink.classList.remove('payment-window__links-1');
//         windowLink.classList.remove('payment-window__links-2');
//         windowLink.classList.remove('payment-window__links-3');
//         windowLink.classList.remove('payment-window__links-4');
//         windowLink.classList.add('payment-window__links-5');
//     }
// }
// )

const windowCover = document.querySelector('.payment-window-cover');
const windowCloseBtn = document.querySelector('.payment-window__close');
const paymentWindow = document.querySelector('.payment-window');
// const paymentWindowBtn1 = document.querySelector('.payment-button__btn1');
// const paymentWindowBtn2 = document.querySelector('.payment-button__btn2');

// paymentWindowBtn1.addEventListener('click', () => {
//     windowCover.classList.add('payment-window-cover--show');
//     paymentWindow.classList.add('payment-window--show');
// }
// )
// paymentWindowBtn2.addEventListener('click', () => {
//     windowCover.classList.add('payment-window-cover--show');
//     paymentWindow.classList.add('payment-window--show');
//     // windowCloseBtn.classList.add('payment__window--show');
// }
// )
windowCover.addEventListener('click', () => {
    windowCover.classList.remove('payment-window-cover--show');
    paymentWindow.classList.remove('payment-window--show');
}
)
windowCloseBtn.addEventListener('click', () => {
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

const generalCourseBtn = document.querySelector('.generalCourseBtn');
generalCourseBtn.addEventListener('click', () => {
    windowCover.classList.add('payment-window-cover--show');
    paymentWindow.classList.add('payment-window--show');
    // windowCloseBtn.classList.add('payment__window--show');

    // windowBtn5.classList.remove('payment-window__btn--active');
    // windowBtn4.classList.remove('payment-window__btn--active');
    // windowBtn3.classList.remove('payment-window__btn--active');
    // windowBtn2.classList.remove('payment-window__btn--active');
    // windowBtn1.classList.add('payment-window__btn--active');

    windowLink.classList.remove('payment-window__links-5');
    windowLink.classList.remove('payment-window__links-4');
    windowLink.classList.remove('payment-window__links-3');
    windowLink.classList.remove('payment-window__links-2');
    windowLink.classList.add('payment-window__links-1');
}
)
const shellsBtn = document.querySelector('.shellsBtn');
shellsBtn.addEventListener('click', () => {
    windowCover.classList.add('payment-window-cover--show');
    paymentWindow.classList.add('payment-window--show');
    // windowCloseBtn.classList.add('payment__window--show');

    // windowBtn5.classList.remove('payment-window__btn--active');
    // windowBtn4.classList.remove('payment-window__btn--active');
    // windowBtn3.classList.remove('payment-window__btn--active');
    // windowBtn1.classList.remove('payment-window__btn--active');
    // windowBtn2.classList.add('payment-window__btn--active');

    windowLink.classList.remove('payment-window__links-5');
    windowLink.classList.remove('payment-window__links-4');
    windowLink.classList.remove('payment-window__links-3');
    windowLink.classList.remove('payment-window__links-1');
    windowLink.classList.add('payment-window__links-2');
}
)
const fillingsBtn = document.querySelector('.fillingsBtn');
fillingsBtn.addEventListener('click', () => {
    windowCover.classList.add('payment-window-cover--show');
    paymentWindow.classList.add('payment-window--show');
    // windowCloseBtn.classList.add('payment__window--show');

    // windowBtn5.classList.remove('payment-window__btn--active');
    // windowBtn4.classList.remove('payment-window__btn--active');
    // windowBtn2.classList.remove('payment-window__btn--active');
    // windowBtn1.classList.remove('payment-window__btn--active');
    // windowBtn3.classList.add('payment-window__btn--active');

    windowLink.classList.remove('payment-window__links-5');
    windowLink.classList.remove('payment-window__links-4');
    windowLink.classList.remove('payment-window__links-2');
    windowLink.classList.remove('payment-window__links-1');
    windowLink.classList.add('payment-window__links-3');
}
)
const instagramBtn = document.querySelector('.instagramBtn');
instagramBtn.addEventListener('click', () => {
    windowCover.classList.add('payment-window-cover--show');
    paymentWindow.classList.add('payment-window--show');
    // windowCloseBtn.classList.add('payment__window--show');

    // windowBtn5.classList.remove('payment-window__btn--active');
    // windowBtn3.classList.remove('payment-window__btn--active');
    // windowBtn2.classList.remove('payment-window__btn--active');
    // windowBtn1.classList.remove('payment-window__btn--active');
    // windowBtn4.classList.add('payment-window__btn--active');

    windowLink.classList.remove('payment-window__links-5');
    windowLink.classList.remove('payment-window__links-3');
    windowLink.classList.remove('payment-window__links-2');
    windowLink.classList.remove('payment-window__links-1');
    windowLink.classList.add('payment-window__links-4');
}
)
const allBtn = document.querySelector('.allBtn');
allBtn.addEventListener('click', () => {
    windowCover.classList.add('payment-window-cover--show');
    paymentWindow.classList.add('payment-window--show');
    // windowCloseBtn.classList.add('payment__window--show');

    // windowBtn4.classList.remove('payment-window__btn--active');
    // windowBtn3.classList.remove('payment-window__btn--active');
    // windowBtn2.classList.remove('payment-window__btn--active');
    // windowBtn1.classList.remove('payment-window__btn--active');
    // windowBtn5.classList.add('payment-window__btn--active');

    windowLink.classList.remove('payment-window__links-4');
    windowLink.classList.remove('payment-window__links-3');
    windowLink.classList.remove('payment-window__links-2');
    windowLink.classList.remove('payment-window__links-1');
    windowLink.classList.add('payment-window__links-5');
}
)


// const paymentWindowLinks = document.querySelectorAll('.payment-window__link');
// for (let paymentWindowLink of paymentWindowLinks) {
//     paymentWindowLink.addEventListener('click', () => {
//         gtag('event', 'lava-btn');
//     }
//     )
// }

// paymentWindowBtn1.addEventListener('click', () => {
//     gtag('event', 'buy-btn1');
// }
// )
// paymentWindowBtn2.addEventListener('click', () => {
//     gtag('event', 'buy-btn2');
// }
// )
// const anotherPayment = document.querySelector('.payment-list__btn');
// anotherPayment.addEventListener('click', () => {
//     gtag('event', 'another');
// }
// )

