jQuery.noConflict();
(function($) {
/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
# Slick
# Load
# Carousel Lightbox
# Custom Modals
# Category Slider
# International Phone
--------------------------------------------------------------*/
$(document).ready(function(){
	$('#ae_launcher').appendTo('footer');
});

$('.page-id-89243 #wideRangeOfVehicles .grid .cols').removeClass('wpb_column vc_column_container vc_col-sm-4');

/*--------------------------------------------------------------
# Slick
--------------------------------------------------------------*/
$('#carouselLightbox .frame').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: true,
	arrows: false,
	prevArrow: '<button class="slick-prev slick-arrow"></button>',
	nextArrow: '<button class="slick-next slick-arrow"></button>',
	variableWidth: true
});

$('#postsWidget .frame').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	appendArrows: '#postsWidget .arrows-wrapper',
	prevArrow: '<button class="slick-prev slick-arrow"></button>',
	nextArrow: '<button class="slick-next slick-arrow"></button>',
	variableWidth: true
});

$('.vehicle-slider .frame').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	appendArrows: '.vehicle-slider .arrows-wrapper',
	prevArrow: '<button class="slick-prev slick-arrow"></button>',
	nextArrow: '<button class="slick-next slick-arrow"></button>',
	variableWidth: true
});

$('.industry-partners-sc').slick({
	slidesToShow: 6,
	slidestoScroll: 1,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 0,
	speed: 6000,
	pauseOnHover: false,
	variableWidth: true,
	arrows: false,
	dots: false,
	cssEase: 'linear',
});

// $('#categorySlider #row-slider .frame').slick({
// 	slidesToShow: 4,
// 	slidesToScroll: 1,
// 	dots: false,
// 	arrows: true,
// 	appendArrows: '#categorySlider #row-slider .arrows-wrapper',
// 	prevArrow: '<button class="slick-prev slick-arrow"></button>',
// 	nextArrow: '<button class="slick-next slick-arrow"></button>',
// 	variableWidth: true
// });


/*--------------------------------------------------------------
# Load
--------------------------------------------------------------*/
$(document).ready(function(){
	var src = $('#carouselLightbox .frame #slick-slide01 img').attr('src');
	$('#carouselLightbox #carouselMainImg img').attr('src', src);

	$('.page-template-landing img[src="/wp-content/uploads/flag.jpeg"]').remove();
});


// home pg toggle
$('#more-about-us-button').click(function(){
	$('.more-about-us-text').slideToggle(300, function(){

	});
});

$('.postid-7469 #listing-page-form .gfpmf-intl').on( 'countrychange', function(){
	// var countryName = $('#listing-page-form .iti__active:last-child .iti__country-name').text();
	// var countryCode = $('#listing-page-form .iti__active:last-child .iti__dial-code').text();
	var country = $('.postid-7469 #listing-page-form .iti--allow-dropdown .iti__selected-flag').attr('title');
	console.log(country);

	if (country == 'Unknown'){
		$('.gform_footer button.button').prop('disabled', true).css('background-color', '#666');
	}
	else{
		$('.gform_footer button.button').prop('disabled', false).css('background-color', '#015472');		
	}
});

/*--------------------------------------------------------------
# Carousel Lightbox
--------------------------------------------------------------*/
$('#carouselLightbox .frame figure').click(function(){
	var src = $(this).find('img').attr('src');
	$('#carouselLightbox #carouselMainImg img').attr('src', src);
});

/*--------------------------------------------------------------
# Custom Modals
--------------------------------------------------------------*/
$('.custom_modal .gform_heading').remove();

$('.custom_modal .btn_modal_close').click(function(){
	$('#overlay').fadeOut(300, function(){});
	$(this).parent().fadeOut(300, function(){});
});

$('.modalbtn').click(function(){
	var modal_name = $(this).attr('href');

	$('#wfboxOverlay').css('display', '').fadeIn(300, function(){});
	$(modal_name).css('display', '').fadeIn(300, function(){});
});

$('.more-info').click(function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $('#listing-page-form').offset().top
	}, 300);
});

/*--------------------------------------------------------------
# eModal
--------------------------------------------------------------*/
$('.emodal-close').click(function(){
	$('#wfboxOverlay').fadeOut(300, function(){});

	$('.emodal').fadeOut(300, function(){}).removeClass('show');
});

/*--------------------------------------------------------------
# Category Slider
--------------------------------------------------------------*/
$('#categorySlider #row-slider .btn-title, #categorySlider #row-slider figure').click(function(){
	var category = $(this).data('category');

	$('#categorySlider #row-slider .cols').removeClass('active');
	// $(this).addClass('active');
	$(this).parent().addClass('active');

	// $('#categorySlider #content-slider .frame').hide(300, function(){});
	// $('#categorySlider #content-slider').find('.' + category).show(300, function(){});

	$('#categorySlider #content-slider .frame').css('opacity', 0);
	$('#categorySlider #content-slider').find('.' + category).css('opacity', 1);
});


Draggable.create('#categorySlider #row-slider .frame', {
	type: 'x',
	dragResistance: 0,
	bounds: $('#categorySlider #row-slider'),
	intertia: false
});



})(jQuery);
