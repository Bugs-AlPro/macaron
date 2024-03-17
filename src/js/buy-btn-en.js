'use strict'

const windowLinks = document.querySelectorAll('.payment-window__link');
const linkGeneral = document.querySelector('.payment-window__link-general');
const linkShells = document.querySelector('.payment-window__link-shells');
const linkFillings = document.querySelector('.payment-window__link-fillings');
const linkInstagram = document.querySelector('.payment-window__link-instagram');
const linkAll = document.querySelector('.payment-window__link-all');

const windowCover = document.querySelector('.payment-window-cover');
const windowCloseBtn = document.querySelector('.payment-window__close');
const paymentWindow = document.querySelector('.payment-window');

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

const generalCourseBtn = document.querySelector('.generalCourseBtn');
generalCourseBtn.addEventListener('click', () => {
    windowCover.classList.add('payment-window-cover--show');
    paymentWindow.classList.add('payment-window--show');

    for (let item of windowLinks) {
        item.classList.remove('payment-window__flex');
    }

    linkGeneral.classList.add('payment-window__flex');
    // gtag('event', 'courseBtn');
}
)

const shellsBtn = document.querySelector('.shellsBtn');
shellsBtn.addEventListener('click', () => {
    windowCover.classList.add('payment-window-cover--show');
    paymentWindow.classList.add('payment-window--show');

    for (let item of windowLinks) {
        item.classList.remove('payment-window__flex');
    }

    linkShells.classList.add('payment-window__flex');
    // gtag('event', 'shellsBtn');
}
)
const fillingsBtn = document.querySelector('.fillingsBtn');
fillingsBtn.addEventListener('click', () => {
    windowCover.classList.add('payment-window-cover--show');
    paymentWindow.classList.add('payment-window--show');

    for (let item of windowLinks) {
        item.classList.remove('payment-window__flex');
    }

    linkFillings.classList.add('payment-window__flex');
    // gtag('event', 'fillingsBtn');
}
)
const instagramBtn = document.querySelector('.instagramBtn');
instagramBtn.addEventListener('click', () => {
    windowCover.classList.add('payment-window-cover--show');
    paymentWindow.classList.add('payment-window--show');

    for (let item of windowLinks) {
        item.classList.remove('payment-window__flex');
    }

    linkInstagram.classList.add('payment-window__flex');
    // gtag('event', 'instBtn');
}
)
const allBtn = document.querySelector('.allBtn');
allBtn.addEventListener('click', () => {
    windowCover.classList.add('payment-window-cover--show');
    paymentWindow.classList.add('payment-window--show');

    for (let item of windowLinks) {
        item.classList.remove('payment-window__flex');
    }

    linkAll.classList.add('payment-window__flex');
    // gtag('event', 'allBtn');
}
)

// for (let item of windowLinks) {
//     item.addEventListener('click', () => {
//         gtag('event', 'lava-btn');
//     }
//     )
// }
