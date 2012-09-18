(function(Wally){
  describe('Wall', function(){
    var wall;

    beforeEach(function(){
      resetStore();
      store.load(Wally.Wall, 1, { id: 1 });
      wall = store.find(Wally.Wall, 1);
    });

    afterEach(function(){
      wall = null;
      resetStore();
    });

    describe('PrimaryKey', function(){
      it('has resource_id as primaryKey', function(){
        wall.primaryKey.should.equal('resource_id');
      })

      it('resource_id is an String', function(){
        wall.set('resource_id', 'service:entity_23');
        (typeof wall.get('resource_id')).should.equal('string');
      });
    });

    describe('Relationships', function(){
      describe('hasMany Posts', function(){
        it('responds to posts', function(){
          expect(wall.get('posts')).to.not.be.undefined;
        });

        it('posts is of type Post', function(){
          Wally.Wall.typeForAssociation('posts').toString().should.
              equal('.Post');
        });

        it('posts is embedded (should not do a request)', function(){
          resetStore();

          store.load(Wally.Wall, 1, {
            id: 1,
            posts: [ { id: 1, action: "comment" } ]
          });
          wall = store.find(Wally.Wall, 1);

          var getPosts = function(){
            wall.get('posts');
          };
          expect(getPosts).to.not.throw('Error');
        });
      });
    });

    describe('Properties', function(){
      describe('has a property links', function(){
        it('respond to links', function(){
          expect(wall.get('links')).to.not.be.undefined;
        });

        it('links is an Ember array', function(){
          Ember.isArray(wall.get('links')).should.be.true;
        });
      });
    });
  });
})(Redu.Wally);
