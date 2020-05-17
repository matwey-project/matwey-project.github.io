$(document).ready(function() {

	$('').click(function(e){
		e.preventDefault();
		$('').toggleClass('is-active');
	});

	$('.burger-menu').click(function(e){
		e.preventDefault();
		$('.burger-menu').toggleClass('is-active');
		$('.main-menu').toggleClass('is-active');
	});
	$( window ).resize(function() {
		$('.burger-menu').removeClass('is-active');
		$('.main-menu').removeClass('is-active');
		heightFooter()
	});
	$( window ).scroll(function() {
		$('.burger-menu').removeClass('is-active');
		$('.main-menu').removeClass('is-active');
	});

	function heightFooter(){
		var heightFoot = $('.footer').height();
		$('body').css({
			'padding-bottom': heightFoot
		});
	}
	heightFooter()

	// Scroll page
	$(".sauce-nav ul li a").mPageScroll2id({
		offset: 130
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 10){  
			$('.top-line').addClass("is-active");
		}
		else{
			$('.top-line').removeClass("is-active");
		}
	});

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

	/* Popup Window */

	// $(".popup").magnificPopup({
	// 	removalDelay: 150,
	// 	mainClass: 'mfp-fade'
	// });


	$('.slide-section').owlCarousel({
		loop: true,
		singleItem:true,
		nav:true,
		//autoplay: true,
		autoplayTimeout: 5000,
		navText : [
		'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="23" viewBox="0 0 13 23"><defs><path id="t99ia" d="M1203 4089l11 10.5-11 10.5"/></defs><g><g transform="translate(-1202 -4088)"><use fill="#fff" fill-opacity="0" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="50" stroke-width="2" xlink:href="#t99ia"/></g></g></svg>',
		'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="23" viewBox="0 0 13 23"><defs><path id="t99ia" d="M1203 4089l11 10.5-11 10.5"/></defs><g><g transform="translate(-1202 -4088)"><use fill="#fff" fill-opacity="0" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="50" stroke-width="2" xlink:href="#t99ia"/></g></g></svg>'
		],
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
	
});