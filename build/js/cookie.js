'use strict'

const cookieBtnYes = document.querySelector('.consent__btn--yes');
const cookieBtnNo = document.querySelector('.consent__btn--no');
const cookieSection = document.querySelector('.consent');

function disableAnalytics() {
    var script = document.createElement('script');
    script.innerHTML = "window['ga-disable-G-GH6SCG1VL8'] = true;"; // Замените UA-XXXXXXXXX-Y на ваш идентификатор отслеживания
    document.head.appendChild(script);
}

cookieBtnNo.addEventListener('click', () => {
    cookieSection.classList.toggle('consent--close');
    disableAnalytics();
})
cookieBtnYes.addEventListener('click', () => {
    cookieSection.classList.toggle('consent--close');
    fbq('consent', 'grant');

})
