var paralaxaShadow = $('.paralaxa-shadow');
var paralaxaHeight = paralaxaShadow.outerHeight();

navbarEdit();

$(window).resize(function () {
    navbarEdit();
});

$(window).scroll(function () {
    navbarEdit();

});

function navbarEdit() {
    if (window.innerWidth >= 768) {

        if (window.scrollY > paralaxaHeight - (paralaxaHeight / 4)) {
            $(".navbar").addClass('navbar-black');
            $(".logo-full").addClass('logo-full-smaller');

        } else {
            $(".navbar").removeClass('navbar-black');
            $(".logo-full").removeClass('logo-full-smaller');

        }
    } else {
        $(".navbar").addClass('navbar-black');
        $(".logo-full").addClass('logo-full-smaller');

    }
    //Paralaxa opacity
    var scrollPercent = (paralaxaHeight - window.scrollY) / paralaxaHeight;
    if (scrollPercent >= 0 && scrollPercent <= 0.9) {
        paralaxaShadow.css('opacity', scrollPercent);
    }
}
