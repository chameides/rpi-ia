//hide social media
$( "input" ).focus(function() {
	$(document.body).toggleClass('social-off');
});

$( "textarea" ).focus(function() {
	$(document.body).toggleClass('social-off');
});

$( "select" ).focus(function() {
	$(document.body).toggleClass('social-off');
});


//return

$( "input" ).focusout(function() {
	$(document.body).toggleClass('social-off');
});

$( "textarea" ).focusout(function() {
	$(document.body).toggleClass('social-off');
});

$( "select" ).focusout(function() {
	$(document.body).toggleClass('social-off');
});



//
