initCss();

$(window).on('resize', function () {
  initCss();
});

function initCss() {
  var navbarHeight = parseFloat($(".navbar").css("height"));
  
  $(".container-fluid").css("padding-top", navbarHeight);
  
  var navbarWidth = parseFloat($(".navbar").css("width"));
  var titleWidth = parseFloat($(".navbar-text").css("width"));
  var togglerWidth = parseFloat($(".navbar-toggler").css("width"));
  
  var iconTogglerDif = togglerWidth - 20;
  
  var dif = (navbarWidth-titleWidth-iconTogglerDif)/2;
  $(".navbar-text").css("left", dif); 
}

$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse"); 
    var collapsed = $navbar.hasClass("show"); 
    if ( collapsed == true && !clickover.hasClass("navbar-toggler-icon") && !clickover.hasClass("nav-link") && !clickover.hasClass("navbar") && !clickover.hasClass("navbar-toggle")) {      
      console.log("Im here");
      $('.navbar-collapse').collapse('hide');
    }
});
