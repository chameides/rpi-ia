jQuery(document).ready(function($){function o(){$(document.body).toggleClass("follow-on"),$(document.body).removeClass("share-on")}function n(){$(document.body).removeClass("follow-on")}function c(){$(document.body).toggleClass("share-on"),$(document.body).removeClass("follow-on")}function t(){$(document.body).removeClass("follow-on"),$(document.body).removeClass("share-on")}function s(){$(document.body).addClass("menu-on")}function d(){$(document.body).removeClass("menu-on")}function u(){document.documentElement.clientWidth<=1.1*window.innerWidth?$(".social").show():$(".social").hide()}function i(o){"touchend"==o.type&&u()}$(".menu-open").click(function(){s()}),$(".menu-close").click(function(){d()}),$(".follow-open").click(function(){o()}),$(".share-open").click(function(){c()}),$(".social-close").click(function(){t()}),$("input").focus(function(){$(document.body).addClass("social-off")}),$("textarea").focus(function(){$(document.body).addClass("social-off")}),$("select").focus(function(){$(document.body).addClass("social-off")}),$("input").focusout(function(){$(document.body).removeClass("social-off")}),$("textarea").focusout(function(){$(document.body).removeClass("social-off")}),$("select").focusout(function(){$(document.body).removeClass("social-off")});var l=/(iPad|iPhone|iPod)/g.test(navigator.userAgent);l&&(window.addEventListener("touchstart",i,!1),window.addEventListener("touchend",i,!1),window.addEventListener("touchmove",i,!1),i(e))});