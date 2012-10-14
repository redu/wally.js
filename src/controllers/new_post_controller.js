(function(Wally){
  Wally.NewPostController = Ember.Controller.extend({
    content: null,

    // Prepares the new post for view
    enterNew: function(wall){
      this.wall = wall;

      if (this.wall.get('isLoaded')){
        this.bindCreatedPost();
      } else {
        this.wall.addObserver('isLoaded', this, 'bindCreatedPost');
      }
    },

    // Sends the modification to the server
    saveRecord: function() {
      this.transaction.commit();
      this.transaction = null;
      // Prepare a new post for view
      this.enterNew(this.wall)
    },

    // Creates a new post and bind it to the view
    bindCreatedPost: function(){
      this.transaction = Wally.get('store').transaction();
      var post = this.transaction.createRecord(Wally.Post, {
        author: Wally.user,
        wall: this.wall,
        target: Wally.target,
        contexts: Wally.contexts,
        action: 'comment'
      })
      this.wall.get('posts').pushObject(post);
      this.set('content', post);
    }
  });
})(Redu.Wally);
