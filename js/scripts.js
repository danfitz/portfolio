// ===== CUSTOM METHODS ADDED TO JQUERY =====

// Checks if element is in viewport
$.fn.isInViewport = function () {
  const elementTop = $(this).offset().top;
  const elementBottom = elementTop + $(this).outerHeight();

  const viewportTop = $(window).scrollTop();
  const viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop + ((viewportBottom - viewportTop) * 0.5) && elementTop < viewportBottom - ((viewportBottom - viewportTop) * 0.5);
};

// Fixes element after it passes another target element in the viewport
$.fn.fixedAfter = function (targetElement) {
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

// ===== PORTFOLIO NAMESPACE =====

const portfolio = {};

// .focusable elements are in focus when in center of viewport; otherwise they're unfocused
portfolio.addFocus = function() {
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
};

// Whenever a nav menu item is clicked, the menu is closed
portfolio.closeNavUponClick = function() {
  $("nav a").on("click", function() {
    $("#menuButton").prop("checked", false);
  });
};

// Init method containing all other method calls
portfolio.init = function() {
  $(".siteMenu").fixedAfter(".siteHeroContent .socialLinks");
  portfolio.addFocus();
  portfolio.closeNavUponClick();
};

// DOCUMENT READY + INIT
$(document).ready(function() {
  portfolio.init();
});