Redu = {};
Redu.Wally = Ember.Application.create();

/** Initialize the WallyClient and gets the specified Wall
 *
 * opts
 *  A set of key/value pairs that configures the WallyClient.
 *
 *  token (String)
 *    The key used to get access on the Wally Server
 *  resourceId (String)
 *    Basically the Wall's owner
 *  rootElement (String) [optional]
 *    Where the WallyApp should be rendered. By default, the app is
 *    appended to the body.
 *  user (Object)
 *    The logged in user
 *  target (Object)
 *    Where the post will be posted
 *  context (Array) [optional]
 *    Like breadcrumbs, so the post will be contextualized
*/
Redu.WallyClient = function(opts){
  var options = opts;

  Redu.Wally.configAdapter({ token: opts.token });
  Redu.Wally.store = DS.Store.create({
    revision: 4,
    adapter: DS.RESTAdapter.create({})
  });

  Redu.Wally.store.load(Redu.Wally.Author, opts.user);
  Redu.Wally.user = Redu.Wally.Author.find(opts.user.user_id);
  Redu.Wally.target = opts.target;
  Redu.Wally.contexts = opts.context || [];

  if (options.rootElement) {
    Redu.Wally.set('rootElement', options.rootElement);
  }
  Redu.Wally.initialize();
  window.location.hash = '/walls/' + opts.resourceId;
};
