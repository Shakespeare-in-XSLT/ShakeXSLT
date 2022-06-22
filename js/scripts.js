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
});

// SWUP page transition END

// LOCOMOTIVE Scroll

// const scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true
// });

// non usato

// new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"))

// scroll.destroy();
// document.addEventListener("jumpto", function(event) { 
//     scroll.init();
// });

// non usato fine

// function scrollDetectOpera() {
//     if (document.querySelector('#opera-text')) {
//       scroll.destroy();
//       document.addEventListener("jumpto", function(event) { 
//           scroll.init();
//       });
//   }
// }

// scrollDetectOpera();


// scroll.stop();


// LOCOMOTIVE Scroll END

// function scrollDetect(){

//   scroll.on('scroll', func => {

//     var scroll_pos = 0;
//     scroll_pos = scroll.scroll.instance.scroll.y;

//     body_el = document.body;

//     if(scroll_pos > 200) {
//       body_el.classList.add( "scroll-down" );
//     } else {
//       body_el.classList.remove( "scroll-down" );
//     }

//   });

//   scroll.on('call', func => {
//     if(func == "bg-red"){
//       $('body').toggleClass('bg-red');
//     } else if(func == "bg-yellow"){
//       $('body').toggleClass('bg-yellow');
//     } else if(func == "bg-green"){
//       $('body').toggleClass('bg-green');
//     }

//   });

// }

// scrollDetect();

// MENU SCROLL-DOWN

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.body.classList.add( "scroll-down" );
  } else {
    document.body.classList.remove( "scroll-down" );
  }
}



// NEW CHUNK - ECMAScript 6

// Fab menu
let fabTrigger = document.querySelector('.fab-trigger');
fabTrigger.addEventListener("click", function() {

  document.body.classList.toggle('fab-open');

});

/**
 * Apply 1600 Theme.
 */
let style1600Trigger = document.querySelector('.trigger1600');
style1600Trigger.addEventListener("click", function() {
  
  const style1890 = getItemInLocalStorage('style1890')
  if (style1890) {
    removeItemInLocalStorage('style1890');
  }
  const style1920 = getItemInLocalStorage('style1920')
  if (style1920) {
    removeItemInLocalStorage('style1920');
  }
  const style1950 = getItemInLocalStorage('style1950')
  if (style1950) {
    removeItemInLocalStorage('style1950');
  }
  const style1990 = getItemInLocalStorage('style1990')
  if (style1990) {
    removeItemInLocalStorage('style1990');
  }
  const style2040 = getItemInLocalStorage('style2040')
  if (style2040) {
    removeItemInLocalStorage('style2040');
  }

  setItemInLocalStorage('style1600','style1600');
  
  document.body.classList.toggle('style1600');
  document.querySelector('#hero-image').src="img/hero/shakespeare_1600.png";
  document.body.classList.remove('style1890','style1920','style1950','style1990','style2040','fab-open');

});

/**
 * Apply 1890 Theme.
 */
let style1890Trigger = document.querySelector('.trigger1890');
style1890Trigger.addEventListener("click", function() {

  const style1600 = getItemInLocalStorage('style1600')
  if (style1600) {
    removeItemInLocalStorage('style1890');
  }
  const style1920 = getItemInLocalStorage('style1920')
  if (style1920) {
    removeItemInLocalStorage('style1920');
  }
  const style1950 = getItemInLocalStorage('style1950')
  if (style1950) {
    removeItemInLocalStorage('style1950');
  }
  const style1990 = getItemInLocalStorage('style1990')
  if (style1990) {
    removeItemInLocalStorage('style1990');
  }
  const style2040 = getItemInLocalStorage('style2040')
  if (style2040) {
    removeItemInLocalStorage('style2040');
  }

  setItemInLocalStorage('style1890','style1890');

  document.body.classList.toggle('style1890');
  document.querySelector('#hero-image').src="img/hero/shakespeare_1890.png";
  document.body.classList.remove('style1600','style1920','style1950','style1990','style2040','fab-open');

});

/**
 * Apply 1920 Theme.
 */
let style1920Trigger = document.querySelector('.trigger1920');
style1920Trigger.addEventListener("click", function() {

  const style1600 = getItemInLocalStorage('style1600')
  if (style1600) {
    removeItemInLocalStorage('style1600');
  }
  const style1890 = getItemInLocalStorage('style1890')
  if (style1890) {
    removeItemInLocalStorage('style1890');
  }
  const style1950 = getItemInLocalStorage('style1950')
  if (style1950) {
    removeItemInLocalStorage('style1950');
  }
  const style1990 = getItemInLocalStorage('style1990')
  if (style1990) {
    removeItemInLocalStorage('style1990');
  }
  const style2040 = getItemInLocalStorage('style2040')
  if (style2040) {
    removeItemInLocalStorage('style2040');
  }

  setItemInLocalStorage('style1920','style1920');

  document.body.classList.toggle('style1920');
  document.querySelector('#hero-image').src="img/hero/shakespeare_1920.png";
  document.body.classList.remove('style1600','style1890','style1950','style1990','style2040','fab-open');

});

/**
 * Apply 1950 Theme.
 */
let style1950Trigger = document.querySelector('.trigger1950');
style1950Trigger.addEventListener("click", function() {

  const style1600 = getItemInLocalStorage('style1600')
  if (style1600) {
    removeItemInLocalStorage('style1600');
  }
  const style1890 = getItemInLocalStorage('style1890')
  if (style1890) {
    removeItemInLocalStorage('style1890');
  }
  const style1920 = getItemInLocalStorage('style1920')
  if (style1920) {
    removeItemInLocalStorage('style1920');
  }
  const style1990 = getItemInLocalStorage('style1990')
  if (style1990) {
    removeItemInLocalStorage('style1990');
  }
  const style2040 = getItemInLocalStorage('style2040')
  if (style2040) {
    removeItemInLocalStorage('style2040');
  }

  setItemInLocalStorage('style1950','style1950');

  document.body.classList.toggle('style1950');
  document.querySelector('#hero-image').src="img/hero/shakespeare_1950.png";
  document.body.classList.remove('style1600','style1890','style1920','style1990','style2040','fab-open');

});

/**
 * Apply 1990 Theme.
 */
let style1990Trigger = document.querySelector('.trigger1990');
style1990Trigger.addEventListener("click", function() {

  const style1600 = getItemInLocalStorage('style1600')
  if (style1600) {
    removeItemInLocalStorage('style1600');
  }
  const style1890 = getItemInLocalStorage('style1890')
  if (style1890) {
    removeItemInLocalStorage('style1890');
  }
  const style1920 = getItemInLocalStorage('style1920')
  if (style1920) {
    removeItemInLocalStorage('style1920');
  }
  const style1950 = getItemInLocalStorage('style1950')
  if (style1950) {
    removeItemInLocalStorage('style1950');
  }
  const style2040 = getItemInLocalStorage('style2040')
  if (style2040) {
    removeItemInLocalStorage('style2040');
  }

  setItemInLocalStorage('style1990','style1990');

  document.body.classList.toggle('style1990');
  document.querySelector('#hero-image').src="img/hero/shakespeare_1990.png";
  document.body.classList.remove('style1600','style1890','style1920','style1950','style2040','fab-open');

});

/**
 * Apply 2040 Theme.
 */
let style2040Trigger = document.querySelector('.trigger2040');
style2040Trigger.addEventListener("click", function() {

  const style1600 = getItemInLocalStorage('style1600')
  if (style1600) {
    removeItemInLocalStorage('style1600');
  }
  const style1890 = getItemInLocalStorage('style1890')
  if (style1890) {
    removeItemInLocalStorage('style1890');
  }
  const style1920 = getItemInLocalStorage('style1920')
  if (style1920) {
    removeItemInLocalStorage('style1920');
  }
  const style1950 = getItemInLocalStorage('style1950')
  if (style1950) {
    removeItemInLocalStorage('style1950');
  }
  const style1990 = getItemInLocalStorage('style1990')
  if (style1990) {
    removeItemInLocalStorage('style1990');
  }

  setItemInLocalStorage('style2040','style2040');

  document.body.classList.toggle('style2040');
  document.querySelector('#hero-image').src="img/hero/shakespeare_2040.png";
  document.body.classList.remove('style1600','style1890','style1920','style1950','style1990','fab-open');  

});

// let style2040Trigger = document.querySelector('.trigger2040');
// style2040Trigger.addEventListener("click", function() {
// changeStyle('style2040',"img/hero/shakespeare_192aaa.png",
//   ('style1600','style1890','style1920','style1950','style1990')
// )
// }
// )

// function changeStyle(bodyClass,imgPath, classesToRemove) {
 
//  document.body.classList.toggle(bodyClass);
  
//  document.querySelector('#hero-image').src=imgPath;
 
//  document.body.classList.remove(classesToRemove);

// document.body.classList.remove('fab-open');

// }

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

function log(){console.log("ready")};

function setItemInLocalStorage(key,value) {
  const itemCheck = localStorage.getItem(key)  

  if(!itemCheck){
    localStorage.setItem(key, value)
  } else {
  return
  }
}

function applyTheme() {
  const style1600 = getItemInLocalStorage('style1600')
  const style1890 = getItemInLocalStorage('style1890')
  const style1920 = getItemInLocalStorage('style1920')
  const style1950 = getItemInLocalStorage('style1950')
  const style1990 = getItemInLocalStorage('style1990')
  const style2040 = getItemInLocalStorage('style2040')

    if (style1600) {
      document.body.classList.toggle(style1600);
      document.querySelector('#hero-image').src="img/hero/shakespeare_1600.png";
    } else if (style1890) {
      document.body.classList.toggle(style1890);
      document.querySelector('#hero-image').src="img/hero/shakespeare_1890.png";
    } else if (style1920) {
      document.body.classList.toggle(style1920);
      document.querySelector('#hero-image').src="img/hero/shakespeare_1920.png";
    } else if (style1950) {
      document.body.classList.toggle(style1950);
      document.querySelector('#hero-image').src="img/hero/shakespeare_1950.png";
    } else if (style1990) {
      document.body.classList.toggle(style1990);
      document.querySelector('#hero-image').src="img/hero/shakespeare_1990.png";
    } else if (style2040) {
      document.body.classList.toggle(style2040);
      document.querySelector('#hero-image').src="img/hero/shakespeare_2040.png";
    }
} 

function getItemInLocalStorage(key) {
  return localStorage.getItem(key)  
}

function removeItemInLocalStorage(key) {
  const itemTrovato = localStorage.getItem(key)

  if(itemTrovato){
    localStorage.removeItem(key)
  } else {
  return
  } 
}


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
    $('.header, .aside').addClass('is-inview');
    // scroll.start();
  // $(".fab-trigger").click(function(){
  //   $(".overlay").fadeIn(1000);
  // });

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