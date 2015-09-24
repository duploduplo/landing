$(document).ready(function () {

  // Initialize fullpage
  $('#fullpage').fullpage({
    anchors: [
      'heading', 'safety', 'business', 'favorites', 'connect', 'business_adv',
      'coming_soon', 'contact_form'
    ],
    onLeave: function (index, nextIndex) {
      var item = $('#topbar');
      if (index === 1) {
        item.removeClass("up");
        item.addClass("down");
      } else if (nextIndex === 1) {
        item.removeClass("down");
        item.addClass("up");
      }
    }
  });

  // Activate jump buttons
  $('.jump').click(function() {
    var target = $(this).data('jump');
    $.fn.fullpage.moveTo(target);
  })
});

