/**
 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch and iPad, should also work with Android mobile phones (not tested yet!)
 * Common usage: wipe images (left and right to show the previous or next image)
 * 
 * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
 * @version 1.1.1 (9th December 2010) - fix bug (older IE's had problems)
 * @version 1.1 (1st September 2010) - support wipe up and wipe down
 * @version 1.0 (15th July 2010)
 */
(function($) {
   $.fn.touchwipe = function(settings) {
     var config = {
            min_move_x: 20,
            //min_move_y: 20,
            wipeLeft: function() { },
            wipeRight: function() { },
            wipeUp: function() { },
            wipeDown: function() { },
            preventDefaultEvents: true
     };
     
     if (settings) $.extend(config, settings);
 
     this.each(function() {
         var startX;
         var startY;
         var isMoving = false;

         function cancelTouch() {
             this.removeEventListener('touchmove', onTouchMove);
             startX = null;
             isMoving = false;
         }
         
         function onTouchMove(e) {
             if(config.preventDefaultEvents) {
                 e.preventDefault();
             }
             if(isMoving) {
                 var x = e.touches[0].pageX;
                 var y = e.touches[0].pageY;
                 var dx = startX - x;
                 var dy = startY - y;
                 //Prevent diagonal firings
                 //if(Math.abs(dx) >= config.min_move_x)
                 if(Math.abs(dx) >= config.min_move_x + (Math.abs(dy) * 1.5) )
                    {
                    cancelTouch();
                    if(dx > 0) {
                        config.wipeLeft();
                    }
                    else {
                        config.wipeRight();
                    }
                 }
                 else if(Math.abs(dy) >= config.min_move_y) {
                        cancelTouch();
                        /*if(dy > 0) {
                            config.wipeDown();
                        }
                        else {
                            config.wipeUp();
                        }*/
                     }
                
             }
         }
         
         function onTouchStart(e)
         {
             if (e.touches.length == 1) {
                 startX = e.touches[0].pageX;
                 startY = e.touches[0].pageY;
                 isMoving = true;
                 this.addEventListener('touchmove', onTouchMove, false);
             }
         }
         if ('ontouchstart' in document.documentElement) {
             this.addEventListener('touchstart', onTouchStart, false);
         }
     });
 
     return this;
   };
 
 })(jQuery);


/* **********************************************
     Begin togglemenu.js
********************************************** */

//when minified it loses the semicolons and breaks for iphone
function menuopen() {
    $(document.body).addClass('menu-on');
}

function menuclose() {
     $(document.body).removeClass('menu-on');
}

/* **********************************************
     Begin togglefollow.js
********************************************** */

//when minified it loses the semicolons and breaks for iphone
function followopen() {
    $(document.body).toggleClass('follow-on');
    $(document.body).removeClass('share-on');
}

function followclose() {
     $(document.body).removeClass('follow-on');
}

/* **********************************************
     Begin toggleshare.js
********************************************** */

//when minified it loses the semicolons and breaks for iphone
function shareopen() {
    $(document.body).toggleClass('share-on');
    $(document.body).removeClass('follow-on');
}

function socialclose() {
    $(document.body).removeClass('follow-on');
    $(document.body).removeClass('share-on');
    
}

/* **********************************************
     Begin menu-click.js
********************************************** */

$('.menu-open').click(
    function () {
        //"use strict";
        menuopen();
    }
);

$('.menu-close').click(
    function () {
        //"use strict";
        menuclose();
    }
);


/* **********************************************
     Begin follow-click.js
********************************************** */

$('.follow-open').click(
    function () {
        //"use strict";
        followopen();
    }
);

/* **********************************************
     Begin share-click.js
********************************************** */

$('.share-open').click(
    function () {
        //"use strict";
        shareopen();
    }
);

$('.social-close').click(
    function () {
        //"use strict";
        socialclose();
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
 
 preventDefaultEvents: false
  });

/* **********************************************
     Begin footer.js
********************************************** */

//combined files for codekit
//@codekit-prepend "/touchwipe/touchwipe.settings.js"