 scrollFunction();
 $(window).resize(function () {
     scrollFunction();
 });

 function scrollFunction() {
     var scroll = new SmoothScroll('a[href*="#"]', {
         offset: 0
     });

 }
