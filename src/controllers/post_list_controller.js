(function(Wally){
  Wally.PostListController = Ember.Controller.extend({
    destroyRecord: function(record){
      record.deleteRecord();
      Wally.get('store').commit();
    },

    createAnswer: function(content){
      this.transaction = Wally.get('store').transaction();
      var answer = this.transaction.createRecord(Wally.Answer, {
        author: Wally.user,
        post: content.post,
        content: { text : content.text }
      });
      content.post.get('answers').pushObject(answer);
      this.transaction.commit();
    }
  });
})(Redu.Wally);
