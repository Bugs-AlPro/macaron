'use strict'

const cookieBtnYes = document.querySelector('.cookie__btn--yes');
const cookieBtnNo = document.querySelector('.cookie__btn--no');
const cookieSection = document.querySelector('.cookie');

function disableAnalytics() {
    var script = document.createElement('script');
    script.innerHTML = "window['ga-disable-G-GH6SCG1VL8'] = true;"; // Замените UA-XXXXXXXXX-Y на ваш идентификатор отслеживания
    document.head.appendChild(script);
}

cookieBtnNo.addEventListener('click', () => {
    cookieSection.classList.toggle('cookie--close');
    disableAnalytics();
})
cookieBtnYes.addEventListener('click', () => {
    cookieSection.classList.toggle('cookie--close');
    fbq('consent', 'grant');

})
