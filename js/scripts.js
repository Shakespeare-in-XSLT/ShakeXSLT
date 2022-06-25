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


// MENU SCROLL-DOWN

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.body.classList.add( "scroll-down" );
  } else {
    document.body.classList.remove( "scroll-down" );
  }
}

// Fab menu
let fabTrigger = document.querySelector('.fab-trigger');
fabTrigger.addEventListener("click", function() {

  document.body.classList.toggle('fab-open');

});

/***********************************************/
/****************** THEME **********************/
/***********************************************/

// Create the theme object
const theme = {
  STYLE_1: 'style1600',
  STYLE_2: 'style1890',
  STYLE_3: 'style1920',
  STYLE_4: 'style1950',
  STYLE_5: 'style1990',
  STYLE_6: 'style2040'
}



/**
 * Apply 1600 Theme.
 */
let style1600Trigger = document.querySelector('.trigger1600');
style1600Trigger.addEventListener("click", function() {
  
  const style2 = getItemInSessionStorage(theme.STYLE_2)
  if (style2) {
    removeItemInSessionStorage(theme.STYLE_2);
  }
  const style3 = getItemInSessionStorage(theme.STYLE_3)
  if (style3) {
    removeItemInSessionStorage(theme.STYLE_3);
  }
  const style4 = getItemInSessionStorage(theme.STYLE_4)
  if (style4) {
    removeItemInSessionStorage(theme.STYLE_4);
  }
  const style5 = getItemInSessionStorage(theme.STYLE_5)
  if (style5) {
    removeItemInSessionStorage(theme.STYLE_5);
  }
  const style6 = getItemInSessionStorage(theme.STYLE_6)
  if (style6) {
    removeItemInSessionStorage(theme.STYLE_6);
  }

  setItemInSessionStorage(theme.STYLE_1,theme.STYLE_1);
  
  document.body.classList.toggle(theme.STYLE_1);
  document.querySelector('#hero-image').src="img/hero/shakespeare_1600.png";
  document.body.classList.remove(
    theme.STYLE_2,
    theme.STYLE_3,
    theme.STYLE_4,
    theme.STYLE_5,
    theme.STYLE_6,
    'fab-open'
  );

});

/**
 * Apply 1890 Theme.
 */
let style1890Trigger = document.querySelector('.trigger1890');
style1890Trigger.addEventListener("click", function() {

  const style1 = getItemInSessionStorage(theme.STYLE_1)
  if (style1) {
    removeItemInSessionStorage(theme.STYLE_1);
  }
  const style3 = getItemInSessionStorage(theme.STYLE_3)
  if (style3) {
    removeItemInSessionStorage(theme.STYLE_3);
  }
  const style4 = getItemInSessionStorage(theme.STYLE_4)
  if (style4) {
    removeItemInSessionStorage(theme.STYLE_4);
  }
  const style5 = getItemInSessionStorage(theme.STYLE_5)
  if (style5) {
    removeItemInSessionStorage(theme.STYLE_5);
  }
  const style6 = getItemInSessionStorage(theme.STYLE_6)
  if (style6) {
    removeItemInSessionStorage(theme.STYLE_6);
  }

  setItemInSessionStorage(theme.STYLE_2,theme.STYLE_2);

  document.body.classList.toggle(theme.STYLE_2);
  document.querySelector('#hero-image').src="img/hero/shakespeare_1890.png";
  document.body.classList.remove(
    theme.STYLE_1,
    theme.STYLE_3,
    theme.STYLE_4,
    theme.STYLE_5,
    theme.STYLE_6,
    'fab-open'
  );

});

/**
 * Apply 1920 Theme.
 */
let style1920Trigger = document.querySelector('.trigger1920');
style1920Trigger.addEventListener("click", function() {

  const style1 = getItemInSessionStorage(theme.STYLE_1)
  if (style1) {
    removeItemInSessionStorage(theme.STYLE_1);
  }
  const style3 = getItemInSessionStorage(theme.STYLE_2)
  if (style3) {
    removeItemInSessionStorage(theme.STYLE_2);
  }
  const style4 = getItemInSessionStorage(theme.STYLE_4)
  if (style4) {
    removeItemInSessionStorage(theme.STYLE_4);
  }
  const style5 = getItemInSessionStorage(theme.STYLE_5)
  if (style5) {
    removeItemInSessionStorage(theme.STYLE_5);
  }
  const style6 = getItemInSessionStorage(theme.STYLE_6)
  if (style6) {
    removeItemInSessionStorage(theme.STYLE_6);
  }

  setItemInSessionStorage(theme.STYLE_3,theme.STYLE_3);

  document.body.classList.toggle(theme.STYLE_3);
  document.querySelector('#hero-image').src="img/hero/shakespeare_1920.png";
  document.body.classList.remove(
    theme.STYLE_1,
    theme.STYLE_2,
    theme.STYLE_4,
    theme.STYLE_5,
    theme.STYLE_6,
    'fab-open'
  );

});

/**
 * Apply 1950 Theme.
 */
let style1950Trigger = document.querySelector('.trigger1950');
style1950Trigger.addEventListener("click", function() {

  const style1 = getItemInSessionStorage(theme.STYLE_1)
  if (style1) {
    removeItemInSessionStorage(theme.STYLE_1);
  }
  const style2 = getItemInSessionStorage(theme.STYLE_2)
  if (style2) {
    removeItemInSessionStorage(theme.STYLE_2);
  }
  const style3 = getItemInSessionStorage(theme.STYLE_3)
  if (style3) {
    removeItemInSessionStorage(theme.STYLE_3);
  }
  const style5 = getItemInSessionStorage(theme.STYLE_5)
  if (style5) {
    removeItemInSessionStorage(theme.STYLE_5);
  }
  const style6 = getItemInSessionStorage(theme.STYLE_6)
  if (style6) {
    removeItemInSessionStorage(theme.STYLE_6);
  }

  setItemInSessionStorage(theme.STYLE_4,theme.STYLE_4);

  document.body.classList.toggle(theme.STYLE_4);
  document.querySelector('#hero-image').src="img/hero/shakespeare_1950.png";
  document.body.classList.remove(
    theme.STYLE_1,
    theme.STYLE_2,
    theme.STYLE_3,
    theme.STYLE_5,
    theme.STYLE_6,
    'fab-open'
  );

});

/**
 * Apply 1990 Theme.
 */
let style1990Trigger = document.querySelector('.trigger1990');
style1990Trigger.addEventListener("click", function() {

  const style1 = getItemInSessionStorage(theme.STYLE_1)
  if (style1) {
    removeItemInSessionStorage(theme.STYLE_1);
  }
  const style2 = getItemInSessionStorage(theme.STYLE_2)
  if (style2) {
    removeItemInSessionStorage(theme.STYLE_2);
  }
  const style3 = getItemInSessionStorage(theme.STYLE_3)
  if (style3) {
    removeItemInSessionStorage(theme.STYLE_3);
  }
  const style4 = getItemInSessionStorage(theme.STYLE_4)
  if (style4) {
    removeItemInSessionStorage(theme.STYLE_4);
  }
  const style6 = getItemInSessionStorage(theme.STYLE_6)
  if (style6) {
    removeItemInSessionStorage(theme.STYLE_6);
  }

  setItemInSessionStorage(theme.STYLE_5,theme.STYLE_5);

  document.body.classList.toggle(theme.STYLE_5);
  document.querySelector('#hero-image').src="img/hero/shakespeare_1990.png";
  document.body.classList.remove(
    theme.STYLE_1,
    theme.STYLE_2,
    theme.STYLE_3,
    theme.STYLE_4,
    theme.STYLE_6,
    'fab-open'
  );

});

/**
 * Apply 2040 Theme.
 */
let style2040Trigger = document.querySelector('.trigger2040');
style2040Trigger.addEventListener("click", function() {

  const style1 = getItemInSessionStorage(theme.STYLE_1)
  if (style1) {
    removeItemInSessionStorage(theme.STYLE_1);
  }
  const style2 = getItemInSessionStorage(theme.STYLE_2)
  if (style2) {
    removeItemInSessionStorage(theme.STYLE_2);
  }
  const style3 = getItemInSessionStorage(theme.STYLE_3)
  if (style3) {
    removeItemInSessionStorage(theme.STYLE_3);
  }
  const style4 = getItemInSessionStorage(theme.STYLE_4)
  if (style4) {
    removeItemInSessionStorage(theme.STYLE_4);
  }
  const style5 = getItemInSessionStorage(theme.STYLE_5)
  if (style5) {
    removeItemInSessionStorage(theme.STYLE_5);
  }

  setItemInSessionStorage(theme.STYLE_6,theme.STYLE_6);

  document.body.classList.toggle(theme.STYLE_6);
  document.querySelector('#hero-image').src="img/hero/shakespeare_2040.png";
  document.body.classList.remove(
    theme.STYLE_1,
    theme.STYLE_2,
    theme.STYLE_3,
    theme.STYLE_4,
    theme.STYLE_5,
    'fab-open'
  ); 

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

function applyTheme() {
// I retrieve the items from the session storage and go to test them, if it matches I apply it
  const style1 = getItemInSessionStorage(theme.STYLE_1)
  const style2 = getItemInSessionStorage(theme.STYLE_2)
  const style3 = getItemInSessionStorage(theme.STYLE_3)
  const style4 = getItemInSessionStorage(theme.STYLE_4)
  const style5 = getItemInSessionStorage(theme.STYLE_5)
  const style6 = getItemInSessionStorage(theme.STYLE_6)
  

  switch (true) {
    case (theme.STYLE_1 === style1):
      document.body.classList.toggle(theme.STYLE_1);
      document.querySelector('#hero-image').src="img/hero/shakespeare_1600.png";
    break;

    case (theme.STYLE_2 === style2):
      document.body.classList.toggle(theme.STYLE_2);
      document.querySelector('#hero-image').src="img/hero/shakespeare_1890.png";
    break;

    case (theme.STYLE_3 === style3):
      document.body.classList.toggle(theme.STYLE_3);
      document.querySelector('#hero-image').src="img/hero/shakespeare_1920.png";
    break;

    case (theme.STYLE_4 === style4):
      document.body.classList.toggle(theme.STYLE_4);
      document.querySelector('#hero-image').src="img/hero/shakespeare_1950.png";
    break;

    case (theme.STYLE_5 === style5):
      document.body.classList.toggle(theme.STYLE_5);
      document.querySelector('#hero-image').src="img/hero/shakespeare_1990.png";
    break;

    case (theme.STYLE_6 === style6):
      document.body.classList.toggle(theme.STYLE_6);
      document.querySelector('#hero-image').src="img/hero/shakespeare_2040.png";
    break;

    default:
      document.body.classList.toggle(theme.STYLE_1);
      document.querySelector('#hero-image').src="img/hero/shakespeare_1600.png";
      setItemInSessionStorage(theme.STYLE_1,theme.STYLE_1);
  }

} 

function setItemInSessionStorage(key,value) {
  const itemCheck = sessionStorage.getItem(key)  

  if(!itemCheck){
    sessionStorage.setItem(key, value)
  } else {
  return
  }
}

function getItemInSessionStorage(key) {
  return sessionStorage.getItem(key)  
}

function removeItemInSessionStorage(key) {
  const itemTrovato = sessionStorage.getItem(key)

  if(itemTrovato){
    sessionStorage.removeItem(key)
  } else {
  return
  } 
}


/***********************************************/
/****************** SIDEBAR ********************/
/***********************************************/

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

  console.log( "ready!" );

  $( ".header__icon" ).on('click', function() {
    $('.header__menu').toggleClass('header__menu--open');
    $('.icon-hamburger').toggleClass('icon-hamburger--open');
  });

  $(window).load(function(){
    $('.preloader').fadeOut('fast');
    $('.header, .aside').addClass('is-inview');

  });


});