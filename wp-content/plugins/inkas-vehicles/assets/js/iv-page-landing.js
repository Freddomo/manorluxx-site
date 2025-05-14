jQuery.noConflict();
(function($) {
/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
# isInViewport
# CTA Block trigger on MB
# VC Normalize (replace VC classes with ours)
# Mobile removal
# Shadowbox
# eModal (Print)
# Hover snippet
# Gravity Forms
# 360
# Brands
# Stock Landing
--------------------------------------------------------------*/
/*--------------------------------------------------------------
# isInViewport
--------------------------------------------------------------*/
$.fn.isInViewport = function(){
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();

	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();

	return elementBottom > viewportTop && elementTop < viewportBottom
}

/*--------------------------------------------------------------
# CTA Block trigger on MB
--------------------------------------------------------------*/
if ($(window).width() < 1024){
	$('.vehicles-new-template-page-vehicles-new-landing #specs-wrapper .iv-cta-block .acx-button.btn-submit-inquiry').click(function(e){
		e.preventDefault();
		$('.acx-leadgrabber-sticky .btn-toggle[data-content="form"]').click();
	});
}

/*--------------------------------------------------------------
# Set #features as last section
--------------------------------------------------------------*/
$('.vehicles-new-template .vehicles-new-landing section#features').addClass('last-section');

/*--------------------------------------------------------------
# VC Normalize (replace VC classes with ours)
--------------------------------------------------------------*/
$('.vehicles-new-landing section').addClass('border');
$('.vehicles-new-landing section.no-border').removeClass('border');

// $('.vehicles-new-landing section#features .grid .cols.cols-dsktp-xl-6.cols-dsktp-6').addClass('cols-dsktp-xl-half cols-dsktp-half').removeClass('cols-dsktp-xl-6 cols-dsktp-6');

// add rifle/grenade classes to main cols on .withstand-section
$('.vehicles-new-landing .withstand-section .grid .cols').each(function(){
	var classes = $(this).find('.evc-image-with-text').attr('class');

	$(this).addClass(classes);
	$(this).removeClass('evc-image-with-text evc-shortcode');

	// var remove_br = $(this).find('.evc-iwt-text').text().replace('<br />', '<br>');
	// var remove_br = $(this).find('.evc-iwt-text').text().replace('<br />', ' ');
	var title_remove_tags = $(this).find('.evc-iwt-title').text().replace('</p>', '').replace('<p>', '').replace('<div>', '<div>').replace('</div>', '</div>');
	var subtext_remove_tags = $(this).find('.evc-iwt-text').text().replace('</p>', '').replace('<p>', '').replace('<div>', '<div>').replace('</div>', '</div>');
		
	$(this).find('.evc-iwt-title').html(title_remove_tags);
	$(this).find('.evc-iwt-text').html(subtext_remove_tags);
});

// $('.vehicles-new-landing .withstand-section .grid .cols.grenade').addClass('cols-dsktp-xl-4 cols-dsktp-4 cols-tb-6 cols-mb-12').removeClass('cols-dsktp-xl-3 cols-dsktp-3');

$('.vehicles-new-landing .withstand-section .grid .cols:first-child').removeClass('cols-tb-6').addClass('cols-tb-12');
$('.vehicles-new-landing section#armoring .cols').removeClass('cols-tb-6 cols-mb-12').addClass('cols-tb-12 cols-mb-12 align-middle');
$('.vehicles-new-landing section#features .cols').removeClass('cols-tb-6').addClass('cols-tb-12');

// Protection section, rearrange grid into one
/*$('.vehicles-new-landing section.merge-grid').add('<div class="cards-wrapper cards">').appendTo('.vehicles-new-landing section.merge-grid');
$('.vehicles-new-landing section.merge-grid .cards.grid .cols').appendTo('.vehicles-new-landing section.merge-grid .cards-wrapper');
$('.vehicles-new-landing section.merge-grid .cards.grid').remove();
$('.vehicles-new-landing section.merge-grid .cards-wrapper').addClass('grid-wrapper grid mb-grid-slider').removeClass('cards-wrapper');
$('.vehicles-new-landing section.merge-grid').removeClass('merge-grid');*/

var custom_heading_remove_tags = $('.vc_custom_heading').text().replace('</p>', '').replace('<p>', '');
// $('.vc_custom_heading').html(custom_heading_remove_tags);

// Header Text color application
// var color = $('.vehicles-new-landing #hero-img-wrapper article').data('color');
// $('.vehicles-new-landing #hero-img-wrapper article').css('color', color);
// $('.vehicles-new-landing #hero-img-wrapper article *').css('color', color);

/*--------------------------------------------------------------
# Mobile removal
--------------------------------------------------------------*/
if ( $(window).width() < 1024 ){
	$('.vehicles-new-landing #secondary-nav').remove();
	// $('.vehicles-new-template-page-vehicles-new-landing .vehicles-new-landing #overview #image-wrapper').remove();
	$('.vehicles-new-landing #overview #gallery-wrapper .arrow-wrapper').remove();
}

/*--------------------------------------------------------------
# Shadowbox
--------------------------------------------------------------*/
$('.video_thumb').click(function(){
	$('#overlay #frame_img').hide();
	$('#overlay #frame_video').show();
	$('#overlay').fadeIn(300, function(){}).css('display', 'flex');
});

$('#image-wrapper figure').click(function(){
	var src = $(this).find('img').attr('src');
	var pos = $(this).data('pos');
	var count = -1;

	$('#overlay #frame_video').hide();
	$('#overlay #frame_img').show();
	$('#overlay #frame_img img').attr('src', src);

	$('#overlay').fadeIn(300, function(){}).css('display', 'flex');

	$('.vehicles-new-landing #gallery-wrapper .gallery figure').each(function(){
		var gallSrc = $(this).find('img').attr('src');
		count++;

		$('#overlay #frame_img').add('<figure class="gall-clone" data-pos="' + count +'"><img src="' + gallSrc + '" /></figure>').appendTo('#overlay #frame_img');
		$('#overlay #frame_img .gall-clone').hide();
		$('#overlay #frame_img .gall-clone[data-pos="' + pos + '"]').show();
	});

	// Button Next logic
	$('#overlay #frame_img .slick-next').click(function(){
		var last_pos = ($('#overlay #frame_img .gall-clone:last-child').attr('data-pos'));

		if (pos != last_pos){
			pos++;
			$('#overlay #frame_img .gall-clone').hide();
			$('#overlay #frame_img .gall-clone[data-pos="' + pos + '"]').show();
		}
	});

	// Button Prev logic
	$('#overlay #frame_img .slick-prev').click(function(e){
		if (pos != 0){
			pos--;
				
			$('#overlay #frame_img .gall-clone').hide();
			$('#overlay #frame_img .gall-clone[data-pos="' + pos + '"]').show();
		}
	});
});

// Button close logic
$('.overlay_close').click(function(){
	$('#overlay').fadeOut(300, function(){});
	$('#overlay #frame_img .gall-clone').remove();

	// resets video on close to prevent playing in bg or not starting back at 0
	var video_src = $('#overlay #frame_video iframe').attr('src');
	$('#overlay #frame_video iframe').attr('src', '');
	$('#overlay #frame_video iframe').attr('src', video_src);
});

/*--------------------------------------------------------------
# eModal (Print)
--------------------------------------------------------------*/
$('.vehicles-new-landing #nav-right a[data-type="print"]').click(function(e){
	window.print();
});

/*--------------------------------------------------------------
# Hover snippet
--------------------------------------------------------------*/
$('.btn-info-snippet').hover(function(){
	$(this).nextAll('.snippet').fadeToggle(300);
});

/*--------------------------------------------------------------
# Gravity Forms
--------------------------------------------------------------*/
// $('.gform_wrapper.gravity-theme .gform_footer button span').text('Send Inquiry');

/*--------------------------------------------------------------
# 360
--------------------------------------------------------------*/
$('figure#three-sixty .sirv-spin-container .spin-figure a').remove();

/*--------------------------------------------------------------
# Brands
--------------------------------------------------------------*/
$('.vehicles-brands').ready(function(){
	var get_class = $(this).find('.armoring-perks').attr('class').replace('armoring-perks', '').replace('grid', '');
	$(this).find('.armoring-perks .cols').addClass(get_class);
});

/*--------------------------------------------------------------
# Stock Landing
--------------------------------------------------------------*/
$('.single-stock-vehicles').each(function(){
	var title = $(document).prop('title');
	
	$(this).find('.stock-landing #secondary-nav .acx-button').click(function(){
		var date_stamp = new Date().toLocaleString();
		var title_new = $(this).parents('.stock-landing').data('title');
		
		$(this).parents('.single-stock-vehicles').find('#date-stamp').text(date_stamp);
		
		$(document).prop('title', title_new); //set new title
		window.print();
		$(document).prop('title', title); //revert to old title
	});
});



})(jQuery);