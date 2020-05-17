$(document).ready(function() {

	var summ_load = parseInt($('.load-text').text());
	var summ_go = $('.wrapper-pattern-load').find('div');
	function loadSum(){
		summ_go.style.width = summ_load + '%';
	}
	//loadSum();
	console.log(summ_load);

	$(document).on('mouseenter', '.inventory_list > .item, .inventory_offer_list > .item', function(e) {
		e.preventDefault();
		//var condition = $(this).attr("condition").replace("(", "").replace(")", "");
		var name = $(this).attr("name");
		var float = $(this).attr("float");
		var index = $(this).attr("index");
		var price = $(this).find($('.price .price-text')).text();

		var img_view = $(this).find('.item_image').attr("src");

		if (float) {
			$(".tooltip_item > .details_float > .arrow").css("left", ((100 / 1 * float) - 4) + "%");
			$(".big-tooltip_item > .details_float > .arrow").css("left", ((100 / 1 * float) - 4) + "%");
		}
		if (!float) {
			$(".tooltip_item > .details_float").hide();
			$(".tooltip_item > .details_float_text").hide();
			$(".tooltip_item > .details_index").hide();
		} else {
			$(".tooltip_item > .details_float").show();
			$(".tooltip_item > .details_float_text").show();
			$(".tooltip_item > .details_index").show();
		}
		$(".tooltip_item > .details_img img").attr("src", img_view)
		$(".big-tooltip_item > .details_img img").attr("src", img_view)
		$(".tooltip_item > .details_price").text('$ ' + price)
		$(".big-tooltip_item > .details_price").text('$ ' + price)
		$(".tooltip_item > .details_float_text .float-result").text(float)
		$(".big-tooltip_item > .details_float_text .float-result").text(float)
		$(".tooltip_item > .details_index").text("Index:" + index)
		//$(".tooltip_item > .details_condition").text(condition)
		$(".tooltip_item > .details_name").text(name)
		$(".big-tooltip_item > .details_name").text(name)
		var inv_screen_bottom = ($(this).parents(".ss-content").offset().top) + ($(this).parents(".ss-content").innerHeight());
		var newTop = ($(this).offset().top + $(this).outerHeight(true));
		if ((newTop + $('.tooltip_item').innerHeight() >= inv_screen_bottom) || (newTop + $('.tooltip_item').innerHeight() >= $(window).height())) {
			newTop = ($(this).offset().top - ($(".tooltip_item").outerHeight(true) + 10));
			$('.tooltip_item').addClass("bottom");
		} else {
			$('.tooltip_item').removeClass("bottom");
		}
		$('.tooltip_item').css({
			top: newTop + 'px',
			left: ($(this).offset().left + $(this).innerWidth() / 2) - $('.tooltip_item').innerWidth() / 2,
			//display: "block"
		});
		$('.tooltip_item').fadeIn(200);
	});
	/* Big Tooltip hover end */
	$(document).on('mouseleave', '.big-tooltip_item', function(e) {
		$('.big-tooltip_item').css({
			display: "none"
		});
	});
	/* Big Tooltip hover end */
	/* Tooltip hover end */
	$(document).on('mouseleave', '.inventory_list > .item, .inventory_offer_list > .item', function(e) {
		e.preventDefault();
		$('.tooltip_item').css({
			display: "none"
		});
	});
	/* Tooltip hover end */
	
	$(document).on('contextmenu', '.inventory_list > .item, .inventory_offer_list > .item', function(e) {
		e.preventDefault();

		/* Big Tooltip position */
		var inv_screen_bottom1 = ($(this).parents(".ss-content").offset().top) + ($(this).parents(".ss-content").innerHeight());
		var newTop1 = ($(this).offset().top + $(this).outerHeight(true));
		if ((newTop1 + $('.big-tooltip_item').innerHeight() >= inv_screen_bottom1) || (newTop1 + $('.big-tooltip_item').innerHeight() >= $(window).height())) {
			newTop1 = ($(this).offset().top - ($(".big-tooltip_item").outerHeight(true) + 10));
			$('.big-tooltip_item').addClass("bottom");
		} else {
			$('.big-tooltip_item').removeClass("bottom");
		}
		$('.big-tooltip_item').css({
			top: newTop1 + 115 + 'px',
			left: ($(this).offset().left + $(this).innerWidth() / 2) - $('.big-tooltip_item').innerWidth() / 2,
			//display: "block"
		});
		$('.tooltip_item').css({
			display: "none"
		});
		$('.big-tooltip_item').fadeIn(200);
		/* Big Tooltip position */
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
						size: 20,
						barColor: 'transparent',
						trackColor: false,
						scaleColor: false,
						lineWidth: 15,
						lineCap: 'butt',
						animate: 3000,
						onStep: function(from, to, percent) {
							$(this.el).find('i').text(Math.round(percent) + '');
						}
					}).stop();
				}
			});
		}
		animateElements();
		$(window).scroll(animateElements);
	});

	/* Open modal */
	$('.modal-open').on('click', function(event) {
		event.preventDefault();
		$('.modals').css('display', 'flex');
		$($(this).attr('href')).fadeIn().addClass('active');
	});
	/* Open modal */
	$('.close-btn').on('click', function(event) {
		event.preventDefault();
		$('.modals').fadeOut();
		$(this).closest('.modal').fadeOut().removeClass('active');
	});
	$('.modals').on('click', ".close-btn", function(event) {
		event.preventDefault();
		if ($(this).has(event.target).length === 0) {
			$('.modals').fadeOut();
			$('.modal').fadeOut().removeClass('active');
		}
	});
	$('.modals').on('click', function(event) {
		if ($(this).has(event.target).length === 0) {
			event.preventDefault();
			$('.modals').fadeOut();
			$('.modal').fadeOut().removeClass('active');
		}
	});

	$(".heading-name").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});

	/* Popup Window */

	// $(".popup").magnificPopup({
	// 	removalDelay: 150,
	// 	mainClass: 'mfp-fade'
	// });

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

	$(function() {
		$( "#slider-range" ).slider({
	      // orientation: "vertical",
	      // step: 15,
	      range: true,
	      min: 0,
	      max: 999,
	      values: [ 0, 999 ],
	      slide: function( event, ui ) {
	      	$( "#amount" ).val( ui.values[ 0 ] );
	      	$( "#amount_1" ).val( ui.values[ 1 ] );
	      }
	    });
		$( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) );
		$( "#amount_1" ).val( $( "#slider-range" ).slider( "values", 1 ) );

	    // Изменение местоположения ползунка при вводиде данных в первый элемент input
	    $("input#amount").change(function(){
	    	var value1=$("input#amount").val();
	    	var value2=$("input#amount_1").val();
	    	if(parseInt(value1) > parseInt(value2)){
	    		value1 = value2;
	    		$("input#amount").val(value1);
	    	}
	    	$("#slider-range").slider("values",0,value1);	
	    });

		  // Изменение местоположения ползунка при вводиде данных в второй элемент input 	
		  $("input#amount_1").change(function(){
		  	var value1=$("input#amount").val();
		  	var value2=$("input#amount_1").val();

		  	if(parseInt(value1) > parseInt(value2)){
		  		value2 = value1;
		  		$("input#amount_1").val(value2);
		  	}
		  	$("#slider-range").slider("values",1,value2);
		  });

		  // фильтрация ввода в поля
		  jQuery('#amount, #amount_1').keypress(function(event){
		  	var key, keyChar;
		  	if(!event) var event = window.event;

		  	if (event.keyCode) key = event.keyCode;
		  	else if(event.which) key = event.which;

		  	if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		  	keyChar=String.fromCharCode(key);

		  	if(!/\d/.test(keyChar))	return false;

		  });

		});

});