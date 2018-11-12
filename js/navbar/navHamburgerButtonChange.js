$(".navbar-toggler").click(function () {
    if ($('#faButton').hasClass('fa-bars')) {
        $('#faButton').removeClass('fa-bars');
        $('#faButton').addClass('fa-times');
    } else {
        $('#faButton').removeClass('fa-times');
        $('#faButton').addClass('fa-bars');
    }
});

NavClose();

$(window).resize(function () {
    NavClose();
});


function NavClose() {
    if (window.innerWidth < 992) {
        $(".navbar-nav a").click(function () {
            $('.navbar-collapse').collapse('hide');
            $('#faButton').removeClass('fa-times');
            $('#faButton').addClass('fa-bars');

        });
    } else {
        $('.navbar-collapse').collapse('hide');
        $('#faButton').removeClass('fa-times');
        $('#faButton').addClass('fa-bars');
    }
}
