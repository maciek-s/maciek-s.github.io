setHeight();
$(window).resize(function () {
    setHeight();
});

function setHeight() {
    var height = window.innerHeight;

    if (height < 1000) {
        $("section").addClass("minHeight");
    } else {
        $("section").removeClass("minHeight");
    }
}
