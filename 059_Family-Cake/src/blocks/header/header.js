// headerScroll();

function headerScroll() {
    let $topHeader = $('.header');
    let scrollClass = 'header--scroll';

    checkHeaderPosition();

    function checkHeaderPosition() {

        if ($(window).scrollTop() > 0) {
            $topHeader.addClass(scrollClass);
        } else {
            $topHeader.removeClass(scrollClass);
        }

        requestAnimationFrame(checkHeaderPosition);
    }
}

let blockPosition = $('.header__navigation .header__navigation-button');
positionBlock();
$(window).resize(function () {
    positionBlock();
});

function positionBlock() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 855) {
        $('.header__menu .layout').prepend(blockPosition);
    } else {
        $('.header__navigation').prepend(blockPosition);
    }
}

burgerMenu();

function burgerMenu() {
    $('.burger-menu').on('click', function () {
        $(this).toggleClass('burger-menu--active');
        $('.header__menu').toggleClass('header__menu--active');
    });
}

$(window).resize(function () {
    $('.burger-menu').removeClass('burger-menu--active');
    $('.header__menu').removeClass('header__menu--active');
});


// function headerHeight() {
//     let headerHeight = document.querySelector('.header').offsetHeight,
//         body = document.querySelector('body');
//     body.style.paddingTop = headerHeight + "px";
// }
// headerHeight();


let catalogMenuName = 'headerMenu';

window.catalogMenu = new menu(
    {
        name: catalogMenuName,
        button: '.header__mobile-button, .header__bottom-mobile-header-button',
        buttonActiveClass: 'active',
        menuBlock: '.header__bottom-wrapper',
        menuActiveClass: 'active',
    }
);