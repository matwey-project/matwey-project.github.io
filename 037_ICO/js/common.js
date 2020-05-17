$(document).ready(function() {

	/* Dropdown Menu */
	$('.preview-login').click(function(e){
		e.preventDefault();
		$('.login-dropdown--menu').toggleClass('active');
	});
	$(document).mouseup(function (e) {
	var container = $(".preview-login");
	if (container.has(e.target).length === 0){
		$('.login-dropdown--menu').removeClass('active');
	}
});

	/* Form links */
	$(document).on('click', '.form_links_button', function(event) {
		event.preventDefault();
		var count = $(this).parent('.form_links').find('.form_links_add').length+1;
		if(count <= 10) {
			$(this).before('<div class="form_links_add clearfix"><div class="form_links_fields"><p><input class="input" name="founder_anchor'+count+'" type="text" value=""></p><p><input class="input" name="founder_link'+count+'" type="url" value=""></p></div><div class="form_links_remove"></div></div>');
		} 
		if(count === 10) {
			$(this).addClass("hide-btn");
		}
	});

	$(document).on('click', '.form_links_remove', function(event) {
		event.preventDefault();
		$(this).parents('.form_links_add').remove();
		if($('.dashboard_form .form_links_button').hasClass('hide-btn')) {
			$('.dashboard_form .form_links_button').removeClass("hide-btn");
		}
	});

	 /* Profile photo */
    function uploadLogoPhoto() {
        var file = this.files[0],
            currentSrc = $('.add_logo_img').find('img').attr('src'),
            that = $(this);

        if (file.type.indexOf('image') != -1) {
            var reader = new FileReader();         

            reader.onloadend = function(e) {
                if (that.siblings('.add_logo_img').find('img').attr('src')) {
                    that.siblings('.add_logo_img').find('img').attr('src', e.target.result);
                }
                else {
                   that.siblings('.add_logo_img').prepend('<img src="'+e.target.result+'" alt="">') 
                }
                that.siblings('.add_logo').fadeOut();
                that.siblings('.add_logo_img').fadeIn();
            };

            reader.readAsDataURL(file);
        }
        else {
            alert('Select an image');
        }
    }

    $(document).on('change', '.add_logo_file', uploadLogoPhoto);
    $(document).on('change', '.add_logo_icon', uploadLogoPhoto);

    $('.remove_logo_img').on('click', function(event) {
    	event.preventDefault();
    	event.stopPropagation();
    	$(this).parents('.add_logo_img').siblings('.add_logo').fadeIn();
    	$(this).parents('.add_logo_img').fadeOut();
    	$(this).siblings('img').remove();
    });

	$('.datepicker-here').datepicker({
		//range: true,
	});

	$.magnificPopup.instance._onFocusIn = function(e) {

		if( $(e.target).hasClass('ui-datepicker-month') ) {
				return true;
		}
		if( $(e.target).hasClass('ui-datepicker-year') ) {
				return true;
		}
		$.magnificPopup.proto._onFocusIn.call(this,e);
};

	var inputs = document.querySelectorAll( '.inputfile' );
Array.prototype.forEach.call( inputs, function( input )
{
	var label	 = input.nextElementSibling,
		labelVal = label.innerHTML;

	input.addEventListener( 'change', function( e )
	{
		var fileName = '';
		if( this.files && this.files.length > 1 )
			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
		else
			fileName = e.target.value.split( '\\' ).pop();

		if( fileName )
			label.querySelector( 'span' ).innerHTML = fileName;
		else
			label.innerHTML = labelVal;
	});
});

	$('.marquee').marquee({
		duplicated: true,
		pauseOnHover: true,
		duration: 20000,
		startVisible: true
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	/*/////////////////*/
	/* OPEN MOBILE MENU /////////////////*/
	/*/////////////////*/

	$('.mobile-menu__open').click(function(){
		if ($('.header-nav').css('display') == 'none') { 
			$('.header-nav').animate({height: 'show'}, 300);
		} 
		else {     
			$('.header-nav').animate({height: 'hide'}, 300); 
		}
	});

	// Add Span
	
	$('.menu-item-has-children').prepend('<span class="open-sub"></span>');

	if(matchMedia){
		var screen = window.matchMedia("(max-width:768px)");
		screen.addListener(changes);
		changes(screen);
	}
	function changes(screen){
		if(screen.matches){
			$('.header-nav').addClass('mobileMenu');
			$('ul.sub-menu').removeClass('sub-menu');
		}
		else{
			$('.header-nav').removeClass('mobileMenu');

			if ($('.menu-item-has-children ul').hasClass('sub-menu') == false) {
				$('.menu-item-has-children ul').addClass('sub-menu');
			}
		}
	}

	// Accordion

	$('.header-nav li.active').addClass('open').children('ul').show();
	$('.header-nav li.menu-item-has-children>span').on('click', function(){
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

	/*/////////////////*/
	/* OPEN MOBILE MENU END /////////////////*/
	/*/////////////////*/


	/* Popup Window */

	$(".popup").magnificPopup({
		removalDelay: 150,
		mainClass: 'mfp-fade',
	});

	/* Popup Window End */

	$('.log-in__name').click(function(e){
		e.preventDefault();
		$('.log-in__info').toggleClass('active');
	});

	$(document).mouseup(function (e) {
		var container = $(".log-in");
		if (container.has(e.target).length === 0){
			$('.log-in__info').removeClass('active');
		}
	});

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