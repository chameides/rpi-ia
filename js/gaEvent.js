//Fires an event in google analytics
function gaEvent(category, action, label) {    
  ga('send', {
    'hitType': 'event',          // Required.
    'eventCategory': category,   // Required.
    'eventAction': action,      // Required.
    'eventLabel': label,
    //'eventValue': 4
  });
}