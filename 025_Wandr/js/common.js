$(document).ready(function() {

	/* Scroller */
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if ($('body').find('.scroller_screen').length) {
			var scroller = $('.scroller_screen');
			if (scroll > scroller.offset().top) {
				scroller.addClass('scroll_start');

				if (scroll > (scroller.offset().top + $('.scroller_screen').height() - $(window).height())) {
					scroller.addClass('scroll_end');
				} 
				else {
					scroller.removeClass('scroll_end');
				}
			} 
			else {
				scroller.removeClass('scroll_start');
			}
		}

		$('.recent_work').each(function() {
			var scrollerScreen = $(this);
			var scrollerPosition = scrollerScreen.offset().top - ($(window).height() / 2);
			if (scroll > scrollerPosition) {
				var scrollerData = scrollerScreen.data('img');
				var colorData = scrollerScreen.data('color');
				scrollerScreen.addClass('active').siblings().removeClass('active');
				$('.recent_img_wrap').find('.recent_work_img.'+colorData).addClass('active').siblings().removeClass('active');
				$('.recent_work_cover.'+colorData).addClass('active').siblings().removeClass('active');
				$('.items__recent-slide.'+colorData).addClass('active').siblings().removeClass('active');
			}
		});
	}).scroll();


	var inP = $( '.default-input, .default-textarea' );

	inP.on('blur', function () {
		if (!this.value) {
			$(this).parent('.form-items').removeClass('focus');
		} else {
			$(this).parent('.form-items').addClass('focus');
		}
	}).on('focus', function () {
		$(this).parent('.form-items').addClass('focus');
		$('.default__form-button').removeClass('active');
		$('.form-items').removeClass('shake');
	});

	//accordeon
	$(".accordeon dd").hide().prev().click(function() {
		$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
		$(this).next().not(":visible").slideDown().prev().addClass("active");
	});

	$( window ).resize(function() {
		widthInstagram()
	});

	function widthInstagram() {
		var countBlock = $('.wrapper__instagram-carousel .item').length;
		var result = (countBlock) * 300 + 450;
		$('.wrapper_items_instagram').css({
			'width' : result + "px"
		});
	}
	widthInstagram();

	$('.slide-testimonials').owlCarousel({
		loop:true,
		margin:25,
		nav:false,
		autoplayHoverPause: true,
		autoplay: true,
		autoplayTimeout: 5000,
		smartSpeed: 1000,
		responsive:{
			0:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

});