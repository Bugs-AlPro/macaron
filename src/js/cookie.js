'use strict'

const cookieBtnYes = document.querySelector('.cookie__btn--yes');

function consentGranted() {
    gtag("consent", "default", {
        ad_storage: "granted",
        analytics_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        wait_for_update: 500
    });

}

cookieBtnYes.addEventListener('click', () => {
    fbq('consent', 'grant');
    consentGranted();
    // Set a same-site cookie for first-party contexts
    document.cookie = 'cookie1=value1; SameSite=Lax';
    // Set a cross-site cookie for third-party contexts
    document.cookie = 'cookie2=value2; SameSite=None; Secure';
})
