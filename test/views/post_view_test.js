(function(Wally){
  describe('PostView', function(){
    var view;

    beforeEach(function(){
      view = Wally.PostView.create();
    });

    afterEach(function(){
      view = null;
      resetStore();
    });

    it("has a template named 'post'", function(){
      view.get('templateName').should.equal('post');
    })

    describe('classNameBindings', function(){
      describe('isVisible', function(){
        it('returns true if content is saved', function(){
          store.load(Wally.Post, 1, { id: 1 });
          view.set('content', store.find(Wally.Post, 1));
          view.get('isVisible').should.equal(true);
        });

        it('returns false if content was not saved yet', function(){
          view.set('content', Wally.Post.createRecord({
            content: { text: "Hello!" }
          }));
          view.get('isVisible').should.equal(false);
        });
      })
    });
  });
})(Redu.Wally);
