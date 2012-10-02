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
    });
  }
})(Redu.Wally);
