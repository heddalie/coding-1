let n = prompt("Enter a value for n: ");
let firstSeries = [];
let secondSeries = [];
let thirdSeries = [];
let fourthSeries = [];


//first series
function firstButton() {
    for (i = 0; i <= n - 1; i++) {
        firstSeries[i] = i + 1 * i + 1;
    }
    console.log(firstSeries);
}

//second series
function secondButton() {
    secondSeries[0] = 1;
    for (i = 1; i <= n - 1; i++) {
        secondSeries[i] = secondSeries[i - 1] * 2;
    }
    console.log(secondSeries);
}

//third series
function thirdButton() {
    thirdSeries[0] = 1;
    thirdSeries[1] = 1;
    for (i = 2; i <= n - 1; i++) {
        thirdSeries[i] = thirdSeries[i - 1] + thirdSeries[i - 2];
    }
    console.log(thirdSeries);
}


// fourth button: two possible solutions


// solution 1

// check if prime number is true or false
// Source: https://www.tutorialspoint.com/javascript-function-to-take-a-number-n-and-generate-an-array-with-first-n-prime-numbers
const isPrime = (n) => {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false;
        }
    };
    return true;
};

// generating prime number
// Source: https://www.tutorialspoint.com/javascript-function-to-take-a-number-n-and-generate-an-array-with-first-n-prime-numbers
const generatePrime = num => {
    const arr = [];
    let i = 2;
    while (arr.length < num) {
        if (isPrime(i)) {
            arr.push(i);
        };
        i = i === 2 ? i + 1 : i + 2;
        /* this means:
            if (i==2)
				i=i+1;
			else
				i=i+2; */
    };
    return arr;
};

// this is for connecting to fourthButton
function fourthButton() {
    fourthSeries = generatePrime(n);
    /*fourthSeries[0] = 2;
for (i = 1; i <= n - 1; i++) {
            fourthSeries[i] = primes[i];
}*/
    console.log(fourthSeries);
}


// solution two
// this should be more effective if we dont need it to go indefinitly

/*
function fourthButton() {
    //fourthSeries = generatePrime(n);
    primes = [ 2, 3, 5, 7, 11, 13 ];
    fourthSeries[0] = 2;
for (i = 1; i <= n - 1; i++) {
            fourthSeries[i] = primes[i];
}
console.log(fourthSeries);
}
*/