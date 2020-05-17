$(document).ready(function() {

	$('.link-menu').click(function(e){
		e.preventDefault();
		$('.main-left__sidebar').slideToggle("slow");
	});

	$('.sidebar-items__overflow').each(function(){
		var slices = $(this);
		$(this).find('.hidden-button').click(function(e){
			e.preventDefault();
			slices.find('.overflow-height').toggleClass('view-block');
			slices.find('.hidden-button').toggleClass('is-active');
		});
	});

	$('.overlay').click(function(e){
		e.preventDefault();
		$('.header-dropdown').removeClass('is-active');
		$('.overlay').removeClass('is-active');
		$('body').removeClass('overfow-body');
	});

	$('.catalog-burger__mobile').click(function(e){
		e.preventDefault();
		$('.header-dropdown').toggleClass('is-active');
		$('.overlay').toggleClass('is-active');
		$('body').toggleClass('overfow-body');
	});

	$( window ).resize(function() {
		$('.header-dropdown').removeClass('is-active');
		$('.overlay').removeClass('is-active');
		$('body').removeClass('overfow-body');
		heightFooter()
	});
	function heightFooter(){
		var heightFoot = $('.footer').height();
		$('body').css({
			'padding-bottom': heightFoot
		});
	}
	heightFooter()

	// Tabs
	tabs();
	$('.tab-list li').click(function() {
		var obj = $(this);
		var container = obj.parents('.tab-container');
		var index = obj.index();
		$('.tab-list li', container).removeClass('active').eq(index).addClass('active');
		$('.tab-pane .pane', container).hide().removeClass('active').eq(index).fadeIn().addClass('active');
	});
	function tabs () {
		$('.tab-container').each(function() {
			$('.tab-list li', this).eq(0).addClass('active');
			$('.tab-pane .pane', this).eq(0).fadeIn().addClass('active');
		});
	}

	/* Popup Window */

	// $(".popup").magnificPopup({
	// 	removalDelay: 150,
	// 	mainClass: 'mfp-fade'
	// });

	$('.gallery').each(function() {
		$(this).find('a').magnificPopup({
			type: 'image',
			mainClass: 'mfp-fade',
			gallery: {
				enabled:true
			}
		});
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	$('.slider-main').owlCarousel({
		loop: true,
		singleItem:true,
		nav:false,
		dots: false,
		margin: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		navText : ['',''],
		autoplayHoverPause:true,
		smartSpeed: 800,
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

	// Range slider

	$( function() {

		$('.range-slider').each(function(){
			var minValue = $(this).find('.slider-range').attr('min');
			var maxValue = $(this).find('.slider-range').attr('max');

			var stepNumber = $(this).find('.slider-range').attr('step');
			stepNumber = parseInt(stepNumber);

			var minNumber = $(this).find('.slider-range').attr('min-number');
			var maxNumber = $(this).find('.slider-range').attr('max-number');
			minNumber = parseInt(minNumber);
			maxNumber = parseInt(maxNumber);

			var toPrice = $(this).find('.to-price');
			var endPrice = $(this).find('.end-price');
			toPrice.text(minValue);
			endPrice.text(maxValue);
			$(this).find('.slider-range').slider({
				range: true,
				min: minNumber,
				max: maxNumber,
				step: stepNumber,
				values: [ minValue, maxValue ],
				slide: function( event, count ) {

					toPrice.text(count.values[ 0 ]);
					endPrice.text(count.values[ 1 ]);

					$(this).attr('min', count.values[ 0 ]);
					$(this).attr('max', count.values[ 1 ]);

				}
			});
		});
	});

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

	/* Slider Product */

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav',
		autoplay: false
	});
	$('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		arrows: false,
		centerMode: false,
		centerPadding: '10px',
		focusOnSelect: true,
		infinite: false,
	});

});