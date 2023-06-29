$(document).ready(function() {

	$('.burger-menu').click(function(e){
		e.preventDefault();
		$('.burger-menu').toggleClass('is-active');
		$('.top-line__sticky').toggleClass('bg-mobile');
		$('.header-menu').toggleClass('is-active');
		//$('.header-menu').slideToggle('slow');
	});

	// Scroll page
	$(".wrangling-navigation ul li a").mPageScroll2id({
		offset: 80
	});

// var navbar =  $('.wrapper-scroll-menu');
// var wrapper = $('.scroll-wrangling__content');

// $(window).scroll(function(){
//     var nsc = $(document).scrollTop();
//     var bp1 = wrapper.offset().top - 90;
//     var bp2 = bp1 + wrapper.outerHeight()-$(window).height();

//     if (nsc>bp1) {  
//     	navbar.css('position','fixed');
//     	$('.wrapper-scroll-menu').addClass('ddd');
//     	 }
//     else { 
//     	navbar.css('position','absolute');
//     	$('.wrapper-scroll-menu').removeClass('ddd');
//     	 }
//     // if (nsc>bp2) { 
//     // 	navbar.css('top', bp2-nsc); 
//     // }
//     // else { navbar.css('top', '0'); }
// });
var selectetdId = document.getElementById("aside1");
if(selectetdId){
	(function(){
		var a = document.querySelector('#aside1'), b = null, P = 90;
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
      R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#article').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
      if ((Ra.top - P) <= 0) {
      	if ((Ra.top - P) <= R) {
      		b.className = 'stop';
      		b.style.top = - R +'px';
      	} else {
      		b.className = 'sticky';
      		b.style.top = P + 'px';
      	}
      } else {
      	b.className = '';
      	b.style.top = '';
      }
      window.addEventListener('resize', function() {
      	a.children[0].style.width = getComputedStyle(a, '').width
      }, false);
    }
  })()
}


	// $('.scroll-wrangling').scrollClass({
	// 	delay: false,
	// 	threshold: 1,
	// 	 offsetTop: 80,
	// 	callback: function(){
	// 		console.log('Callback fired!');
	// 	}
	// });

	// $(window).scroll(function() {
	// 	if ($(this).scrollTop() > 50){  
	// 		$('.top-line__sticky').addClass("is-sticky");
	// 	}
	// 	else{
	// 		$('.top-line__sticky').removeClass("is-sticky");
	// 	}
	// });
	$(window).scroll(function() {
		if ($(this).scrollTop() > 10){  
			$('.top-line__sticky').addClass("is-sticky-a is-sticky");
		}
		else{
			$('.top-line__sticky').removeClass("is-sticky-a is-sticky");
			$('.header-menu').removeClass('is-active');
			$('.burger-menu').removeClass('is-active');
			$('.top-line__sticky').removeClass('bg-mobile');
		}
	});


	// // ---- *** ---

	// /* Popup Window */

	// $(".popup").magnificPopup({
	// 	removalDelay: 150,
	// 	mainClass: 'mfp-fade'
	// });

	// /* Popup Window End */

	// $('.log-in__name').click(function(e){
	// 	e.preventDefault();
	// 	$('.log-in__info').toggleClass('active');
	// });

	// $(document).mouseup(function (e) {
	// 	var container = $(".log-in");
	// 	if (container.has(e.target).length === 0){
	// 		$('.log-in__info').removeClass('active');
	// 	}
	// });

	/* Select */
	var x, i, j, selElmnt, a, b, c;
	x = document.getElementsByClassName("custom-select");
	for (i = 0; i < x.length; i++) {
		selElmnt = x[i].getElementsByTagName("select")[0];
		a = document.createElement("DIV");
		a.setAttribute("class", "select-selected");
		a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
		x[i].appendChild(a);
		b = document.createElement("DIV");
		b.setAttribute("class", "select-items select-hide");
		for (j = 1; j < selElmnt.length; j++) {
			c = document.createElement("DIV");
			c.innerHTML = selElmnt.options[j].innerHTML;
			c.addEventListener("click", function(e) {
				var y, i, k, s, h;
				s = this.parentNode.parentNode.getElementsByTagName("select")[0];
				h = this.parentNode.previousSibling;
				for (i = 0; i < s.length; i++) {
					if (s.options[i].innerHTML == this.innerHTML) {
						s.selectedIndex = i;
						h.innerHTML = this.innerHTML;
						y = this.parentNode.getElementsByClassName("same-as-selected");
						for (k = 0; k < y.length; k++) {
							y[k].removeAttribute("class");
						}
						this.setAttribute("class", "same-as-selected");
						break;
					}
				}
				h.click();
			});
			b.appendChild(c);
		}
		x[i].appendChild(b);
		a.addEventListener("click", function(e) {
			e.stopPropagation();
			closeAllSelect(this);
			this.nextSibling.classList.toggle("select-hide");
			this.classList.toggle("select-arrow-active");
		});
	}
	function closeAllSelect(elmnt) {
		var x, y, i, arrNo = [];
		x = document.getElementsByClassName("select-items");
		y = document.getElementsByClassName("select-selected");
		for (i = 0; i < y.length; i++) {
			if (elmnt == y[i]) {
				arrNo.push(i)
			} else {
				y[i].classList.remove("select-arrow-active");
			}
		}
		for (i = 0; i < x.length; i++) {
			if (arrNo.indexOf(i)) {
				x[i].classList.add("select-hide");
			}
		}
	}
	document.addEventListener("click", closeAllSelect);
	/* Select End */

	$('.slider-news').owlCarousel({
		loop:true,
		margin: 32,
		nav:true,
		navText : ['<svg class="icon-search"><use xlink:href="sprite-svg.svg#arrow-slide__right"></use></svg>','<svg class="icon-search"><use xlink:href="sprite-svg.svg#arrow-slide__right"></use></svg>'],
		responsive:{
			0:{
				items:1,
				margin: 0
			},
			992:{
				items:2
			}
		}
	});


});