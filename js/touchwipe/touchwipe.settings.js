$(window).touchwipe({
  wipeLeft: function() {
    //Close
        menuclose();
  },
  wipeRight: function() {
    // Open
    menuopen();
  },
 
 preventDefaultEvents: false
  });