$(document).ready(function () {

  var sections = [];
  $('.section').each(function () {
    var $this = $(this);
    sections.push($this.data('section-name'));
  });

  // Initialize fullpage
  $('#fullpage').fullpage({
    anchors: sections,
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
  $('.jump').click(function () {
    var $this = $(this);
    var target = $this.data('jump');
    $.fn.fullpage.moveTo(target);
  })
});

