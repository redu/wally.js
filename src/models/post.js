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

    contextLink : function(context, linkName) {
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
