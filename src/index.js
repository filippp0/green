import '@babel/polyfill'
import './index.html';
import './index.scss';
const burgerButton = document.querySelector('.header__burger');
const navBar = document.querySelector('.header__nav');
const closeBurger = document.querySelector('.header__burger-close');

(function () {
  let i = true;
  burgerButton.addEventListener('click', () => {
      navBar.classList.add('header__nav_active');
  })
  closeBurger.addEventListener('click', () => {
    navBar.classList.remove('header__nav_active');
  })
})()

