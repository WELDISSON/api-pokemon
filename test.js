'use strict'
var assert = require('chai').assert,
  request = require('supertest'),
  expect = require('chai').expect;

var url = 'http://pokeapi.co/api/v2/';


describe('Test API Pokemon - GET', function(){
    it('/GET pokemon test 200', function(done){
        request(url)
            .get('pokemon/1/')
            .expect(200);
            done();
    });
    it('/GET pokemon test 404', function(done){
        request(url)
            .get('pokemon/900/')
            .expect(404);
            done();
    });
    it('/GET type test 200', function(done){
        request(url)
            .get('type/2/')
            .expect(200);
            done();
    });
    it('/GET type test 404', function(done){
        request(url)
            .get('type/500/')
            .expect(404);
            done();
    });
    it('/GET ability test 200', function(done){
        request(url)
            .get('ability/5/')
            .expect(200);
            done();
    });
    it('/GET ability test 404', function(done){
        request(url)
            .get('ability/600/')
            .expect(404);
            done();
    });
});
