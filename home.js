var navActive = false
var hamburger = document.getElementById('hamburger');
var nav = document.getElementsByTagName('nav')[0];

hamburger.onclick = function() {
    if (navActive) {
        hamburger.style.position = 'relative'
        hamburger.children[0].removeAttribute('style')
        hamburger.children[1].removeAttribute('style')
        hamburger.children[2].removeAttribute('style')
        nav.style.display = 'none';
        navActive = false
    } else {
        hamburger.style.position = 'fixed';
        hamburger.children[0].setAttribute('style', 'top: 0; width: 90%; background: #3d5a76; transform: rotate(-45deg);')
        hamburger.children[1].setAttribute('style', 'width: 0%;')
        hamburger.children[2].setAttribute('style', 'top: 0; width: 90%; background: #3d5a76; transform: rotate(45deg);')
        nav.style.display = 'block';
        navActive = true
    }
}