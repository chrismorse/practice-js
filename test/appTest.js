const assert = require("chai").assert;
const app = require("../app");

describe('App', function() {
    it('sayHello should return hello', function() {
        let result = app.sayHello();
        assert.equal(result, 'hello');
    });

    it('sayHello should return type string', function() {
        let result = app.sayHello();
        assert.typeOf(result, 'string');
    });

    it('addNumbers should add 2 + 5 and be equal to 7', function() {
        let result = app.addNumbers(2,5);
        assert.equal(result, 7);
    })
})


// starwars api test example - using should & expect
const should = require("should");
const request = require("request");
const expect = require("chai").expect;
const util = require("util");
const baseURL = "https://swapi.co/api"

describe('return luke', function() {
    it('returns luke', function(done) {
        request.get({url: baseURL + '/people/1/'},
            function(error, response, body) {
                    var bodyObj = JSON.parse(body);
                    expect(bodyObj.name).to.equal("Luke Skywalker");
                    expect(bodyObj.hair_color).to.equal("blond");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                done();
            });
    });
})




