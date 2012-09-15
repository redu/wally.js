(function(Wally){
  Wally.Post = Wally.Entry.extend({
    wall: DS.belongsTo('Redu.Wally.Wall'),
    answers: DS.hasMany('Redu.Wally.Answer'),
    target: null,
    contexts: null,
    action: DS.attr('string'),

    init: function(){
      this._super();
      this.target = {};
      this.contexts = Ember.A();
    }
  });
})(Redu.Wally);
