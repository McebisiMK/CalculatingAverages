describe("Calculator", function () {
    describe("Average", function () {
        describe("Empty array", function () {
            it("Should return zero as average", function () {
                //----------------Arrange------------
                let numbers = [];
                let calculator = new Calculator();

                //----------------Act----------------
                let actual = calculator.average(numbers);

                //----------------Assert-------------
                let expectedAverage = 0;
                expect(actual).toBe(expectedAverage);
            })
        })

        describe("Given an array with single number", function () {
            [{ numbers: [1], expectedAverage: 1 },
            { numbers: [10], expectedAverage: 10 },
            { numbers: [100], expectedAverage: 100 }]
                .forEach(function (element) {
                    it("should return that number as average", function () {
                        //----------------Arrange------------
                        let calculator = new Calculator();

                        //----------------Act----------------
                        let actual = calculator.average(element.numbers);

                        //----------------Assert-------------
                        expect(actual).toBe(element.expectedAverage);
                    })
                })
        })

        describe("Given an array with two numbers", function () {
            [{ numbers: [1, 3], expectedAverage: 2 },
            { numbers: [10], expectedAverage: 10 },
            { numbers: [100], expectedAverage: 100 }]
                .forEach(function (element) {
                    it("should return the average of those number", function () {
                        //----------------Arrange------------
                        let calculator = new Calculator();

                        //----------------Act----------------
                        let actual = calculator.average(element.numbers);

                        //----------------Assert-------------
                        expect(actual).toBe(element.expectedAverage);
                    })
                })
        })

        describe("Given an array with of numbers", function () {
            [{ numbers: [3, 4, 5], expectedAverage: 4 },
            { numbers: [10, 10, 10, 10], expectedAverage: 10 },
            { numbers: [100, 12, 45, 58, 63], expectedAverage: 55.6 }]
                .forEach(function (element) {
                    it("should return the average of those number", function () {
                        //----------------Arrange------------
                        let calculator = new Calculator();

                        //----------------Act----------------
                        let actual = calculator.average(element.numbers);

                        //----------------Assert-------------
                        expect(actual).toBe(element.expectedAverage);
                    })
                })
        })
    })
})