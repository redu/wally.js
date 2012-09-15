(function(Wally){
  describe('Post', function(){
    var post;

    beforeEach(function(){
      store.load(Wally.Post, 1, { id: 1 });
      post = store.find(Wally.Post, 1);
    });

    afterEach(function(){
      post = null;
      resetStore();
    });

    it('extends Entry', function(){
      Wally.Entry.detect(Wally.Post).should.be.true;
    })

    describe('Relationships', function(){
      describe('belongsTo a Wall', function(){
        it('responds to wall', function(){
          expect(post.get('wall')).to.not.be.undefined;
        });

        it('wall is of type Wall', function(){
          Wally.Post.typeForAssociation('wall').toString().should.
              equal('.Wall');
        });
      });

      describe('hasMany Answers', function(){
        it('responds to answers', function(){
          expect(post.get('answers')).to.not.be.undefined;
        });

        it('answers is of type Answers', function(){
          Wally.Post.typeForAssociation('answers').toString().should.
              equal('.Answer');
        });
      });
    });

    describe('Properties', function(){
      describe('has a property target', function(){
        it('responds to target', function(){
          expect(post.get('target')).not.to.be.undefined;
        });

        it('target is of type Object', function(){
          Ember.typeOf(post.get('target')).should.equal('object');
        });
      });

      describe('has a property contexts', function(){
        it('respond to contexts', function(){
          expect(post.get('contexts')).not.to.be.undefined;
        });

        it('contexts is an Ember array', function(){
          Ember.isArray(post.get('contexts')).should.be.true;
        });
      });

      describe('has a property action', function(){
        it('respond to action', function(){
          expect(post.get('action')).to.not.be.undefined;
        });

        it('action is a String', function(){
          post.set('action', 'comment');
          (typeof post.get('action')).should.equal('string');
        });
      });
    });
  });
})(Redu.Wally)
