/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------*/
// Converts menu fields and gravity forms input text to langauge specific (menus, gravity forms)
$(document).ready(function(){
	$(this).scrollTop(0);
	/*--------------------------------------------------------------
	# Spanish
	--------------------------------------------------------------*/
	if ( $('.landing-features').data('language') == 'chile' ||  $('.landing-features').data('language') == 'colombia' || $('.landing-features').data('language') == 'ecuador'  || $('.landing-features').data('language') == 'mexico'){
		$('.ubermenu-target-title:contains("Features")').text("CARACTERÍSTICAS");
		$('.ubermenu-target-title:contains("Armored Vehicles")').text("VEHÍCULOS BLINDADOS");
		$('.ubermenu-target-title:contains("About Us")').text("QUIENES SOMOS");
		$('.ubermenu-target-title:contains("Contact Us")').text("CONTÁCTENOS");

		$('.gform_body input[placeholder="Full Name"]').attr('placeholder', "Nombre completo");
		$('.gform_body input[placeholder="Email"]').attr('placeholder', "Correo electrónico");
		$('.gform_body textarea[placeholder="Questions/Comments"]').attr('placeholder', "Preguntas/ Comentarios");
	}

	/*--------------------------------------------------------------
	# French
	--------------------------------------------------------------*/
	if ( $('.landing-features').data('language') == 'cameroon' ||  $('.landing-features').data('language') == 'burkina faso' || $('.landing-features').data('language') == 'haiti'){
		$('.gform_body input[placeholder="Full Name"]').attr('placeholder', "Nom complet");
		$('.gform_body input[placeholder="Email"]').attr('placeholder', "Courriel");
		$('.gform_body textarea[placeholder="Questions/Comments"]').attr('placeholder', "Questions / Commentaires");
	}

	/*--------------------------------------------------------------
	# Cyrillic
	--------------------------------------------------------------*/
	if ( $('.landing-features').data('language') == 'russia' ||  $('.landing-features').data('language') == 'ukraine' || $('.landing-features').data('language') == 'kazakhstan'){
		$('.ubermenu-target-title:contains("Features")').text("ХАРАКТЕРИСТИКИ");
		$('.ubermenu-target-title:contains("Armored Vehicles")').text("БРОНИРОВАННЫЕ АВТОМОБИЛИ");
		$('.ubermenu-target-title:contains("About Us")').text("О КОМПАНИИ");
		$('.ubermenu-target-title:contains("Contact Us")').text("КОНТАКТЫ");

		$('.gform_body input[placeholder="Full Name"]').attr('placeholder', "Полное Имя");
		$('.gform_body input[placeholder="Эл. адрес"]').attr('placeholder', "Email");
		$('.gform_body input[placeholder="Phone"]').attr('placeholder', "Телефон");
		$('.gform_body textarea[placeholder="Questions/Comments"]').attr('placeholder', "Вопросы/Комментарии");
	}

	/*--------------------------------------------------------------
	# Arabic
	--------------------------------------------------------------*/
	if ( $('.landing-features').data('language') == 'uae' ||  $('.landing-features').data('language') == 'tunisia' || $('.landing-features').data('language') == 'egypt'){
		$('.ubermenu-target-title:contains("Features")').text(" المميزات ");
		$('.ubermenu-target-title:contains("Armored Vehicles")').text(" سيارة مصفحة ");
		$('.ubermenu-target-title:contains("About Us")').text(" معلوماتنا ");
		$('.ubermenu-target-title:contains("Contact Us")').text(" التواصل معنا ");

		$('.gform_body input[placeholder="Full Name"]').attr('placeholder', " الاسم الكامل ");
		$('.gform_body input[placeholder="Phone"]').attr('placeholder', " رقم ");
		$('.gform_body input[placeholder="Email"]').attr('placeholder', " البريد الإلكتروني ");
		$('.gform_body textarea[placeholder="Questions/Comments"]').attr('placeholder', " أسئلة / تعليقات ");
		$('.gform_footer .gform_button').val(" الحصول على عرض الأسعار ");

		$('.imgRifle img').attr('srcset', '/wp-content/uploads/Rifle@2x_Arabic.png');
		$('.imgGrenade img').attr('srcset', '/wp-content/uploads/Grenades@2x_Arabic.png');

	}
});