//convety inch to feet


const inchToFeet = () => {
    const inch = document.getElementById('inch-input').value;
    if (inch < 12) {
        document.getElementById('result').innerText = "please enter minimum value (e,i 12 inch)";
    }
    else {
        let feet = inch.value / 12;
        document.getElementById('result').innerText = Math.floor(feet);

    }
}
// auto email generator
const generatorVariable = () => {
    let emailFirstName = document.getElementById('emailFirstName').value;
    let fullName = emailFirstName.split(" ");
    console.log(fullName);
    let emailTargetWebsite = document.getElementById('emailTargetWebsite').value;
    let email = []
    console.log({ email })
    for (let i = 0; i < 7; i++) {
        if (i === 0) {
            email.push(fullName[0] + "." + fullName[1] + "@" + emailTargetWebsite)

        }
        else if (i === 1) {
            email.push(fullName[0] + "@" + emailTargetWebsite)


        }
        else if (i === 2) {
            email.push(fullName[1] + "@" + emailTargetWebsite)

        }
        else if (i === 3) {
            email.push(fullName[0].charAt() + fullName[1] + "@" + emailTargetWebsite)

        }
        else if (i === 4) {
            email.push(fullName[0].charAt()+"." + fullName[1] + "@" + emailTargetWebsite)

        }
        else if (i === 5) {
            email.push(fullName[0] + fullName[1].charAt() + "@" + emailTargetWebsite)

        }
        else if (i === 6) {
            email.push(fullName[0] +"."+ fullName[1].charAt() + "@" + emailTargetWebsite)

        }

    }
    email.join("")
    let emailOutput= email.join('\r\n');
    document.getElementById('email-result').innerText = emailOutput;
    navigator.clipboard.writeText(emailOutput).then(function () {
        alert("Copied successfully ");
    }, function () {
        alert("Fail to copy ");
    });


}

// accountant  mail massage generator
const generateJObMail = () => {
    let HRName = document.getElementById('HRName').value;


    let jobLocation = document.getElementById('jobLocation').value;

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    const emailOutput = `
To
${HRName}
The head of ${jobLocation}

Dear Sir/Madam,
In response to your job advertisement published at linkedin.com dated ${today}. I would like to introduce myself as I am CMA partly qualified and applying for  Accountant job at your company. My experience in accounting and the additional skills that I have obtained will make me an asset to your team. I have strong experience in payroll administration, accounts payable,Excel, Quickbook online, journal entries, and contracts administration. I am thrilled to know that your industries work is related to my interests.

As indicated in my resume, I   have graduated with a Bachelor of BBA degree from reputed University. During the last three years, I have had the opportunity to work in many areas of accounting, and I really believe that this experience has prepared me for the industry.

I am very interested in an opportunity and would enjoy meeting you to discuss possible positions. I believe that my previous experiences will make me an asset to your company.

Sincerely,

Riyad hasan
Station Road, unclassified, Cumilla, Bangladesh

Call:  +880 1830799683
Email: riyad.hasan7272@gmail.com
linkedin: https://www.linkedin.com/in/riyad-hasan-cma-partly-qualified-03b53b215/
Resume:  https://drive.google.com/file/d/1wmJWOs1NQ9h4i0Jc73iOLDynRIqBVQOd/view?usp=sharing
`
    document.getElementById('email-message').innerText = emailOutput;
    navigator.clipboard.writeText(emailOutput).then(function () {
        alert("Copied successfully ");
    }, function () {
        alert("Fail to copy ");
    });

}



function copyHRMail() {
    let HRName = document.getElementById('HRName').value;
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    const emailOutput = `
Hello ${HRName}

Have a good day.
   
I am CMA partly qualified and applying for an Accountant job at your company.  I am confident and my academic skills, specifically CMA, make it possible to work with any practical situations. Could you please tell me how I can be prepared for the interview. or any suggestion for me .I will be very respectful to you if you refer my resume to your company, your team, and your company looking awesome. I would like to work and grow with your company..
   
Sincerely,

Riyad hasan
Station Road, unclassified, Cumilla, Bangladesh
   
Call:  +880 1830799683
Email: riyad.hasan7272@gmail.com
linkedin: https://www.linkedin.com/in/riyad-hasan-cma-partly-qualified-03b53b215/
Resume:  https://drive.google.com/file/d/1wmJWOs1NQ9h4i0Jc73iOLDynRIqBVQOd/view?usp=sharing
   
   
`
    document.getElementById('email-message').innerText = emailOutput;
    navigator.clipboard.writeText(emailOutput).then(function () {
        alert("Copied successfully ");
    }, function () {
        alert("Fail to copy ");
    });


}

//programmer mail generator
const generateProgrammerJObMail = () => {
    let HRName = document.getElementById('ProgrammerHRName').value;
    let jobLocation = document.getElementById('ProgrammerJobLocation').value;
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    const emailOutput = `
${today}
To 
The head of ${jobLocation}

Dear Sir/Madam,
In response to your job advertisement published at linkedin.com dated ${today}.So excited to see that you are looking for some React developer .React is my passion and love helping business .  As I believe I have the skills, qualifications, and experience necessary to make a significant contribution to your organization.

I have experience in JavaScript, TypeScript, HTML, CSS, Bootstrap, SASS, React.JS, Redux, React bootstrap, nodeJS, ExpressJS and MongoDB.  I am self-motivated, energetic, enthusiastic, and ever ready to learn new things. I am confident to ensure the highest level of professionalism and commitment to my job.

I believe working in a reputed organization like yours will provide me an excellent opportunity for my career. I would truly be grateful if I was finally selected for that post and I will prove myself to be an important asset to your company through my dedication, sincerity, and highest level of professionalism.

you can be reached anytime by email at  Riyad.hasan8282@gmail.com

Sincerely,

Riyad hasan
Station Road, Cumilla, Bangladesh

Call:  +880 1830799683
Email: riyad.hasan8282@gmail.com
linkedin : https://www.linkedin.com/in/riyad-hasan-ab2867210/
Github : https://github.com/RiyadTangil
Resume:  https://drive.google.com/file/d/1fW7VdFaTuGQIoEBcDOhQ4k7nCXPlNm09/view?usp=sharing
Portfolio : https://riyadtangil.github.io/my-portfolio/
`
    document.getElementById('ProgrammerEmail-message').innerText = emailOutput;
    navigator.clipboard.writeText(emailOutput).then(function () {
        alert("Copied successfully ");
    }, function () {
        alert("Fail to copy ");
    });

}



function copyProgrammerHRMail() {
    let HRName = document.getElementById('ProgrammerHRName').value;

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    const emailOutput = `
Hello ${HRName}

Have a good day,
So excited to see that you are looking for some React developer . React is my passion and love helping business. I have applied for a Frontend developer job at your company Could you please tell me how can I be prepared for the interview. or any suggestion for me. I will be very respectful to you if you refer my resume to your company, your team, and your company looking awesome. I would like to work and grow with your company..

Sincerely,

Riyad hasan
Station Road, Cumilla, Bangladesh
   
Call:  +880 1830799683
Email: riyad.hasan8282@gmail.com
linkedin : https://www.linkedin.com/in/riyad-hasan-ab2867210/
Github : https://github.com/RiyadTangil
Resume:  https://drive.google.com/file/d/1fW7VdFaTuGQIoEBcDOhQ4k7nCXPlNm09/view?usp=sharing
Portfolio : https://riyadtangil.github.io/my-portfolio/
   
   
`
    document.getElementById('ProgrammerEmail-message').innerText = emailOutput;
    navigator.clipboard.writeText(emailOutput).then(function () {
        alert("Copied successfully ");
    }, function () {
        alert("Fail to copy ");
    });


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
    if (factorial < 1) {
        document.getElementById('factorial-result').innerText = `enter a valid number`;
    }
    else {
        for (let i = 1; i <= factorial; i++) {
            factorialNumber = factorialNumber * i;
            document.getElementById('factorial-result').innerText = factorialNumber;
        }
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


    if (initialNumber <= 1) {
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
        document.getElementById('budget-calculation-result').innerText = watchQuantity * 50 + phoneQuantity * 100 + laptopQuantity * 500 + " tk";
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

