$(document).ready(function() {

  $(function() {
    jcf.replace('.slct_home');
  });

  // $('.focus-input').focus(function() {
  //   $('.focus-input').addClass('focus-input__active');
  //   $('.search-live').addClass('search-live__active');
  // });

  var size1 = 280,
  newsContent1= $('.main-post__title-subname'),
  newsText1 = newsContent1.text(); 
  if(newsText1.length > size1){
    newsContent1.text(newsText1.slice(0, size1) + ' ...');
  }

  // var size2 = 240,
  // newsContent2= $('.post-items__text-post'),
  // newsText2 = newsContent2.text();
  // if(newsText2.length > size2){
  //   newsContent2.text(newsText2.slice(0, size2) + ' ...');
  // }

  $('.mobile-mnu__button').click(function(e){
    e.preventDefault();
    $('.mobile-mnu__button').toggleClass('active');
    $('.mobile-mnu').toggleClass('minheight');
    $('body').toggleClass('overhid');
    if ($('.mobile-mnu').css('display') == 'none') { 
      $('.mobile-mnu').animate({height: 'show'}, 300);
    }
    else {
      $('.mobile-mnu').animate({height: 'hide'}, 300); 
    }
  });

  /* Popup Window */
/*
  $(".popup").magnificPopup({
    removalDelay: 150,
    mainClass: 'mfp-fade'
  });
  */
// Open mobile menu

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
/*
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
  */
});