// Handlebars Helpers
Handlebars.registerHelper('contextUrl', function(post, cont, linkName, options){
  var postObject = Ember.Handlebars.getPath(this, post, options);
  var contextObject = Ember.Handlebars.getPath(this, cont, options);
  var link = postObject.contextLink(contextObject, linkName);
  return link;
});

Handlebars.registerHelper('datetime', function(date, options){
  var dateObj = Ember.Handlebars.getPath(this, date, options);

  var month = dateObj.getUTCMonth();
  var months = ["", "Jan", "Fev", "Mar", "Abr", "Jun", "Jul", "Ago", "Set",
  "Out", "Nov", "Dez"]

  var formatedDate = dateObj.getUTCDate() + " " + months[month] + " " +
      dateObj.getUTCFullYear() + " às " + dateObj.getUTCHours() + ":" +
      dateObj.getUTCMinutes();

  return new Handlebars.SafeString('<time class="date" datetime="' +
      dateObj.toISOString() + '">' + formatedDate + '</time>');
});
