import jump from 'jump.js/dist/jump.module';
import sal from 'sal.js';
// - Install for scroll effects
sal();

const screenWidth = window.innerWidth;

// - Top Button
const header__button = document.getElementById('header__button');

// * Nav button scroll effects
header__button.addEventListener('click', () => {
  jump('.navbar', {
    duration: 1000,
    offset: 0
  });
});

// - Navigation buttons
const homeNav = document.getElementById('main-i');
const aboutNav = document.getElementById('about-i');
const blogNav = document.getElementById('blog-i');
const meetupNav = document.getElementById('meetup-i');
const contactNav = document.getElementById('contact-i');

// * Nav button scroll effects
homeNav.addEventListener('click', () => {
  jump('#top', {
    duration: 1000,
    offset: 0
  });
});

aboutNav.addEventListener('click', () => {
  jump('#about', {
    duration: 1000,
    offset: screenWidth > 992 ? -150 : -400
  });
});

blogNav.addEventListener('click', () => {
  jump('#blog', {
    duration: 1000,
    offset: screenWidth > 992 ? -100 : -350
  });
});

meetupNav.addEventListener('click', () => {
  jump('#meetup', {
    duration: 1000,
    offset: screenWidth > 992 ? -100 : -320
  });
});

contactNav.addEventListener('click', () => {
  jump('#footer', {
    duration: 1000,
    offset: screenWidth > 992 ? 50 : -140
  });
});

// - footer button
const footBtn = document.getElementById('launchBtn');

// * Nav button scroll effects
footBtn.addEventListener('click', () => {
  jump('#top', {
    duration: 1000,
    offset: 0
  });
});

