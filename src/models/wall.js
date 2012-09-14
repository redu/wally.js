Wall = DS.Model.extend({
  saco : DS.attr('string'),
  posts : DS.hasMany('Wally.Post')
});
