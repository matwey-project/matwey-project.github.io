$(document).ready(function() {

	$('.burger-menu').click(function(e){
		e.preventDefault();
		$('.mobile-menu').toggleClass('is-active');
		$('.overlay').toggleClass('is-active');
		$('body').toggleClass('overflov');
	});
	$('.overlay').click(function(){
		$('.mobile-menu').toggleClass('is-active');
		$('.overlay').toggleClass('is-active');
		$('body').toggleClass('overflov');
	});

	$('.wrapper_search-header input').on('blur', function (){
		if (!this.value) {
			$(this).removeClass('is-active');
		} else {
			$(this).addClass('is-active');
		}
	}).on('focus', function () {
		$(this).addClass('is-active');
		$('.default__form-button').removeClass('active');
	});

});