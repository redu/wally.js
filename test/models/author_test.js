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

        it('links is an Object', function(){
          (typeof author.get('links')).should.equal('object');
        });
      });

      describe('has a property thumbnails', function(){
        it('respond to thumbnais', function(){
          expect(author.get('thumbnails')).to.not.be.undefined;
        });

        it('thumbnails is an Object', function(){
          (typeof author.get('thumbnails')).should.equal('object');
        });
      });

      describe('has a property role', function(){
        it('responds to role', function(){
          expect(author.get('role')).to.not.be.undefined;
        });

        it('role is of type Object', function(){
          (typeof author.get('role')).should.equal('object');
        });
      });
    })

    describe('ComputedProperties', function(){
      describe('has a computed property thumbnail32Link', function(){
        beforeEach(function(){
          author.set('thumbnails', [
            { href: 'http://s3.amazonaws.com/redu_uploads/users/avatars/158/thumb_32/Tiago%203x4.jpg?1321660982',
              size: '32x32' }
          ]);
        });

        afterEach(function(){
          author.set('thumbnails', null);
        });

        it('respond to thumbnail32Link', function(){
          expect(author.get('thumbnail32Link')).to.not.be.undefined;
        });

        it('returns the thumbnail of size 32 link', function(){
          author.get('thumbnail32Link').should.equal('http://s3.amazonaws.com/redu_uploads/users/avatars/158/thumb_32/Tiago%203x4.jpg?1321660982');
        });
      });

      describe('has a computed property selfPublicLink', function(){
        beforeEach(function(){
          author.set('links', [
            { rel: "public_self", href: "http://redu.com.br/pessoas/guiocavalcanti" },
            { rel: "self", href: "http://redu.com.br/api/users/guiocavalcanti" }
          ]);
        });

        afterEach(function(){
          author.set('links', null);
        });

        it('respond to selfPublicLink', function(){
          expect(author.get('selfPublicLink')).to.not.be.undefined;
        });

        it('returns the author self pulic link', function(){
          author.get('selfPublicLink').should.
              equal('http://redu.com.br/pessoas/guiocavalcanti');
        });
      });
    });
  })
})(Redu.Wally);
