const dropBtn = document.getElementById('header__button');
const navBar = document.getElementsByTagName('nav')[0];

dropBtn.on('click', scrollDown);

function scrollDown() {
    window.scrollIntoView(navBar);
};








