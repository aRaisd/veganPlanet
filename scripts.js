jQuery(document).ready(function() {
	
	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	// toggle "navbar-no-bg" class
	$('.top-content .carousel-caption').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});
	
    /*
        Background slideshow
    */
    $('.section-4-container').backstretch("assets/img/backgrounds/2.jpg");
    
    /*
	    Wow
	*/
	new WOW().init();
	
	/*
	    Stop / Start carousel autoplay
	*/
	$('.btn-customized').on('click', function(){
		if( !$(this).hasClass('paused') ) {
			$('.carousel').carousel('pause');
			$('.btn-customized').toggleClass('paused');
			$('.btn-customized i').removeClass('fa-pause').addClass('fa-play');
			$(this).blur();
		}
		else {
			$('.carousel').carousel('cycle');
			$('.btn-customized').toggleClass('paused');
			$('.btn-customized i').removeClass('fa-play').addClass('fa-pause');
			$(this).blur();
		}
		
	});
	
});