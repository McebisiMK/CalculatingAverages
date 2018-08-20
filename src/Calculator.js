function Calculator() {
    return {
        average: function (numbers) {
            return GetAverage(numbers)
        }
    }

    function GetAverage(numbers) {
        if(numbers.length == 0){
            return 0;
        }
        let sumOfSumbers = numbers.reduce((sum, currentNumber) => sum + currentNumber, 0)
        return sumOfSumbers / numbers.length;
    }
}