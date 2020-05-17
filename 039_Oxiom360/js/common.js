$(document).ready(function() {

Array.prototype.slice.call(document.querySelectorAll('.content-headline')).forEach(function(a) {
// селекторы блоков, которые будут фиксироваться. Может быть как один блок, так два и более
	var b = null, P = 105;
	window.addEventListener('scroll', Ascroll, false);
	document.body.addEventListener('scroll', Ascroll, false);
	function Ascroll() {
		if (b == null) {
			var Sa = getComputedStyle(a, ''), s = '';
			for (var i = 0; i < Sa.length; i++) {
				if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
					s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
				}
			}
			b = document.createElement('div');
			b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
			a.insertBefore(b, a.firstChild);
			var l = a.childNodes.length;
			for (var i = 1; i < l; i++) {
				b.appendChild(a.childNodes[1]);
			}
			a.style.height = b.getBoundingClientRect().height + 'px';
			a.style.padding = '0';
			a.style.border = '0';
		}
		var Ra = a.getBoundingClientRect(),
		R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('body').getBoundingClientRect().bottom + 0);
		if ((Ra.top - P) <= 0) {
			if ((Ra.top - P) <= R) {
				b.className = 'stop';
				b.style.top = - R +'px';
				b.style.left = 0;
			} else {
				b.className = 'sticky';
				b.style.top = P + 'px';
				b.style.left = Ra.left + 'px';
			}
		} else {
			b.className = '';
			b.style.top = '';
			b.style.left = '';
		}
		window.addEventListener('resize', function() {
			a.children[0].style.width = getComputedStyle(a, '').width;
			b.style.left = (b.className == 'sticky' ? (a.getBoundingClientRect().left + 'px') : '0');
		}, false);
	}
})

$(window).scroll(function() {
	if ($(this).scrollTop() > 200){  
		$('.top-line').addClass("scroll-fixed");
	}
	else{
		$('.top-line').removeClass("scroll-fixed");
	}
});

$(document).mouseup(function (e) {
	var container = $(".sub-menu");
	if (container.has(e.target).length === 0){
		$('.sub-menu').removeClass('active');
	}
})

	// Dropdown menu

	// $('.dropdown-open').click(function(e){
	// 	e.preventDefault();
	// 	$(this).next().toggleClass('active');
	// });

	// $(document).mouseup(function (e) {
	// 	var container = $(".sub-menu");
	// 	if (container.has(e.target).length === 0){
	// 		$('.sub-menu').removeClass('active');
	// 	}
	// });

	$('.open-menu').click(function(e){
		e.preventDefault();
		$('#cssmenu').slideToggle();
	});

	// Accordion menu
	
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

	$('.my-carousel').owlCarousel({
		//stagePadding: 10,
		loop:true,
		animateOut: 'fadeOut',
		nav:true,
		margin: 20,
		autoplay:true,
		autoplayTimeout:5000,
		navText : ['',''],
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

});