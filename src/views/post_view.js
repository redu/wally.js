(function(Wally){
  Wally.PostView = Ember.View.extend({
    templateName: 'post',
    tagName: 'li',
    classNames: 'status',
    classNameBindings: ['isVisible:visible:hidden'],

    isVisible: function(){
      if(this.get('content.id')){
        this.applyTimeago();
        return true;
      } else {
        return false;
      }
    }.property("content.id"),

    destroyRecord: function(){
      this.get('controller').destroyRecord(this.get('content'));
      this.destroy();
    },

    // Turns time tag in a user friendly way
    applyTimeago: function(){
      Ember.run.next(this, function(){ this.$("time.date").timeago();})
    }
  })
})(Redu.Wally);
