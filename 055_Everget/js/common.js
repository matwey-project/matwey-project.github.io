$(document).ready(function() {

	$(window).scroll(function () {
  if($(window).scrollTop() > 50) {
    $(".top-line").addClass('sticky');
  } else {
    $(".top-line").removeClass('sticky');
  }
});

	/* Popup Window */

	$(".popup").magnificPopup({
		removalDelay: 150,
		fixedContentPos: true,
		mainClass: 'mfp-fade'
	});

	/* Popup Window End */

	/* AutoHeightFooter */

	function heightFooter(){
		var heightFoot = $('.footer').outerHeight();
		$('body').css({ 'padding-bottom': heightFoot});
	}
	heightFooter()
	$( window ).resize(function() {
		heightFooter()
	});

	var openMenu = function(){
		const openClick = document.querySelector('.burger-menu'),
					closeClick = document.querySelector('.close-menu'),
					bodyClass = document.querySelector('body'),
					mobileMenuHide = document.querySelector('.mobile-menu');
		if(openClick){
			openClick.addEventListener('click', checkMenu);
			closeClick.addEventListener('click', checkMenu);
			
			function checkMenu(e){
				e.preventDefault();
				if(mobileMenuHide.classList.contains('is-show')) {
					bodyClass.classList.remove('no-scroll');
					mobileMenuHide.classList.remove('is-show');
				} else {
					bodyClass.classList.add('no-scroll');
					mobileMenuHide.classList.add('is-show');
				}
			}
		}
	};
	openMenu();

	/* Select */

	$(".js-select2").select2({
		tags: true,
		minimumResultsForSearch: -1,
		containerCssClass: "wiev-cont",
		dropdownCssClass: "hide-cont"
	});
	/* Select End */

	/* Range */

	$('input[type=range]').on('input', function(e){
		var min = e.target.min,
		max = e.target.max,
		val = e.target.value;

		$(e.target).css({
			'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
		});
	}).trigger('input');

	function fun1() {
		var rng=document.getElementById('r1');
		var p=document.getElementById('one');
		p.innerHTML=rng.value;
		var div=document.getElementById('test');
		div.style.width=rng.value+'%';
	}
	/* Range End */

});