(function(Wally){
  Wally.PostListController = Ember.Controller.extend({
    destroyRecord: function(record){
      record.deleteRecord();
      Wally.get('store').commit();
    },

    bindCreatedAnswerToView: function(post, view){
      var transaction = Wally.get('store').transaction();
      var answer = transaction.createRecord(Wally.Answer, {
        author: Wally.user,
        post: post
      });

      view.set('content', answer);
      view.set('transaction', transaction);
    },

    // Needs the view because of the transaction is attached to it
    saveRecord: function(answer, view){
      var isSaved;

      if(answer.isValid()){
        answer.get('post.answers').pushObject(answer);
        view.get('transaction').commit();

        isSaved = true;
      } else {
        isSaved = false;
      }

      return isSaved;
    }
  });
})(Redu.Wally);
