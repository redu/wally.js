(function(Wally){
  Wally.Author = DS.Model.extend({
    primaryKey: 'user_id',
    name: DS.attr('string'),
    links: DS.attr('object'),
    thumbnails: DS.attr('object'),
    role: DS.attr('object'),

    thumbnail32Link: function(){
      var link = this.get('thumbnails').reduce(function(acc, item){
        if((acc == undefined) && (item['size'] == "32x32")) {
          acc = item;
        }

        return acc
      }, undefined);

      if(link) { return link['href']; }
    }.property('thumbnails'),

    selfPublicLink: function(){
      var link = this.get('links').reduce(function(acc, item){
        if((acc == undefined) && (item['rel'] == "public_self")) {
          acc = item;
        }

        return acc
      }, undefined);

      if(link) { return link['href']; }
    }.property('links'),
  });
})(Redu.Wally);
