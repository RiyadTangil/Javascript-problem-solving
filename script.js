//convety inch to feet
const inch = document.getElementById('inch-input');

const inchToFeet = () => {
    let feet = inch.value / 12;
    document.getElementById('result').innerText = Math.floor(feet);

}
// check leap year
const checkLeapYear = () => {
    const year = document.getElementById('year-input').value;
    if (year == 0 || year < 1582) {
        document.getElementById('leapYear-result').innerText = `please enter valid year`;
    }
    else if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        document.getElementById('leapYear-result').innerText = `${year}  is a leap year`
    }
    else {
        document.getElementById('leapYear-result').innerText = `${year}  is not not a leap year`
    }
}
const checkFactorial = () => {
    const factorial = document.getElementById('factorial-input').value;
    let factorialNumber = 1;
    for (let i = 1; i < factorial; i++) {
        factorialNumber = factorialNumber * i;
        document.getElementById('factorial-result').innerText = factorialNumber;
    }
}
//check the  fibonacci number
const checkFibonacci = () => {
    const fibonacciNumber = document.getElementById('fibonacci-input').value;
    console.log(typeof (fibonacciNumber));

    if (fibonacciNumber == " ") {
        document.getElementById('fibonacci-result').innerText = "please enter a valid number";
    }
    else {
        let initialNumbers = [0, 1]
        const fibonacciNumber = document.getElementById('fibonacci-input').value;
        for (let i = 2; i <= fibonacciNumber; i++) {
            initialNumbers[i] = initialNumbers[i - 1] + initialNumbers[i - 2];

        }
        document.getElementById('fibonacci-result').innerText = initialNumbers;

    }
}

//prime number checkered


const checkPrime = () => {
    const initialNumber = document.getElementById('prime-input').value
    // let isPrime = true;


    if (initialNumber == 1) {
        document.getElementById('prime-result').innerText = `${initialNumber}  is neither prime nor composite number.`
    }
    else if (initialNumber > 2) {
        for (let i = 2; i < initialNumber; i++) {

            if (initialNumber % i == 0) {
                document.getElementById('prime-result').innerText = `${initialNumber} is not a prime number`
                break;
            }

            else {
                document.getElementById('prime-result').innerText = `${initialNumber} is a prime number`
            }
        }

    }
    else {
        document.getElementById('prime-result').innerText = `${initialNumber} is a prime number`
    }
}
//swap variable
const swapVariable = () => {
    let swapInputA = document.getElementById('swap-input-a').value;
    let swapInputB = document.getElementById('swap-input-b').value;
    // let emptySwap = swapInputA
    // swapInputA = swapInputB
    // swapInputB = emptySwap
    [swapInputA, swapInputB] = [swapInputB, swapInputA]
    document.getElementById('swap-result').innerText = `A = ${swapInputA} B = ${swapInputB}`;
}
const checkRandomNumber = () => {
    const inputNumber = document.getElementById('random-input').value;
    const randomNumber = Math.random() * inputNumber

    document.getElementById('random-result').innerText = Math.round(randomNumber)
}

const getMaximumNumber = () => {
    const number = getInputParsedNumber('user-number-input')
    let maxNum = number[0];
    number.forEach(num => {
        if (num > maxNum) {
            maxNum = num;
        }

    })
    document.getElementById('maximum-result').innerText = maxNum



}
const getSumNumber = () => {
    let number = getInputParsedNumber("user-sum-input")
    let sum = number[0];
    number.forEach(number => {
        sum = sum + number
    })
    document.getElementById('sum-result').innerText = sum;

}
//remove duplication form an array
const handleDuplicate = () => {
    let number = getInputParsedNumber("user-duplication-input");
    const uniqueNumber = []
    number.forEach(number => {
        if (uniqueNumber.indexOf(number) == -1) {
            uniqueNumber.push(number)
        }
    })
    document.getElementById('duplication-result').innerText = uniqueNumber;

}
//count word
const handleCountWords = () => {
    const words = document.getElementById('user-word-input').value;
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        const character = words[i];
        if (character == ' ' && words[i - 1] != ' ') {
            count++
        }
    }
    count++
    document.getElementById('word-result').innerText = count;
}
//reverse string
const handleReverseString = () => {
    const reversString = document.getElementById('reverse-word-input').value;
    let newReversedString = '';
    for (let i = 0; i < reversString.length; i++) {
        const character = reversString[i];
        newReversedString = character + newReversedString;
    }
    document.getElementById('reverse-result').innerText = newReversedString;
}
//kilometer to meter
const handleKloToMeter = () => {
    const kilometer = document.getElementById('kilo-input').value;
    if (kilometer <= 0) {
        document.getElementById('meter-result').innerText = "kilometer can not be negative";
    }

    else {
        document.getElementById('meter-result').innerText = kilometer * 1000 + " meter";
    }


}
const handleBudgetCalculator = () => {
    const watchQuantity = getInputNumbers("watch-number")
    const phoneQuantity = getInputNumbers("phone-number")
    const laptopQuantity = getInputNumbers("laptop-number")
    if (watchQuantity <= 0 || phoneQuantity <= 0 || laptopQuantity <= 0) {
        document.getElementById('budget-calculation-result').innerText = "please enter a valid number";
    }
    else {
        document.getElementById('budget-calculation-result').innerText = watchQuantity * 50 + phoneQuantity * 100 + laptopQuantity * 500 +" tk";
    }



}
const getInputNumbers = (id) => {
    const userNumber = document.getElementById(id).value;
    return userNumber
}


const getInputParsedNumber = (id) => {
    const inputNumber = document.getElementById(id).value;
    let stringNumbers = []
    let NumberAfterString = []
    stringNumbers.push(inputNumber)
    stringNumbers = stringNumbers.map(number => number.split(","))
    stringNumbers[0].forEach(number => {
        NumberAfterString.push(parseInt(number))
    })
    return NumberAfterString

}

