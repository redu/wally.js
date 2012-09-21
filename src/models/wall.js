(function(Wally){
  Wally.Wall = DS.Model.extend({
    primaryKey: 'resource_id',
    posts: DS.hasMany('Redu.Wally.Post', { embedded: true }),
    links: DS.attr('object'), // array
  });
})(Redu.Wally);
