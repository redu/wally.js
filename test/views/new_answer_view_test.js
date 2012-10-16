(function(Wally){
  describe('NewAnswerView', function(){
    var view;

    beforeEach(function(){
      // Mock prepareNewAnswer to prevent accessing the controller
      Wally.NewAnswerView.reopen({
        prepareNewAnswer: function(){
          return false;
        }
      });
      view = Wally.NewAnswerView.create();
    });

    afterEach(function(){
      view = null;
    });

    it("has a template named 'new_answer'", function(){
      view.get('templateName').should.equal('new_answer');
    });

    it("has a tag named 'form'", function(){
      view.get('tagName').should.equal('form');
    });

    describe('ComputedProperties', function(){
      describe('hasError', function(){
        var answer;

        beforeEach(function(){
          store.load(Wally.Answer, 1, { id: 1 });
          answer = store.find(Wally.Answer, 1);
          view.set('content', answer);
        });

        afterEach(function(){
          view.set('content', null);
        });

        describe('when the post has errors', function(){
          beforeEach(function(){
            answer.isValid();
          });

          afterEach(function(){
            answer.set('errors', null);
          });

          it('returns true', function(){
            expect(view.get('hasError')).to.be.true;
          });
        });

        describe('when the answer does not have errors', function(){
          it('returns falsy', function(){
            expect(view.get('hasError')).not.to.be.true;
          });
        });
      });
    });
  });
})(Redu.Wally);
