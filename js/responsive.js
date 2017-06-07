/* Responses to window resize and screen click */

$(function() {
  initCss();

  // if window is resized
  $(window).on('resize', function () {
    initCss();
  });

  function initCss() {
    // add height of navabar as padding to container-fluid, so container doesn't fall behind navbar
    var navbarHeight = parseFloat($(".navbar").css("height"));
    
    $(".container-fluid").css("padding-top", navbarHeight);
    $(".container-fluid").show();
    
    // adjust CSS of navbar-text to get it centered
    var navbarWidth = parseFloat($(".navbar").css("width"));
    var titleWidth = parseFloat($(".navbar-text").css("width"));
    var togglerWidth = parseFloat($(".navbar-toggler").css("width"));
    
    var iconTogglerDif = togglerWidth - 20;
    
    var dif = (navbarWidth-titleWidth-iconTogglerDif)/2;
    $(".navbar-text").css("left", dif); 
    $(".navbar-text").show();
  }

  // if navbar is collapsed, and there is a click outside of it, hide navbar
  $(document).click(function (event) {
      var clickover = $(event.target);
      var $navbar = $(".navbar-collapse"); 
      var collapsed = $navbar.hasClass("show"); 
      if ( collapsed == true && !clickover.hasClass("navbar-toggler-icon") && !clickover.hasClass("nav-link") && !clickover.hasClass("navbar") && !clickover.hasClass("navbar-toggle")) {      
        $('.navbar-collapse').collapse('hide');
      }
  });
});
