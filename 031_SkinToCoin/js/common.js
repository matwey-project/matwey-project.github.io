$(document).ready(function() {

	$('.item-slider .skin-product').click(function(){
		$(this).toggleClass('bg-items');
	});

	$('.load-button').click(function(e){
		e.preventDefault();
		$(this).addClass('active');
		setTimeout(removeActive, 1000);
	});
	function removeActive(){
		$('.load-button').removeClass('active');
	}
	

	/* Accordeon menu */

	$(".accordeon dd").hide().prev().click(function() {
		$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
		$(this).next().not(":visible").slideDown().prev().addClass("active");
	});

	/* Accordeon menu End */

	/* Auto height */
	$('.item-profile').equalHeights();
	$(window).resize(function(){
		$('.item-profile').height('auto');
		$('.item-profile').equalHeights();
	});

	$('.main-content_total-height').equalHeights();
	$(window).resize(function(){
		$('.main-content_total-height').height('auto');
		$('.main-content_total-height').equalHeights();
	});

	$('.wrapper__cashout-item').equalHeights();
	$(window).resize(function(){
		$('.wrapper__cashout-item').height('auto');
		$('.wrapper__cashout-item').equalHeights();
	});
	/* Auto height End */

	/* Popup Window */

	$(".popup").magnificPopup({
		removalDelay: 150,
		mainClass: 'mfp-fade'
	});

	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	/* Popup Window End */

	$('.log-in__name').click(function(e){
		e.preventDefault();
		$('.log-in__info').toggleClass('active');
	});

	$('.open-menu').click(function(e){
		e.preventDefault()
		if ($('.log-in_menu').css('display') == 'none') { 
			$('.log-in_menu').animate({height: 'show'}, 300);
		} 
		else {     
			$('.log-in_menu').animate({height: 'hide'}, 300); 
		}
	});

	$('.slide-section').owlCarousel({
		loop: false,
		singleItem:true,
		nav:true,
		margin: 10,
		autoplayTimeout: 1500,
		navText : ['',''],
		autoplayHoverPause:true,
		smartSpeed: 300,
		items:1,
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