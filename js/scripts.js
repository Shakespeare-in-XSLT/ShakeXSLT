
const options = {
  animateHistoryBrowsing: false,
  animationSelector: '[class*="transition-"]',
  containers: ["#swup"],
  cache: true,
  plugins: [new SwupBodyClassPlugin(), new SwupHeadPlugin()],
  linkSelector:
  'a[href^="' +
  window.location.origin +
  '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
  skipPopStateHandling: function(event) {
    if (event.state && event.state.source == "swup") {
      return false;
    }
    return true;
  }
};

const swup = new Swup(options);



document.addEventListener('swup:contentReplaced', (event) => {
  $('.header__menu').removeClass('header__menu--open');
  $('.icon-hamburger').removeClass('icon-hamburger--open');
}); 

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.body.classList.add( "scroll-down" );
  } else {
    document.body.classList.remove( "scroll-down" );
  }
}

let fabTrigger = document.querySelector('.fab-trigger');
fabTrigger.addEventListener("click", function() {

  document.body.classList.toggle('fab-open');

});


const theme = {
  STYLE_1: 'style1600'
}



let style1600Trigger = document.querySelector('.trigger1600');
style1600Trigger.addEventListener("click", function() {
  
  
  document.body.classList.toggle(theme.STYLE_1);
  document.querySelector('#hero-image').src="img/hero/shakespeare_1600.webp";


});





function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}



function sidebarDetect() {
    if (document.querySelector('#sidebar')) {
      let sidebarTrigger = document.querySelector('.sidebar-trigger');
           sidebarTrigger.addEventListener('click', function() {

            document.querySelector('.sidebar').classList.toggle('sidebar-open');
            document.querySelector('main').classList.toggle('main-sidebar-open');
            document.querySelector('header').classList.toggle('header-sidebar-open');
            document.querySelector('.sidebar-trigger').classList.toggle('sidebar-open');

    });
  }
}

sidebarDetect()



$( document ).ready(function() {

  $( ".header__icon" ).on('click', function() {
    $('.header__menu').toggleClass('header__menu--open');
    $('.icon-hamburger').toggleClass('icon-hamburger--open');
  });

  $(window).load(function(){
    $('.preloader').fadeOut('fast');
    $('.header, .aside').addClass('is-inview');

  });


});