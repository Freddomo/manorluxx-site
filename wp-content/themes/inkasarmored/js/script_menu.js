/*--------------------------------------------------------------
# Mobile menu smooth toggle on click
--------------------------------------------------------------*/
$('.mobileSecondNav').click(function(){
	$('.secondNav .form').slideToggle(100, function(){

	});
	$('#btnNav2').toggleClass('btnMobileOpen');
});

// Mobile menu toggle classes on click
$('#mainNavMobile').click(function(){
	$('#menu-mobile-menu-1').toggleClass('menuTogglePull');
	$('body').toggleClass('menuBodyTogglePull');
	$(this).toggleClass('mainNavMobileClose');
});

// closes mobile menu on "esc" key
$(document).keydown(function(e){
	if (e.keyCode == 27){
		$('#menu-mobile-menu-1').removeClass('menuTogglePull');
		$('body').removeClass('menuBodyTogglePull');
		$('#mainNavMobile').removeClass('mainNavMobileClose');
		$('#menu-mobile-menu-1 li').removeClass('submenu-expand');
		$('.emodal').removeClass('toggleModal');
		$('.emodal-overlay').removeClass('toggleModal');
	}
})

/*--------------------------------------------------------------
# Adding back button to submenus + function
--------------------------------------------------------------*/
$('#menu-mobile-menu-1').ready(function(){
	var button = "<button class='btn menu-btn-back'>back</button>";
	$('#menu-mobile-menu-1 .dropdown-menu').append(button);

	// back btn reset
	$('.menu-btn-back').each(function(){
		$(this).click(function(){
			$(this).parent().toggleClass('submenu-expand');
		});
	});

	$('#menu-mobile-menu-1 .menu-item-has-children').each(function(){
		$(this).click(function(){
			$(this).toggleClass('submenu-expand');
		});
	});
});