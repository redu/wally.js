(function(Wally){
  Wally.Router = Ember.Router.extend({
    location: 'hash',

    root: Ember.Route.extend({
      wall: Ember.Route.extend({
        route: '/walls/:wall_id',
        connectOutlets: function(router, wall){
          router.get('applicationController').connectOutlet('wall', wall.get('posts'));
          router.get('wallController').connectOutlet('newPost', {});
          router.get('newPostController').enterNew(wall);
        }
      }),
    }),
  });
})(Redu.Wally);
