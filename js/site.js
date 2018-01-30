(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 50)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#navigation").offset().top > 100) {
      $("#navigation").removeClass("navbar-shrink");
    } else {
      $("#navigation").addClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#navigation',
    offset: 57
  });

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  });
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  });

  // modernizr to make objectfit available in IE
  if ( ! Modernizr.objectfit ) {
    $(".img-portfolio").each(function () {
      var $container = $(this);
      var imgUrl = $container.find("img").prop("src");
      if (imgUrl) {
        $container.css("backgroundImage", "url(" + imgUrl + ")").addClass("compat-object-fit");
      }  
    });
  }

})(jQuery); // End of use strict
