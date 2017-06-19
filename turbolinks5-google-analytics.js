
// Put this code snippet in your application.js %>

// implementation on google analytics for turbolinks5
document.addEventListener('turbolinks:load', function(event) {
  if (typeof ga === 'function') {
    ga('set', 'location', event.data.url);
    ga('send', 'pageview');
  }
});
