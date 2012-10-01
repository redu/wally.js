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

Handlebars.registerHelper('readableAction', function(entry, options){
  var entryObj = Ember.Handlebars.getPath(this, entry, options);
  var action;

  switch(entryObj.get('action')){
    case "comment":
      action = "comentou";
      break;
  };

  switch(entryObj.get('target')['kind']){
    case "space":
      action += " no mural da disciplina";
      break;
    case "lecture":
      action += " no mural da aula";
      break;
    case "user":
      if (entryObj.get('target.id') == entryObj.get('author.id')){
        action += " no";
      } else {
        action += " no mural de";
      }
      break;
  };

  return action;
});

Handlebars.registerHelper('readableTarget', function(entry, options){
  var entryObj = Ember.Handlebars.getPath(this, entry, options);
  var target = entryObj.get('target');
  var targetName;

  if (target['kind'] == "user" && (target['id'] == entryObj.get('author.id'))){
    targetName = "seu próprio mural";
  } else {
    targetName = target["name"];
  }

  return targetName;
});
