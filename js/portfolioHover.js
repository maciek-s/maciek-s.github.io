$(".portfolio-square").hover(function () {
        var $this = this;
        $(this).children(".portfolio-hidden").removeClass("d-none");
    },
    function () {
        $(this).children(".portfolio-hidden").addClass("d-none");
    });
