// JavaScript for toggling the hamburger menu
const hamburger = document.querySelector('.hamburger');
const navbarRight = document.querySelector('.navbar-right');

hamburger.addEventListener('click', () => {
  navbarRight.classList.toggle('active');
});
