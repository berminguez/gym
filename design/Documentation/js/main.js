(function ($) {
 "use strict";
 
/*--
	Mobile Menu
------------------------*/
$('.mobile-menu nav').meanmenu({
	meanScreenWidth: "990",
	meanMenuContainer: ".mobile-menu",
	onePage: true,
});

			//topfixed nav  page
				  $('.nav_areas').scrollToFixed({
					preFixed: function() { $(this).find('.nav_area').addClass('prefix'); },
					postFixed: function() { $(this).find('.nav_area').addClass('postfix').removeClass('prefix'); }
				}); 


/*--
	One Page Nav
-----------------------------------*/
$('.navid').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 1000,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
});
	/*--
	Smooth Scroll
-----------------------------------*/
$('.menu ul li a').on('click', function(e) {
	e.preventDefault();
	var link = this;
	$.smoothScroll({
	  offset: -80,
	  scrollTarget: link.hash
	});
});	

	
})(jQuery);    



