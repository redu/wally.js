(function(Wally){
  Wally.Entry = DS.Model.extend({
    author: DS.belongsTo('Redu.Wally.Author'), //hasOne
    content: null,
    links: null,
    rule: null,
    created_at: DS.attr('date'),

    init: function(){
      this._super();
      this.content = {};
      this.links = Ember.A();
      this.rule = {};
    }
  });
})(Redu.Wally);
