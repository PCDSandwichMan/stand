// - Regular screen highlight changes

const navItems = document.getElementsByClassName('nav-link');

const removeRemainingClasses = active => {
  Array.prototype.forEach.call(navItems, item => {
    return item != active && item.classList.remove('active');
  });
};

const findView = () => {
  //   console.log(window.pageYOffset);
  if (window.pageYOffset < 800) {
    removeRemainingClasses(navItems[0]);
    return navItems[0].classList.add('active');
  } else if (window.pageYOffset < 1350) {
    removeRemainingClasses(navItems[1]);
    return navItems[1].classList.add('active');
  } else if (window.pageYOffset < 2414) {
    removeRemainingClasses(navItems[2]);
    return navItems[2].classList.add('active');
  } else if (window.pageYOffset < 3239) {
    removeRemainingClasses(navItems[3]);
    return navItems[3].classList.add('active');
  } else if (window.pageYOffset > 6266) {
    removeRemainingClasses(navItems[4]);
    return navItems[4].classList.add('active');
  } else {
    removeRemainingClasses();
  }
};

window.addEventListener('scroll', findView);

// - resized hamburger animations
const hamburger = document.getElementsByClassName('navbar-toggler')[0];
// navItems.addEventListener('click', () => hamburger.click());
Array.prototype.forEach.call(navItems, item => {
  return item.addEventListener('click', () => {
    hamburger.click();
  });
});
