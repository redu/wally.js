(function(Wally){
  describe('Author', function(){
    var author;

    beforeEach(function(){
      store.load(Wally.Author, 1, { id: 1 });
      author = store.find(Wally.Author, 1);
    });

    afterEach(function(){
      author = null;
      resetStore();
    });

    describe('Properties', function(){
      describe('has a property name', function(){
        it('responds to name', function(){
          expect(author.get('name')).to.not.be.undefined;
        });

        it('name is a string', function(){
          author.set('name', 'MyName');
          (typeof author.get('name')).should.equal('string');
        });
      });

      describe('has a property links', function(){
        it('respond to links', function(){
          expect(author.get('links')).to.not.be.undefined;
        });

        it('links is an Ember array', function(){
          Ember.isArray(author.get('links')).should.be.true;
        });
      });

      describe('has a property thumbnails', function(){
        it('respond to thumbnais', function(){
          expect(author.get('thumbnails')).to.not.be.undefined;
        });

        it('thumbnails is an Ember array', function(){
          Ember.isArray(author.get('thumbnails')).should.be.true;
        });
      });

      describe('has a property role', function(){
        it('responds to role', function(){
          expect(author.get('role')).to.not.be.undefined;
        });

        it('role is of type Object', function(){
          Ember.typeOf(author.get('role')).should.equal('object');
        });
      });
    })
  })
})(Redu.Wally);
