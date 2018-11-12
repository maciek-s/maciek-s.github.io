var offset = window.innerHeight / 3;

//waypoint1
$('.skills-waypoints').addClass("hide-element")

//waypoint2
$('.portfolio-waypoints').addClass("hide-element")

//waypoint1
$('.contact-waypoints').addClass("hide-element")

initWaypoints();

$(window).resize(function () {
    Waypoint.destroyAll()

    offset = window.innerHeight / 3;

    initWaypoints();
});


function initWaypoints() {

    var waypoint1 = new Waypoint({
        element: $('.skills-waypoints'),
        handler: function (direction) {
            this.element.removeClass('hide-element');

            if (direction == 'down') {
                this.element.addClass('slideInUp');
                this.element.removeClass('slideOutDown');
            } else {
                this.element.removeClass('slideInUp');
                this.element.addClass('slideOutDown');
            }
        },
        offset: offset
    })


    var waypoint2 = new Waypoint({
        element: $('.portfolio-waypoints'),
        handler: function (direction) {
            this.element.removeClass('hide-element');

            if (direction == 'down') {
                this.element.addClass('zoomIn');
                this.element.removeClass('zoomOut');
            } else {
                this.element.removeClass('zoomIn');
                this.element.addClass('zoomOut');
            }
        },
        offset: offset
    })


    var waypoint3 = new Waypoint({
        element: $('.contact-waypoints'),
        handler: function (direction) {
            this.element.removeClass('hide-element');

            if (direction == 'down') {
                this.element.addClass('jackInTheBox');
                this.element.removeClass('rotateOut');
            } else {
                this.element.removeClass('jackInTheBox');
                this.element.addClass('rotateOut');
            }
        },
        offset: offset
    })

}
