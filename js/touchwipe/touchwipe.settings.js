$(window).touchwipe({
  wipeLeft: function() {
    //Close
    togglemenu();
  },
  wipeRight: function() {
    // Open
    togglemenu();
  },
   // preventDefaultEvents: false
 min_move_x: 20,
 preventDefaultEvents: false,
  });