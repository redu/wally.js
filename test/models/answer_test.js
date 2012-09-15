(function(Wally){
  describe('Answer', function(){
    var answer;

    beforeEach(function(){
      resetStore();
      store.load(Wally.Answer, 1, { id: 1 });
      answer = store.find(Wally.Answer, 1);
    });

    afterEach(function(){
      answer = null;
      resetStore();
    });

    it('extends Entry', function(){
      Wally.Entry.detect(Wally.Answer).should.be.true;
    });

    describe('Relationships', function(){
      describe('belongsTo Post', function(){
        it('responds to post', function(){
          expect(answer.get('post')).to.not.be.undefined;
        });

        it('post is of type Post', function(){
          Wally.Answer.typeForAssociation('post').toString().should.
              equal('.Post');
        });
      });
    });
  });
})(Redu.Wally);
