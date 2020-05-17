$(document).ready(function() {

	$('.main-navigation .dropdown>a').click(function(e){
		e.preventDefault();
		$('.sub-menu').slideToggle();
	});

	$( function() {
		$( ".datapicker" ).datepicker({ dateFormat: 'dd/mm/yy' }).val();
	} );

	$('.burger-menu').click(function(e){
		e.preventDefault();
		$(this).toggleClass('is-active');
		$('.mobile-menu').toggleClass('is-active');
		$('.mobile-logo').toggleClass('is-active');
	});

	$( window ).resize(function() {
		//$('.mobile-menu').removeClass('is-active');
		//$('.burger-menu').removeClass('is-active');
		//$('.mobile-logo').removeClass('is-active');
	});

	function heightFooter(){
		var heightFoot = $('.footer').height();
		$('body').css({
			'padding-bottom': heightFoot
		});
	}
	heightFooter()
	$( window ).resize(function() {
		heightFooter()
	});

	/* Popup Window */

	// $(".popup").magnificPopup({
	// 	removalDelay: 150,
	// 	mainClass: 'mfp-fade'
	// });

	// Scroll page
	$("a.scroll-bottom").mPageScroll2id({
		offset: 0
	});

	$('.height-auto').equalHeights();
	$(window).resize(function(){
		$('.height-auto').height('auto');
		$('.height-auto').equalHeights();
	});

	$('.owl-about, .slider-foot').owlCarousel({
		loop: false,
		singleItem:true,
		nav:true,
		autoplayTimeout: 1500,
		navText : [
		'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><path id="tc7qa" d="M776 2584l-1.41 1.41 5.58 5.59H768v2h12.17l-5.58 5.59L776 2600l8-8z"/></defs><g><g transform="translate(-768 -2584)"><use fill="#fff" xlink:href="#tc7qa"/></g></g></svg>',
		'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><path id="tc7qa" d="M776 2584l-1.41 1.41 5.58 5.59H768v2h12.17l-5.58 5.59L776 2600l8-8z"/></defs><g><g transform="translate(-768 -2584)"><use fill="#fff" xlink:href="#tc7qa"/></g></g></svg>'
		],
		autoplayHoverPause:true,
		smartSpeed: 300,
		items:1
	});

	$('.slider-card').on('initialized.owl.carousel changed.owl.carousel', function(e) {
		if (!e.namespace)  {
			return;
		}
		var carousel = e.relatedTarget;
		$('.slider-counter').text(carousel.relative(carousel.current()) + 1 + ' of ' + carousel.items().length);
	}).owlCarousel({
		animateOut: 'fadeOut',
		loop: false,
		singleItem:true,
		nav:true,
		autoplayTimeout: 1500,
		navText : [
		'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><path id="tc7qa" d="M776 2584l-1.41 1.41 5.58 5.59H768v2h12.17l-5.58 5.59L776 2600l8-8z"/></defs><g><g transform="translate(-768 -2584)"><use fill="#fff" xlink:href="#tc7qa"/></g></g></svg>',
		'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><path id="tc7qa" d="M776 2584l-1.41 1.41 5.58 5.59H768v2h12.17l-5.58 5.59L776 2600l8-8z"/></defs><g><g transform="translate(-768 -2584)"><use fill="#fff" xlink:href="#tc7qa"/></g></g></svg>'
		],
		autoplayHoverPause:true,
		smartSpeed: 300,
		items:1
	});
	// $('.slider-card').owlCarousel({
	// 	loop: false,
	// 	singleItem:true,
	// 	nav:true,
	// 	margin: 1,
	// 	autoplayTimeout: 1500,
	// 	navText : [
	// 	'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><path id="tc7qa" d="M776 2584l-1.41 1.41 5.58 5.59H768v2h12.17l-5.58 5.59L776 2600l8-8z"/></defs><g><g transform="translate(-768 -2584)"><use fill="#fff" xlink:href="#tc7qa"/></g></g></svg>',
	// 	'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><path id="tc7qa" d="M776 2584l-1.41 1.41 5.58 5.59H768v2h12.17l-5.58 5.59L776 2600l8-8z"/></defs><g><g transform="translate(-768 -2584)"><use fill="#fff" xlink:href="#tc7qa"/></g></g></svg>'
	// 	],
	// 	autoplayHoverPause:true,
	// 	smartSpeed: 300,
	// 	items:1
	// });

	/* Select */
	var x, i, j, selElmnt, a, b, c, srcImg;
	x = document.getElementsByClassName("custom-select");
	for (i = 0; i < x.length; i++) {
		selElmnt = x[i].getElementsByTagName("select")[0];
		a = document.createElement("DIV");
		a.setAttribute("class", "select-selected");
		a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
		//srcImg = selElmnt.options[selElmnt.selectedIndex].getAttribute('data-img-src');
		//console.log(srcImg);
		x[i].appendChild(a);
		b = document.createElement("DIV");
		b.setAttribute("class", "select-items select-hide");
		for (j = 1; j < selElmnt.length; j++) {
			c = document.createElement("DIV");
			c.innerHTML = selElmnt.options[j].innerHTML;

			if(selElmnt.options[j].getAttribute('data-img-src') != null) {
				var imgDiv = document.createElement("IMG");
				c.appendChild(imgDiv);
				//console.log(imgDiv);
				srcImg = selElmnt.options[j].getAttribute('data-img-src');
				//console.log(srcImg);
				//c.setAttribute("data-img-src", srcImg);
				//c.style.backgroundImage = "url("+ srcImg + ")";
				imgDiv.setAttribute('src', srcImg);
				imgDiv.setAttribute('class', 'select-icon');
			}

			c.addEventListener("click", function(e) {
				var y, i, k, s, h;
				s = this.parentNode.parentNode.getElementsByTagName("select")[0];
				h = this.parentNode.previousSibling;
				for (i = 0; i < s.length; i++) {
					if (s.options[i].innerText == this.innerText) {
						s.selectedIndex = i;
						h.innerText = this.innerText;
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

	// var selectMain = $('.custom-select'),
	// 		selectOption,
	// 		selectDiv,
	// 		attrData,
	// 		toAttrData;

	// $.each(selectMain, function(){
	// 	//console.log(selectMain);
	// 	selectOption = $(this).find('select option');
	// 	selectDiv = $(this).find('.select-items div');
	// 	$.each(selectOption, function(){
	// 		attrData = $(this).attr('data-img-src');
	// 		console.log(attrData);

	// 		$.each(selectDiv, function(){

	// 			toAttrData = $(this).attr( 'src', attrData);
	// 			console.log(toAttrData);

	// 		});

	// 	});

	// });
	
});