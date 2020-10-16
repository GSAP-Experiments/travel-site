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

const mobileMenuEl  = document.querySelector(".js-mobile-menu"),
      hamburgerEl   = gsap.utils.toArray(".js-hamburger"),
      closeEl       = gsap.utils.toArray(".js-close"),
      closeLeftEl   = document.querySelector(".close--left"),
      closeRightEl  = document.querySelector(".close--right"),
      clickTl       = gsap.timeline({paused: true});

      let open = false;

function clicked(){
   clickTl
      .to(hamburgerEl, {
         duration: 0.4,
         scale: 0,
         ease: 'power2.easeOut',
         stagger: 0.2
      })
      .add(setDegrees(closeEl))
      .to(closeEl, {
         duration: 0.4,
         scale: 1,
         ease: 'power2.easeIn',
         stagger: 0.2   
      })
}

function playClicked(){
   if(!open){
      clickTl.play();
      open = true;
   }else if(open){
      clickTl.reverse();
      open = false;
   }
   
}

function setDegrees(elements){

  elements.forEach((element, i) => {
  
    if (i === 0) {
       gsap.set(element, {rotation: 45})
    } else if (i === 1) {
      gsap.set(element, { rotation: -45 });
    }

  });
}

export default function menu(){
   clicked();
   mobileMenuEl.addEventListener('click', playClicked);
}



