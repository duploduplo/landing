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
    menu:'#topmenu',
    scrollOverflow: true,
    navigation: true,
    navigationPosition: 'right',
    // TODO: style and enable this text
    // navigationTooltips: sectionTitles,
    afterRender: function () {
      var $navigation = $('#fp-nav');
      $navigation.addClass('visible-sm');
      $navigation.addClass('visible-xs');
    },
    onLeave: function (index, nextIndex) {
      var $item = $('#topbar');
      var $navigation = $('#fp-nav');
      var $laptop = $('.laptop-cont');
      var $text1 = $('#text1')
      var $text2 = $('#text2')
      var $text3 = $('#text3')
      var $text4 = $('#text4')                  
      if (index === 1) {
        $item.removeClass("up");
        $item.addClass("down");
        $navigation.addClass('on');
        $navigation.removeClass('off');
        $laptop.addClass('lap-on');
        $laptop.removeClass('lap-off');
        $text1.addClass('txt-load');
      } 
       else if (nextIndex === 1) {
        $item.removeClass("down");
        $item.addClass("up");
        $navigation.removeClass('on');
        $navigation.addClass('off')
        $laptop.removeClass('lap-on');
        $laptop.addClass('lap-off');        
        $text1.removeClass('txt-load');
      }
       else if (index === 2) {
        $text2.addClass('txt-load');
        $text1.removeClass('txt-load');
      }      
       else if (index === 3) {
        $text3.addClass('txt-load');
        $text2.removeClass('txt-load');        
      }      
       else if (index === 4) {
        $text4.addClass('txt-load');       
        $text3.removeClass('txt-load');        
      }
       else if (index === 5) {
        $text4.removeClass('txt-load');        
        $laptop.removeClass('lap-on');
        $laptop.addClass('lap-off');
      }                 
       else if (nextIndex === 8) {
        $navigation.removeClass('on');
        $navigation.addClass('off')
      }
       else if (nextIndex === 7) {
        $navigation.removeClass('off');
        $navigation.addClass('on')
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

