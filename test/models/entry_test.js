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

        it('author is embedded (should not do a request)', function(){
          resetStore();

          store.load(Wally.Entry, 1, {
            id: 1,
            author: { user_id: 1, name: "My name"}
          });
          entry = store.find(Wally.Entry, 1);

          var getAuthor = function(){
            entry.get('author');
          };
          expect(getAuthor).to.not.throw('Error');
          expect(entry.get('author')).to.not.be.null;
        });
      });
    });

    describe('Properties', function(){
      describe('has a property content', function(){
        it('responds to content', function(){
          expect(entry.get('content')).not.to.be.undefined;
        });

        it('content is of type Object', function(){
          (typeof entry.get('content')).should.equal('object');
        });
      });

      describe('has a property links', function(){
        it('respond to links', function(){
          expect(entry.get('links')).to.not.be.undefined;
        });

        it('links is an Object', function(){
          (typeof entry.get('links')).should.equal('object');
        });
      });

      describe('has a property rule', function(){
        it('responds to rule', function(){
          expect(entry.get('rule')).not.to.be.undefined;
        });

        it('rule is of type Object', function(){
          (typeof entry.get('rule')).should.equal('object');
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

    describe('Functions', function(){
      describe('has a function isValid', function(){
        afterEach(function(){
          entry.set('content', null);
        });

        it('respond to isValid', function(){
          expect(entry.isValid()).not.to.be.undefined;
        });

        describe('when a entry does not have a content', function(){
          beforeEach(function(){
            entry.set('content', null);
          });

          it('is not valid', function(){
            expect(entry.isValid()).to.be.false;
          });

          it('has an error: Por favor, digite o texto que deseja postar.', function(){
            entry.isValid();
            expect(entry.get('errors')).not.to.be.null;
            entry.get('errors').should.
              equal('Por favor, digite o texto que deseja postar.');
          });
        });

        describe('when a entry have a empty content', function(){
          beforeEach(function(){
            entry.set('content', {});
          });

          it('is not valid', function(){
            expect(entry.isValid()).to.be.false;
          });

          it('has an error: Por favor, digite o texto que deseja postar.', function(){
            entry.isValid();
            expect(entry.get('errors')).not.to.be.null;
            entry.get('errors').should.
              equal('Por favor, digite o texto que deseja postar.');
          });
        });

        describe('when a entry have a content with a empty text', function(){
          beforeEach(function(){
            entry.set('content', {text: ''});
          });

          it('is not valid', function(){
            expect(entry.isValid()).to.be.false;
          });

          it('has an error: Por favor, digite o texto que deseja postar.', function(){
            entry.isValid();
            expect(entry.get('errors')).not.to.be.null;
            entry.get('errors').should.
              equal('Por favor, digite o texto que deseja postar.');
          });
        });

        describe('when a entry have a content with text', function(){
          beforeEach(function(){
            entry.set('content', {text: 'Lorem.'});
          });

          it('is valid', function(){
            expect(entry.isValid()).to.be.true;
          });

          it('does not have errors', function(){
            entry.isValid();
            expect(entry.get('errors')).to.be.null;
          });
        });
      });
    });
  });
})(Redu.Wally)
