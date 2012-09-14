(function(Wally){
  Wally.Wall = DS.Model.extend({
  saco : DS.attr('string'),
  posts : DS.hasMany('Wally.Post')
});
})(Redu.Wally);
