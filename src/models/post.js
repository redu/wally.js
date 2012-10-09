(function(Wally){
  Wally.Post = Wally.Entry.extend({
    wall: DS.belongsTo('Redu.Wally.Wall'),
    answers: DS.hasMany('Redu.Wally.Answer', { embedded: true }),
    target: DS.attr('object'),
    contexts: DS.attr('object'), // array
    action: DS.attr('string'),

    targetSelfPublicLink: function(){
      var link = this.get('target')['links'].reduce(function(acc, item){
        if((acc == undefined) && (item['rel'] == "self_public")) {
          acc = item;
        }

        return acc
      }, undefined);

      if(link) { return link['href']; }
    }.property('target'),

    readableAction: function(){
      var action;

      switch(this.get('action')){
        case "comment":
          action = "comentou";
          break;
      };

      switch(this.get('target')['kind']){
        case "space":
          action += " no mural da disciplina";
          break;
        case "lecture":
          action += " no mural da aula";
          break;
        case "user":
          if (this.get('target.id') == this.get('author.id')){
            action += " no";
          } else {
            action += " no mural de";
          }
          break;
      };

      return action;
    }.property('action', 'target'),

    readableTarget: function(){
      var target = this.get('target');
      var targetName;

      if (target['kind'] == "user" && (target['id'] == this.get('author.id'))){
        targetName = "seu próprio mural";
      } else {
        targetName = target["name"];
      }

      return targetName;
    }.property('target'),

    readableContext: function(){
      var context = "";
      this.get('contexts').forEach(function(item){
        if(this.indexOf(item) != 0){
          context += " > ";
        }
        context += item.name;
      }, this.get('contexts'));

      return context;
    }.property('contexts'),

    contextLink: function(context, linkName) {
      var link = context['links'].reduce(function(acc, item){
        if((acc == undefined) && (item['rel'] == linkName)) {
          acc = item;
        }

        return acc
      }, undefined);

      if(link) { return link['href']; }
    }
  });
})(Redu.Wally);
