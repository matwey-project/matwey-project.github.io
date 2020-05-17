$(function() {

	// Fixed menu

	$(window).scroll(function() {
		if ($(this).scrollTop() > 50){  
			$('.top-line').addClass("sticky");
		}
		else{
			$('.top-line').removeClass("sticky");
		}
	});

	$('.hamburger').click (function(){
		$(this).toggleClass('open');
		$('body').toggleClass('ovh');
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".hamburger").toggleClass("open");
		$('body').toggleClass('ovh');
		$(".top_text").css("opacity", "1");
	});
	//.append("<span>");

	$(".hamburger").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

	$(".hamburger.open").click(function(){
		$(".toggle_mnu").toggleClass("hid");
		$('body').toggleClass('ovh');
	});

	// mPageScroll2id

	$('.top-line__navigation li a, .top_mnu li a').mPageScroll2id({
		offset: 60
	});

	// Info block Open/Closed

	$('#openInfo').click(function(){
		$('.open_info_block').toggleClass("activ");
	});
	$(document).on('click', function(e) {
		if (!$(e.target).closest(".contribution-li").length) {
			$('.open_info_block').removeClass("activ");
		}
		e.stopPropagation();
	});

	// Owl-Carousel

	$('.owl-our-team').owlCarousel({
			//loop:true,
			nav:true,
			autoplay:false,
			//autoplayTimeout:5000,
			//margin: 50,
			navText : ['',''],
			autoplayHoverPause:true,
			smartSpeed: 750,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				640:{
					items:2
				},
				992:{
					items:2
				},
				1200:{
					items:3
				}
			}
		});

});
