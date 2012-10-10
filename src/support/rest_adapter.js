// Changes made on the REST Adapter
//
// Added Authorization key to ajax headers
(function(Wally){
  Wally.configAdapter = function(opts){
    options = opts;

    DS.RESTAdapter.reopen({
      ajax: function(url, type, hash) {
        hash.url = url;
        hash.type = type;
        hash.headers = { "Authorization" : "OAuth " + options['token'] };
        hash.dataType = 'json';
        hash.contentType = 'application/json; charset=utf-8';
        hash.context = this;

        if (hash.data && type !== 'GET') {
          hash.data = JSON.stringify(hash.data);
        }

        jQuery.ajax(hash);
      },

      buildURL: function(record, suffix) {
        var url = ["http://0.0.0.0:4567"];

        Ember.assert("Namespace URL (" + this.namespace + ") must not start with slash", !this.namespace || this.namespace.toString().charAt(0) !== "/");
        Ember.assert("Record URL (" + record + ") must not start with slash", !record || record.toString().charAt(0) !== "/");
        Ember.assert("URL suffix (" + suffix + ") must not start with slash", !suffix || suffix.toString().charAt(0) !== "/");

        if (this.namespace !== undefined) {
          url.push(this.namespace);
        }

        url.push(this.pluralize(record));
        if (suffix !== undefined) {
          url.push(suffix);
        }

        return url.join("/");
      }
    });
  }
})(Redu.Wally);
