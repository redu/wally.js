(function(Wally){
  Wally.Entry = DS.Model.extend({
    author: DS.belongsTo('Redu.Wally.Author', { embedded: true }), //hasOne
    content: DS.attr('object'),
    links: DS.attr('object'), // array
    rule: DS.attr('object'),
    created_at: DS.attr('date'),
  });
})(Redu.Wally);
