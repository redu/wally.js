(function(Wally){
  describe('Wall', function(){
    describe('Relationships', function(){
      var wall;

      beforeEach(function(){
        wall = Wally.store.createRecord(Wally.Wall, { saco : "saquinho" });
      });

      afterEach(function(){
        wall = null;
      });

      it('responds to posts', function(){
        expect(wall.get('posts')).to.not.be.undefined;
      });

      it('posts is an object', function(){
        wall.get('posts').should.be.a('object')
      });
    });
  });
})(Redu.Wally);
