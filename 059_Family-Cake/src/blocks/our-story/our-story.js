let maxWidth = 855,
    maxWidth2 = 768,
    slickVar = {
        // lazyLoad: 'ondemand',
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        // appendArrows: ".main-slider__navigate",
        prevArrow: '<div class="experience__button experience__button--prev"><svg width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M10.5 26L1.5 14L10.5 2" stroke="#D57792" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '</svg>\n</div>',
        nextArrow: '<div class="experience__button experience__button--next"><svg width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M1.5 26L10.5 14L1.5 2" stroke="#D57792" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '</svg>\n</div>',
        responsive: [
            {
                breakpoint: maxWidth,
                breakpoint: maxWidth2,
                settings: 'unslick'
            }
        ]
    },
    runSlick = function() {
        $('.experience__wrapper').not('.slick-initialized').slick(slickVar);
    };
    runSlick2 = function() {
        $('.instagram__grid').not('.slick-initialized').slick(slickVar);
    };
runSlick();
runSlick2();
$(window).on('resize', function(){
    let width = $(window).width();
    if(width < maxWidth) {
        runSlick();
    }
    if(width < maxWidth2) {
        runSlick2();
    }
});
