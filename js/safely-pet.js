$(document).ready(function () {


  var sections = [];
  var sectionTitles = [];
  $('.section').each(function () {
    var $this = $(this);
    sections.push($this.data('section-name'));
    sectionTitles.push($this.data('section-title'));
  });

  $('.nav a').on('click', function(){
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
});

  // Initialize fullpage
  $('#fullpage').fullpage({
    anchors: ['heading', 'safety','business','favorites','connect','business_adv','contact_form','footer'],
    menu:'#topmenu',
    scrollOverflow: true,
    setLockAnchors: false,
    navigation: true,
    navigationPosition: 'right',
    // TODO: style and enable this text
    // navigationTooltips: sectionTitles,
    afterRender: function () {
      var $navigation = $('#fp-nav');
      $navigation.addClass('visible-sm');
      $navigation.addClass('visible-xs');
    },
    onLeave: function (index, nextIndex, anchorLink) {
      var $item = $('#topbar');
      var $navigation = $('#fp-nav');
      var $laptop = $('.laptop-cont');
      var $text1 = $('#text1');
      var $text2 = $('#text2');
      var $text3 = $('#text3');
      var $text4 = $('#text4');                             
      if (index === 1) {
        $item.removeClass("up");
        $item.addClass("down");
        $navigation.addClass('on');
        $navigation.removeClass('off');
      } 
       else if (nextIndex === 1) {
        $item.removeClass("down");
        $item.addClass("up");
        $navigation.removeClass('on');
        $navigation.addClass('off');
        $laptop.removeClass('lap-on');
        $laptop.addClass('lap-off2')        
      }
       if (index === 2 ) {
        $text2.addClass('text-fade');
       }
       if (index === 3 ) {
        $text3.addClass('text-fade');        
       }
       if (index === 4 ) {
        $text4.addClass('text-fade');        
       }

       if (nextIndex === 8) {
        $navigation.removeClass('on');
        $navigation.addClass('off')
      }
       if (nextIndex === 7) {
        $navigation.removeClass('off');
        $navigation.addClass('on')
      }
      if (index === 5 && nextIndex === 6) {
        $laptop.removeClass('lap-on');        
        $laptop.removeClass('lap-off');        
      }
    },
    afterLoad: function (anchorLink) {
    // var definitions  
      var $laptop = $('.laptop-cont');
      var $text1 = $('#text1');
      var $text2 = $('#text2');
      var $text3 = $('#text3');
      var $text4 = $('#text4');
      var $pincont1 = $('.pin1');      
      var $pin1 = $('.pin1 .pin');
      var $pulse1 = $('.pin1 .pulse');
      var $pincont2 = $('.pin2');      
      var $pin2 = $('.pin2 .pin');
      var $pulse2 = $('.pin2 .pulse');
      var $fav2 = $('.pin2 .favs');            
      var $pincont3 = $('.pin3');      
      var $pin3 = $('.pin3 .pin');
      var $pulse3 = $('.pin3 .pulse');
      var $pincont4 = $('.pin4');      
      var $pin4 = $('.pin4 .pin');
      var $pulse4 = $('.pin4 .pulse');
      var $fav4 = $('.pin4 .favs');      
      var $pincont5 = $('.pin5');      
      var $pin5 = $('.pin5 .pin');
      var $pulse5 = $('.pin5 .pulse');
      var $pincont6 = $('.pin6');      
      var $pin6 = $('.pin6 .pin');
      var $pulse6 = $('.pin6 .pulse');
      var $pincont7 = $('.pin7');      
      var $pin7 = $('.pin7 .pin');
      var $pulse7 = $('.pin7 .pulse');
      var $fav7 = $('.pin7 .favs');      
      var $pincont8 = $('.pin8');      
      var $pin8 = $('.pin8 .pin');
      var $pulse8 = $('.pin8 .pulse');
      var $fav8 = $('.pin8 .favs');            
      var $pincont9 = $('.pin9');      
      var $pin9 = $('.pin9 .pin');
      var $pulse9 = $('.pin9 .pulse');
      var $pincont10 = $('.pin10');      
      var $pin10 = $('.pin10 .pin');
      var $pulse10 = $('.pin10 .pulse');
      var $fav10 = $('.pin10 .favs');            
      var $pincont11 = $('.pin11');      
      var $pin11 = $('.pin11 .pin');
      var $pulse11 = $('.pin11 .pulse');
      var $pincont12 = $('.pin12');      
      var $pin12 = $('.pin12 .pin');
      var $pulse12 = $('.pin12 .pulse');
      var $fav12 = $('.pin12 .favs');            
      var $pincont13 = $('.pin13');      
      var $pin13 = $('.pin13 .pin');
      var $pulse13 = $('.pin13 .pulse');
      var $pincont14 = $('.pin14');      
      var $pin14 = $('.pin14 .pin');
      var $pulse14 = $('.pin14 .pulse');
      var $pincont15 = $('.pin15');      
      var $pin15 = $('.pin15 .pin');
      var $pulse15 = $('.pin15 .pulse');
      var $fav15 = $('.pin15 .favs');            
      var $pincont16 = $('.pin16');      
      var $pin16 = $('.pin16 .pin');
      var $pulse16 = $('.pin16 .pulse');
      var $pincont17 = $('.pin17');      
      var $pin17 = $('.pin17 .pin');
      var $pulse17 = $('.pin17 .pulse');
      var $pincont18 = $('.pin18');      
      var $pin18 = $('.pin18 .pin');
      var $pulse18 = $('.pin18 .pulse');
      var $pincont19 = $('.pin19');      
      var $pin19 = $('.pin19 .pin');
      var $pulse19 = $('.pin19 .pulse');
      var $pincont20 = $('.pin20');      
      var $pin20 = $('.pin20 .pin');
      var $pulse20 = $('.pin20 .pulse');
      var $pincont21 = $('.pin21');      
      var $pin21 = $('.pin21 .pin');
      var $pulse21 = $('.pin21 .pulse');
      var $pincont22 = $('.pin22');      
      var $pin22 = $('.pin22 .pin');
      var $pulse22 = $('.pin22 .pulse');
      var $pincont23 = $('.pin23');      
      var $pin23 = $('.pin23 .pin');
      var $pulse23 = $('.pin23 .pulse');
    //

      if (anchorLink == 'heading') {
        $laptop.removeClass('lap-on');
        $laptop.removeClass('lap-off');
        $laptop.removeClass('lap-off2')                
        $text1.removeClass('txt-load');
        $text2.removeClass('txt-load');        
        $text3.removeClass('txt-load');
        $text4.removeClass('txt-load');
        // reset pins
          $pincont1.removeClass('opaque');
          $pin1.removeClass('pin-load pin-visible');
          $pulse1.removeClass('shadow-load pulse-load')
          $pincont2.removeClass('opaque');
          $pin2.removeClass('pin-load pin-visible');
          $pulse2.removeClass('shadow-load pulse-load')
          $pincont3.removeClass('opaque');
          $pin3.removeClass('pin-load pin-visible');
          $pulse3.removeClass('shadow-load pulse-load')
          $pincont4.removeClass('opaque');
          $pin4.removeClass('pin-load pin-visible');
          $pulse4.removeClass('shadow-load pulse-load')
          $pincont5.removeClass('opaque');
          $pin5.removeClass('pin-load pin-visible');
          $pulse5.removeClass('shadow-load pulse-load')
          $pincont6.removeClass('opaque');
          $pin6.removeClass('pin-load pin-visible');
          $pulse6.removeClass('shadow-load pulse-load')
          $pincont23.removeClass('opaque');
          $pin23.removeClass('pin-load pin-visible');
          $pulse23.removeClass('shadow-load pulse-load')
          $pincont7.removeClass('opaque');
          $pin7.removeClass('pin-load pin-visible');
          $pulse7.removeClass('shadow-load pulse-load')
          $pincont8.removeClass('opaque');
          $pin8.removeClass('pin-load pin-visible');
          $pulse8.removeClass('shadow-load pulse-load')
          $pincont9.removeClass('opaque');
          $pin9.removeClass('pin-load pin-visible');
          $pulse9.removeClass('shadow-load pulse-load')
          $pincont10.removeClass('opaque');
          $pin10.removeClass('pin-load pin-visible');
          $pulse10.removeClass('shadow-load pulse-load')
          $pincont11.removeClass('opaque');
          $pin11.removeClass('pin-load pin-visible');
          $pulse11.removeClass('shadow-load pulse-load')
          $pincont12.removeClass('opaque');
          $pin12.removeClass('pin-load pin-visible');
          $pulse12.removeClass('shadow-load pulse-load')
          $pincont13.removeClass('opaque');
          $pin13.removeClass('pin-load pin-visible');
          $pulse13.removeClass('shadow-load pulse-load')
          $pincont14.removeClass('opaque');
          $pin14.removeClass('pin-load pin-visible');
          $pulse14.removeClass('shadow-load pulse-load')
          $pincont15.removeClass('opaque');
          $pin15.removeClass('pin-load pin-visible');
          $pulse15.removeClass('shadow-load pulse-load')
          $pincont16.removeClass('opaque');
          $pin16.removeClass('pin-load pin-visible');
          $pulse16.removeClass('shadow-load pulse-load')
          $pincont17.removeClass('opaque');
          $pin17.removeClass('pin-load pin-visible');
          $pulse17.removeClass('shadow-load pulse-load')
          $pincont18.removeClass('opaque');
          $pin18.removeClass('pin-load pin-visible');
          $pulse18.removeClass('shadow-load pulse-load')
          $pincont19.removeClass('opaque');
          $pin19.removeClass('pin-load pin-visible');
          $pulse19.removeClass('shadow-load pulse-load')
          $pincont20.removeClass('opaque');
          $pin20.removeClass('pin-load pin-visible');
          $pulse20.removeClass('shadow-load pulse-load')
          $pincont21.removeClass('opaque');
          $pin21.removeClass('pin-load pin-visible');
          $pulse21.removeClass('shadow-load pulse-load')
          $pincont22.removeClass('opaque');
          $pin22.removeClass('pin-load pin-visible');
          $pulse22.removeClass('shadow-load pulse-load')
        // reset favs
          $fav2.removeClass('fav-appear');
          $fav4.removeClass('fav-appear');
          $fav7.removeClass('fav-appear');
          $fav8.removeClass('fav-appear');
          $fav10.removeClass('fav-appear');
          $fav12.removeClass('fav-appear');
          $fav15.removeClass('fav-appear');

      }
      if (anchorLink == 'safety') {
        $laptop.removeClass('lap-off');
        $laptop.removeClass('lap-off2')                
        $laptop.addClass('lap-on');
        $text1.addClass('txt-load');
        $text2.removeClass('txt-load');        
        $text3.removeClass('txt-load');
        $text4.removeClass('txt-load');
        // pin behaviour
          $pincont1.removeClass('opaque');
          $pin1.addClass('pin-load');
          $pulse1.addClass('shadow-load pulse-load')
          $pincont2.removeClass('opaque');
          $pin2.addClass('pin-load');
          $pulse2.addClass('shadow-load pulse-load')
          $pincont3.removeClass('opaque');
          $pin3.addClass('pin-load');
          $pulse3.addClass('shadow-load pulse-load')
          $pincont4.removeClass('opaque');
          $pin4.addClass('pin-load');
          $pulse4.addClass('shadow-load pulse-load')
          $pincont5.removeClass('opaque');
          $pin5.addClass('pin-load');
          $pulse5.addClass('shadow-load pulse-load')
          $pincont6.removeClass('opaque');
          $pin6.addClass('pin-load');
          $pulse6.addClass('shadow-load pulse-load')
          $pincont23.removeClass('opaque');
          $pin23.addClass('pin-load');
          $pulse23.addClass('shadow-load pulse-load')
        // reset lower pins
          $pincont7.removeClass('opaque');
          $pin7.removeClass('pin-load pin-visible');
          $pulse7.removeClass('shadow-load pulse-load')
          $pincont8.removeClass('opaque');
          $pin8.removeClass('pin-load pin-visible');
          $pulse8.removeClass('shadow-load pulse-load')
          $pincont9.removeClass('opaque');
          $pin9.removeClass('pin-load pin-visible');
          $pulse9.removeClass('shadow-load pulse-load')
          $pincont10.removeClass('opaque');
          $pin10.removeClass('pin-load pin-visible');
          $pulse10.removeClass('shadow-load pulse-load')
          $pincont11.removeClass('opaque');
          $pin11.removeClass('pin-load pin-visible');
          $pulse11.removeClass('shadow-load pulse-load')
          $pincont12.removeClass('opaque');
          $pin12.removeClass('pin-load pin-visible');
          $pulse12.removeClass('shadow-load pulse-load')
          $pincont13.removeClass('opaque');
          $pin13.removeClass('pin-load pin-visible');
          $pulse13.removeClass('shadow-load pulse-load')
          $pincont14.removeClass('opaque');
          $pin14.removeClass('pin-load pin-visible');
          $pulse14.removeClass('shadow-load pulse-load')
          $pincont15.removeClass('opaque');
          $pin15.removeClass('pin-load pin-visible');
          $pulse15.removeClass('shadow-load pulse-load')
          $pincont16.removeClass('opaque');
          $pin16.removeClass('pin-load pin-visible');
          $pulse16.removeClass('shadow-load pulse-load')
          $pincont17.removeClass('opaque');
          $pin17.removeClass('pin-load pin-visible');
          $pulse17.removeClass('shadow-load pulse-load')
          $pincont18.removeClass('opaque');
          $pin18.removeClass('pin-load pin-visible');
          $pulse18.removeClass('shadow-load pulse-load')
          $pincont19.removeClass('opaque');
          $pin19.removeClass('pin-load pin-visible');
          $pulse19.removeClass('shadow-load pulse-load')
          $pincont20.removeClass('opaque');
          $pin20.removeClass('pin-load pin-visible');
          $pulse20.removeClass('shadow-load pulse-load')
          $pincont21.removeClass('opaque');
          $pin21.removeClass('pin-load pin-visible');
          $pulse21.removeClass('shadow-load pulse-load')
          $pincont22.removeClass('opaque');
          $pin22.removeClass('pin-load pin-visible');
          $pulse22.removeClass('shadow-load pulse-load')
        // reset favs
          $fav2.removeClass('fav-appear');        
          $fav4.removeClass('fav-appear');
          $fav7.removeClass('fav-appear');
          $fav8.removeClass('fav-appear');
          $fav10.removeClass('fav-appear');
          $fav12.removeClass('fav-appear');
          $fav15.removeClass('fav-appear');


      }
      if (anchorLink == 'business') {
        $laptop.removeClass('lap-off');
        $laptop.removeClass('lap-off2')                
        $laptop.addClass('lap-on');
        $text1.removeClass('txt-load');
        $text2.addClass('txt-load');        
        $text3.removeClass('txt-load');
        $text4.removeClass('txt-load');
        // pin behaviour
          $pincont1.addClass('opaque');
          $pin1.addClass('pin-visible')
          $pulse1.removeClass('pulse-load');
          $pincont2.addClass('opaque');
          $pin2.addClass('pin-visible')
          $pulse2.removeClass('pulse-load');
          $pincont3.addClass('opaque');
          $pin3.addClass('pin-visible')
          $pulse3.removeClass('pulse-load');
          $pincont4.addClass('opaque');
          $pin4.addClass('pin-visible')
          $pulse4.removeClass('pulse-load');
          $pincont5.addClass('opaque');
          $pin5.addClass('pin-visible')
          $pulse5.removeClass('pulse-load');
          $pincont6.addClass('opaque');
          $pin6.addClass('pin-visible')
          $pulse6.removeClass('pulse-load');
          $pincont23.addClass('opaque');
          $pin23.addClass('pin-visible')
          $pulse23.removeClass('pulse-load');
        // new pins
          $pincont7.removeClass('opaque');
          $pin7.addClass('pin-load');
          $pulse7.addClass('shadow-load pulse-load')
          $pincont8.removeClass('opaque');
          $pin8.addClass('pin-load');
          $pulse8.addClass('shadow-load pulse-load')
          $pincont9.removeClass('opaque');
          $pin9.addClass('pin-load');
          $pulse9.addClass('shadow-load pulse-load')
          $pincont10.removeClass('opaque');
          $pin10.addClass('pin-load');
          $pulse10.addClass('shadow-load pulse-load')
          $pincont11.removeClass('opaque');
          $pin11.addClass('pin-load');
          $pulse11.addClass('shadow-load pulse-load')
          $pincont12.removeClass('opaque');
          $pin12.addClass('pin-load');
          $pulse12.addClass('shadow-load pulse-load')
          $pincont13.removeClass('opaque');
          $pin13.addClass('pin-load');
          $pulse13.addClass('shadow-load pulse-load')
          $pincont14.removeClass('opaque');
          $pin14.addClass('pin-load');
          $pulse14.addClass('shadow-load pulse-load')
          $pincont15.removeClass('opaque');
          $pin15.addClass('pin-load');
          $pulse15.addClass('shadow-load pulse-load')
        // reset lower pins
          $pincont16.removeClass('opaque');
          $pin16.removeClass('pin-load pin-visible');
          $pulse16.removeClass('shadow-load pulse-load')
          $pincont17.removeClass('opaque');
          $pin17.removeClass('pin-load pin-visible');
          $pulse17.removeClass('shadow-load pulse-load')
          $pincont18.removeClass('opaque');
          $pin18.removeClass('pin-load pin-visible');
          $pulse18.removeClass('shadow-load pulse-load')
          $pincont19.removeClass('opaque');
          $pin19.removeClass('pin-load pin-visible');
          $pulse19.removeClass('shadow-load pulse-load')
          $pincont20.removeClass('opaque');
          $pin20.removeClass('pin-load pin-visible');
          $pulse20.removeClass('shadow-load pulse-load')
          $pincont21.removeClass('opaque');
          $pin21.removeClass('pin-load pin-visible');
          $pulse21.removeClass('shadow-load pulse-load')
          $pincont22.removeClass('opaque');
          $pin22.removeClass('pin-load pin-visible');
          $pulse22.removeClass('shadow-load pulse-load')          
        // reset favs
          $fav2.removeClass('fav-appear');        
          $fav4.removeClass('fav-appear');
          $fav7.removeClass('fav-appear');
          $fav8.removeClass('fav-appear');
          $fav10.removeClass('fav-appear');
          $fav12.removeClass('fav-appear');
          $fav15.removeClass('fav-appear');



      }
      if (anchorLink == 'favorites') {
        $laptop.removeClass('lap-off');
        $laptop.removeClass('lap-off2')                
        $laptop.addClass('lap-on');
        $text1.removeClass('txt-load');
        $text2.removeClass('txt-load');        
        $text3.addClass('txt-load');
        $text4.removeClass('txt-load'); 
        // pin behaviour
          $pincont1.addClass('opaque');
          $pin1.addClass('pin-visible')
          $pulse1.removeClass('pulse-load');
          $pincont2.removeClass('opaque');
          $pin2.addClass('pin-visible')
          $pulse2.removeClass('pulse-load');
          $pincont3.addClass('opaque');
          $pin3.addClass('pin-visible')
          $pulse3.removeClass('pulse-load');
          $pincont4.removeClass('opaque');
          $pin4.addClass('pin-visible')
          $pulse4.removeClass('pulse-load');
          $pincont5.addClass('opaque');
          $pin5.addClass('pin-visible')
          $pulse5.removeClass('pulse-load');
          $pincont6.addClass('opaque');
          $pin6.addClass('pin-visible')
          $pulse6.removeClass('pulse-load');
          $pincont23.addClass('opaque');
          $pin23.addClass('pin-visible')
          $pulse23.removeClass('pulse-load');
          $pincont7.removeClass('opaque');
          $pin7.addClass('pin-visible')
          $pulse7.removeClass('pulse-load');
          $pincont8.removeClass('opaque');
          $pin8.addClass('pin-visible')
          $pulse8.removeClass('pulse-load');
          $pincont9.addClass('opaque');
          $pin9.addClass('pin-visible')
          $pulse9.removeClass('pulse-load');
          $pincont10.removeClass('opaque');
          $pin10.addClass('pin-visible')
          $pulse10.removeClass('pulse-load');
          $pincont11.addClass('opaque');
          $pin11.addClass('pin-visible')
          $pulse11.removeClass('pulse-load');
          $pincont12.removeClass('opaque');
          $pin12.addClass('pin-visible')
          $pulse12.removeClass('pulse-load');
          $pincont13.addClass('opaque');
          $pin13.addClass('pin-visible')
          $pulse13.removeClass('pulse-load');
          $pincont14.addClass('opaque');
          $pin14.addClass('pin-visible')
          $pulse14.removeClass('pulse-load');
          $pincont15.removeClass('opaque');
          $pin15.addClass('pin-visible')
          $pulse15.removeClass('pulse-load');               
        // reset lower pins
          $pincont16.removeClass('opaque');
          $pin16.removeClass('pin-load pin-visible');
          $pulse16.removeClass('shadow-load pulse-load')
          $pincont17.removeClass('opaque');
          $pin17.removeClass('pin-load pin-visible');
          $pulse17.removeClass('shadow-load pulse-load')
          $pincont18.removeClass('opaque');
          $pin18.removeClass('pin-load pin-visible');
          $pulse18.removeClass('shadow-load pulse-load')
          $pincont19.removeClass('opaque');
          $pin19.removeClass('pin-load pin-visible');
          $pulse19.removeClass('shadow-load pulse-load')
          $pincont20.removeClass('opaque');
          $pin20.removeClass('pin-load pin-visible');
          $pulse20.removeClass('shadow-load pulse-load')
          $pincont21.removeClass('opaque');
          $pin21.removeClass('pin-load pin-visible');
          $pulse21.removeClass('shadow-load pulse-load')
          $pincont22.removeClass('opaque');
          $pin22.removeClass('pin-load pin-visible');
          $pulse22.removeClass('shadow-load pulse-load')               
        // add fav stars
          $fav2.addClass('fav-appear');        
          $fav4.addClass('fav-appear');
          $fav7.addClass('fav-appear');
          $fav8.addClass('fav-appear');
          $fav10.addClass('fav-appear');
          $fav12.addClass('fav-appear');
          $fav15.addClass('fav-appear');

      }        
      if (anchorLink == 'connect') {
        $laptop.removeClass('lap-off');
        $laptop.removeClass('lap-off2')                        
        $laptop.addClass('lap-on');
        $text1.removeClass('txt-load');
        $text2.removeClass('txt-load');        
        $text3.removeClass('txt-load');
        $text4.addClass('txt-load');        
        // pin behaviour
          $pincont1.addClass('opaque');
          $pin1.addClass('pin-visible')
          $pulse1.removeClass('pulse-load');
          $pincont2.addClass('opaque');
          $pin2.addClass('pin-visible')
          $pulse2.removeClass('pulse-load');
          $pincont3.addClass('opaque');
          $pin3.addClass('pin-visible')
          $pulse3.removeClass('pulse-load');
          $pincont4.addClass('opaque');
          $pin4.addClass('pin-visible')
          $pulse4.removeClass('pulse-load');
          $pincont5.addClass('opaque');
          $pin5.addClass('pin-visible')
          $pulse5.removeClass('pulse-load');
          $pincont6.addClass('opaque');
          $pin6.addClass('pin-visible')
          $pulse6.removeClass('pulse-load');
          $pincont23.addClass('opaque');
          $pin23.addClass('pin-visible')
          $pulse23.removeClass('pulse-load');
          $pincont7.addClass('opaque');
          $pin7.addClass('pin-visible')
          $pulse7.removeClass('pulse-load');
          $pincont8.addClass('opaque');
          $pin8.addClass('pin-visible')
          $pulse8.removeClass('pulse-load');
          $pincont9.addClass('opaque');
          $pin9.addClass('pin-visible')
          $pulse9.removeClass('pulse-load');
          $pincont10.addClass('opaque');
          $pin10.addClass('pin-visible')
          $pulse10.removeClass('pulse-load');
          $pincont11.addClass('opaque');
          $pin11.addClass('pin-visible')
          $pulse11.removeClass('pulse-load');
          $pincont12.addClass('opaque');
          $pin12.addClass('pin-visible')
          $pulse12.removeClass('pulse-load');
          $pincont13.addClass('opaque');
          $pin13.addClass('pin-visible')
          $pulse13.removeClass('pulse-load');
          $pincont14.addClass('opaque');
          $pin14.addClass('pin-visible')
          $pulse14.removeClass('pulse-load');
          $pincont15.addClass('opaque');
          $pin15.addClass('pin-visible')
          $pulse15.removeClass('pulse-load');
        // new pins
          $pincont16.removeClass('opaque');
          $pin16.addClass('pin-load');
          $pulse16.addClass('shadow-load pulse-load')
          $pincont17.removeClass('opaque');
          $pin17.addClass('pin-load');
          $pulse17.addClass('shadow-load pulse-load')
          $pincont18.removeClass('opaque');
          $pin18.addClass('pin-load');
          $pulse18.addClass('shadow-load pulse-load')
          $pincont19.removeClass('opaque');
          $pin19.addClass('pin-load');
          $pulse19.addClass('shadow-load pulse-load')
          $pincont20.removeClass('opaque');
          $pin20.addClass('pin-load');
          $pulse20.addClass('shadow-load pulse-load')
          $pincont21.removeClass('opaque');
          $pin21.addClass('pin-load');
          $pulse21.addClass('shadow-load pulse-load')
          $pincont22.removeClass('opaque');
          $pin22.addClass('pin-load');
          $pulse22.addClass('shadow-load pulse-load')

      }
      if (anchorLink == 'business_adv') {
        $laptop.removeClass('lap-off');
        $laptop.removeClass('lap-off2')                        
        $laptop.removeClass('lap-on');        
        $text1.removeClass('txt-load');
        $text2.removeClass('txt-load');        
        $text3.removeClass('txt-load');
        $text4.removeClass('txt-load');        
      }        
      if (anchorLink == 'contact_form') {
        $laptop.removeClass('lap-off');
        $laptop.removeClass('lap-off2')                        
        $laptop.removeClass('lap-on');                        
      }
      if (anchorLink == 'footer') {
        $laptop.removeClass('lap-off');        
        $laptop.removeClass('lap-off2')                
        $laptop.removeClass('lap-on');        
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

