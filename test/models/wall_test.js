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

    describe('Relationships', function(){
      describe('hasMany Entries', function(){
        it('responds to entry', function(){
          expect(wall.get('entries')).to.not.be.undefined;
        });

        it('entries is of type Post', function(){
          Wally.Wall.typeForAssociation('entries').toString().should.
              equal('.Entry');
        });
      });
    });

    describe('Properties', function(){
      describe('has a property resource_id', function(){
        it('responds to resource_id', function(){
          expect(wall.get('resource_id')).to.not.be.undefined;
        });

        it('resource_id is an String', function(){
          wall.set('resource_id', 'service:entity_23');
          (typeof wall.get('resource_id')).should.equal('string');
        });
      });

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
