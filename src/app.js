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
 *  corsLinks (Boolean) [optional]
 *    Default is false.
 *    Indicates that the links should be opened in the app's parent.
 *    For example: If the app is inside an iframe and you need the links
 *    to be opened inside the browser instead of inside the iframe, set
 *    it to true.
 *  user (Object)
 *    The logged in user
 *  target (Object)
 *    Where the post will be posted
 *  context (Array) [optional]
 *    Like breadcrumbs, so the post will be contextualized
 *  config (Object)
 *    Specific configurations
 *
 *    showContexts (Boolean)
 *      Default is false.
 *      Specify if the contexts should be showed.
 *
*/
Redu.WallyClient = function(opts){
  var options = { corsLinks: false, config: { showContexts: false } }
  $.extend(true, options, opts)

  Redu.Wally.configAdapter({ token: opts.token });
  Redu.Wally.store = DS.Store.create({
    revision: 4,
    adapter: DS.RESTAdapter.create({})
  });

  Redu.Wally.store.load(Redu.Wally.Author, opts.user);
  Redu.Wally.user = Redu.Wally.Author.find(opts.user.user_id);
  Redu.Wally.target = opts.target;
  Redu.Wally.contexts = opts.contexts || [];
  if(typeof options.config.showContexts == "string"){
    Redu.Wally.showContexts = options.config.showContexts ==  "true" ? true : false;
  }else{
    Redu.Wally.showContexts = options.config.showContexts;
  }

  if(options.corsLinks){
    $('a').live('click', function(){
      var href = $(this).attr('href');
      if(href != null && href != '#'){
        window.parent.location.href = href;
      }
      return false;
    });
  }

  if (options.rootElement) {
    Redu.Wally.set('rootElement', options.rootElement);
  }
  window.location.hash = 'walls/' + opts.resourceId;
  Redu.Wally.initialize();
};
