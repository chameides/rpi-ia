//when minified it loses the semicolons and breaks for iphone
function followopen() {
    $(document.body).toggleClass('follow-on');
    $(document.body).removeClass('share-on');
}

function followclose() {
     $(document.body).removeClass('follow-on');
}