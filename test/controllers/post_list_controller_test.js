(function(Wally){
  describe('PostListController', function(){
    var controller;

    beforeEach(function(){
      store.loadMany(Wally.Post, [
        { id: 3, created_at: "2012-11-07T12:52:54-03:00" },
        { id: 1, created_at: "2012-11-05T12:52:54-03:00" },
        { id: 2, created_at: "2012-11-06T12:52:54-03:00" },
      ]);
      controller = Wally.PostListController.create();
      controller.set('content', store.findAll(Wally.Post));
    })

    afterEach(function(){
      controller = null;
      resetStore();
    });

    describe('Sorting Configs', function(){
      it('sortProperties is based only on created_at', function(){
        expect(controller.get('sortProperties')).not.to.be.null;
        expect(controller.get('sortProperties').toArray()).to.
          deep.equal(['created_at']);
      });

      it('sorts descending', function(){
        controller.get('sortAscending').should.equal(false);
      });

      describe('ArrangedContent', function(){
        it('arrangedContent is not undefined', function(){
          expect(controller.get('arrangedContent').toArray()).not.to.be.empty;
        })

        it('arrangedContent is descending sorted by created_at', function(){
          expect(controller.get('arrangedContent').toArray().mapProperty('id')).
          to.deep.equal([3, 2, 1]);
        });
      });
    })

  });
})(Redu.Wally);
