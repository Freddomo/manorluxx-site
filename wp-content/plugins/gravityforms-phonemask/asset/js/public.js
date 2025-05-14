jQuery( document ).ready( function( $ ) {
	'use strict';
	function gfpmf_init() {
		var	intlFirstLoad = true;
		$( '.gfpmf-intl' ).each( function() {
			var intlHiddenInput = $( this ).next(),
				intlDialCode = '',
				intlCountryCode = '',
				intlFormat = '(999) 999-9999',
				intlSaveFormat = $( this ).data( 'gfpmf-sf' ),
				intlOptions = {
				customPlaceholder: function( placeholder, data ) {
					intlFormat = placeholder;
					intlDialCode = data.dialCode;
					intlCountryCode = data.iso2;
					return placeholder;
				},
				initialCountry: 'auto',
				geoIpLookup: function( callback ) {
					$.get( 'https://ipinfo.io', function() {}, "jsonp" ).always( function( resp ) { 
						var countryCode = ( resp && resp.country ) ? resp.country : '';
						localStorage.setItem( 'gfpmf-cc', countryCode );
						callback( countryCode );
					});
				}
			};

			if ( $( this ).data( 'gfpmf-sc' ) == '1' )
				intlOptions.separateDialCode = true;

			if ( $( this ).data( 'gfpmf-dc' ) ) 
				intlOptions.onlyCountries = $( this ).data( 'gfpmf-dc' ).split( ',' ).map( function( item ){ return item.trim(); });

			if ( $( this ).data( 'gfpmf-pc' ) ) 
				intlOptions.preferredCountries = $( this ).data( 'gfpmf-pc' ).split( ',' ).map( function( item ){ return item.trim(); });

			if ( $( '.gfield_error' ).length && intlHiddenInput.val() != '' ) {
				intlCountryCode = localStorage.getItem( 'gfpmf-cc-' + intlHiddenInput.attr( 'id' ) );
				$( this ).data( 'gfpmf-ic', intlCountryCode);
			} else {
				localStorage.removeItem( 'gfpmf-cc-' + intlHiddenInput.attr( 'id' ) );
			}

			if ( $( this ).data( 'gfpmf-ic' ) ){
				var intlCountryCode = $( this ).data( 'gfpmf-ic' );
				if ( intlCountryCode != "" && intlCountryCode != "auto" ) {
					intlOptions.initialCountry = intlCountryCode;
					delete intlOptions.geoIpLookup;
				}
			} else {
				var intlCountryCode = localStorage.getItem( 'gfpmf-cc' );
				if ( intlCountryCode && intlCountryCode != "" && intlCountryCode != "auto" ) {
					intlOptions.initialCountry = intlCountryCode;
					delete intlOptions.geoIpLookup;
				}
			}
			
			// $( this ).val( intlHiddenInput.val().replace( '', '' ) );
			var intlPhone = intlTelInput( this, intlOptions );

			$( this ).on( 'blur', function() {
				var saveValue = $( this ).val();
				var numberValue = saveValue.replace( /[^0-9]+/g, '' );
				
				if ( numberValue != '' ) {
					if ( intlSaveFormat == '3' )
						saveValue = '+' + intlDialCode + ' ' + saveValue;
					else if ( intlSaveFormat == '2' )
						saveValue = intlPhone.getNumber();
					else if ( intlSaveFormat == '0' )
						saveValue = numberValue;

					if ( !intlPhone.isValidNumber() )
						saveValue += '';
				} else {
					saveValue = '';
				}
				intlHiddenInput.val( saveValue ); 
			});
			$( this ).on( 'countrychange', function() {
				var mask_format = intlFormat.replace( /[0-9]/g, "9" );

				$(this).css('pointer-events', 'initial');
				$( this ).unmask().mask( mask_format, { autoclear: false } );

				localStorage.setItem( 'gfpmf-cc-' + intlHiddenInput.attr( 'id' ), intlCountryCode );

				if ( intlFirstLoad )
					$( this ).focus();
			});
			$( this ).unmask().mask( intlFormat.replace( /[0-9]/g, "9" ), { autoclear: false } );
		});

		intlFirstLoad = false;
		$( '.iti__selected-flag[tabindex]' ).removeAttr( 'tabindex' );
	}

	// $('.gform_wrapper.gravity-theme input').one('click', function(){
		// gfpmf_init();
	// });

	$(document).bind('gform_post_render', function(){
		if ( $('.gform_wrapper.gravity-theme .gfpmf-intl').parents('.ginput_container_phone').parents('.gfield').hasClass('gfield_error')){
			// $('.gfpmf-intl').css('pointer-events', 'none');			
		}

		gfpmf_init();
		
		// sets mb keypad as tel
		$('input.gfpmf-intl').attr('type', 'tel');
		// keeps focus on beginning of field
		$('input.gfpmf-intl').click(function(){
			var pos = $('input.gfpmf-intl').selectionStart = $('input.gfpmf-intl').selectionEnd = 0;
			// var pos = $('input.gfpmf-intl')[0].selectionStart;
			$(this).focus();
		});
	});

});