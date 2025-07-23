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
    // logo.setAttribute('src','/images/logo3-VEC.svg');
    logo.setAttribute('src','/images/logoletrasvec.svg');
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

/*salvar altura menú*/
document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevenir comportamiento por defecto

    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    // Detectar altura actual del header (por si cambia)
    const currentHeaderHeight = header.offsetHeight;

    // Obtener posición superior del destino
    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;

    // Scroll a la posición ajustada
    window.scrollTo({
      top: targetPosition - currentHeaderHeight,
      behavior: 'smooth'
    });

    // Ocultar menú desplegable en móviles si está abierto
    // dropDownMenu.classList.add('hidden');
  });
});

//botón DESCUBRE MÁS
// document.getElementById('scrollToWorkshop').addEventListener('click',()=>{
//   document.getElementById('workshops').scrollIntoView({behavior:'smooth'});
// });

document.getElementById('scrollToWorkshop').addEventListener('click', function() {
  const workshops = document.getElementById('workshops');
  const headerHeight = 95;
  const yOffset = workshops.getBoundingClientRect().top + window.pageYOffset - headerHeight;
  window.scrollTo({ top: yOffset, behavior: 'smooth' });
});
//botón CONTACTO
document.getElementById('scrollToFooter').addEventListener('click',()=>{
  document.getElementById('contact').scrollIntoView({behavior:'smooth'});
});
