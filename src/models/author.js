(function(Wally){
  Wally.Author = DS.Model.extend({
    name: DS.attr('string'),
    links: null,
    thumbnails: null,
    role: null,

    init: function(){
      this._super();
      this.links = Ember.A();
      this.thumbnails = Ember.A();
      this.role = {};
    }
  });
})(Redu.Wally);
