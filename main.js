'use strict';
const header = document.querySelector('.js-header');
const logo = document.querySelector('.js-logo');
const menu = document.querySelector('.js-menu');
const hero = document.getElementById('hero');
const heroHeight = hero.offsetHeight;
const dropDownMenu = document.querySelector('.dropdown-menu');

/*menu - scroll*/
window.addEventListener('scroll', ()=>{
  if(window.scrollY > heroHeight){
    header.classList.add('header-scroll');
    logo.classList.add('logo-scroll');
    logo.setAttribute('src','/images/logo3-VEC.svg');
    menu.classList.add('menu-scroll');
    dropDownMenu.classList.add('dropdown-scroll');
  }else{
    header.classList.remove('header-scroll');
    logo.setAttribute('src','/images/logo1vec.svg');
    logo.classList.remove('logo-scroll');
    menu.classList.remove('menu-scroll');
    dropDownMenu.classList.remove('dropdown-scroll');
  }
});

/*menu - drop-down*/
menu.addEventListener('click', ()=>{
  dropDownMenu.classList.toggle('hidden');
});