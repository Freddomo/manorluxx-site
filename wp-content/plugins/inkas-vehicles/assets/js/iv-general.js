jQuery.noConflict();
(function($) {
/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
# CQ Carousel
# Secondary Nav Sticky
# Catalogs
# Listings re-arrangement
# Vehicles listings gallery re-model
# Mobile Menu
# Custom Gallery / Lightbox
# Accessibility
# Remove sidebar items
# Pages
	## About Us
	## Dealer Pages
	## BR4 Landing
	## VPAM VR7
	## Homepage (updated)
	## Homepage (NEW)
	## BYOT
# Slick
# Splide
	## Homepage (NEW)
	## BYOT
	## Vehicles (listings)
--------------------------------------------------------------*/
/*--------------------------------------------------------------
# CQ Carousel
--------------------------------------------------------------*/
$(document).ready(function(){
	if ( $('.cqcarousel-container').next().is('.wpb_video_widget') || $('.wpb_video_widget').next().is('.cqcarousel-container') ){
		var video_url = $('.wpb_video_widget iframe').attr('src').match(/[^/]*$/)[0].replaceAll('?feature=oembed', '');

		$('.cqcarousel-container').prev('.vc_custom_heading').prependTo('.cqcarousel-container');
		$('.carousel-gallery').add('<div class="slick-slide" index="0"></div>').prependTo('.carousel-gallery');
		$('.wpb_video_widget iframe').appendTo( $('.carousel-gallery .slick-slide[index="0"]') );

		$('.carousel-thumb').add('<div class="slick-slide" index="0"><img src="http://i3.ytimg.com/vi/' + video_url + '/hqdefault.jpg" alt="" /></div>').prependTo('.carousel-thumb');

		var getHeight = $('.carousel-gallery .slick-slide[index="0"]').next().find('img').height();
		$('.carousel-gallery iframe').css('height', getHeight);		

		$('.wpb_video_wrapper').remove();
		$('.caption').appendTo('.cqcarousel-container');
	}
});

/*--------------------------------------------------------------
# Secondary Nav Sticky
--------------------------------------------------------------*/
$('.vehicles-new-template, .page-id-92286').each(function(){
	if ($(window).width() > 768){
		var distance = $('#secondary-nav').offset().top;
		
		// Sticky secondary nav menu
		$(window).scroll(function(){
			if ($(this).scrollTop() >= distance){
				$('#secondary-nav').addClass('fixed');
			}
			else{
				$('#secondary-nav').removeClass('fixed');
			}
		});

		// active state once past section
		$(this).find('main section').each(function(){
			var section_id = $(this).attr('id');
			var offset = 0;

			if (section_id != null){
				// set offset
				if ($(this).parents('main').find('#secondary-nav').hasClass('fixed')){
					offset = ($(this).parents('main').find('#secondary-nav').height()) * 2;
				}
				else{
					offset = ($(this).parents('main').find('#secondary-nav').height()) * 3;
				}

				var section_distance = $('#' + section_id).offset().top - offset;
				
				$(window).scroll(function(){
					if ($(this).scrollTop() >= section_distance){
						$('#secondary-nav #nav-left a').siblings('a').removeClass('active');
						$('#secondary-nav #nav-left a[href="#' + section_id + '"]').addClass('active');
					}

					var last_section = $('section.last-section').attr('id');
					var last_section_distance = $('section.last-section').offset().top - offset;

					if (last_section != null){
						if ($(this).scrollTop() >= last_section_distance){
							$('#secondary-nav #nav-left a').siblings('a').removeClass('active');
							$('#secondary-nav #nav-left a[href="#' + last_section + '"]').addClass('active');
						}
					}
				});
			}	
		});

		// Nav button behavior
		$(this).find('#secondary-nav #nav-left a').each(function(){
			$(this).click(function(e){
				e.preventDefault();

				var href = $(this).attr('href');
				var offset = 0;

				// active state
				$(this).siblings('a').removeClass('active');
				$(this).addClass('active');

				// set offset
				if ($(this).parents('#secondary-nav').hasClass('fixed')){
					offset = ($(this).parents('#secondary-nav').height()) * 2;
				}
				else{
					offset = ($(this).parents('#secondary-nav').height()) * 3;
				}
				
				$('html, body').animate({
					scrollTop: $(href).offset().top - offset
				}, 300);
			});
		});
	}
});

/*--------------------------------------------------------------
# Secondary Nav Sticky
--------------------------------------------------------------*/
// var topNav = document.getElementById('secondary-nav');
// var scrollMenu = topNav.offsetTop;

// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
// 	var resolution = scrollMenu - document.documentElement.scrollTop;

// 	if ( $(window).width() > 767 ){
// 		if (resolution < 0) {
// 			$('#secondary-nav').addClass('fixed');
// 		}
// 		else {
// 			$('#secondary-nav').removeClass('fixed');
// 		}
// 	}
// }

// var distance = $('#secondary-nav').offset().top;

// $(window).scroll(function() {
// 	if ($(this).scrollTop() >= distance){
// 		$('#secondary-nav').addClass('fixed');
// 	}
// 	else{
// 		$('#secondary-nav').removeClass('fixed');
// 	}
// });

/*--------------------------------------------------------------
# Catalogs
--------------------------------------------------------------*/
$('.oem-catalogs-wrapper object').css('background', 'transparent');
$('.oem-catalogs-wrapper object').contents().find('body div.ndfHFb-c4YZDc-q77wGc').hide();

/*--------------------------------------------------------------
# Listings re-arrangement
--------------------------------------------------------------*/
$('.inventory_box.car_listings .suv').appendTo('.inventory_box.car_listings .suv-wrapper');
$('.inventory_box.car_listings .sedan').appendTo('.inventory_box.car_listings .sedan-wrapper');
$('.inventory_box.car_listings .cash-in-transit').appendTo('.inventory_box.car_listings .cash-in-transit-wrapper');
$('.inventory_box.car_listings .limousine').appendTo('.inventory_box.car_listings .limousine-wrapper');
$('.inventory_box.car_listings .heavy-duty-truck').appendTo('.inventory_box.car_listings .heavy-duty-truck-wrapper');
$('.inventory_box.car_listings .special-purpose').appendTo('.inventory_box.car_listings .special-purpose-wrapper');
$('.inventory_box.car_listings .bus').appendTo('.inventory_box.car_listings .bus-wrapper');

$('.inventory_box.car_listings.all-vehicles').ready(function(){
	$(this).find('.vehicle-category').addClass('display-title');
});

if ($('.inventory_box.car_listings .suv-wrapper').children().length < 1){
	$('.inventory_box.car_listings .suv-wrapper').remove();
}
if ($('.inventory_box.car_listings .sedan-wrapper').children().length < 1){
	$('.inventory_box.car_listings .sedan-wrapper').remove();
}
if ($('.inventory_box.car_listings .cash-in-transit-wrapper').children().length < 1){
	$('.inventory_box.car_listings .cash-in-transit-wrapper').remove();
}
if ($('.inventory_box.car_listings .limousine-wrapper').children().length < 1){
	$('.inventory_box.car_listings .limousine-wrapper').remove();
}
if ($('.inventory_box.car_listings .heavy-duty-truck-wrapper').children().length < 1){
	$('.inventory_box.car_listings .heavy-duty-truck-wrapper').remove();
}
if ($('.inventory_box.car_listings .special-purpose-wrapper').children().length < 1){
	$('.inventory_box.car_listings .special-purpose-wrapper').remove();
}
if ($('.inventory_box.car_listings .bus-wrapper').children().length < 1){
	$('.inventory_box.car_listings .bus-wrapper').remove();
}

/*--------------------------------------------------------------
# Vehicles listings gallery re-model
--------------------------------------------------------------*/
$('.listing-slider').each(function(){
	$(this).find('.home-slider-thumbs ul.slides li').click(function(){
		var thumb_id = $(this).data('thumb');

		$(this).parents('.listing-slider').find('.slider.home-banner ul.slides li').hide();
		$(this).parents('.listing-slider').find('.slider.home-banner ul.slides li[data-thumb="' + thumb_id + '"]').show();
	});
});

/*--------------------------------------------------------------
# Mobile Menu
--------------------------------------------------------------*/
$('#mobile-menu-wrapper #mobile-menu li.searchForm').remove();

$('#btn-menu-toggle').click(function(){
	$('#mobile-menu').addClass('open');
	$('#form-sticky-wrapper').removeClass('slide-in');
});

$('#btn-menu-close').click(function(){
	$('#mobile-menu').removeClass('open');	
})

$('#mobile-menu .menu-item-has-children').each(function(){
	$(this).add('<button class="btn-parent"></button>').prependTo( $(this) );
});

$('#mobile-menu .menu-item-has-children').click(function(){
	$('#mobile-menu .menu-item-has-children .btn-parent').removeClass('btn-open');
	$(this).find('.btn-parent').toggleClass('btn-open');

	$(this).find('.sub-menu').addClass('open').slideToggle(200);

	$(this).find('.sub-menu').hasClass('open').click(function(){
		$(this).removeClass('open').hide();
	});
});

/*--------------------------------------------------------------
# Custom Gallery / Lightbox
--------------------------------------------------------------*/
$('.custom-gallery .gallery-wrapper figure').click(function(){
	var gallery_src = $(this).find('img').attr('src');

	$('.custom-gallery .gallery-wrapper figure').removeClass('active');
	$(this).addClass('active');

	$('#lightbox').fadeIn(300, function(){});
	$('#lightbox-image').attr('src', gallery_src);
});

$('#lightbox-btn-close').click(function(){
	$('#lightbox').fadeOut(300, function(){});
	$('.custom-gallery .gallery-wrapper figure').removeClass('active');
});

$('#lightbox #arrow-wrapper #arrow-prev').click(function(){
	var total = $('.custom-gallery .gallery-wrapper figure').length;
	var prev = $('.custom-gallery .gallery-wrapper figure.active').data('pos');

	if (prev != 1){
		$('.custom-gallery .gallery-wrapper figure.active').prev().addClass('active');
		$('.custom-gallery .gallery-wrapper figure.active').last().removeClass('active');
			
		var new_src = $('.custom-gallery .gallery-wrapper figure.active img').attr('src');
		$('#lightbox-image').attr('src', new_src);
	}
});

$('#lightbox #arrow-wrapper #arrow-next').click(function(){
	var total = $('.custom-gallery .gallery-wrapper figure').length;
	var next = $('.custom-gallery .gallery-wrapper figure.active').data('pos');

	if (next != total){
		$('.custom-gallery .gallery-wrapper figure.active').next().addClass('active');
		$('.custom-gallery .gallery-wrapper figure.active').first().removeClass('active');
			
		var new_src = $('.custom-gallery .gallery-wrapper figure.active img').attr('src');
		$('#lightbox-image').attr('src', new_src);
	}
});


$('.ballistic-section .evc-image-with-text').each(function(){
	var classes = $(this).attr('class');

	var title_remove_tags = $(this).find('.evc-iwt-title').text().replace('</p>', '').replace('<p>', '').replace('<div>', '<div>').replace('</div>', '</div>');
	var subtext_remove_tags = $(this).find('.evc-iwt-text').text().replace('</p>', '').replace('<p>', '').replace('<div>', '<div>').replace('</div>', '</div>');
		
	$(this).find('.evc-iwt-title').html(title_remove_tags);
	$(this).find('.evc-iwt-text').html(subtext_remove_tags);
});

/*--------------------------------------------------------------
# Accessibility
--------------------------------------------------------------*/
$('.cq-hotspots').each(function(){
	$(this).find('.hotspot-item').each(function(){
		$(this).find('.cq-tooltip').attr('role', 'button');
		$(this).find('.cq-tooltip').attr('aria-label', 'tooltip');
	});
});

/*--------------------------------------------------------------
# Remove sidebar items
--------------------------------------------------------------*/
$('.job_listing-template-default aside, .page-id-6669 aside').each(function(){
	$(this).find('.textwidget:has(.acx-lightbox.lb-inline.lb-type-form)').siblings('.side-widget-title').remove();
	$(this).find('.textwidget:has(.acx-lightbox.lb-inline.lb-type-form)').remove();
});

/*--------------------------------------------------------------
# Pages
--------------------------------------------------------------*/
/*--------------------------------------------------------------
## About Us
--------------------------------------------------------------*/
$('.page-id-87948').ready(function(){
	var num_nations = $('.cqtooltip-wrapper .cq-hotspots .hotspot-item').length;

	for (var i = 0; i < num_nations; i++) {
		let rand = Math.floor((Math.random() * i) + 1);
		$('.cqtooltip-wrapper .cq-hotspots .hotspot-item:nth-child(' + rand +')').addClass('pulse-blue');
	}


	$(this).find('.video-polaroid-wrapper .wpb_single_image').click(function(){
		$(this).parents('.video-polaroid-wrapper').find('.wpb_video_widget iframe')[0].src += "&autoplay=1";
		$(this).delay(400).fadeOut(300);
	})
});

/*--------------------------------------------------------------
## Dealer Pages
--------------------------------------------------------------*/
/*$('.page-template-page-dealer #user-registration .ur-frontend-form .ur-form-grid .user-registration-Button').removeClass('btn btn-main').parent('div').addClass('btn btn-main');

$('<div class="form-additional-links"></div>').appendTo('.page-template-page-dealer #user-registration .ur-frontend-form .ur-form-grid');
$('.page-template-page-dealer #user-registration .ur-frontend-form .ur-form-grid .user-registration-LostPassword').appendTo('.page-template-page-dealer #user-registration .ur-frontend-form .ur-form-grid .form-additional-links');
$('.page-template-page-dealer #user-registration .ur-frontend-form .ur-form-grid .user-registration-register').appendTo('.page-template-page-dealer #user-registration .ur-frontend-form .ur-form-grid .form-additional-links');*/

$('<div class="btn-container"></div>').appendTo('.page-id-89938 #lightbox .bsui form');
// $('<a class="btn btn-framed" href="https://inkasautos.com/client-signup/">Register</a>').appendTo('.page-id-89938 #lightbox .bsui form .btn-container');
$('<a class="btn no-btn" href="https://inkasautos.com/client-forgot-password/">Forgot Password</a>').appendTo('.page-id-89938 #lightbox .bsui form .btn-container');
$('<a class="btn btn-framed align-right" href="https://inkasautos.com/client-signup/">Register</a>').appendTo('.page-id-89938 #lightbox .bsui form .btn-container');
$('.page-id-89938 #lightbox .bsui form button[type="submit"]').prependTo('.page-id-89938 #lightbox .bsui form .btn-container');

$('.page-id-89938 .uwp-login-form').each(function(){
	$(this).find('input[type="text"][name="username"]').attr('placeholder', 'Email *');
});

/*--------------------------------------------------------------
## BR4 Landing
--------------------------------------------------------------*/
$('.page-id-90692 #section-ballistic-info .vc_column-inner>.wpb_wrapper .cq-tabs .cq-tabmenu li').each(function(){
	$(this).click(function(){
		if ($(this).find('a').text() == 'Ballistic Glass'){
			$(this).parents('#section-ballistic-info').css('background-image', 'url("https://inkasarmored.com/wp-content/uploads/INKAS-Ballistic-Glass.jpg")');
		}

		else if ($(this).find('a').text() == 'Ballistic Steel'){
			$(this).parents('#section-ballistic-info').css('background-image', 'url("https://inkasarmored.com/wp-content/uploads/INKAS-Ballistic-Steel.jpg")');
		}

		else if ($(this).find('a').text() == 'Kevlar'){
			$(this).parents('#section-ballistic-info').css('background-image', 'url("https://inkasarmored.com/wp-content/uploads/INKAS-Kevlar.webp")');
		}
	});
});

$('.page-id-90692 #section-ballistic-info .vc_column-inner>.wpb_wrapper .cq-tabs .cq-tabmenu li:first-of-type').click();

/*--------------------------------------------------------------
## VPAM VR7
--------------------------------------------------------------*/
$('.page-id-92286').each(function(){
	// Accordion
	$(this).find('.features-accordion-table').each(function(){
		$(this).siblings('.btn-accordion-toggle').click(function(){
			$(this).toggleClass('active');
			// $(this).siblings('.features-accordion-table').toggleClass('expand');
			$(this).siblings('.features-accordion-table').find('li:not(:nth-child(-n+4))').slideToggle();
		});
	});
});

/*--------------------------------------------------------------
## Homepage (Updated)
--------------------------------------------------------------*/
$('.page-id-91746, .home').each(function(){
	$(this).find('#more-about-us-button').click(function(){
		$(this).find('.vc_btn3').toggleClass('active');
		$(this).siblings('.wpb_text_column.more-about-us-text').slideToggle();
	});

	$(this).find('#featuredVehicles .frame').each(function(){
		new Splide(this, {
			type: 'loop',
			perPage: 5,
			perMove: 1,
			wheel: true,
			arrows: true,
			pagination: false,
			gap: 15,
			breakpoints: {
				768: {
					perPage: 2,
					fixedWidth: null,
					padding: 60,
				}
			}
		}).mount();
	});
	$(this).find('#featuredVehicles .frame .splide__controls').appendTo($(this).find('#featuredVehicles .shortcode-header'));

	$(this).find('#postsWidget .frame').each(function(){
		new Splide(this, {
			type: 'loop',
			perMove: 1,
			fixedWidth: 400,
			wheel: true,
			arrows: true,
			pagination: false,
			gap: 15,
			breakpoints: {
				768: {
					perPage: 1,
					fixedWidth: null,
					padding: 60,
				}
			}
		}).mount();
	});

	$(this).find('#postsWidget .frame .splide__controls').appendTo($(this).find('#postsWidget .shortcode-header'));
});

/*--------------------------------------------------------------
## Homepage (NEW)
--------------------------------------------------------------*/
$('.page-id-88045').each(function(){
	// add text-clamp-3 class to titles on post slider
	$(this).find('#section-posts .acx-post-slider .slide .text-content article .post-title-wrapper').addClass('text-clamp-3');
});

if ($(window).width() < 1024){
	// $('.page-id-88045 #section-card-slider .acx-card-slider .splide__pagination .splide__pagination__page').click(function(){
	// 	$(this).parents('.acx-card-slider').find('.splide__track .cols:not(.is-active) figure .card-secondary-img[data-animation=slide_in_up] video').trigger('pause');
	// 	$(this).parents('.acx-card-slider').find('.splide__track .cols.is-active figure .card-secondary-img[data-animation=slide_in_up] video').trigger('play');		
	// });

	$('.page-id-88045 #section-card-slider .acx-card-slider .splide__track .cols figure .card-secondary-img[data-animation=slide_in_up] video').trigger('play');
}

/*--------------------------------------------------------------
# Splide
--------------------------------------------------------------*/
/*--------------------------------------------------------------
## Homepage (NEW)
--------------------------------------------------------------*/
$('.page-id-88045 #section-featured-vehicles .selected-vehicle-list').each(function(){
	new Splide(this, {
		type: 'loop',
		perPage: 3.5,
		perMove: 1,
		// wheel: true,
		arrows: true,
		pagination: false,
		gap: 15,
		fixedWidth: 340,
		breakpoints: {
			1024: {
				perPage: 2,
				fixedWidth: null,
				pagination: true,
				padding: 45
			},
			768: {
				perPage: 1,
				fixedWidth: null,
				pagination: true,
			}
		}
	}).mount();
});

/*--------------------------------------------------------------
## BYOT
--------------------------------------------------------------*/
$('.page-id-93028 #section-dont-have-a-truck .selected-vehicle-list').each(function(){
	new Splide(this, {
		type: 'loop',
		perPage: 3.5,
		perMove: 1,
		// wheel: true,
		arrows: true,
		pagination: false,
		gap: 15,
		fixedWidth: 340,
		breakpoints: {
			1024: {
				perPage: 2,
				fixedWidth: null,
				pagination: true,
				padding: 45
			},
			768: {
				perPage: 1,
				fixedWidth: null,
				pagination: true,
			}
		}
	}).mount();
});

/*--------------------------------------------------------------
## Vehicles (listings)
--------------------------------------------------------------*/
$('.single-listings .related-vehicles-slider').each(function(){
	new Splide(this, {
		perPage: 4,
		perMove: 1,
		// wheel: true,
		arrows: true,
		pagination: false,
		gap: 10,
		fixedWidth: 200,
		breakpoints: {
			1024: {
				perPage: 2,
				fixedWidth: null,
				pagination: true,
				padding: 45
			},
			768: {
				perPage: 1,
				fixedWidth: null,
				pagination: true,
			}
		}
	}).mount();
});

/*--------------------------------------------------------------
# Slick
--------------------------------------------------------------*/
/*function vehicle_listing_gallery(num_slides){
	$('.listing-slider .home-slider-thumbs ul.slides').slick({
		slidesToShow: num_slides,
		slidestoScroll: num_slides,
		infinite: false,
		swipeToSlide: true,
		variableWidth: true,
		touchThreshold: 100,
		arrows: true,
		prevArrow: '<button class="btn-icon slick-prev slick-arrow"></button>',
		nextArrow: '<button class="btn-icon slick-next slick-arrow"></button>'
	});	
}

$(document).ready(function(){
	if ( $(window).width() > 768 ){
		vehicle_listing_gallery(5);
	}
	else{
		$('.listing-slider .home-slider-thumbs ul.slides').slick('unslick');
	}
});

$(window).resize(function(){
	if ( $(window).width() > 768 ){
		vehicle_listing_gallery(5);
	}
	else{
		$('.listing-slider .home-slider-thumbs ul.slides').slick('unslick');
	}
});*/



})(jQuery);