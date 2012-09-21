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

        it('answers is embedded (should not do a request)', function(){
          resetStore();

          store.load(Wally.Post, 1, {
            id: 1,
            answers: [
              { id: 1, content: { text: "My name" } },
              { id: 2, content: { text: "My name" } }
            ]
          });
          post = store.find(Wally.Post, 1);

          var getAnswers = function(){
            post.get('answers');
          };
          expect(getAnswers).to.not.throw('Error');
        });
      });
    });

    describe('Properties', function(){
      describe('has a property target', function(){
        it('responds to target', function(){
          expect(post.get('target')).not.to.be.undefined;
        });

        it('target is of type Object', function(){
          (typeof post.get('target')).should.equal('object');
        });
      });

      describe('has a property contexts', function(){
        it('respond to contexts', function(){
          expect(post.get('contexts')).not.to.be.undefined;
        });

        it('contexts is an Object', function(){
          (typeof post.get('contexts')).should.equal('object');
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

    describe('ComputedProperties', function(){
      describe('has a computed property targetSelfPublicLink', function(){
        beforeEach(function(){
          post.set('target', {
            id: 1,
            name: 'Target #1',
            links: [
              { rel: 'self', href: 'http://redu.com.br/api/spaces/1' },
              { rel: 'self_public', href: 'http://redu.com.br/espacos/1' }
            ]
          });
        });

        afterEach(function(){
          post.set('target', null);
        });

        it('respond to targetSelfPublicLink', function(){
          expect(post.get('targetSelfPublicLink')).to.not.be.undefined;
        });

        it('returns the target self_public Link', function(){
          post.get('targetSelfPublicLink').should.
              equal('http://redu.com.br/espacos/1');
        });
      });
    });

    describe('Functions', function(){
      describe('has a computed property contextLink', function(){
        beforeEach(function(){
          post.set('contexts', [
            {
              id: 1, name: 'Context #1',
              links: [
                { rel: 'self', href: 'http://redu.com.br/api/courses/1' },
                { rel: 'public_self', href: 'http://redu.com.br/environment/cursos/curso-de-algo' }
              ]
            }
          ]);
        });

        afterEach(function(){
          post.set('contexts', null);
        });

        it('respond to contextLink', function(){
          expect(post.contextLink).to.not.be.undefined;
        });

        it('returns the specified link of the specified context', function(){
          var context = post.get('contexts').objectAt(0);
          post.contextLink(context, 'self').should.
              equal('http://redu.com.br/api/courses/1');
        });
      })
    })
  });
})(Redu.Wally)
