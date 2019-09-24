const portfolio = {};

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop + ((viewportBottom - viewportTop) * 0.5) && elementTop < viewportBottom - ((viewportBottom - viewportTop) * 0.5);
};

portfolio.init = function() {
  $(window).on("resize scroll load", function () {
    $(".focusable").each(function() {
      if ($(this).isInViewport()) {
        $(this)
          .addClass("focused")
          .removeClass("unfocused");
      } else {
        $(this)
          .addClass("unfocused")
          .removeClass("focused");
      };
    });
  });
};

$(document).ready(function() {
  portfolio.init();
});