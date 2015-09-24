$(document).ready(function () {
  $('#fullpage').fullpage({
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
});

