(function(Wally){
  Wally.AnswerView = Ember.View.extend({
    templateName: 'answer',

    destroyRecord: function(){
      this.get('controller').destroyRecord(this.get('content'));
      if (this.$()) {
        this.$().remove();
      }
    }
  })
})(Redu.Wally);
