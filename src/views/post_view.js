(function(Wally){
  Wally.PostView = Ember.View.extend({
    templateName: 'post',
    tagName: 'li',
    classNames: 'status',
    classNameBindings: ['isVisible:visible:hidden', 'hasTarget'],

    isVisible: function(){
      if(this.get('content.id')){
        this.manipulateDOM();
        return true;
      } else {
        return false;
      }
    }.property("content.id"),

    hasTarget: function(){
      if(this.get('content.target')){
        return 'with-target';
      }
    }.property("content.target"),

    destroyRecord: function(){
      var confirmation = confirm("Ao apagar esta postagem, você também removerá todas as respostas. Deseja continuar?");

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

        this.$().compactResponses({ maxResponses : 2 })
        this.$().hideLastHr();
      });
    }
  })
})(Redu.Wally);
