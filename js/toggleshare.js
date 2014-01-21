//when minified it loses the semicolons and breaks for iphone
function shareopen() {
    $(document.body).toggleClass('share-on');
    $(document.body).removeClass('follow-on');
}

function socialclose() {
    $(document.body).removeClass('follow-on');
    $(document.body).removeClass('share-on');
    
}