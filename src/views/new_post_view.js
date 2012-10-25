(function(Wally){
  Wally.NewPostView = Ember.View.extend({
    templateName: 'new_post',
    tagName: 'form',
    classNames: 'create-status',

    hasError: function(){
      if(this.get('controller.content.errors')){
        return true;
      }
    }.property("controller.content.errors"),

    didInsertElement: function(){
      this.$(".status-buttons").hide();
    },

    submit: function(event){
      event.preventDefault();

      // Updates the post content with the textarea's value
      var value = this.$('textarea').val();
      this.get('controller.content').set('content', { text: value });

      if(this.get('controller').saveRecord()){
        this.$('textarea').val("");
        this.$("textarea").trigger('autosize');
      }
    }
  });
})(Redu.Wally);
