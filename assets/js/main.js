
(function() {
    "use strict";

/**
   * Easy selector helper function
   */
 const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }


  
/**
   * Back to top button
   */
 let backtotop = select('.back-to-top')
 if (backtotop) {
   const toggleBacktotop = () => {
     if (window.scrollY > 100) {
       backtotop.classList.add('active')
     } else {
       backtotop.classList.remove('active')
     }
   }
   window.addEventListener('load', toggleBacktotop)
   onscroll(document, toggleBacktotop)
 }



/**
   * Mobile nav toggle
   */
   on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })



 /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)





/**
   * Hero Slider
   */
 var swiper = new Swiper(".sliderFeaturedPosts", {
  spaceBetween: 0,
  speed: 500,
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
  },
});





 /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }



/**
   * Animation on scroll
   */
 window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });




/**
   * Navbar links active state 
   */
/* tem que ter a classe .nav-link nas tags a */
/* document.querySelectorAll('.nav-link').forEach
(link => {
  console.log(link);
  console.log(link.href);
  console.log(link.href, window.location.href)
  if(link.href === window.location.href){
    link.setAttribute('aria-current', 'page')
  }
}) */

/* const activePage = window.location.pathname;
console.log(activePage);
const navLinks = document.querySelectorAll('nav a').forEach
(link => {
  // console.log(link.href)
  if(link.href.includes(`${activePage}`)){
    console.log(`${activePage}`);
    link.classList.add('active');
  }
}) */


document.querySelectorAll('nav a').forEach
(link => {
 /*  console.log(link);
  console.log(link.href);
  console.log(link.href, window.location.href) */
  if(link.href === window.location.href){
    link.classList.add('active');
  }
})

})()
