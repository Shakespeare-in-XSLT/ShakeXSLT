// SWUP page transition

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

// SWUP reloading javascript

document.addEventListener('swup:contentReplaced', (event) => {
  $('.header__menu').removeClass('header__menu--open');
  $('.icon-hamburger').removeClass('icon-hamburger--open');
}); // Allows to close the mobile menu automatically when I change page

document.addEventListener('swup:transitionEnd', (event) => {
  sidebarDetect();
  scroll.init();
  scrollDetect();
});

document.addEventListener('swup:willReplaceContent', (event) => {
  scroll.destroy();
  // sidebarDetect();
});

// SWUP page transition END

// LOCOMOTIVE Scroll

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

scroll.stop();

scroll.destroy();
document.addEventListener("DOMContentLoaded", function(event) { 
    scroll.init();
});

// LOCOMOTIVE Scroll END

function scrollDetect(){

  scroll.on('scroll', func => {

    var scroll_pos = 0;
    scroll_pos = scroll.scroll.instance.scroll.y;

    body_el = document.body;

    if(scroll_pos > 200) {
      body_el.classList.add( "scroll-down" );
    } else {
      body_el.classList.remove( "scroll-down" );
    }

  });

  scroll.on('call', func => {
    if(func == "bg-red"){
      $('body').toggleClass('bg-red');
    } else if(func == "bg-yellow"){
      $('body').toggleClass('bg-yellow');
    } else if(func == "bg-green"){
      $('body').toggleClass('bg-green');
    }

  });

}

scrollDetect();

// NEW CHUNK - ECMAScript 6

// Fab menu
let fabTrigger = document.querySelector('.fab-trigger');
fabTrigger.addEventListener("click", function() {

  document.body.classList.toggle('fab-open');

});

let styleTrigger = document.querySelector('.trigger1600');
styleTrigger.addEventListener("click", function() {

  document.body.classList.toggle('style1600');

});

// Sidebar
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

  /* Open Panel */
  $( ".bottom-icon-left" ).on('click', function() {
    $(".site-container").toggleClass("dark");
  });


  $(window).load(function(){
    $('.preloader').fadeOut('fast');
    $('.social-icons a, .bottom-icon-left, .bottom-icon-right, .header, .aside').addClass('is-inview');
    scroll.start();
  });


  /* Line Menu Animation */

  var nav = $( "#main-menu" );
  var line = $( ".line-menu" );

  var active = nav.find( ".active" );
  var pos = 0;
  var wid = 0;

  if(active.length){ // se active esiste
    pos = active.position().left; // prendo la position
    wid = active.width(); // prenda la larghezza dell'elemento con classe active
    line.css({
      left: pos,
      width: wid
    });
  }

  nav.find("ul li a").click(function() {

    if(!$(this).parent().hasClass("active")){ // if element doesn't have active class

      nav.find("ul li").removeClass("active"); // remove active class

      var _this = $(this);

      var position = _this.parent().position(); // recuperioamo posizione dell'elemento cliccato
      var width = _this.parent().width(); // recuperioamo la larghezza dell'elemento cliccato

      if(position.left >= pos) {

        line.animate({
          width: (width + (position.left - pos)) // allunghiamo la linea
        }, 300, function(){
          line.animate({
            width: width, // accorciamo la linea
            left: position.left // spostiam la linea
          }, 150);
          _this.parent().addClass("active"); // aggiungiam la classe active
        });

      } else {

        line.animate({
          left: position.left, // sposto la linea
          width: (wid + ( pos - position.left )) // allunghiamo la linea
        }, 300, function(){
          line.animate({
            width: width // accorcire la linea
          }, 150);
          _this.parent().addClass("active"); // aggiungiam la classe active
        });

      }

      pos = position.left; // resettimao i valori
      wid = width; // resettimao i valori


    }

  });

});