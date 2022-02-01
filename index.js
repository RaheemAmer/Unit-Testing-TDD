// function sum(x, y) {
//     return x + y;
// }




module.exports = {
    createArray(number) {
        var myArray = Array.from(Array(number).keys());
        return myArray;
    },
    capitalizeText(input) {
        if (typeof input !== "string") {
            throw new TypeError("parameter should be string")
        };
        return input.toUpperCase();
    }
}


//problem 1
//input: "iti" ===> output: Iti. expect
//input: 12 ===> output: "".   expect






//test that the function takes a string  it will return a string 

//test that the function takes a string and return it after capitalize it

//test if the function takes number it will throw type error says parameter should be string

//test if the input iti , the returned value  will not equal to hello


//problem 2

// input number 3 ==> output should be [0,1,2]


// const createArray = (number) => {
//     const myArray = Array.from(Array(number).keys());
//     return myArray;
// };


//test that the return value of type array

//test if we pass 3 it will return array of length 3 and test it's include 1

//make a variable and intialize it by 1 and before each test increase it by one and pass it to every function call




// Bonus //try to delay the testing process 5 seconds 
//try to use different styles (expect , should , assert)
// Bonus //after finishing your test process try to  run it on a browser
//make pending test case