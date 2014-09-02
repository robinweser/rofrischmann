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

function showScroller() {
    if (document.getElementById("wrapper").clientHeight < document.getElementById("wrapper").scrollHeight) {
        setTimeout('document.getElementById("scrollArrow").style.opacity = "0.8"', 500);
    }
}

function checkShowScroller() {
    setTimeout('showScroller()', 2000);
}

function loadPage() {
    checkShowScroller();
    document.getElementById("portrait").classList.remove("opacityZero");
    document.getElementById("portrait").style.width = "200px";
    document.getElementById("portrait").style.height = "200px";
}

function scrollBottom() {
    document.getElementById("scrollArrow").style.opacity = "0.0";
}
window.onload = loadPage;
window.onscroll = scrollBottom;
window.onresize = checkShowScroller;
