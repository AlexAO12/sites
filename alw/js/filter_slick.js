$(function () {

    $(".filter li").on('click', function () {
        var filter = $(this).data('filter');
        $(".slider").slick('slickUnfilter');

        if (filter == 'red') {
            $(".slider").slick('slickFilter', '.red');
        }
        else if (filter == 'yellow') {
            $(".slider").slick('slickFilter', '.yellow');
        }
        else if (filter == 'blue') {
            $(".slider").slick('slickFilter', '.blue');
        }
        else if (filter == 'all') {

            $(".slider").slick('slickUnfilter');
        }

    })

});
