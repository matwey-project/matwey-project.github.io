/* Узнаем кол-во слайдов в секции скинов */

window.onload = function(){
	var numberSlide = $('.slide-section .owl-dots .owl-dot');
	var numberCol = numberSlide.length;
	var result = 100 / numberCol;
	console.log(result);
	numberSlide.css( "width", result + "%" );
}
$(document).ready(function() {

	/* Popup Window */

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	$(".popup").magnificPopup({
		removalDelay: 150,
		mainClass: 'mfp-fade'
	});

	/* Popup Window End */

	/* Popup video */

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	$('.cont span').click(function(){
		if ($(this).hasClass('first')){
			$('#progress-bar').val('0');
			$(this).nextAll().removeClass('border-change');
			console.log($('#progress-bar').val('0'));
		}else if ($(this).hasClass('second')){
			$(this).nextAll().removeClass('border-change');  
			$('#progress-bar').val('34');
			$(this).prevAll().addClass('border-change');  
			$(this).addClass('border-change');
			console.log($('#progress-bar').val('34'));
		}else if ($(this).hasClass('third')){
			$(this).nextAll().removeClass('border-change');  
			$('#progress-bar').val('67');
			$(this).prevAll().addClass('border-change'); 
			$(this).addClass('border-change');
			console.log($('#progress-bar').val('67'));
		} else{
			$('#progress-bar').val('100');
			$(this).addClass('border-change');
			$(this).prevAll().addClass('border-change');
			console.log($('#progress-bar').val('100'));
		}
	});

	$('.log-in__name').click(function(e){
		e.preventDefault();
		$('.log-in__info').toggleClass('active');
	});

	$(document).mouseup(function (e) {
		var container = $(".log-in");
		if (container.has(e.target).length === 0){
			$('.log-in__info').removeClass('active');
		}
	});

	jcf.replaceAll();

	// Open mobile menu

	$('.mobile-menu__open').click(function(e){
		e.preventDefault()
		if ($('.header-nav').css('display') == 'none') { 
			$('.header-nav').animate({height: 'show'}, 300);
		} 
		else {     
			$('.header-nav').animate({height: 'hide'}, 300); 
		}
	});
	
	// Add Span
	
	$('.menu-item-has-children').prepend('<span class="open-sub"></span>');

	if(matchMedia){
		var screen = window.matchMedia("(max-width:768px)");
		screen.addListener(changes);
		changes(screen);
	}
	function changes(screen){
		if(screen.matches){
			$('.header-nav').addClass('mobileMenu');
			$('ul.sub-menu').removeClass('sub-menu');
		}
		else{
			$('.header-nav').removeClass('mobileMenu');

			if ($('.menu-item-has-children ul').hasClass('sub-menu') == false) {
				$('.menu-item-has-children ul').addClass('sub-menu');
			}
		}
	}

	// Accordion

	$('.header-nav li.active').addClass('open').children('ul').show();
	$('.header-nav li.menu-item-has-children>span').on('click', function(){
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp(200);
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp(200);
		}
	});

	$('.slide-section').owlCarousel({
		loop: false,
		singleItem:true,
		nav:true,
		margin: 1,
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

	$('.slide-rules').owlCarousel({
		loop:true,
		animateOut: 'fadeOut',
		nav:true,
		margin: 1,
		autoplay:true,
		autoplayTimeout:800,
		navText : ['',''],
		autoplayHoverPause:true,
		smartSpeed: 800,
		items:8,
		responsive:{
			0:{
				items:3
			},
			600:{
				items:4
			},
			640:{
				items:5
			},
			900:{
				items:6
			},
			1000:{
				items:8
			}
		}
	});

});