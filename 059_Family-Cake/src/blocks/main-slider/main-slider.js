require('slick-carousel');

let slickVar = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    appendArrows: ".main-slider__navigate",
    prevArrow: '<div class="new-catalog--prev"><svg width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M10.5 26L1.5 14L10.5 2" stroke="#D57792" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</div>',
    nextArrow: '<div class="new-catalog--next"><svg width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M1.5 26L10.5 14L1.5 2" stroke="#D57792" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</div>',
    fade: true,
    cssEase: 'linear',
};

let relateProduct = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 400,
    arrows: true,
    appendArrows: ".related-products__navigate",
    prevArrow: '<div class="related-product__prev"><svg width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M10.5 26L1.5 14L10.5 2" stroke="#D57792" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</div>',
    nextArrow: '<div class="related-product__next"><svg width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M1.5 26L10.5 14L1.5 2" stroke="#D57792" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</div>',
    responsive: [
        {
            breakpoint: 855,
            settings: {
                slidesToShow: 3,
                centerMode: true,
                arrows: false,
            }
        },
        {
            breakpoint: 641,
            settings: {
                slidesToShow: 2,
                centerMode: true,
                arrows: false,
                // variableWidth: true
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                arrows: false,
                // variableWidth: true
            }
        }
    ]
};

let runSlick = function (element, parametr) {
    $(element).slick(parametr);
};
// let relateProduct = function (element) {
//     $(element).slick(slickVar);
// };
runSlick('.slider', slickVar);
runSlick('.related-product__slider', relateProduct);


$('.slider-product').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    asNavFor: '.slider-product__navigate',
    // autoplay: true
});
$('.slider-product__navigate').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-product',
    dots: false,
    // centerMode: true,
    focusOnSelect: true
});