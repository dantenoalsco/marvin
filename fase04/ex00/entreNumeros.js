function fizzbuzz(min, max) {
    let i = min;
    while (i <= max) {
        if (i % 15 === 0) {
            console.log(i + " FizzBuzz");
        } else if (i % 5 === 0) {
            console.log(i + " Buzz");
        } else if (i % 3 === 0) {
            console.log(i + " Fizz");
        } else {
            console.log(i);
        }
        i++;
    }
}

