$(window).scroll(function(){
	if ($(this).scrollTop() > 135) {
		$('.navbar').addClass('fixed-top');
	} else {
		$('.navbar').removeClass('fixed-top');
	}
});