$(document).ready(function() {

$('.burger-menu').click(function(e){
	e.preventDefault();
	$('.left-sidebar').toggleClass('menu-left__open');
});

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

/* Tab menu End */

$('input[type=range]').on('input', function(e){
  var min = e.target.min,
      max = e.target.max,
      val = e.target.value;
  
  $(e.target).css({
    'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
  });
}).trigger('input');

/* Circle */

var Circle = function(sel){
    var circles = document.querySelectorAll(sel);
    [].forEach.call(circles,function(el){
        var valEl = parseFloat(el.innerHTML);
        valEl = valEl*1005/100;
        el.innerHTML = '<svg width="354" height="354"><linearGradient id="linear-gradient"><stop offset="0%" stop-color="#00e090"/><stop offset="16%" stop-color="#00e090"/><stop offset="41%" stop-color="#91e700"/><stop offset="61%" stop-color="#ffda36"/><stop offset="79%" stop-color="#ffb804"/><stop offset="100%" stop-color="#ff2765"/></linearGradient><circle transform="rotate(-90)" r="160" cx="-177" cy="177" /><circle transform="rotate(90)" style="stroke-dasharray:'+valEl+'px 1005px;" r="160" cx="177" cy="-177" /></svg>';
        
    });
};
Circle('.circle');

/* Circle End */

	$('.round-close').click(function(e) {
		e.preventDefault();
		$(this).parent().toggleClass('open');
		$(this).parent().next().slideToggle('fast');
	});

	/* Toggle Sidebar */

	$('#closed-left').click(function(e) {
		e.preventDefault();
		$('.left-sidebar').toggleClass('closed__left-sidebar');
		$('.wrapper-main').toggleClass('offset-left');
	});

	$('#closed-right').click(function(e) {
		e.preventDefault();
		$('.right-sidebar').toggleClass('closed__right-sidebar');
		$('.wrapper-main').toggleClass('offset-right');
	});


});