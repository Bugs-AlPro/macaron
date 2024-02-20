'use strict'

const cookieBtnYes = document.querySelector('.cookie__btn--yes');

function enableAnalytics() {
    var script = document.createElement('script');
    script.innerHTML =
        window['ga-disable-G-GH6SCG1VL8'] = false;
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-GH6SCG1VL8');

    document.head.appendChild(script);
}

cookieBtnYes.addEventListener('click', () => {
    fbq('consent', 'grant');
    enableAnalytics();
})
