/**
 * Enables smooth scrolling inside the page
 */
$(function () {
  /** Get all the links from
   * #header (top menu)
   * #banner (landing content)
   * #main (page content)
  */
  $headerLinks = $('#header a[href*="#"]:not([href="#"])')
  $bannerLinks = $('#banner a[href*="#"]:not([href="#"])')
  $pageLinks = $('#main a[href*="#"]:not([href="#"])')

  /**
   * scrollSmoth is our callback for clicking on the links/buttons that don't
   * point to a blank `#` link
   * */
  function scrollSmooth() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000); // speed in milliseconds
        return false;
      }
    }
  }

  // add on click listeners
  $headerLinks.click(scrollSmooth);
  $bannerLinks.click(scrollSmooth);
  $pageLinks.click(scrollSmooth);
});