jQuery(document).ready(function() {

    function followopen() {
        jQuery(document.body).toggleClass("follow-on"), jQuery(document.body).removeClass("share-on")
    }

    function followclose() {
        jQuery(document.body).removeClass("follow-on")
    }

    function shareopen() {
        jQuery(document.body).toggleClass("share-on"), jQuery(document.body).removeClass("follow-on")
    }

    function socialclose() {
        jQuery(document.body).removeClass("follow-on"), jQuery(document.body).removeClass("share-on")
    }

    function menuopen() {
        jQuery(document.body).addClass("menu-on")
    }

    function menuclose() {
        jQuery(document.body).removeClass("menu-on")
    }

    function socialstatus() {
        document.documentElement.clientWidth <= 1.1 * window.innerWidth ? jQuery(".social").show() : jQuery(".social").hide()
    }

    function gest(o) {
        "touchend" == o.type && socialstatus()
    }
    jQuery(".menu-open").click(function() {
        menuopen()
    }), jQuery(".menu-close").click(function() {
        menuclose()
    }), jQuery(".follow-open").click(function() {
        followopen()
    }), jQuery(".share-open").click(function() {
        shareopen()
    }), jQuery(".social-close").click(function() {
        socialclose()
    }), jQuery("input").focus(function() {
        jQuery(document.body).addClass("social-off")
    }), jQuery("textarea").focus(function() {
        jQuery(document.body).addClass("social-off")
    }), jQuery("select").focus(function() {
        jQuery(document.body).addClass("social-off")
    }), jQuery("input").focusout(function() {
        jQuery(document.body).removeClass("social-off")
    }), jQuery("textarea").focusout(function() {
        jQuery(document.body).removeClass("social-off")
    }), jQuery("select").focusout(function() {
        jQuery(document.body).removeClass("social-off")
    });
    var iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
    if(iOS) {
		  window.addEventListener('touchstart',  gest, false);
		  window.addEventListener('touchend',    gest, false);
		  window.addEventListener('touchmove', gest, false);
		  gest(e);
}

});
