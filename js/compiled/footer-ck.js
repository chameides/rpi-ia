//when minified it loses the semicolons and breaks for iphone
function menuopen(){$(document.body).addClass("menu-on")}function menuclose(){$(document.body).removeClass("menu-on")}function followopen(){$(document.body).toggleClass("follow-on");$(document.body).removeClass("share-on")}function followclose(){$(document.body).removeClass("follow-on")}function shareopen(){$(document.body).toggleClass("share-on");$(document.body).removeClass("follow-on")}function socialclose(){$(document.body).removeClass("follow-on");$(document.body).removeClass("share-on")}$(".menu-open").click(function(){menuopen()});$(".menu-close").click(function(){menuclose()});$(".follow-open").click(function(){followopen()});$(".share-open").click(function(){shareopen()});$(".social-close").click(function(){socialclose()});