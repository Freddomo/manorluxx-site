function setGaconnectorHiddenFields() {
  var gaFields = gaconnector.getCookieValues();
  for (var fieldName in gaFields) {
    var selectors = 'form input[name="' + fieldName + '"], form input#' + fieldName + ', form input[id^="field_' + fieldName + '"], form input[id^="field_' + fieldName.toLowerCase() + '"], form input[name="' + fieldName.toLowerCase() + '"], form input#' + fieldName.toLowerCase() + ', input[value="gaconnector_' + fieldName + '"], form input[value="' + fieldName + '"]';
    selectors += ', form textarea[name="'+fieldName+'"], form textarea#'+fieldName+', form textarea#field_'+fieldName + ', form textarea[name="'+fieldName.toLowerCase()+'"], form textarea#'+fieldName.toLowerCase()+', form textarea#field_'+fieldName.toLowerCase()+', form textarea.'+fieldName+', form textarea[name="param['+fieldName+']"]'+", form textarea[id^='field_"+fieldName+"']";
    var inputs = document.querySelectorAll(selectors);
    if (inputs === null) {
      continue;
    } else if (typeof inputs.length === 'undefined') {
      inputs.value = gaFields[fieldName];
      jQuery(inputs).trigger('change');
    } else {
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = gaFields[fieldName];
        jQuery(inputs).trigger('change');
      }
    }
  }
}

gaconnector.setCallback(setGaconnectorHiddenFields);
setInterval(setGaconnectorHiddenFields, 1000);