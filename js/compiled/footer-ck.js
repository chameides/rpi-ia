$('.menu-open').click(
    function () {
        "use strict";
        menuopen();
    }
);

$('.menu-close').click(
    function () {
        "use strict";
        menuclose();
    }
);

/* **********************************************
     Begin touchwipe.settings.js
********************************************** */

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

/* **********************************************
     Begin addthis.js
********************************************** */

addthis.layers({
  'theme' : 'transparent',
  'share' : {
    'position' : 'left',
    'numPreferredServices' : 5
  },
  'follow' : {
    'services' : [
      {'service': 'facebook', 'id': 'RPIAlumni'},
      {'service': 'twitter', 'id': 'RPIAlumni'},
      {'service': 'google_follow', 'id': '107990642161097904060/posts'}
    ]
  },
});

/* **********************************************
     Begin footer.js
********************************************** */

//combined files for codekit
//@codekit-prepend "/touchwipe/touchwipe.settings.js", "addthis.js" 