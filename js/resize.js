var mobileViewport = window.matchMedia("screen and (max-width: 480px)");
var mq = window.matchMedia( "(max-width: 768px)" );

$(document).ready(function() {

// media query event handler
if (matchMedia) {
  var mq = window.matchMedia("(max-width: 768px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
      $( "#menu-toggle" ).on('click', function(){
        $( "nav" ).show( 500 );
      });
      $('#navbar a').on('click', function(){
        $("nav").hide( 400 );
      });

  }else {

    $("nav").show( 500 );

    $('#navbar a').on('click', function(){
      $("nav").show( 400 );
    });
  }
}

});
