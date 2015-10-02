$(document).ready(function () {

  var sections = [];
  var sectionTitles = [];
  $('.section').each(function () {
    var $this = $(this);
    sections.push($this.data('section-name'));
    sectionTitles.push($this.data('section-title'));
  });

  // Initialize fullpage
  $('#fullpage').fullpage({
    anchors: sections,
    navigation: true,
    navigationPosition: 'left',
    // TODO: style and enable this text
    // navigationTooltips: sectionTitles,
    afterRender: function () {
      var $navigation = $('#fp-nav');
      $navigation.addClass('hidden-sm');
      $navigation.addClass('hidden-xs');
    },
    onLeave: function (index, nextIndex) {
      var $item = $('#topbar');
      var $navigation = $('#fp-nav');
      if (index === 1) {
        $item.removeClass("up");
        $item.addClass("down");
        $navigation.addClass('visible');
      } else if (nextIndex === 1) {
        $item.removeClass("down");
        $item.addClass("up");
        $navigation.removeClass('visible');
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

