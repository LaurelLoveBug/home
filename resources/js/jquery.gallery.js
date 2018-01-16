$( document ).ready(function() {
    jQuery('a.gallery').colorbox({rel:'group1', transition:'elastic'});
	$('.lazy').slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
		autoplay: false,
		dots: true,
		adaptiveHeight: true,
		autoplaySpeed: 3000
      });
	$('.toggle').click(function() {
		$('.sub').toggleClass('active');
	});
	var images = ['aaip.jpg', 'paultaylorgirl.jpg', 'revivalistsstage.jpg', 're2.jpg', 'glenisspeak.jpg', 'bridgefull.jpg'];
	$('.hero.first').css({'background-image': 'url(resources/images/' + images[Math.floor(Math.random() * images.length)] + ')'});
	$('.welcome').fadeIn(1000);
	$('.tagline').slideDown(800);
});