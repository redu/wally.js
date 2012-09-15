(function(Wally){
  Wally.Answer = Wally.Entry.extend({
    post: DS.belongsTo('Redu.Wally.Post'),
  });
})(Redu.Wally)
