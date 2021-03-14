var $elem = $('fadeIn');
var in_view = new Waypoint.Inview({
    element: $elem[0],
    enter: function() {
        $elem.addClass('start');
    },
});
