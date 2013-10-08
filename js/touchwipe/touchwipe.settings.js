$(window).touchwipe({
  wipeLeft: function() {
    //Close
        menuclose();
  },
  wipeRight: function() {
    // Open
    menuopen();
  },
 min_move_x: 20,
 //preventDefaultEvents: false,
  });