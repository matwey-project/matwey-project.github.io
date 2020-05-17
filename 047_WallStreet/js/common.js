function getMonday(d) {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
}
$(document).ready(function () {

    $(".popup").magnificPopup({
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });

    var clock = $(".clock").FlipClock({
        clockFace: "DailyCounter",
        autoStart: false,
        callbacks: {
            stop: function () {
                $(".message").html("Время прошло");
            }
        }
    });

    var clock2 = $(".clock2").FlipClock({
        clockFace: "DailyCounter",
        autoStart: false,
        callbacks: {
            stop: function () {
                $(".message").html("Время прошло");
            }
        }
    });

    var now = Date.now(),
        monday = getMonday(now),
        nextMonday = new Date(),
        remaining;
    monday.setHours(0);
    monday.setMinutes(0);
    monday.setSeconds(0);

    nextMonday.setDate(monday.getDate() + 7);
    nextMonday.setHours(0);
    nextMonday.setMinutes(0);
    nextMonday.setSeconds(0);

    remaining = nextMonday - now;
    remaining /= 1000;

    clock.setTime(remaining);
    clock.setCountdown(true);
    clock.start();

    clock2.setTime(remaining);
    clock2.setCountdown(true);
    clock2.start();

    /* SLIDER */

    $('.main-carousel').owlCarousel({
		stagePadding: 100,
		loop:true,
		nav:true,
		margin: 100,
		autoplay:true,
		autoplayTimeout: 7000,
		navText : ['',''],
		autoplayHoverPause:true,
		smartSpeed: 800,
		items: 1,
		responsive:{
			0:{
				items:1,
				stagePadding: 50,
				margin: 50,
			},
			600:{
				items:1,
				stagePadding: 50,
				margin: 50,
			},
			601:{
				items:1,
				stagePadding: 100,
				margin: 100,
			}
		}
	});

    $("#phone").inputmask("+7(999) 999-99-99");//маска
		var tph = document.getElementById("phone").value;
		tph = !tph.match(/^\([0-9]{3}\)[0-9]{3}-[0-9]{2}\-[0-9]{2}/);

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
