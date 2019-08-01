import jump from 'jump.js/dist/jump.module';
const sal = require('sal.js');
// - Install for scroll effects
sal();
// * sal html format
/*

 data-sal="slide-up"
 data-sal-delay="500"
 data-sal-easing="ease-out-bounce"
 data-sal-duration="1000"
 
*/

// - Top Button
const header__button = document.getElementById('header__button');

// * Nav button scroll effects
header__button.addEventListener('click', () => {
  jump('.main-nav', {
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
    offset: -150
  });
});

blogNav.addEventListener('click', () => {
  jump('#blog', {
    duration: 1000,
    offset: -100
  });
});

meetupNav.addEventListener('click', () => {
  jump('#meetup', {
    duration: 1000,
    offset: -100
  });
});

contactNav.addEventListener('click', () => {
  jump('#footer', {
    duration: 1000,
    offset: 50
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
