/**
 * Enables smooth scrolling inside the page
 */
$(function () {
  $headerLinks = $('#header a[href*="#"]:not([href="#"])')
  $bannerLinks = $('#banner a[href*="#"]:not([href="#"])')
  $pageLinks = $('#main a[href*="#"]:not([href="#"])')

  function scrollSmooth() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  }

  $headerLinks.click(scrollSmooth);
  $bannerLinks.click(scrollSmooth);
  $pageLinks.click(scrollSmooth);
});