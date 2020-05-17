$(document).ready(function() {

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


	$(".accordeon dd").hide().prev().click(function() {
		$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
		$(this).next().not(":visible").slideDown().prev().addClass("active");
	});
	$(".accordeon dd").first().show();

	$(".tab_item").not(":first").hide();
	$(".our-team-wrapper .tab").click(function() {
		$(".our-team-wrapper .tab").removeClass("activ").eq($(this).index()).addClass("activ");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("activ");

	

	$('.price-slide').slick({
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 6000
	});

	jQuery(document).ready(function($) {
		function animateElements() {
			$('.pr-chart-ctrl').each(function() {
				var elementPos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				var animate = $(this).data('animate');
				if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
					$(this).data('animate', true);
					$(this).find('.pr-chart').easyPieChart({
						size: 100,
						barColor: '#8aaf28',
						trackColor: '#dce6ec',
						scaleColor: false,
						lineWidth: 6,
						lineCap: 'butt',
						animate: 1500,
						onStep: function(from, to, percent) {
							$(this.el).find('i').text(Math.round(percent) + '%');
						}
					}).stop();
				}
			});
		}
		animateElements();
		$(window).scroll(animateElements);
	});

	$(".tugl_menu").click(function(){
		$(".wrappe_menu").addClass("menu_open");
	});
	$(".closed_menu").click(function(){
		$(".wrappe_menu").removeClass("menu_open");
	});

	$(".item_img, .popup_img").magnificPopup({
		type: 'image',
		gallery:{
			enabled: true
		}
	});

	(function($){
		$(window).on("load",function(){
			$("#sidebar-wrapper").mCustomScrollbar();
		});
	})(jQuery);

	$(window).load(function() {
		$('.after_and_before').twentytwenty();
	});

	$('.slider_opaciti').slick({
		swipe: false
	});

	$('.slider-smi').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.slider-nav-smi'
	});
	$('.slider-nav-smi').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider-smi',
		arrows: false,
		dots: true,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 481,
			settings: {
				slidesToShow: 3
			}
		}
		]
	});

	$('.our-team-wrapper').slick({
		infinite: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1681,
			settings: {
				slidesToShow: 5,
			}
		},
		{
			breakpoint: 1485,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 1061,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 901,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 541,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		},
		]
	});

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.slider-nav',
		adaptiveHeight: true,
		responsive: [
		{
			breakpoint: 541,
			settings: {
				arrows: false
			}
		},
		]
	});
	$('.slider-nav').slick({
		slidesToShow: 10,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		arrows: false,
		dots: false,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 1441,
			settings: {
				slidesToShow: 10
			}
		},
		{
			breakpoint: 1201,
			settings: {
				slidesToShow: 8
			}
		},
		{
			breakpoint: 981,
			settings: {
				slidesToShow: 6
			}
		},
		{
			breakpoint: 541,
			settings: {
				slidesToShow: 5,
				arrows: false
			}
		},
		{
			breakpoint: 481,
			settings: {
				slidesToShow: 4
			}
		}
		]
	});

});