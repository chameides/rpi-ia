//toggles fly out menu on small screen


function menuopen() {
$('body').addClass('menu-on');
}

function menuclose() {
$('body').removeClass('menu-on');
}

$('.menu-open').click(
    function () {
        menuopen();
    }
);

$('.menu-close').click(
    function () {
        menuclose();
    }
);