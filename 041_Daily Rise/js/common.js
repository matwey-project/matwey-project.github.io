$(document).ready(function() {

	var list = document.querySelectorAll("div[data-image]");

	for (var i = 0; i < list.length; i++) {
		var url = list[i].getAttribute('data-image');
		list[i].style.backgroundImage="url('" + url + "')";
	}

	$(".item_img").magnificPopup({
		type: 'image',
		gallery:{
			enabled: true
		}
	});

	$('.owl-carousel-coldbrew').owlCarousel({
		stagePadding: 10,
		loop:true,
		nav:false,
		//margin: 20,
		autoHeight: false,
		autoWidth:true,
		autoplay:true,
		autoplayTimeout:3000,
		dots: false,
		navText : ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
		autoplayHoverPause:true,
		smartSpeed: 800,
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

	/* Mobile menu */
	$('.open-menu').click(function(e){
		e.preventDefault();
		$('#cssmenu').slideToggle();
	});
	(function($){
		$(document).ready(function(){

			$('#cssmenu li.active').addClass('open').children('ul').show();
			$('#cssmenu li.has-sub>a').on('click', function(){
				$(this).removeAttr('href');
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
	})(jQuery);


});