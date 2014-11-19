function loadFacebook() {
    window.location.href = "https://www.facebook.com/grindelwald.gaps"
}

function loadBehance() {
    window.location.href = "https://www.behance.net/rofrischmann"
}

function loadInstagram() {
    window.location.href = "http://instagram.com/rofrischmann"
}

function loadXing() {
    window.location.href = "https://www.xing.com/profile/Robin_Frischmann"
}

function loadContact() {
    window.location.href = "mailto:robin@rofrischmann.de"
}

function loadVCard() {
    window.location.href = "content/vcard/Robin Frischmann.vcf"
}

function showScroller() {
    if (document.childNodes[1].clientHeight < document.childNodes[1].scrollHeight) {
        setTimeout('scrollArrow.style.opacity = "0.8"', 500)
    }
}

function checkShowScroller() {
    setTimeout("showScroller()", 2e3)
}

function loadPage() {
    checkShowScroller()
}

function scrollBottom() {
    scrollArrow.style.opacity = "0.0"
}(function (e, t, n, r, i, s, o) {
    e.GoogleAnalyticsObject = i;
    e[i] = e[i] || function () {
        (e[i].q = e[i].q || []).push(arguments)
    }, e[i].l = 1 * new Date;
    s = t.createElement(n), o = t.getElementsByTagName(n)[0];
    s.async = 1;
    s.src = r;
    o.parentNode.insertBefore(s, o)
})(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");
ga("create", "UA-51308679-1", "rofrischmann.de");
ga("send", "pageview");
window.onload = loadPage;
window.onscroll = scrollBottom;
window.onresize = checkShowScroller