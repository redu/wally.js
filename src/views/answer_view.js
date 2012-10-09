(function(Wally){
  Wally.AnswerView = Ember.View.extend({
    templateName: 'answer',
    tagName: 'li',
    classNameBindings: ['isVisible:visible:hidden'],
    classNames: ['status-content', 'response'],

    isVisible: function(){
      if(this.get('content.id')){
        // Turns time tag in a user friendly way
        Ember.run.next(this, function(){ this.$("time.date").timeago();})
        return true;
      } else {
        return false;
      }
    }.property("content.id"),

    destroyRecord: function(){
      this.get('controller').destroyRecord(this.get('content'));
      this.destroy();
    }
  });
})(Redu.Wally);
