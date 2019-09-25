const portfolio = {};

$.fn.isInViewport = function() {
  const elementTop = $(this).offset().top;
  const elementBottom = elementTop + $(this).outerHeight();

  const viewportTop = $(window).scrollTop();
  const viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop + ((viewportBottom - viewportTop) * 0.5) && elementTop < viewportBottom - ((viewportBottom - viewportTop) * 0.5);
};

$.fn.fixedAfter = function(targetElement) {
  const bottomOfElement = $(targetElement).offset().top + $(targetElement).outerHeight();

  $(window).on("resize scroll load", () => {
    if ($(window).scrollTop() > bottomOfElement) {
      $(this)
        .addClass("fixed")
        .removeClass("visuallyHidden");
    } else {
      $(this)
        .addClass("visuallyHidden")
        .removeClass("fixed");
    };
  });
};

portfolio.init = function() {
  $(window).on("resize scroll load", function() {
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

  $(".siteMenu").fixedAfter(".siteHeroContent .socialLinks");
};

$(document).ready(function() {
  portfolio.init();
});