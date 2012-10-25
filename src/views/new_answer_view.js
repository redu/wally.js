(function(Wally){
  Wally.NewAnswerView = Ember.View.extend({
    templateName: 'new_answer',
    tagName: 'form',
    classNames: 'create-status',

    init: function(){
      this._super();
      this.prepareNewAnswer();
    },

    hasError: function(){
      if(this.get('content.errors')){
        return true;
      }
    }.property("content.errors"),

    submit: function(event){
      event.preventDefault();
      var value = this.$('textarea').val();
      this.get('content').set('content', { text: value });

      var controller = this.get('controller');
      if(controller.saveRecord(this.get('content'), this)){
        this.$('textarea').val("");

        this.prepareNewAnswer();
      }
    },

    prepareNewAnswer: function(){
      var post = this.get("parentView.content");
      this.get('controller').bindCreatedAnswerToView(post, this);
    }
  });
})(Redu.Wally);
