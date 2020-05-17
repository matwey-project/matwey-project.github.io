jQuery(function(){
  var slides = {
    cycleActive: function(sideTarget){
      jQuery('.active-side').removeClass('active-side');
      jQuery('.v-sidebar[data-slide="' + sideTarget + '"]').addClass('active-side');
    },
    init: function(){
      var count = jQuery('.v-slide').length;
      var itemWidth = jQuery('.v-slide').width();
      var trackWidth = itemWidth * count;
      var animating = false;
      var timer = '';
      var windowW = jQuery(window).width();

      for (i=0; i < count; i++) {
        if (i < 4) {
          jQuery('.v-slide').eq(i).animate({
            opacity: 1,
          }, (i||.5) * 500);
        } else {
          jQuery('.v-slide').eq(i).css('opacity', 1);
        }
      }

      jQuery('.v-slides').width(trackWidth).css('left', (itemWidth * 2) * -1);

      jQuery(window).resize(function() {
        windowW = jQuery(window).width();
        jQuery('.v-slides').width(trackWidth).css('left', jQuery('.v-slides').css('left'));
        itemWidth = jQuery('.v-slide').width();
        trackWidth = itemWidth * count;
      });

      jQuery('.v-slideshow').on('click', '.v-slide, .v-slide-next, .v-slide-prev', function(e) {
        if (!animating) {
          animating = true;
          var left = e.pageX < jQuery(window).width() / 2 ? itemWidth * -1: false;
          var right = e.pageX > jQuery(window).width() / 2 ? itemWidth : false;
          jQuery('.v-slides').stop().animate({
            left: parseInt(jQuery('.v-slides').css('left')) - (left || right)
          }, 500, function(){
            jQuery('.v-slides').css('left', (itemWidth * 2) * -1);
            if (right){
              jQuery('.v-slide').first().remove().clone().appendTo('.v-slides');
              var sideTarget = jQuery('.active').next().attr('data-slide');
              slides.cycleActive(sideTarget);
              jQuery('.active').removeClass('active').next().addClass('active');
            } else {
              jQuery('.v-slide').last().remove().clone().prependTo('.v-slides');
              var sideTarget = jQuery('.active').prev().attr('data-slide');
              slides.cycleActive(sideTarget);
              jQuery('.active').removeClass('active').prev().addClass('active');
            }
            animating = false;
          });
        }
      });

      jQuery( ".v-slideshow" ).hover(
        function() {
          clearInterval(timer);
        }, function() {
          //slides.setTimer();
        }
      );

      timer = setInterval(function(){
        var e = new jQuery.Event("click");
        e.pageX = jQuery(window).width();
        e.pageY = 0;
        jQuery(".v-slide-next").trigger(e);
      }, 8000);

    }
  }
  slides.init();
});
