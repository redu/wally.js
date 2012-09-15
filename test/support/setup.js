Redu = {}
Redu.Wally = Ember.Application.create({});
store = null;

function resetStore(){
  store = DS.Store.create({
    revision: 4,
    //adapter: DS.RESTAdapter.create()
  });
}
