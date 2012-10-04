(function(Wally){
  Wally.PostView = Ember.View.extend({
    templateName: 'post',
    classNameBindings: ['isVisible:visible:hidden'],

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
    },
  })
})(Redu.Wally);
