jQuery(function ($) {
    if ($(window).width() <= 767) {
        $('.vehicles-wrap').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            items: 1,
            stagePadding: 40,
            nav: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false
        });
    }
    $(window).resize(function () {
        console.log('resize');
        if ($(window).width() <= 767) {
            $('.vehicles-wrap').owlCarousel({
                loop: true,
                margin: 10,
                responsiveClass: true,
                items: 1,
                stagePadding: 40,
                nav: false,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: false
            });
        }
    });
});