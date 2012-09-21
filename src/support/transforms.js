// Datatype for JavaScript Objects
DS.attr.transforms.object = {
  from: function(serialized){
    return Ember.none(serialized) ? null : Object(serialized);
  },
  to: function(deserialized){
    return Ember.none(deserialized) ? null : Object(deserialized);
  },
};
