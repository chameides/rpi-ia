//when an input is focused, add class social-off
$( "input" ).focus(function() {
	$(document.body).toggleClass('social-off');
});
//when a textarea is focused, add class social-off
$( "textarea" ).focus(function() {
	$(document.body).toggleClass('social-off');
});
//when a select is focused, add class social-off
$( "select" ).focus(function() {
	$(document.body).toggleClass('social-off');
});



//when an input is stop being focused, remove class social-off
$( "input" ).focusout(function() {
	$(document.body).toggleClass('social-off');
});
//when a textarea is stop being focused, remove class social-off
$( "textarea" ).focusout(function() {
	$(document.body).toggleClass('social-off');
});
//when a select is stop being focused, remove class social-off
$( "select" ).focusout(function() {
	$(document.body).toggleClass('social-off');
});
