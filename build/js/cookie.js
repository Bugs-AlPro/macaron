'use strict'

const cookieBtnYes = document.querySelector('.cookie__btn--yes');
const cookieBtnNo = document.querySelector('.cookie__btn--no');
const cookieSection = document.querySelector('.cookie');

function enableAnalytics() {
    var script = document.createElement('script');
    // script.innerHTML = window['ga-disable-G-GH6SCG1VL8'] = false; // Замените UA-XXXXXXXXX-Y на ваш идентификатор отслеживания

    script.innerHTML =
        window['ga-disable-G-GH6SCG1VL8'] = false;
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-GH6SCG1VL8');

    document.head.appendChild(script);
}

// cookieBtnNo.addEventListener('click', () => {
//     // cookieSection.classList.toggle('cookie--close');
//     // disableAnalytics();
// })
cookieBtnYes.addEventListener('click', () => {
    // cookieSection.classList.toggle('cookie--close');
    fbq('consent', 'grant');
    enableAnalytics();
})
