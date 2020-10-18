$(window).load(function() { 
	$("#loaderInner").fadeOut(); 
	$("#loader").delay(500).fadeOut("slow"); 
});

$(document).ready(function() {

	$(".popup").magnificPopup({
		removalDelay: 150,
		mainClass: 'mfp-fade'
	});

	$(document).ready(function() {
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	});

	$(".block_contact button").click(function() {
		$(".map_footer").fadeOut("10");
		$(".show_contact").fadeIn("10");
		$(".show_contact").click(function(){
			$(".map_footer, .block_contact button").fadeIn("10");
			$(".show_contact").fadeOut("10");
		});
	});

	$("ul.nav li a, a.scroll_icon, .top_mnu ul a").mPageScroll2id();

	//Скрытое меню

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
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

	$(".sandwich").click(function(){
		$(".toggle_mnu").toggleClass("hid");
	});

	// Класс для скрола меню

	$(window).scroll(function() {
		if ($(this).scrollTop() > 120){  
			$('.toggle_mnu').addClass("sticky");
		}
		else{
			$('.toggle_mnu').removeClass("sticky");
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
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			$.magnificPopup.open({
				items: {
					src: '<div class="white-popup">Спасибо, заявка успешно отправлена!<br>В ближайшее время мы свяжемся с Вами.</div>',
					type: 'inline'
				}
			});
			$("#callback").trigger("reset");
			setTimeout(function() {
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

});