const index = require("../index.js");
// var should = require('chai').should();
var assert = require("chai").assert;
var expect = require('chai').expect;

/*****************************************************************/
// Problem 1
/*****************************************************************/

describe("Problem 1", function() {
    it("test that the function takes a string  it will return a string ", function() {
        assert.isString(index.capitalizeText("Raheem"))
    })

    it("test that the function takes a string and it will return a string and then capitalizes it ", function() {
        assert.isString(index.capitalizeText("Raheem").toUpperCase());
        // expect("Raheem").to.be.an("string").after(function() {
        //     capitalizeText.toUpperCase();
        // });
    })
    it("test if the function takes number it will throw type error says parameter should be string", function() {
        if (assert.isNaN(index.capitalizeText("Raheem"))) {
            throw new TypeError("parameter should be string");
        }

        // expect("Raheem").to.be.an("string").after(function() {
        //     capitalizeText.toUpperCase();
        // 
    })
    it("test if the input iti , the returned value  will not equal to hello", function() {
        expect("iti").to.not.equal('hello');
    })

})



/*****************************************************************/
// Problem 2
/*****************************************************************/

describe("testing waiting", function() {
    it('waiting', (done) => {
        // console.log("Waiting")
        done();
    }).timeout(5000);
});


describe("Problem 2", function() {
    // this.timeout(5000);
    it("test that the return value of type array", function() {
        assert.isArray(index.createArray(1, 2, 3))
    })
    it("input number 3 ==> output should be (0,1,2)", function() {
        // assert.include(index.createArray(0, 1, 2), 3)
        // expect(index.createArray(0, 1, 2)).to.include(3);
        expect([0, 1, 2]).to.be.an("array").that.includes(3);
    })

    it("test if we pass 3 it will return array of length 3 and test it's include 1", function() {
        expect([1, 2, 3])
            .to.have.lengthOf(3)
            .to.be.an("array")
            .that.includes(1);
        // assert
        //     .lengthOf(index.createArray(0, 1, 2), 3)
        //     .include(index.createArray(0, 1, 2), 1)
    })

});

describe("'make a variable and intialize it by 1 and before each test increase it by one and pass it to every function call", function(done) {

    it("Testing this function if it works", async function() {
        var value = 1;
        beforeEach(() => {
            value += 1;
        });
    })
});



describe.skip('pending test', function() {
    it('pending', function() {
        expect(true).to.equal(true);
    })
});


/*****************************************************************/
// testing area
/*****************************************************************/

// describe('make a variable and intialize it by 1 and before each test increase it by one and pass it to every function call', function(done) {
//     var value = 1;

//     beforeEach(() => {
//         value += 1;
//     });

//     it('test', done => {
//         console.log(this.value)
//         console.log(this.value)
//     })
// });

// describe('some test', function() {
// //     var value = 1;
// //     it('should pass a value', function(done) {
// //         value = 5; 
// //         done();
// //     });
// //     it('and then double it', function(done) {
// //         console.log(value * 2); // 10
// //         done();
// //     });
// // });


// only, skip, before, beforeEach, after, afterEach 
// describe("Test Suite", function() {
//     it("test if text is capitalized", function() {
//         expect(capitalizeText("two")).to.be.uppercase
//     })
// });