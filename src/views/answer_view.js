(function(Wally){
  Wally.AnswerView = Ember.View.extend({
    templateName: 'answer',
    tagName: 'li',
    classNameBindings: ['isVisible:visible:hidden'],
    classNames: ['status-content', 'response'],

    isVisible: function(){
      if(this.get('content.id')){
        this.manipulateDOM();
        return true;
      } else {
        return false;
      }
    }.property("content.id"),

    destroyRecord: function(){
      var confirmation = confirm("Esta ação irá apagar sua resposta. Deseja continuar?");

      if(confirmation){
        this.get('controller').destroyRecord(this.get('content'));
        this.destroy();
      }
    },

    // Apply DOM manipulations. Executed when the view is visible.
    manipulateDOM: function(){
      Ember.run.next(this, function(){
        // Turns time tag in a user friendly way
        this.$("time.date").timeago();
        this.$().parent().refreshQttReponses();
        if (this.get('content.post.answers.length') == 1) {
          this.$().showNewAnswer();
        }
      });
    }
  });
})(Redu.Wally);
