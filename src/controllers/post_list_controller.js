(function(Wally){
  Wally.PostListController = Ember.Controller.extend({
    destroyRecord: function(post){
      post.deleteRecord();
      Wally.get('store').commit();
    }
  });
})(Redu.Wally);
