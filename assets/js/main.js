(function ($) {

    $(document).ready(function () {
        $(document).on('click', ".item_division", function () {
            var division = $(this).attr('id').substring(5);
            $.get('map/districts/dist-' + division + '.svg', function (svg) {
                $('.country_map').hide("slow");
                $('.districts_map').html(svg);
            }, 'text');
        }).on('click', ".item_district", function () {
            var district = $(this).attr('id').substring(4);
            $.get('map/seats/seats-' + district + '.svg', function (svg) {
                $('.country_map').hide("slow");
                $('.districts_map').hide("slow");
                $('.seats_map').html(svg);
            }, 'text');
        }).on('click', ".item_seat", function () {
            //$.get('map/seats/seats-rangpur.svg', function(svg){
            $('.seats_info').html("Seat No: 1");
            //  console.log();
            //}, 'text');
        });
    });

    var $window = $(window),
        $body = $('body');

    // Play initial animations on page load.
    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Dropdowns.
    $('#nav > ul').dropotron({
        offsetY: -15,
        hoverDelay: 0,
        alignment: 'center'
    });

    // Nav.
    $(
        '<div id="titleBar">' +
        '<a href="#navPanel" class="toggle"></a>' +
        '<span class="title">' + $('#logo').html() + '</span>' +
        '</div>'
    )
        .appendTo($body);


    // Panel.
    $(
        '<div id="navPanel">' +
        '<nav>' +
        $('#nav').navList() +
        '</nav>' +
        '</div>'
    )
        .appendTo($body)
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'left',
            target: $body,
            visibleClass: 'navPanel-visible'
        });

})(jQuery);