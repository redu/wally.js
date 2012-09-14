Redu = {}
Redu.Wally = Ember.Application.create({});
Redu.Wally.store = DS.Store.create({
    revision: 4,
    adapter: DS.RESTAdapter.create()
});
