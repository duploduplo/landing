$(document).ready(function () {


  var sections = [];
  var sectionTitles = [];
  $('.section').each(function () {
    var $this = $(this);
    sections.push($this.data('section-name'));
    sectionTitles.push($this.data('section-title'));
  });

  $('.nav a').on('click', function(){
    $('.navbar-toggle').click(); //bootstrap 3.x by Richard
});
  $('.carousel').carousel ({
    //sets timeout for image change (ms)
    interval: 3000
  });

// Initialize fullpage
$('#fullpage').fullpage({
  anchors: ['heading', 'safety','business','favorites','connect','business_adv','contact_form','footer'],
  menu:'#topmenu',
  scrollOverflow: true,
  setLockAnchors: false,
  navigation: true,
  navigationPosition: 'right',
  afterRender: function () {
    var $navigation = $('#fp-nav');
    $navigation.addClass('visible-sm');
    $navigation.addClass('visible-xs');
  },
  onLeave: function (index, nextIndex, anchorLink) {
    var $item = $('#topbar');
    var $navigation = $('#fp-nav');
    var $laptop = $('.laptop-cont');
    $('.txt-content').removeClass('txt-load');

    if (nextIndex === 1) {
      // scroll down and hide the map
      $item.removeClass("down");
      $item.addClass("up");
      $navigation.removeClass('on');
      $navigation.addClass('off');
      $laptop.removeClass('lap-on');
    } else if ([6, 7, 8].indexOf(nextIndex) != -1) {
      // scroll up and hide the map
      $laptop.removeClass('lap-on');
    } else {
      // map should be visible
      $item.removeClass("up");
      $item.addClass("down");
      $navigation.addClass('on');
      $navigation.removeClass('off');
      $laptop.addClass('lap-on');
    }
    if (nextIndex === 7) {
      $navigation.removeClass('off');
      $navigation.addClass('on');
    }
    if (nextIndex === 8) {
      $navigation.removeClass('on');
      $navigation.addClass('off');
    }
  },
  afterLoad: function (anchorLink) {
  // var definitions
    var $laptop = $('.laptop-cont');
    var $textContent = $('.section[data-section-name="' + anchorLink +'"] .txt-content');
    $textContent.addClass('txt-load');

    if (anchorLink == 'heading') {
      $('.pin-cont').removeClass('opaque');
      $('.pin').removeClass('pin-load pin-visible');
      $('.pulse').removeClass('shadow-load pulse-load');
      $('.favs').removeClass('fav-appear');
    }

    var $items, $previous, $others;
    if (anchorLink == 'safety') {
      $items = $('.pin-cont[data-section-poi="safety"]');
      $items.removeClass('opaque');
      $items.children('.pin').addClass('pin-load');
      $items.children('.pulse').addClass('shadow-load pulse-load');

      $others = $('.pin-cont:not([data-section-poi="safety"])');
      $others.addClass('opaque');
      $others.children('.pin').removeClass('pin-load');
      $others.children('.pulse').removeClass('shadow-load pulse-load');
      $('.favs').removeClass('fav-appear');

    } else if (anchorLink == 'business') {
      $items = $('.pin-cont[data-section-poi="safety"], ' +
          '.pin-cont[data-section-poi="business"]');
      $items.removeClass('opaque');
      $items.children('.pin').addClass('pin-load');
      $items.children('.pulse').addClass('shadow-load pulse-load');

      $previous = $('.pin-cont[data-section-poi="safety"]');
      $previous.addClass('opaque');

      $others = $('.pin-cont:not([data-section-poi="safety"])' +
          ':not([data-section-poi="business"])');
      $others.addClass('opaque');
      $others.children('.pin').removeClass('pin-load');
      $others.children('.pulse').removeClass('shadow-load pulse-load');
      $('.favs').removeClass('fav-appear');
    }
    if (anchorLink == 'favorites') {
      $items = $('.pin-cont[data-section-poi="safety"], ' +
          '.pin-cont[data-section-poi="business"]');
      $items.removeClass('opaque');
      $items.children('.pin').addClass('pin-load');
      $items.children('.pulse').addClass('shadow-load pulse-load');

      $previous = $('.pin-cont:not(:has(div.favs))');
      $previous.addClass('opaque');

      $others = $('.pin-cont:not([data-section-poi="safety"])' +
          ':not([data-section-poi="business"])');
      $others.addClass('opaque');
      $others.children('.pin').removeClass('pin-load');
      $others.children('.pulse').removeClass('shadow-load pulse-load');

      $('.favs').addClass('fav-appear');
    }
    if (anchorLink == 'connect') {
      $items = $('.pin-cont[data-section-poi="safety"], ' +
          '.pin-cont[data-section-poi="business"], ' +
          '.pin-cont[data-section-poi="connect"]');
      $items.removeClass('opaque');
      $items.children('.pin').addClass('pin-load');
      $items.children('.pulse').addClass('shadow-load pulse-load');

      $previous = $('.pin-cont[data-section-poi="safety"], ' +
          '.pin-cont[data-section-poi="business"]');
      $previous.addClass('opaque');

      $('.favs').addClass('fav-appear');
    }
  }
});

  // Activate jump buttons
  $('.jump').click(function () {
    var $this = $(this);
    var target = $this.data('jump');
    $.fn.fullpage.moveTo(target);
  });

});

