(function(Wally){
  describe('NewPostView', function(){
    var view;

    beforeEach(function(){
      view = Wally.NewPostView.create();
    });

    afterEach(function(){
      view = null;
    });

    it("has a template named 'new_post'", function(){
      view.get('templateName').should.equal('new_post');
    });

    it("has a tag named 'form'", function(){
      view.get('tagName').should.equal('form');
    });

    describe('ComputedProperties', function(){
      describe('hasError', function(){
        var post;

        beforeEach(function(){
          store.load(Wally.Post, 1, { id: 1 });
          post = store.find(Wally.Post, 1);
          // Mocking the controller
          view.set('controller', {});
          view.set('controller.content', post);
        });

        afterEach(function(){
          view.set('controller', null);
        });

        describe('when the post has errors', function(){
          beforeEach(function(){
            post.isValid();
          });

          afterEach(function(){
            post.set('errors', null);
          });

          it('returns true', function(){
            expect(view.get('hasError')).to.be.true;
          });
        });

        describe('when the post does not have errors', function(){
          it('returns falsy', function(){
            expect(view.get('hasError')).not.to.be.true;
          });
        });
      });
    });
  });
})(Redu.Wally);
