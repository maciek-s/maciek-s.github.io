$('.nav-link').on({
    mouseover: function () {
        if ($(this).hasClass("active")) {
            $(this).addClass("nav-link-active");
        }
    },
    mouseleave: function () {
        $(this).removeClass("nav-link-active");
    },
    click: function () {
        var $this = this;
        setTimeout(function () {
            $($this).addClass("nav-link-active");
        }, 300);
    }
});
