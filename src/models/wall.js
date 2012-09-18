(function(Wally){
  Wally.Wall = DS.Model.extend({
    primaryKey: 'resource_id',
    posts: DS.hasMany('Redu.Wally.Post', { embedded: true }),
    links: null,

    init: function(){
      this._super();
      this.links = Ember.A();
    }
  });
})(Redu.Wally);
