(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-51308679-1', 'rofrischmann.de');
ga('send', 'pageview');


function loadFacebook() {
    window.location.href = "https://www.facebook.com/grindelwald.gaps";
}

function loadBehance() {
    window.location.href = "https://www.behance.net/grindelwald";
}

function loadInstagram() {
    window.location.href = "http://instagram.com/rofrischmann";
}

function loadXing() {
    window.location.href = "https://www.xing.com/profile/Robin_Frischmann";
}

function loadContact() {
    window.location.href = "mailto:robin@rofrischmann.de";
}

function loadAnimateMe() {
    window.location.href = "https://bitbucket.org/Grindelwald/animateme.js";
}

function loadCalculateMe() {
    window.location.href = "https://bitbucket.org/Grindelwald/calculateme.js";
}

function loadVCard() {
    window.location.href = "content/vcard/Robin Frischmann.vcf";
}

function showScroller() {
    if (document.childNodes[1].clientHeight < document.childNodes[1].scrollHeight) {
        setTimeout('scrollArrow.style.opacity = "0.8"', 500);
    }
}

function checkShowScroller() {
    setTimeout('showScroller()', 2000);
}

function loadPage() {
    checkShowScroller();
    portrait.classList.remove("opacityZero");
}

function scrollBottom() {
    scrollArrow.style.opacity = "0.0";
}

window.onload = loadPage;
window.onscroll = scrollBottom;
window.onresize = checkShowScroller;
