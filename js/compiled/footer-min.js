
//for iOS devices, hide social when zoomed in
var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
function socialstatus() {
  //if zoomed in >10%
  if( document.documentElement.clientWidth <= window.innerWidth * 1.1) {
      $('.social').show();
  }else{
      $('.social').hide();
  }
}
function gest(e) {
  if ( e.type == 'touchend' ) {
    socialstatus();
  }
}
if(iOS) {
  window.addEventListener('touchstart',  gest, false);
  window.addEventListener('touchend',    gest, false);
  window.addEventListener('touchmove', gest, false);
  gest(e);
}


//when minified it loses the semicolons and breaks for iphone
function followopen() {
    $(document.body).toggleClass('follow-on');
    $(document.body).removeClass('share-on');
}

function followclose() {
     $(document.body).removeClass('follow-on');
}

//when minified it loses the semicolons and breaks for iphone
function shareopen() {
    $(document.body).toggleClass('share-on');
    $(document.body).removeClass('follow-on');
}

function socialclose() {
    $(document.body).removeClass('follow-on');
    $(document.body).removeClass('share-on');   
}

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


$('.follow-open').click(
    function () {
        //"use strict";
        followopen();
    }
);

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

//when minified it loses the semicolons and breaks for iphone
function menuopen() {
    $(document.body).addClass('menu-on');
}

function menuclose() {
     $(document.body).removeClass('menu-on');
}

// @codekit-prepend "togglefollow.js"; 
// @codekit-prepend "toggleshare.js"; 
// @codekit-prepend "menu-click.js"; 
// @codekit-prepend "follow-click.js"; 
// @codekit-prepend "share-click.js"; 
// @codekit-prepend "togglemenu.js"; 
// @codekit-append "hide-social.js"; 


//when an input is focused, add class social-off
$( "input" ).focus(function() {
	$(document.body).addClass('social-off');
});
//when a textarea is focused, add class social-off
$( "textarea" ).focus(function() {
	$(document.body).addClass('social-off');
});
//when a select is focused, add class social-off
$( "select" ).focus(function() {
	$(document.body).addClass('social-off');
});

//when an input is stop being focused, remove class social-off
$( "input" ).focusout(function() {
	$(document.body).removeClass('social-off');
});
//when a textarea is stop being focused, remove class social-off
$( "textarea" ).focusout(function() {
	$(document.body).removeClass('social-off');
});
//when a select is stop being focused, remove class social-off
$( "select" ).focusout(function() {
	$(document.body).removeClass('social-off');
});


