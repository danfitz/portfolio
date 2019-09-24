const portfolio = {};

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;

// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {

  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop + ((viewportBottom - viewportTop) * 0.5) && elementTop < viewportBottom - ((viewportBottom - viewportTop) * 0.5);
};

portfolio.init = function() {
  AOS.init();

  $(window).on('resize scroll', function () {
    $(".focusable").each(function() {
      if ($(this).isInViewport()) {
        $(this).css({
          opacity: 1,
          bottom: 0
        });
      } else {
        $(this).css({
          opacity: 0.3,
          bottom: "-0.8rem"
        });
      };
    });
  });
};

$(document).ready(function() {
  portfolio.init();
});