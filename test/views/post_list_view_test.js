(function(Wally){
  describe('PostListView', function(){
    var view;

    beforeEach(function(){
      view = Wally.PostListView.create();
    });

    afterEach(function(){
      view = null;
      resetStore();
    });

    it("has a template named 'post_list'", function(){
      view.get('templateName').should.equal('post_list');
    })
  });
})(Redu.Wally);
