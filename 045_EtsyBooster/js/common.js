$(document).ready(function() {

	$(".popup").magnificPopup({
		removalDelay: 300,
		mainClass: 'mfp-fade'
	})

	$('.owl-carousel-otziv').owlCarousel({
		stagePadding: 10,
		loop:true,
		nav:true,
		margin: 20,
		autoplay:true,
		autoplayTimeout:5000,
		navText : ['',''],
		autoplayHoverPause:true,
		smartSpeed: 1000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			640:{
				items:1
			},
			900:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

});