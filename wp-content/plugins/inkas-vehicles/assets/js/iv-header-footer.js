jQuery.noConflict();
(function($) {
/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
# Header Navigation
	## Web
		### Close Web Menu
		### Sticky Logic
	## Mobile
		### Reset scroll positions
--------------------------------------------------------------*/
/*--------------------------------------------------------------
# Header Navigation
--------------------------------------------------------------*/
/*--------------------------------------------------------------
## Web
--------------------------------------------------------------*/
$('.acx-megamenu').each(function(){
	$(this).find('.acx-mm-submenu:has(.selected-vehicle-list) .acx-block:has(.vc_tta-container)').each(function(){
		var tab_list = $(this).find('.vc_tta-container .vc_tta-tabs-container');
		// var tab_list = $(this).find('.vc_tta-container .vc_tta-tabs-list');
		// $(this).find('.evc-button').appendTo(tab_list);

		$(this).find('.vc_tta-container .vc_tta-tabs-container').addClass('container');
		$(this).find('.vc_tta-container .vc_tta-panels-container .selected-vehicle-list > .grid').addClass('container');

		$(this).find('.vc_tta-container .vc_tta-tabs-container .vc_tta-tabs-list').each(function(){
			$(this).find('.vc_tta-tab').click(function(e){
				e.preventDefault();
				var tab_id = $(this).find('a').attr('href').replaceAll('#', '');

				$(this).addClass('vc_active').siblings().removeClass('vc_active');
				$(this).parents('.vc_tta-tabs').find('.vc_tta-panels-container .vc_tta-panels .vc_tta-panel[id="' + tab_id + '"]').fadeIn().addClass('vc_active').siblings().removeClass('vc_active').hide();
			});
		});
	});
});

/*--------------------------------------------------------------
### Sticky Logic
--------------------------------------------------------------*/
$(window).on('scroll', function(){
	var current_scroll = $(this).scrollTop();
	$('.iv-navigation, .acx-megamenu').each(function(){
		if (current_scroll > 0){
			$(this).addClass('sticky');
		}
		else{
			$(this).removeClass('sticky');
		}
	});
});

/*--------------------------------------------------------------
## Mobile
--------------------------------------------------------------*/
$('.iv-mb-navigation').each(function(){
	$(this).find('.acx-mb-navigation .nav-top .acx-button#cma-btn-1').click(function(){
		$(this).toggleClass('open');
		$(this).parents('.iv-mb-navigation').find('.iv-vehicles-main-navigation').slideToggle();

		// hides reg menu on open
		$(this).parents('.iv-mb-navigation').find('.acx-mb-navigation .nav-top .btn-close').removeClass('open');
		$(this).parents('.iv-mb-navigation').find('.acx-mb-navigation .main-navigation').slideUp();
	});

	$(this).find('.acx-mb-navigation .nav-top .btn-close').click(function(){
		// hides vehicles menu on open
		$(this).parents('.iv-mb-navigation').find('.acx-button#cma-btn-1').removeClass('open');
		$(this).parents('.iv-mb-navigation').find('.iv-vehicles-main-navigation').slideUp();
	});

	// Scroll button into frame when offsetted
	$(this).find('.iv-vehicles-main-navigation .acx-block .vc_tta-tabs .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab a').click(function(){
		var container_width = $(this).parents('.vc_tta-tabs-list').outerWidth();
		var btn_width = $(this).outerWidth();
		var total_prev_width = 0;

		// get the sum of all the previous widths
		$(this).parents('.vc_tta-tab').prevAll().each(function(){
			total_prev_width += $(this).outerWidth(); 
		});

		// get the sum of this btn width and all the previous widths
		var btn_widths_all_prevs = total_prev_width;
		// var btn_widths_all_prevs = total_prev_width + $(this).parents('.vc_tta-tab').outerWidth();
		var btn_widths_all_prev_percentage = (btn_widths_all_prevs / container_width) * 100;

		// get btn position
		var btn_position = $(this).parents('.vc_tta-tab').index();

		if (btn_position == 0){
			$(this).parents('.vc_tta-tabs-container').animate({scrollLeft: 0}, 300);
		}
		else if (btn_position > 0 && btn_widths_all_prev_percentage < 50){
			$(this).parents('.vc_tta-tabs-container').animate({scrollLeft: btn_width}, 300);
		}
		else{
			// var current_scroll = $(this).parents('.vc_tta-tabs-container').scrollLeft();
			// var new_scroll = current_scroll + btn_widths_all_prevs;
			$(this).parents('.vc_tta-tabs-container').animate({scrollLeft: btn_widths_all_prevs}, 300);
		}
	});
});

/*--------------------------------------------------------------
### Reset scroll positions
--------------------------------------------------------------*/
$('.iv-mb-navigation').each(function(){
	// reset scroll state on vehicle list on VEHICLES btn
	$(this).find('.acx-mb-navigation .nav-top .acx-button#cma-btn-1').click(function(){
		$(this).parents('.iv-mb-navigation').find('.iv-vehicles-main-navigation .acx-block .vc_tta-tabs .selected-vehicle-list').animate({scrollTop: 0});

		// close regular menu submenu
		$(this).parents('.iv-mb-navigation').find('.acx-mb-navigation .main-navigation .cols li.menu-item-has-children:has(.sub-menu-wrapper.active) .menu-item-header').click();
	});

	// reset scroll state on vehicle list on MENU/CLOSE btn
	$(this).find('.acx-mb-navigation .nav-top .btn-close').click(function(){
		$(this).parents('.iv-mb-navigation').find('.iv-vehicles-main-navigation .acx-block .vc_tta-tabs .selected-vehicle-list').animate({scrollTop: 0});

		// close regular menu submenu
		$(this).parents('.iv-mb-navigation').find('.acx-mb-navigation .main-navigation .cols li.menu-item-has-children:has(.sub-menu-wrapper.active) .menu-item-header').click();
	});

	// reset scroll state on vehicle list tabs
	$(this).find('.iv-vehicles-main-navigation .acx-block .vc_tta-tabs .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab a').click(function(){
		$(this).parents('.vc_tta-tabs ').find('.selected-vehicle-list').animate({scrollTop: 0});
	});

	// reset scroll state on regular menu headers
	$(this).find('.acx-mb-navigation .main-navigation .cols li.menu-item-has-children .menu-item-header').click(function(){
		$(this).parents('.main-navigation').animate({scrollTop: 0});
	});
});





})(jQuery);