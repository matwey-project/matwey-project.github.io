$(window).load(function() { 
	$("#loaderInner").fadeOut(); 
	$("#loader").delay(500).fadeOut("slow");
});

$(document).ready(function() {

	$(".items-car_img1,.items-car_img2,.items-car_img3,.items-car_img4,.items-car_img5,.items-car_img6,.items-car_img7,.items-car_img8,.items-car_img9,.items-car_img10").animated("fadeInUp", "adeInOut");
	$(".icon-map").animated("bounceInDown", "adeInOut");
//.item-icon_map,
	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 150){  
			$('.top-fixed-menu').addClass("active");
		}
		else{
			$('.top-fixed-menu').removeClass("active");
		}
	});

	// Scroll page
	$(".top-menu ul li a, .wrapper-logo, .to-top, #cssmenu li a").mPageScroll2id({
		offset: 60
	});

	$(".scroll, #cssmenu li a").click(function() {
		$("#cssmenu").fadeOut("10");
	});

	// product-details-active
	$('.product-details-active').owlCarousel({
		loop:true,
		nav:false,
		autoplay:true,
		animateOut: 'fadeOut',
		autoplayTimeout: 10000,
		smartSpeed: 300,
		autoplayHoverPause:true,
		startPosition: 'URLHash',
		responsive:{
			0:{
				items:1
			},
			450:{
				items:1
			},
			678:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	//accordeon
	$(".accordeon dd").hide().prev().click(function() {
		$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
		$(this).next().not(":visible").slideDown().prev().addClass("active");
	});
	$(".accordeon dd").first().show();

	$("#open-main-power").click(function(e){
		e.preventDefault();
		$('.before-top-bg').toggleClass('active');
	});

	/* Tab */
	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	// $("#valid-form-one").validate({
	// 	rules: {
	// 		your_name1: {
	// 			required: true
	// 		},
	// 		your_number1: {
	// 			required: true
	// 		}
	// 	},
	// 	messages: {
	// 		your_name1: {
	// 			required: "Введите Имя"
	// 		},
	// 		your_number1: {
	// 			required: "Введите номер телефона"
	// 		}
	// 	}
	// });

	// $("#valid-gabarit").validate({
	// 	rules: {
	// 		YourName: {
	// 			required: true
	// 		},
	// 		YourNumbe: {
	// 			required: true
	// 		}
	// 	},
	// 	messages: {
	// 		YourName: {
	// 			required: "Введите Имя"
	// 		},
	// 		YourNumbe: {
	// 			required: "Введите номер телефона"
	// 		}
	// 	}
	// });

	// $("#go-form2").validate({
	// 	rules: {
	// 		Car1_YouName: {
	// 			required: true
	// 		},
	// 		Car1_YouNumber: {
	// 			required: true
	// 		}
	// 	},
	// 	messages: {
	// 		Car1_YouName: {
	// 			required: "Введите Имя"
	// 		},
	// 		Car1_YouNumber: {
	// 			required: "Введите номер телефона"
	// 		}
	// 	}
	// });

	// $("#valid-last-girl").validate({
	// 	rules: {
	// 		YouName: {
	// 			required: true
	// 		},
	// 		YouNumber: {
	// 			required: true
	// 		}
	// 	},
	// 	messages: {
	// 		YouName: {
	// 			required: "Введите Имя"
	// 		},
	// 		YouNumber: {
	// 			required: "Введите номер телефона"
	// 		}
	// 	}
	// });

	// $("#valid-blockform").validate({
	// 	rules: {
	// 		your_name: {
	// 			required: true
	// 		},
	// 		your_number: {
	// 			required: true
	// 		}
	// 	},
	// 	messages: {
	// 		your_name: {
	// 			required: "Введите Имя"
	// 		},
	// 		your_number: {
	// 			required: "Введите номер телефона"
	// 		}
	// 	}
	// });

	// $("#valid-blockform_copy").validate({
	// 	rules: {
	// 		your_name_copy: {
	// 			required: true
	// 		},
	// 		your_number_copy: {
	// 			required: true
	// 		}
	// 	},
	// 	messages: {
	// 		your_name_copy: {
	// 			required: "Введите Имя"
	// 		},
	// 		your_number_copy: {
	// 			required: "Введите номер телефона"
	// 		}
	// 	}
	// });

	// $("#vilid-input").validate({
	// 	rules: {
	// 		form_go_to: {
	// 			required: true
	// 		},
	// 		form_data: {
	// 			required: true
	// 		},
	// 		form_weight: {
	// 			required: true
	// 		},
	// 		form_end_go: {
	// 			required: true,
	// 			//email: true
	// 		},
	// 		form_tel: {
	// 			required: true,
	// 			digits: true
	// 		}
	// 	},
	// 	messages: {
	// 		form_end_go: {
	// 			required: "Введите адресс"
	// 		},
	// 		form_data: {
	// 			required: "Выберите удобное время"
	// 		},
	// 		form_email: {
	// 			//required: "Поле E-mail обязательное для заполнения",
	// 			//email: "Введите пожалуйста корректный e-mail"
	// 		},
	// 		form_go_to: {
	// 			required: "Введите адресс"
	// 		},
	// 		form_weight: {
	// 			required: "Введите вес"
	// 		},
	// 		form_tel: {
	// 			required: "Введите номер телефона",
	// 			digits: "Введите корректный телефон"
	// 		}
	// 	},
	// 	// focusCleanup: true,
	// 	// focusInvalid: false,
	// 	// invalidHandler: function(event, validator) {
	// 	// 	$(".js-form-message").text("Исправьте пожалуйста все ошибки.");
	// 	// },
	// 	// onkeyup: function(element) {
	// 	// 	$(".js-form-message").text("");
	// 	// },
	// 	// errorPlacement: function(error, element) {
	// 	// 	return true;
	// 	// },
	// 	// errorClass: "form-input_error",
	// 	// validClass: "form-input_success"
	// });

	// Button affect hover
	var parent, ink, d, x, y;
	$(".button-style span").click(function(e){
		parent = $(this).parent();
	//create .ink element if it doesn't exist
	if(parent.find(".ink").length == 0)
		parent.prepend("<span class='ink'></span>");

	ink = parent.find(".ink");
	//incase of quick double clicks stop the previous animation
	ink.removeClass("animate");
	
	//set size of .ink
	if(!ink.height() && !ink.width())
	{
		//use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
		d = Math.max(parent.outerWidth(), parent.outerHeight());
		ink.css({height: d, width: d});
	}
	
		//get click coordinates
		//logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
		x = e.pageX - parent.offset().left - ink.width()/2;
		y = e.pageY - parent.offset().top - ink.height()/2;
		
		//set the position and add class .animate
		ink.css({top: y+'px', left: x+'px'}).addClass("animate");
	});

	// Mobile menu open
	$('.open-menu').click(function(e){
		e.preventDefault();
		$('#cssmenu').slideToggle();
	});

	// Accordion hidden menu
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

	// Gallery img
	$(".item_img").magnificPopup({
		type: 'image',
		gallery:{
			enabled: true
		}
	});

	// Popup window
	$(".popup").magnificPopup({
		removalDelay: 150,
		mainClass: 'mfp-fade'
	});

	$('.owl-slider-brand').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		//autoplay:true,
		autoplayTimeout: 7000,
		navText : ['',''],
		autoplayHoverPause:true,
		smartSpeed: 300,
	});

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$.magnificPopup.open({
				items: {
					src: '<div id="go_popup" class="hid_popup"><div class="one_go_popup"><h4>Ваша заявка отправлена</h4><span>В ближайшее время с Вами свяжется<br>наш сотрудник.</span></div><div class="two_go_popup my_stl_btn"></div></div>',
					type: 'inline'
				}
			});
			$("form").trigger("reset");
			setTimeout(function() {
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

});