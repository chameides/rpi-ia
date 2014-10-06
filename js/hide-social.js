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