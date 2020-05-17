$(document).ready(function() {

	var mq = matchMedia('(max-width: 800px)');
	var handler = function(e) {
		if (e.matches) {
			//document.body.classList.add('-black');
			/* Scroll page */
			$(".next-block").mPageScroll2id({
				offset: 0
			});
		}
		else {
			$(".next-block").mPageScroll2id({
				offset: 85
			});
			//document.body.classList.remove('-black');
		}
	};
	mq.addListener(handler);
	handler(mq);

	/* Sticky */
	$(window).scroll(function() {
		if ($(this).scrollTop() > 70){  
			$('.top-line').addClass("sticky");
		}
		else{
			$('.top-line').removeClass("sticky");
		}
	});

	/* Scroll page */
	$(".next-block").mPageScroll2id({
		offset: 85
	});

	/* Popup Window */
	$(".popup").magnificPopup({
		removalDelay: 150,
		mainClass: 'mfp-fade'
	});

	$(document).ready(function() {
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		//disableOn: 1000,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: true,

		fixedContentPos: false
	});
});

	/* Burger Menu */

	$('.burger-menu').click(function(e){
		e.preventDefault();
		$('body').toggleClass('overflov-body');
		$('.top-line').toggleClass('active');
	});

});