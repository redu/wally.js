Redu = {}
Redu.Wally = Ember.Application.create({});
store = null;

//DS.RESTAdapter.reopen({
//  buildURL: function(record, suffix) {
//    var url = ["http://wally.redu.com.br"];
//
//    Ember.assert("Namespace URL (" + this.namespace + ") must not start with slash", !this.namespace || this.namespace.toString().charAt(0) !== "/");
//    Ember.assert("Record URL (" + record + ") must not start with slash", !record || record.toString().charAt(0) !== "/");
//    Ember.assert("URL suffix (" + suffix + ") must not start with slash", !suffix || suffix.toString().charAt(0) !== "/");
//
//    if (this.namespace !== undefined) {
//      url.push(this.namespace);
//    }
//
//    url.push(this.pluralize(record));
//    if (suffix !== undefined) {
//      url.push(suffix);
//    }
//
//    return url.join("/");
//  }
//});

function resetStore(){
  store = DS.Store.create({
    revision: 4,
    //adapter: DS.RESTAdapter.create({ bulkCommit: false })
  });
}
