require('ember')
var chai = require('chai')
var should = chai.should();
var expect = chai.expect;

window.DS = Ember.Namespace.create({
  CURRENT_API_REVISION: 4
});
global.DS = window.DS; //I had to add this to make DS available

require('../../src/lib/ember-data.min.js')

Redu = {  }
Redu.store = DS.Store.create({
  revision: 4,
  adapter: DS.RESTAdapter.create()
});

require("../../src/models/wall.js");


describe('Wall', function(){
  describe('Relationships', function(){
    var wall;
    beforeEach(function(){
      wall = Redu.store.createRecord(Wall, { saco : "saquinho" });
    });

    afterEach(function(){
      wall = null;
    });

    it('responds to posts', function(){
      expect(wall.get('posts')).to.not.be.undefined;
    });
  });
});
