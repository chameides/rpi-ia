$(window).touchwipe({
  wipeLeft: function() {
    //Close
    $('body').removeClass('menu-on');
  },
  wipeRight: function() {
    // Open
    $('body').addClass('menu-on');
  },
 min_move_x: 20,
 //preventDefaultEvents: false,
  });