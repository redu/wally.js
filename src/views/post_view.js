(function(Wally){
  Wally.PostView = Ember.View.extend({
    templateName: 'post',
    tagName: 'li',
    classNames: 'status',
    classNameBindings: ['isVisible:visible:hidden'],

    isVisible: function(){
      if(this.get('content.id')){
        this.manipulateDOM();
        return true;
      } else {
        return false;
      }
    }.property("content.id"),

    destroyRecord: function(){
      this.get('controller').destroyRecord(this.get('content'));
      this.destroy();
    },

    // Apply DOM manipulations. Executed when the view is visible.
    manipulateDOM: function(){
      Ember.run.next(this, function(){
        // Turns time tag in a user friendly way
        this.$("time.date").timeago();

        this.$().compactResponses({ maxResponses : 2 })
      });
    }
  })
})(Redu.Wally);
