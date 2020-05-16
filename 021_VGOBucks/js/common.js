$(document).ready(function() {

  var img = document.querySelector('.rullete-rotate');
  if(img != null) {
    img.addEventListener('click', onClick, false);

    var deg = 0;
    function onClick() {
      this.removeAttribute('style');
      deg += 500 + Math.round(Math.random() * 800);
      var css = '-webkit-transform: rotate(' + deg + 'deg);';
      this.setAttribute(
        'style', css
        );
    }
  }
  

function heightBlock(){
	let heightLearHesder = $('.leaderboard-header').innerHeight();
	let rus = ($(window).height() - (heightLearHesder + 150));
	$('.leaderboard-list').css({
		'height': (rus - 45)+"px"
	});
}
heightBlock();

$(function(){
	$(window).resize(function() {
		console.log();
	})
})

$('.skins-item').click(function(e){
	e.preventDefault();
	$(this).toggleClass('is-active');
});

$('.closed-sidebar, .open-sidebar').click(function(e){
	e.preventDefault();
	$('.sidebar').toggleClass('is-active');
	$('main').toggleClass('is-active');
	$('html').toggleClass('is-active');
});

$(".sidebar-scroll").mCustomScrollbar({
	theme:"dark",
	scrollInertia: 800,
});

$('.mobile-menu').click(function(e){
	e.preventDefault();
	$('.navigation-list').toggleClass('is-active');
});
$(document).mouseup(function (e) {
	var container = $(".left-header");
	if (container.has(e.target).length === 0){
		$('.navigation-list').removeClass('is-active');
	}
});

$('.user-login').click(function(e){
	e.preventDefault();
	$('.option_user-login').toggleClass('is-active');
});
$(document).mouseup(function (e) {
	var container = $(".wrapper__user-login");
	if (container.has(e.target).length === 0){
		$('.option_user-login').removeClass('is-active');
	}
});

$( window ).resize(function() {
	$('.navigation-list').removeClass('is-active');
	$('.option_user-login').removeClass('is-active');
});


$("#volume").slider({
	min: 0,
	max: 100,
	value: 60,
	range: "min",
	slide: function(event, ui) {
		setVolume(ui.value / 100);
	}
});

var myMedia = document.createElement('audio');
$('#player').append(myMedia);
myMedia.id = "myMedia";

playAudio('http://emilcarlsson.se/assets/Avicii%20-%20The%20Nights.mp3', 0);

function playAudio(fileName, myVolume) {
	myMedia.src = fileName;
	myMedia.setAttribute('loop', 'loop');
	setVolume(myVolume);
    	//myMedia.play();
    }

    function setVolume(myVolume) {
    	var myMedia = document.getElementById('myMedia');
    	myMedia.volume = myVolume;
    }

    function heightFooter(){
    	var heightFoot = $('.footer').height();
    	$('body').css({
    		'padding-bottom': heightFoot
    	});
    }
    heightFooter();
    $( window ).resize(function() {
    	heightFooter();
    });

    /* Popup Window */

    $(".popup").magnificPopup({
    	removalDelay: 150,
    	mainClass: 'mfp-fade',
		//fixedContentPos: true,
		//overflowY: 'hidden'
	});

    var x, i, j, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName("custom-select");
    for (i = 0; i < x.length; i++) {
    	selElmnt = x[i].getElementsByTagName("select")[0];
    	/* For each element, create a new DIV that will act as the selected item: */
    	a = document.createElement("DIV");
    	a.setAttribute("class", "select-selected");
    	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    	x[i].appendChild(a);
    	/* For each element, create a new DIV that will contain the option list: */
    	b = document.createElement("DIV");
    	b.setAttribute("class", "select-items select-hide");
    	for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
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
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
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

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

});