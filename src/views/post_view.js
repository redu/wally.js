(function(Wally){
  Wally.PostView = Ember.View.extend({
    templateName: 'post',
    classNameBindings: ['isVisible:visible:hidden'],

    isVisible: function(){
      if(this.get('content.id')){
        return true;
      } else {
        return false;
      }
    }.property("content.id"),
  })
})(Redu.Wally);
