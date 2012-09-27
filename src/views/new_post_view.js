(function(Wally){
  Wally.NewPostView = Ember.View.extend({
    templateName: 'new_post',
    tagName: 'form',

    submit: function(event){
      event.preventDefault();

      // Updates the post content with the textarea's value
      var value = this.$('textarea').val();
      this.get('controller.content').set('content', { text: value });

      this.get('controller').saveRecord();
      this.$('textarea').val("");
    }
  });
})(Redu.Wally);
