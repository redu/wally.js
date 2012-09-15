(function(Wally){
  Wally.Wall = DS.Model.extend({
    entries: DS.hasMany('Redu.Wally.Entry'),
    resource_id: DS.attr('string'),
    links: null,

    init: function(){
      this._super();
      this.links = Ember.A();
    }
  });
})(Redu.Wally);
