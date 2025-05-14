(function($) {
  "use strict";

	 jQuery(document).ready( function($){
		 	$('.message-wrap').fadeTo("fast", 1);
		 	$('.home .promo-buttons').fadeTo("fast", 1);		 		 		 	
		 	$('.post-container').fadeTo("fast", 1);	

		 	$('.gform_wrapper').fadeTo("fast", 1);	
		 	$('.parallax_scroll').fadeTo("fast", 1);	

			$('.find_new_vehicle').wrapAll('<div class="button-outer">');

			$('.form_contact .add_mailchimp.text').addClass('test');	
			
			$('.promo-buttons').fadeIn("slow");
			
			$( ".feature-block .promo-card button" ).wrap( "<div class='button-outer'><div class='button-bg'></div></div>" );
			
		    $(".promo-buttons img")
	        .mouseover(function() { 
	            var src = $(this).attr("src").replace("bw.png", "hover.png");
	            $(this).attr("src", src);
	        })
	        .mouseout(function() {
	            var src = $(this).attr("src").replace("hover.png", "bw.png");
	            $(this).attr("src", src);
	        });

			
			//Disable scrolling on the google map div and enable when mouse click
	
	        $('#map_canvas').addClass('scrolloff'); 
	        $('.google-map-block').click(function() {
	            $('#map_canvas').removeClass('scrolloff'); 
	        });
			$('#post-1738').removeClass('page-content');
	
	        $("#map_canvas").mouseleave(function () {
	        
	            $('#map_canvas').addClass('scrolloff'); 
			
		    });
	    
	        $('.page-content p, .page-content .navbar li, .single-listings .tab-pane, .single-listings #myTabContent, .single-listings div.inventory-heading span').each(function(i, elem) {

	            $(elem).html(function(i, html) {
	                return html.replace(/((?!<sup>\s*))\u00ae((?!\s*<\/sup>))/gi, '<sup>&reg;</sup>');
	            });
	
	        });

	});
})(jQuery);

// replace placeholder with facbeook iframe video
        jQuery(document).ready(function ($) {
            $(window).scroll(function (event) {
                var docViewTop = $(window).scrollTop();
                var docViewBottom = docViewTop + $(window).height();

                $('.video-placeholder').each(function () {
                    var elemTop = $(this).offset().top;
                    var elemBottom = elemTop + $(this).height();
                    if (((elemBottom <= docViewBottom) && (elemTop >= docViewTop))) {
                        //the element in view, we load
                        var iframe = $('<iframe style="border: none; overflow: hidden;" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Finkas.armored.vehicles%2Fvideos%2F1208657132480606%2F&amp;show_text=0&amp;width=560" width="560" height="305" frameborder="0" scrolling="no" allowfullscreen="allowfullscreen"></iframe>').attr('src', $(this).data('iframe'));
                        $(this).replaceWith(iframe);
                    }
                })

            });
        })



//	facebook like
/*
(function(d,s,id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
*/


//    Twitter feed
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");



// Catalog Sign-up button hack


jQuery(document).ready(function( $ ) {

$('.catalog-checkmark').css('display','none');
$('.catalog-checkmark input').prop('checked',true);

});

