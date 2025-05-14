jQuery.noConflict();
(function($) {
/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
# Nav logic
# Filter
	## Filter Logic
	## Filter Buttons
		### Filter btn toggle
# Scroll Detection
# Stock List
# isInViewport
# Header Text color application
--------------------------------------------------------------*/
/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/
// $('.vehicles-new-list').each(function(){
// 	$(this).find('.vehicle-category[data-total="0"]').remove();
// });

$(document).ready(function(){
	Draggable.create('#nav-wrapper nav',{
		type: 'x',
		bounds: '#nav-wrapper'
	});

	/*--------------------------------------------------------------
	# Nav logic
	--------------------------------------------------------------*/
	// $('nav button').each(function(){
	// 	var url = $(this).data('to');
	// 	$(this).click(function(){
	// 		// $('html, body').animate({scrollTop: $('#' + url).offset().top - 30 }, 100);

	// 		$('nav button').removeClass('active');
	// 		$(this).addClass('active');

	// 		$('.vehicle-category').hide();
	// 		$('#' + url).fadeIn(300, function(){

	// 		});
	// 	});
	// });

	/*--------------------------------------------------------------
	# Filter
	--------------------------------------------------------------*/
	/*--------------------------------------------------------------
	## Filter Logic
	--------------------------------------------------------------*/
	var val = val_body = val_make = val_fuel = val_drivetrain = val_orientation = val_status = '';
	var get_body_html = '';

	// sets body type on load on solo vehicles
	$(document).ready(function(){
		var id = $('.page-template-page-vehicles-list-solo .vehicle-category').attr('id').replace('cat-', '');
		$('.page-template-page-vehicles-list-solo .filter-wrapper .filter-body fieldset[data-type="filter-body"] .filter-item-wrapper .filter-item').each(function(){
			var cat_id = $(this).find('.input').attr('value');
			if (cat_id == id){
				$(this).find('.input').val(id).addClass('checked');
			}
		});

		// auto-selects body on load (mobile)
		if ( $(window).width() < 1024 ){
			var val = $('.page-template-page-vehicles-list-solo .filter-wrapper .filter-body fieldset[data-type="filter-body"] .filter-item-wrapper .filter-item .input.checked').attr('value');
			$('.page-template-page-vehicles-list-solo .filter-wrapper .filter-body fieldset[data-type="filter-body"] label.placeholder').addClass('selected').text(val);
		}
	});

	// body
	$('.filter-wrapper fieldset[data-type="filter-body"] input').click(function(){
		$('.filter-wrapper fieldset[data-type="filter-body"] input').attr('checked', false);
		$(this).attr('checked', true);
		var body = $(this).val();
		val_body = '.' + body;
		get_body_html = $(this).val();
		get_body_html = $('#cat-' + get_body_html + ' .frame').html();
	});

	$('.filter-wrapper fieldset[data-type="filter-body"] a.input').click(function(){
		$('.filter-wrapper fieldset[data-type="filter-body"] a.input').removeClass('checked');
		$(this).addClass('checked');
		$('.filter-wrapper fieldset[data-type="filter-body"] .loading').show();
	});


	// make
	$('.filter-wrapper fieldset[data-type="filter-make"] input').click(function(){
		$('.filter-wrapper fieldset[data-type="filter-make"] input').attr('checked', false);
		$(this).attr('checked', true);
		var make = $(this).val();
		val_make = '.' + make;
	});
	// fuel
	$('.filter-wrapper fieldset[data-type="filter-fuel"] input').click(function(){
		$('.filter-wrapper fieldset[data-type="filter-fuel"] input').attr('checked', false);
		$(this).attr('checked', true);
		var fuel = $(this).val();
		val_fuel = '.' + fuel;
	});
	// drivetrain
	$('.filter-wrapper fieldset[data-type="filter-drivetrain"] input').click(function(){
		$('.filter-wrapper fieldset[data-type="filter-drivetrain"] input').attr('checked', false);
		$(this).attr('checked', true);
		var drivetrain = $(this).val();
		val_drivetrain = '.' + drivetrain;
	});
	// orientation
	$('.filter-wrapper fieldset[data-type="filter-orientation"] input').click(function(){
		$('.filter-wrapper fieldset[data-type="filter-orientation"] input').attr('checked', false);
		$(this).attr('checked', true);
		var orientation = $(this).val();
		val_orientation = '.' + orientation;
	});
	// status
	$('.filter-wrapper fieldset[data-type="filter-status"] input').click(function(){
		$('.filter-wrapper fieldset[data-type="filter-status"] input').attr('checked', false);
		$(this).attr('checked', true);
		var status = $(this).val();
		val_status = '.' + status;
	});

	$('.filter-wrapper fieldset .input').click(function(){
		val = val_body + val_make + val_fuel + val_drivetrain + val_orientation + val_status;
		label = $(this).data('label');

		if ( $(window).width() < 1024 ){
			$(this).parents('fieldset').find('.filter-item-wrapper').slideToggle(300);
			$(this).parents('fieldset').find('label.placeholder').addClass('selected').text(label).slideToggle(300);
		}
		else{
			$('.filter-wrapper #btn-clear').show().removeClass('clicked');
		}

		$('.vehicle-category .frame .grid .cols').addClass('hide');
		$('.vehicle-category .frame .grid .cols' + val).removeClass('hide');

		// hides categories that have no visible vehicles
		$('.vehicle-category').each(function(){
			var title = $(this).find('.header-block h2').text();
			var cat_total = $(this).find('.frame .grid .cols').length;
			var cat_hidden = $(this).find('.frame .grid .cols.hide').length;

			var total_hidden = $('.vehicle-category .frame .grid .cols.hide').length;
			var total = $('.vehicle-category .frame .grid .cols').length;

			if (cat_hidden == cat_total){
				$(this).hide();
			}
			else{
				$(this).show();
			}

			if (total_hidden == total){
				$('.vehicles-new-list .no-results').removeClass('hide');
				$('.vehicles-new-list .no-results article h2').show().text('Sorry, no vehicles found matching your filter combination');
				$('.vehicles-new-list .no-results article p').show().text('Please try different filter combination.');
				$('.vehicles-new-list .no-results .related-vehicles .title-desc').show().text('See if these vehicles can better fit your needs.');
			}
			else{
				$('.vehicles-new-list .no-results').addClass('hide');
				$('.vehicles-new-list .no-results article.header-block *').text('');
			}


			if ( !$('.no-results').hasClass('hide') ){
				// $('.no-results .related-vehicles .vehicle-category-related .frame').html(get_body_html);
				$('.no-results .related-vehicles .vehicle-category-related .frame .grid .cols').removeClass('hide');
			}

		});
	});

	/*--------------------------------------------------------------
	## Filter Buttons
	--------------------------------------------------------------*/
	$('.filter-wrapper fieldset .legend').click(function(){
		$(this).toggleClass('open').next('.filter-item-wrapper').slideToggle(300);
		$(this).siblings('label.placeholder').slideToggle(300);
	});

	$('.filter-wrapper fieldset label.placeholder').click(function(){
		$(this).parents('fieldset').find('.filter-item-wrapper').slideToggle(300);
		$(this).slideToggle(300);
	});

	// btn clear
	$('.filter-wrapper #btn-clear').click(function(){
		if ( $(window).width() > 1024 ){
			$(this).addClass('clicked').hide();
		}

		$('.filter-wrapper fieldset .input[type=checkbox]').prop('checked', false);
		$('#vehicles-list-solo .filter-wrapper .filter-body .filter-item-wrapper .filter-item input.checked').removeClass('checked');

		$('.filter-wrapper fieldset input').removeClass('checked');

		$('.vehicle-category').show();
		$('.vehicle-category .frame .grid .cols').removeClass('hide');
		
		$('.filter-wrapper fieldset').each(function(){
			var default_label = $(this).find('label.placeholder').data('label');

			$(this).find('label.placeholder').removeClass('selected').text(default_label);
		});

		$('#vehicles-list-all .no-results').addClass('hide');
		$('#vehicles-list-all .no-results article *').text('');

		val_body = val_make = val_fuel = val_drivetrain = val_orientation = val_status = '';
	});

	// btn filter toggle
	$('#btn-filter-toggle').click(function(){
		$('body').addClass('overflow-hidden');
		$('.filter-overlay').fadeIn(300);
		$('.filter-wrapper').addClass('show');
	});	

	// btn-apply + overlay click
	$('.filter-wrapper #btn-apply, .filter-overlay').click(function(){
		$('body').removeClass('overflow-hidden');
		$('.filter-overlay').fadeOut(300);
		$('.filter-wrapper').removeClass('show');
		$('.filter-wrapper #btn-clear').removeClass('clicked');
	});

	/*--------------------------------------------------------------
	### Filter btn toggle (slide in on mobile)
	--------------------------------------------------------------*/
	$(document).ready(function(){
		setTimeout(function(){
			$('#btn-filter-toggle').addClass('slide-in');
		}, 300);
	});	

	/*--------------------------------------------------------------
	# Scroll Detection
	--------------------------------------------------------------*/
	var id_header = document.getElementById('template-header');
	var id_heroImg = document.getElementById('stock-vehicles-list');
	var id_footer = document.getElementById('template-footer');

	var offset_header = id_header.offsetTop;
	var offset_heroImg = id_heroImg.offsetTop;
	var offset_footer = id_footer.offsetTop;

	window.onscroll = function () { scrollFunction() };

	function scrollFunction() {
	    var r_header = offset_header - document.documentElement.scrollTop;
	    var r_heroImg = offset_heroImg - document.documentElement.scrollTop;
	    var r_footer = offset_footer - document.documentElement.scrollTop;

		if (r_header < 0) {
			$('button#scroll-top').addClass('show');
		}
		else {
			$('button#scroll-top').removeClass('show');
		}

		if (r_footer < 1200) {
			$('button#scroll-top').addClass('invert');
		}
		else {
			$('button#scroll-top').removeClass('invert');
		}

		// if scroll past heroimg, and before footer: sidebar fixed
		if (r_heroImg < 0 && r_footer > 1200) {
			$('aside').removeClass('fixed-bottom');
			$('#stock-vehicles-list, aside').addClass('fixed');
		}
		// if scroll past bottom of grid: sidebar fixed but above footer and doesnt cut in
		else if (r_footer < 900){
			$('#stock-vehicles-list').addClass('fixed');
			$('aside').addClass('fixed-bottom');
		}
		// if scroll to top past heroImg: sidebar returns to normal
		else if (r_heroImg > 0){
			$('#stock-vehicles-list, aside').removeClass('fixed');
		}
	}

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
	# Header Text color application
	--------------------------------------------------------------*/
	var color = $('.vehicles-new-list #hero-img-wrapper article').data('color');
	$('.vehicles-new-list #hero-img-wrapper article').css('color', color);
	$('.vehicles-new-list #hero-img-wrapper article *').css('color', color);
});


/*--------------------------------------------------------------
# Trigger filter by URL
--------------------------------------------------------------*/
$(document).ready(function(){
	$('.filter-wrapper fieldset[data-type="filter-make"] .filter-item-wrapper .filter-item').each(function(){
		var make_val = $(this).find('input').val();

		if (window.location.href.indexOf('?make=' + make_val) > -1){
			$('.filter-wrapper fieldset[data-type="filter-make"] .filter-item-wrapper .filter-item input[value="' + make_val + '"]').click();
		}
	});
});


/*--------------------------------------------------------------
# Stock List
--------------------------------------------------------------*/
$('.stock-vehicles-list .vehicle-category').each(function(){
	var count = $(this).find('.frame .grid .cols').length;
	if (count < 1){
		$(this).remove();
	}
});

})(jQuery);