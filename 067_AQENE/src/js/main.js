document.body.onload = function () {

    $('.virtual-slider').slick({
        infinite: false,
        // autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        autoplaySpeed: 5000,
        // variableWidth: true,
        // useTransforms: false,
        // useCSS: false,
        appendArrows: ".virtual-slider__navigate",
        prevArrow: '<div class="patients-stories__button patients-stories__button--prev"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.40991 1.41L2.82991 6L7.40991 10.59L5.99991 12L-8.72135e-05 6L5.99991 -1.23266e-07L7.40991 1.41Z"/></svg></div>',
        nextArrow: '<div class="patients-stories__button patients-stories__button--next"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.589966 10.59L5.16997 6L0.589966 1.41L1.99997 0L7.99997 6L1.99997 12L0.589966 10.59Z"/>\n' +
            '</svg>\n</div>',

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // centerMode: true,
                }
            }
        ]
    });

    $('.patients-stories__video-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.patients-stories__slider',
        swipe: false
    });
    $('.patients-stories__slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.patients-stories__video-slider',
        focusOnSelect: true,
        appendArrows: ".patients-stories__stories-navigate",
        prevArrow: '<div class="patients-stories__button patients-stories__button--prev"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.40991 1.41L2.82991 6L7.40991 10.59L5.99991 12L-8.72135e-05 6L5.99991 -1.23266e-07L7.40991 1.41Z"/></svg></div>',
        nextArrow: '<div class="patients-stories__button patients-stories__button--next"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.589966 10.59L5.16997 6L0.589966 1.41L1.99997 0L7.99997 6L1.99997 12L0.589966 10.59Z"/>\n' +
            '</svg>\n</div>',
    });

    $('.partner-slider').slick({
        infinite: false,
        // autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 600,
        autoplaySpeed: 5000,
        variableWidth: true,
        appendArrows: ".partner-slider__navigate",
        prevArrow: '<div class="patients-stories__button patients-stories__button--prev"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.40991 1.41L2.82991 6L7.40991 10.59L5.99991 12L-8.72135e-05 6L5.99991 -1.23266e-07L7.40991 1.41Z"/></svg></div>',
        nextArrow: '<div class="patients-stories__button patients-stories__button--next"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.589966 10.59L5.16997 6L0.589966 1.41L1.99997 0L7.99997 6L1.99997 12L0.589966 10.59Z"/>\n' +
            '</svg>\n</div>',

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    // infinite: true,
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }
        ]
    });

    let slickVar = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        // centerPadding: '40px',
        appendArrows: ".latest-news__navigate",
        prevArrow: '<div class="latest-news__button latest-news__button--prev"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.40991 1.41L2.82991 6L7.40991 10.59L5.99991 12L-8.72135e-05 6L5.99991 -1.23266e-07L7.40991 1.41Z" fill="#153257"/></svg></div>',
        nextArrow: '<div class="latest-news__button latest-news__button--next"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.589966 10.59L5.16997 6L0.589966 1.41L1.99997 0L7.99997 6L1.99997 12L0.589966 10.59Z" fill="#153257"/>\n' +
            '</svg>\n</div>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    let runSlick = function () {
        $('.latest-news__slider').slick(slickVar);
    };
    runSlick();

    function latestNews() {

    }

    latestNews();

    headerScroll();

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


    let blockPosition = $('.content-transfer--el1');
    positionBlock();
    $(window).resize(function () {
        positionBlock();
    });

    function positionBlock() {
        const windowWidth = window.innerWidth;
        if (windowWidth < 993) {
            $('.header__mobile-container').prepend(blockPosition);
        } else {
            $('.header__login-wrapper').append(blockPosition);
        }
    }

    let stepCheck = document.querySelector('.form-step');
    if (stepCheck) {
        stepsBox();
    }

    function stepsBox() {
        let $stepWrapperItems = document.querySelector('.form-step__items');
        let $stepItems = $stepWrapperItems.children;
        let stepItemsActiveClass = 'form-step__item--active';
        let $stepIndicator = document.querySelector('.form-step__indicators');
        let stepIndicatorActiveClass = 'form-step__indicator-item--active';
        let $navigationPrev = document.getElementById('form-step__prev');
        let $navigationNext = document.getElementById('form-step__next');
        let stemPosition = 0;

        let $countPosition = document.querySelector('.form-step__step-counter');

        $navigationPrev.addEventListener('click', () => {
            if (stemPosition <= 0) {
                stemPosition = 0;
            } else {
                removeDot(stemPosition)
                stemPosition--;
                currentStepNumber(stemPosition)
                stepContents(stemPosition)
            }
        })
        $navigationNext.addEventListener('click', () => {
            if ((stemPosition + 1) >= $stepItems.length) {
                console.log($stepItems.length)
                stemPosition = $stepItems.length - 1;
            } else {
                stemPosition++;
                showStep(stemPosition)
                currentStepNumber(stemPosition)
                stepContents(stemPosition)
            }
        })

        hideStep();
        createIndicators();

        function createIndicators() {
            for (let index = 0; index < $stepItems.length; index++) {
                let stepIndicator = document.createElement('span');
                stepIndicator.className = 'form-step__indicator-item';
                $stepIndicator.appendChild(stepIndicator)
            }
        }

        function currentStepNumber(index) {
            $countPosition.innerText = index + 1 + '/' + $stepItems.length;
        }

        let $indicatorItems = $stepIndicator.children;

        function showStep(index) {

            hideStep();
            $indicatorItems[index].classList.add(stepIndicatorActiveClass);
        }

        showStep(0)

        function removeDot(index) {
            $indicatorItems[index].classList.remove(stepIndicatorActiveClass);
        }

        function hideStep() {
            for (let i = 0; i < $stepItems.length; i++) {
                $stepItems[i].classList.remove(stepIndicatorActiveClass);
            }
        }

        function stepContents(index) {
            for (let i = 0; i < $stepItems.length; i++) {
                $stepItems[i].classList.remove(stepItemsActiveClass)
            }

            let checkDisplay = setInterval(() => {
                let computedStyle = window.getComputedStyle($stepItems[index], null);
                let displayState = computedStyle.getPropertyValue('display') == 'none';

                if (displayState) {
                    $stepItems[index].classList.add(stepItemsActiveClass);
                    clearInterval(checkDisplay);
                }
            }, 1);
        }
    }

    function sidebarMenuShow() {
        $('.menu-sidebar-toggle').on("click", function () {
            $(this).toggleClass('menu-sidebar-toggle--active');
            $('.menu-sidebar__mobile-hide').slideToggle(300);
        })
    }

    sidebarMenuShow();

    function checkContactContent() {
        $('#button-contact').on('click', function () {
            let currentText = $(this).text();
            let editText = $(this).data('name');
            let elements = $('.contact__boxes').children();
            $(this).data('name', currentText).text(editText);

            for (var i = 0; i < elements.length; i++) {
                if ($(elements[i]).css('display') !== 'none') {
                    $(elements[i]).slideToggle(200);
                } else {
                    $(elements[i]).slideToggle(200);
                }
            }
        })
    }

    checkContactContent();

    function mobileMenu() {
        let burgerButton = $('.burger-menu '),
            burgerButtonActive = 'burger-menu--active',
            wrapperMenu = $('.header__menu-wrapper'),
            wrapperMenuActive = 'header__menu-wrapper--active';

        burgerButton.on('click', function () {
            $(this).toggleClass(burgerButtonActive);
            wrapperMenu.toggleClass(wrapperMenuActive);
        });

        $(window).on('resize scroll', function () {
            burgerButton.removeClass(burgerButtonActive);
            wrapperMenu.removeClass(wrapperMenuActive);
        });


    }

    mobileMenu();

    function toggleAccordion() {
        let $items = $('.accordion__item');
        let descriptionClass = 'accordion__description';
        let $descriptions = $('.' + descriptionClass);
        let activeClass = 'accordion__item--active';

        $items.eq(0).addClass(activeClass)

        $items.on('click', function () {
            let $item = $(this);
            let $description = $item.find('.' + descriptionClass);

            if ($item.hasClass(activeClass)) {
                $descriptions.slideUp();
                $items.removeClass(activeClass);
            } else {
                $descriptions.slideUp();
                $description.slideDown();
                $items.removeClass(activeClass);
                $item.addClass(activeClass);
            }
        });
    }

    toggleAccordion();


    let $navigateTabItems = $('.counseling__table-tab');
    let $tableCol = $('.counseling__table-items');
    let $tableRow = $('.counseling__table-line');

    function tableCheck() {
        let $navigateTab = $('#table-tab');
        let $tableCol1 = $('.counseling__table-items--active');
        let $tableCol2 = $('.counseling__table-items--inactive');


        $navigateTabItems.on('click', function () {
            let currentIndex = $(this).index();
            $('.counseling__table-title').removeClass('is-active');
            $(this).addClass('is-active');

            $tableRow.each(function () {
                $(this).find($tableCol).hide()
                $(this).find($tableCol).eq(0).show();
                $(this).find($tableCol).eq(currentIndex).css({'display': 'flex'});
            })
        });
    }

    tabMain();

    function tabMain() {
        const windowWidth = window.innerWidth;
        if (windowWidth < 767) {
            tableCheck();
            $('.counseling__table-title').eq(1).addClass('is-active');
            $tableRow.each(function () {
                $(this).find($tableCol).eq(2).css({'display': 'none'});
            });
        } else {
            $navigateTabItems.off();
            $('.counseling__table-title').removeClass('is-active');
            $tableCol.css({'display': 'flex'});
        }
    }

    $(window).resize(function () {
        tabMain();
    });


    function tabChecked() {
        let $tabItem = $('.faq__list-item');
        let $faqItem = $('.faq__tabs');
        let tabItemActive = 'faq__list-item--active';
        let $faqItemActive = 'faq__tabs--active';

        $faqItem.hide();
        $faqItem.eq(0).addClass($faqItemActive).show();

        $tabItem.on('click', function () {
            let currentIndex = $(this).index();

            $tabItem.removeClass(tabItemActive)
            $(this).addClass(tabItemActive)

            $faqItem.removeClass($faqItemActive).hide();
            $faqItem.eq(currentIndex).addClass($faqItemActive).fadeIn();

        });
    }

    tabChecked();


    function tabItemMobile() {
        let $tabsWrapperMobile = $('.tabs-content__wrapper');
        let $tabsItemMobile = $tabsWrapperMobile.find('.tabs-content__tab-item');

        // $tabsItemMobile
        // console.log($tabsItemMobile.next('.tabs-content'))

        $tabsItemMobile.each(function (index, item) {

            $(item).next('.tabs-content').removeClass('tabs-content--active tabs-content--effect');

            $(item).on('click', function () {

                // $(item).removeClass('tabs-content__tab-item--active').next('.tabs-content').removeClass('tabs-content--active tabs-content--effect').slideToggle();
                // console.log($(this).next('.tabs-content').is(':visible'))

                if ($(this).next('.tabs-content').is(':visible')) {
                    // console.log($(this).next('.tabs-content').is(':visible'))
                    // console.log(159)
                    $(this).removeClass('tabs-content__tab-item--active').next('.tabs-content').slideToggle();
                    // $(item).removeClass('tabs-content__tab-item--active').next('.tabs-content').slideToggle();
                } else {
                    $(this).toggleClass('tabs-content__tab-item--active').next('.tabs-content').slideToggle();
                }

                // $(item).next('.tabs-content').hide().slideToggle();

                // *** $(this).addClass('tabs-content__tab-item--active').next('.tabs-content').slideToggle();

                // $('.tabs-content .tabs-content--active .tabs-content--effect')

            })
        })

        $(window).on('resize', function () {
            let win = $(this);
            if (win.width() <= 991) {
            }
            if (win.width() >= 991) {
                $tabsItemMobile.each(function (index, item) {
                    $(item).next('.tabs-content').removeAttr("style");
                });
            }
        });


    }


    tabItemMobile();


    function mobileTabs() {
        let $tabsWrapperMobile = $('.faq__wrapper');
        let $tabsItemMobile = $tabsWrapperMobile.find('.faq__tabs-item');

        $tabsItemMobile.each(function (index, item) {
            $(item).next('.faq__tabs').removeClass('faq__tabs--active');

            $(item).on('click', function () {
                $(item).removeClass('faq__tabs-item--active');
                if ($(item).next('.faq__tabs').is(':visible')) {
                    $(this).removeClass('faq__tabs-item--active').next('.faq__tabs').removeClass('faq__tabs--active').slideToggle();
                } else {
                    $(this).toggleClass('faq__tabs-item--active').next('.faq__tabs').toggleClass('faq__tabs--active').slideToggle();
                }
            });

        });


        $(window).on('resize', function () {
            let win = $(this);
            // if (win.width() <= 991) {
            //     console.log('< 991');
            // }
            if (win.width() >= 991) {
                $($tabsItemMobile[0]).next('.faq__tabs').removeAttr("style");
                $('.menu-sidebar').removeAttr("style");
            }
        });

    }

    mobileTabs();


// select2

    let selectElement = $('.select-main');

    if (selectElement.length) {
        selectElement.select2({
            minimumResultsForSearch: -1,
            dropdownCssClass: "sort-drop",
            containerCssClass: "sort-select",
        });
    }

// svg4everybody

    svg4everybody({
        polyfill: true
    });

// Popup video

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

// Gallery popups
    $('#image-popups').magnificPopup({
        delegate: 'a',
        type: 'image',
        removalDelay: 500,
        callbacks: {
            beforeOpen: function () {
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        closeOnContentClick: true,
        midClick: true,
        gallery: {
            enabled: true
        }
    });

};