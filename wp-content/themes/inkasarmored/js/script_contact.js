jQuery.noConflict();
(function($) {
/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
# Main header text color
--------------------------------------------------------------*/
$(document).ready(function(){
	/*--------------------------------------------------------------
	# sort by data-region
	--------------------------------------------------------------*/
	var container = $('.country-wrapper .country-list');
	container.find('.wrapper').sort(function(a, b){
		return +a.dataset.region - +b.dataset.region;
	}).appendTo(container);

	/*--------------------------------------------------------------
	# Create artifical containers (div + h3)
	--------------------------------------------------------------*/
	// $('#countryList').add('<div class="cols cols-dsktp-xl-6 cols-dsktp-6 cols-tb-12 cols-mb-12 regions region_americas"><h3 data-region="0">The Americas</h3><div class="grid"></div></div>').appendTo('#countryList');
	// $('#countryList').add('<div class="cols cols-dsktp-xl-6 cols-dsktp-6 cols-tb-12 cols-mb-12 regions region_eurasia"><h3 data-region="1">Eurasia</h3><div class="grid"></div></div>').appendTo('#countryList');
	// $('#countryList').add('<div class="cols cols-dsktp-xl-6 cols-dsktp-6 cols-tb-12 cols-mb-12 regions region_africa"><h3 data-region="2">Africa</h3><div class="grid"></div></div>').appendTo('#countryList');

	/*--------------------------------------------------------------
	# relocate entries into each respective containers
	--------------------------------------------------------------*/
	// // $('.country-list-wrapper .country-list .cols.canada').appendTo('#countryList .region_canada');
	// $('.country-list-wrapper .country-list .cols[data-region=0]').appendTo('.country-list-wrapper .country-list .region_americas .grid');
	// $('.country-list-wrapper .country-list .cols[data-region=1]').appendTo('.country-list-wrapper .country-list .region_eurasia .grid');
	// $('.country-list-wrapper .country-list .cols[data-region=2]').appendTo('.country-list-wrapper .country-list .region_africa .grid');
	// $('.country-list-wrapper .country-list .cols[data-region=3]').appendTo('.country-list-wrapper .country-list .region_none .grid');
});


})(jQuery);