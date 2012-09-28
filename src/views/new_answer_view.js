(function(Wally){
  Wally.NewAnswerView = Ember.View.extend({
    templateName: 'new_answer',
    tagName: 'form',

    submit: function(event){
      event.preventDefault();
      var value = this.$('textarea').val();
      var content = { text: value, post : this.get("parentView.content") };

      var controller = this.get('controller');
      controller.createAnswer(content);
      this.$('textarea').val("");
    }
  });
})(Redu.Wally);
