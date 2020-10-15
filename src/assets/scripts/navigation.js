/**
   * Objective: Open menu on click 
   * Steps:  
   *  1. Retrieve associated dom elements: 
   *     .js-mobile-menu, .js-hamburger
   *  2. click on .js-mobile and...
   *     
   * 
*/

import gsap from 'gsap';

const mobileMenuEl = document.querySelector(".js-mobile-menu"),
      hamburgerEl = gsap.utils.toArray('.js-hamburger');

function clicked(){
   gsap.to(hamburgerEl, {
      duration: 0.4,
      scale: 0,
      ease: 'power2.easeOut',
      stagger: 0.2
   })
}

export default function menu(){
   mobileMenuEl.addEventListener('click', clicked);
}



