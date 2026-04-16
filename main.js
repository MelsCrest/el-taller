'use strict';
const header = document.querySelector('.js-header');
const logo = document.querySelector('.js-logo');
const menu = document.querySelector('.js-menu');
const hero = document.getElementById('hero');
const heroHeight = hero.offsetHeight;
const dropDownMenu = document.querySelector('.dropdown-menu');

/*menu - scroll - change of img & height*/
window.addEventListener('scroll', ()=>{
  if(window.scrollY > heroHeight){
    header.classList.add('header-scroll');
    logo.classList.add('logo-scroll');
    logo.setAttribute('src','/images/logoletrasvec.svg');
    menu.classList.add('menu-scroll');
    dropDownMenu.classList.add('dropdown-scroll');
  }else{
    header.classList.remove('header-scroll');
    logo.setAttribute('src','/images/logo1vec-sin-bg.svg');
    logo.classList.remove('logo-scroll');
    menu.classList.remove('menu-scroll');
    dropDownMenu.classList.remove('dropdown-scroll');
  }
});
/*menu - drop-down*/
menu.addEventListener('click', ()=>{
  dropDownMenu.classList.toggle('hidden');
});

/*save height menu*/
document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    // Detect current header height (in case it changes)
    let currentHeaderHeight = header.offsetHeight;

    // Obtain superior position of destination
    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;

    // Scroll to the set position
    window.scrollTo({
      top: targetPosition - currentHeaderHeight,
      behavior: 'smooth'
    });

    // Ocultar menú desplegable en móviles si está abierto
    // dropDownMenu.classList.add('hidden');
  });
});

// DESCUBRE MÁS button
// document.getElementById('scrollToWorkshop').addEventListener('click',()=>{
//   document.getElementById('workshops').scrollIntoView({behavior:'smooth'});
// });
document.getElementById('scrollToWorkshop').addEventListener('click', function() {
  const workshops = document.getElementById('workshops');
  const headerHeight = 95;
  const yOffset = workshops.getBoundingClientRect().top + window.pageYOffset - headerHeight;
  window.scrollTo({ top: yOffset, behavior: 'smooth' });
});

// CONTACTO button
document.getElementById('scrollToFooter').addEventListener('click',()=>{
  document.getElementById('contact').scrollIntoView({behavior:'smooth'});
});

// MODAL BOX - Workshops info
const modal = document.getElementById("js-modal");
const classesBtn = document.getElementById("js-classesBtn");
const workshopsBtn = document.getElementById("js-workshopsBtn");
const closeBtn = document.getElementsByClassName("js-close")[0];
const closeModal = document.querySelector('.close-modal');

/*LEER MÁS buttons*/
document.querySelectorAll('.js-readmore-btn').forEach(button =>{
  button.addEventListener('click', ()=>{
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "block";
    }
  });
});

/*Drop-down article*/
document.querySelectorAll('.js-class-name').forEach(header =>{
  header.addEventListener('click', ()=>{
    const targetClass = header.getAttribute('data-target');
    const article = document.querySelector(`.${targetClass}`);
    const arrow = header.querySelector('.arrow');

    article.classList.toggle('hidden');
    arrow.classList.toggle('rotated');
  })
})

// /*Close Modal*/
// closeModal.addEventListener('click', ()=>{
//   modal.style.display = "none";
// });
document.querySelectorAll('.js-close').forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    const modal = closeBtn.closest('.modal');
    if (modal) {
      modal.style.display = "none";
    }
  });
});

// When the user clicks anywhere outside of the modal, close it
// window.addEventListener('click', (e)=>{
//   if(e.target === modal){
//     modal.style.display = "none";
//   }
// });
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = "none";
  }
});