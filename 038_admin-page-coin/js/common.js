window.onload = function() {

	$(".progress-bar-line").each(function(){
		var structureProgressBar =
		'<div class="progress-bar-txt"></div>'+
		'<div class="progress-bar-wrap">' +
		'<div class="progress-bar-val"></div>'+
		'</div>'

		var progressBarValue = $(this).attr('data-value');
		$(this).addClass('clearfix');
		$(this).append(structureProgressBar);

		$(this).find(".progress-bar-txt").html(progressBarValue + ' %');
		$(this).find(".progress-bar-val").animate({
			"width": progressBarValue + '%'
		}, 1000);
	});
/*
	var left  = document.querySelector(".left-sidebar");
	var right = document.querySelector(".main-sidebar");

	if(matchMedia){
		var screen = window.matchMedia("(max-width:980px)");
		screen.addListener(changes);
		changes(screen);
	}
	function changes(screen){
		if(screen.matches){
			function equalHeight() {
				left.style.height  = "auto";
				right.style.height = "auto";
			}
			equalHeight();
			window.onresize = equalHeight;
		}
		else{
			function equalHeight() {
				left.style.height  = "auto";
				right.style.height = "auto";
				var leftH  = left.offsetHeight;
				var rightH = right.offsetHeight;
				var max = Math.max(leftH, rightH);
				left.style.height  = max + "px";
				right.style.height = max + "px";
			}
			equalHeight();
			window.onresize = equalHeight;
		}
	}*/
}

$(document).ready(function() {

	$(window).scroll(function() {
		if ($(this).scrollTop() > 65){  
			$('.left-sidebar').addClass("sticky");
			$('.left-sidebar').css('height',$(window).height());
		}
		else{
			$('.left-sidebar').removeClass("sticky");
			$('.left-sidebar').css('height',$(window).height() - 60);
		}
	});

//admin-block

$('.admin-block').click(function(e){
	e.preventDefault();
	$('.log-out').toggleClass('active');
});
$(document).mouseup(function (e) {
	var container = $(".admin-block");
	if (container.has(e.target).length === 0){
		$('.log-out').removeClass('active');
	}
});

$('.menu-open').click(function(e){
	e.preventDefault();
	$('.left-sidebar').toggleClass('active');
});


function leftSidebar(){
	$('.right-block').css('height',$('.left-block').height());
}
leftSidebar();
window.onresize = leftSidebar;

	//var $blockCode = $('.source-code');
	$('.open-source').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active').next('div').slideToggle('fast').toggleClass('active');
	});

	/* Menu */

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

	/*$(document).mouseup(function (e) {
		var container = $(".menu-open");
		if (container.has(e.target).length === 0){
			$('.left-sidebar').removeClass('active');
		}
	});*/

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

});