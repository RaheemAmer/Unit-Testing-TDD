var counter = {
    currentValues: function() {
        return 1;
    },
};

function sumOfValues() {
    return counter.currentValues();
}

describe("Problem 1", function() {
    it("spy on counter object currentValue property and mock its implementation to equal [100]", function() {
        var count = counter.currentValues(100);
        console.log(count);
        // expect some of values is returning the right value (new mocked value 100) after mocking
        // and expect that we called the spy function for one time

        spyOn(counter, "currentValues");
        sumOfValues()
        sumOfValues()
        sumOfValues()

        expect(count).toEqual(1);
        expect(counter.currentValues).toHaveBeenCalled();
        expect(counter.currentValues).toHaveBeenCalledTimes(3);
        expect(counter.currentValues).toHaveBeenCalledWith();
    });

    function Mocking() {}

    // mock a function that takes any string and return number, call it twice and expect that it is called twice

    it("Problem 2", function() {
        var callMocking = new Mocking();
        console.log(callMocking);
        callMocking.passValue = jasmine.createSpy(5);
        callMocking.passValue();
        console.log(callMocking);
        expect(callMocking.passValue).toHaveBeenCalled();
    });
});