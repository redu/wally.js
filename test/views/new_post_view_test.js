(function(Wally){
  describe('NewPostView', function(){
    var view;

    beforeEach(function(){
      view = Wally.NewPostView.create();
    });

    afterEach(function(){
      view = null;
      resetStore();
    });

    it("has a template named 'new_post'", function(){
      view.get('templateName').should.equal('new_post');
    })

    it("has a tag named 'form'", function(){
      view.get('tagName').should.equal('form');
    })
  });
})(Redu.Wally);
