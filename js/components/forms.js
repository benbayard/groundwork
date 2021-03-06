(function() {
  $(function() {
    $('body').on('click', '\
    .error input, \
    .error textarea, \
    .invalid input, \
    .invalid textarea, \
    input.error, \
    textarea.error, \
    input.invalid, \
    textarea.invalid', function(e) {
      return $(this).focus().select();
    });
    $('span.select select').each(function() {
      if ($(this).children('option').first().val() === '' && $(this).children('option').first().attr('selected')) {
        return $(this).addClass('unselected');
      } else {
        return $(this).removeClass('unselected');
      }
    });
    $('body').on('change', 'span.select select', function(e) {
      if ($(this).children('option').first().val() === '' && $(this).children('option').first().attr('selected')) {
        return $(this).addClass('unselected');
      } else {
        return $(this).removeClass('unselected');
      }
    });
  });

}).call(this);
