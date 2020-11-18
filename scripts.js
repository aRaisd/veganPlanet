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
	$(".toggle").on("click", function()	{
		if($(".menu-item").hasClass("active")){
			$(".menu-item").removeClass("active");
		}
		else{
			$(".menu-item").addClass("active");
		}
	})
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

var box = document.querySelector('.box');
var radioGroup = document.querySelector('.radio-group');
var currentClass = null;
var hrefsSeLected = document.querySelector('.hrefList');


function highLightHref() {
	console.log('highlight!');
}

function changeSide() {
	var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
	console.log("changeSide");
	console.log("currentClass: "+currentClass);
	console.log("showClass: " + showClass);
  if ( currentClass ) {
		console.log("remove class ?"+currentClass);
		box.classList.remove( currentClass );
  }
  box.classList.add( showClass );
  currentClass = showClass;
	console.log("new currentClass: "+currentClass);
}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );
// hrefsSelected.addEventListener( 'active', highLightHref );

	
});