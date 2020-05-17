$(document).ready(function() {
	
	$('.wrapper__size-checked li a').click( function(e) {
		e.preventDefault();
		$('.wrapper__size-checked li a').removeClass("active");
		$(this).addClass("active");
	});

	$(function() {
		jcf.replace('.slct_home');
	});

	var widthScroll = $(".wrapper-history").children().length; // Кол-во блоков
	var result = 1;
	for(var i = 1; i <= widthScroll; i++){
		result = widthScroll * 550;
	}
	$(".wrapper-history").css( "width", result );

	/* Popup Window */

	$(".popup").magnificPopup({
		removalDelay: 150,
		mainClass: 'mfp-fade'
	});

	/* Popup Window End */

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


	$('.slide-home').on('initialized.owl.carousel', function(e){
		var imgLink = $('.slide-home .owl-item.active .item .slide-info img').attr("src");
		var namePost = $('.slide-home .owl-item.active .item .slide-info h2').text();
		var descriptPost = $('.slide-home .owl-item.active .item .slide-info p').text();
		var textButton = $('.slide-home .owl-item.active .item .slide-info a.button').text();
		var linkButton = $('.slide-home .owl-item.active .item .slide-info a.button').attr("href");

		$('.post-carousel').find('img').attr("src", imgLink);
		$('.post-carousel').find('h2').text(namePost);
		$('.post-carousel').find('p').text(descriptPost);
		$('.post-carousel').find('a.button').text(textButton);
		$('.post-carousel').find('a.button').attr("href", linkButton);
	});
	$('.slide-home').on('translated.owl.carousel', function(e){
		var imgLink = $('.slide-home .owl-item.active .item .slide-info img').attr("src");
		var namePost = $('.slide-home .owl-item.active .item .slide-info h2').text();
		var descriptPost = $('.slide-home .owl-item.active .item .slide-info p').text();
		var textButton = $('.slide-home .owl-item.active .item .slide-info a.button').text();
		var linkButton = $('.slide-home .owl-item.active .item .slide-info a.button').attr("href");

		$('.post-carousel').find('img').attr("src", imgLink);
		$('.post-carousel').find('h2').text(namePost);
		$('.post-carousel').find('p').text(descriptPost);
		$('.post-carousel').find('a.button').text(textButton);
		$('.post-carousel').find('a.button').attr("href", linkButton);
	});

	$('.slide-home').owlCarousel({
		loop: true,
		singleItem:true,
		nav:true,
		autoplayTimeout: 1500,
		navText : ['',''],
		autoplayHoverPause:true,
		smartSpeed: 300,
		items:1,
		touchDrag: false,
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


	// Open mobile menu

	$('.mobile-menu__open').click(function(e){
		e.preventDefault();
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
  	var screen = window.matchMedia("(max-width:854px)");
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

});