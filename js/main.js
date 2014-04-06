$(document).ready(function () {
  
  $('.h5-phone').mask("(999) 999-9999");
  $('.h5-date').mask("99/99/9999");
  
  $.h5Validate.addPatterns({
    date: /^((0?[1-9]|1[012])[/](0?[1-9]|[12][0-9]|3[01])[/](19|20)?[0-9]{2})*$/,
    phone: /([\+][0-9]{1,3}([ \.\-])?)?([\(]{1}[0-9]{3}[\)])?([0-9A-Z \.\-]{1,32})/,
    email: /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/,
    zip: /^\d{5}$/
  })
  
  $('form').h5Validate();
  
  $('.reset').click(function () {
    $(this).closest('form').find("input,select").val("");
  })
  
});