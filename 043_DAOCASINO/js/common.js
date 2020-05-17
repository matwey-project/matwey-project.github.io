/*$(window).load(function() { 
	$("#loaderInner").fadeOut(); 
	$("#loader").delay(500).fadeOut("slow"); 
});*/

$(document).ready(function() {
/*
var d=new Date();
var day=d.getDate();
var month=d.getMonth() + 1;
var year=d.getFullYear();
var nowTime = day + " / " + month + " / " + year;
document.write(day + " / " + month + " / " + year );
*/

	$(".item_img").magnificPopup({
		type: 'image',
		gallery:{
			enabled: true
		}
	});

	$('.owl-carousel-top').owlCarousel({
		stagePadding: 10,
		loop:true,
		nav:true,
		margin: 20,
		autoplay:true,
		autoplayTimeout:5000,
		navText : ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
		autoplayHoverPause:true,
		smartSpeed: 1500,
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

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback1").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback1").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			$("#callback1").trigger("reset");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

	$("#callback2").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback2").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			$("#callback2").trigger("reset");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

	$("#callback3").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback3").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			$("#callback3").trigger("reset");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

	$(document).ready(function(){
		var touch = $('#touch-menu');
		var menu = $('.nav');
		
		$(touch).on('click', function(e) {
			e.preventDefault();
			menu.slideToggle();
		});
		$(window).resize(function(){
			var wid = $(window).width();
			if(wid > 760 && menu.is(':hidden')) {
				menu.removeAttr('style');
			}
		});
		
	});

	$("#sandwich, .menu_item").click(function() {
		$("#sandwich").toggleClass("active");
	});

	$('#inputLbl, #input').click(function() {
		$('#inputLbl').removeClass('top');
	});

	$('#input').focusout(function() {
		if ($(this).val().trim() == '') {
			$('#inputLbl').addClass('top');
		}
	});

});