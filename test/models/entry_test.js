(function(Wally){
  describe('Entry', function(){
    var entry;

    beforeEach(function(){
      store.load(Wally.Entry, 1, { id: 1 });
      entry = store.find(Wally.Entry, 1);
    });

    afterEach(function(){
      entry = null;
      resetStore();
    });

    describe('Relationships', function(){
      describe('hasOne Author', function(){
        it('responds to author', function(){
          expect(entry.get('author')).to.not.be.undefined;
        });

        it('author is of type Author', function(){
          Wally.Entry.typeForAssociation('author').toString().should.
              equal('.Author');
        });
      });
    });

    describe('Properties', function(){
      describe('has a property content', function(){
        it('responds to content', function(){
          expect(entry.get('content')).not.to.be.undefined;
        });

        it('content is of type Object', function(){
          Ember.typeOf(entry.get('content')).should.equal('object');
        });
      });

      describe('has a property links', function(){
        it('respond to links', function(){
          expect(entry.get('links')).to.not.be.undefined;
        });

        it('links is an Ember array', function(){
          Ember.isArray(entry.get('links')).should.be.true;
        });
      });

      describe('has a property rule', function(){
        it('responds to rule', function(){
          expect(entry.get('rule')).not.to.be.undefined;
        });

        it('rule is of type Object', function(){
          Ember.typeOf(entry.get('rule')).should.equal('object');
        });
      });

      describe('has a property created_at', function(){
        // The default value of date is undefined,
        // se this is needed for the tests below.
        beforeEach(function(){
          var date = new Date("2011-02-06T08:50:14-02:00");
          entry.set('created_at', date);
        });

        it('respond to created_at', function(){
          expect(entry.get('created_at')).not.to.be.undefined;
        });

        it('created_at is of type Date (object)', function(){
          (typeof entry.get('created_at')).should.equal('object')
        });
      });
    });
  });
})(Redu.Wally)
