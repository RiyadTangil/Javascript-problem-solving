// const colorPicker = new iro.ColorPicker("#color-picker",{
//     width:180,color:"#fff"
// });
// let colorCode
// colorPicker.on('color:change',function(color){
//     let colorIndicator = document.getElementById("color-indicator");
//     let code = document.getElementById("code");
//     colorIndicator.style.backgroundColor = color.hexString;
//     colorCode=color.hexString
//     code.innerText=color.hexString
// })
// const copyColorCode=() =>{
//     let code = document.getElementById("code").innerText;
//     navigator.clipboard.writeText(code).then(function () {
//         alert("Copied successfully ",code);
//     }, function () {
//         alert("Fail to copy ");
//     });

// }

//convert inch to feet

const inchToFeet = () => {
  const inch = document.getElementById("inch-input").value;
  if (inch < 12) {
    document.getElementById("result").innerText =
      "please enter minimum value (e,i 12 inch)";
  } else {
    let feet = inch / 12;
    document.getElementById("result").innerText = Math.floor(feet);
  }
};
// auto email generator
const generatorVariable = () => {
  let emailFirstName = document.getElementById("emailFirstName").value;
  let fullName = emailFirstName.split(" ");
//   console.log(fullName);
  let emailTargetWebsite = document.getElementById("emailTargetWebsite").value;
  let email = [];
//   console.log({ email });
  for (let i = 0; i < 7; i++) {
    if (i === 0) {
      email.push(fullName[0] + "." + fullName[1] + "@" + emailTargetWebsite);
    } else if (i === 1) {
      email.push(fullName[0] + "@" + emailTargetWebsite);
    } else if (i === 2) {
      email.push(fullName[1] + "@" + emailTargetWebsite);
    } else if (i === 3) {
      email.push(fullName[0].charAt() + fullName[1] + "@" + emailTargetWebsite);
    } else if (i === 4) {
      email.push(
        fullName[0].charAt() + "." + fullName[1] + "@" + emailTargetWebsite
      );
    } else if (i === 5) {
      email.push(fullName[0] + fullName[1].charAt() + "@" + emailTargetWebsite);
    } else if (i === 6) {
      email.push(
        fullName[0] + "." + fullName[1].charAt() + "@" + emailTargetWebsite
      );
    }
  }
  email.join("");
  let emailOutput = email.join("\r\n");
  document.getElementById("email-result").innerText = emailOutput;
  navigator.clipboard.writeText(emailOutput).then(
    function () {
      console.log("done")
    },
    function () {
      console.log("error")
    }
  );
};

//programmer emal  generator
const generatorEmail = () => {
  let name = document.getElementById("emailFirstName").value;
  let profession = document.getElementById("profession").value;
  let emailTargetWebsite = document
    .getElementById("emailTargetWebsite")
    .value.split(".com")[0];
  //   JavaScript, TypeScript, HTML, CSS, Bootstrap, SASS, React.JS, Redux, React bootstrap, nodeJS, ExpressJS and MongoDB.
  const emailOutput = `Dear ${name},

I am Riyad Hasan, a Senior Full Stack Developer with around 3 years of experience. I'm writing to express my interest in joining your team at ${emailTargetWebsite}.
  
I have expertise in JavaScript, C, C++, Python, Node, React.js,Redux, HTML and CSS. My skills in front-end and back-end development, coupled with my passion for delivering high-quality software solutions, make me an ideal candidate for your team.
  
I have worked on numerous projects throughout my career and I am confident that I can make valuable contributions to your organization. If there are any current or future job opportunities that align with my skills and experience, I would welcome the chance to discuss them further with you.
  
Thank you for considering my application. I look forward to hearing back from you soon.

Best regards,
Riyad Hasan

Call:  +880 1830799683
linkedin : https://www.linkedin.com/in/riyad-hasan-ab2867210/
Portfolio: https://developer-riyad.netlify.app/
`;
  //   document.getElementById("ProgrammerEmail-message").innerText = emailOutput;
  document.getElementById("email-result").innerText = emailOutput;
  navigator.clipboard.writeText(emailOutput).then(
    function () {
      console.log("done")
    },
    function () {
      console.log("error")
    }
  );
};
const generatorRecommend = () => {
  let name = document.getElementById("emailFirstName").value;
  let profession = document.getElementById("profession").value;
  let emailTargetWebsite = document
    .getElementById("emailTargetWebsite")
    .value.split(".com")[0];
  //   JavaScript, TypeScript, HTML, CSS, Bootstrap, SASS, React.JS, Redux, React bootstrap, nodeJS, ExpressJS and MongoDB.
  const emailOutput = `Hi ${name},

I hope this message finds you well. I noticed that you are a ${profession} at ${emailTargetWebsite}, where I am interested in applying for a position as Web Developer. I was impressed with your profile and experience at the company and would love to connect with you and hear more about your experience there.
Additionally, I was hoping to ask if you would be willing to provide a recommendation for me based on your experience working with me, or if you could connect me with someone who could speak to my skills and experience. I believe a recommendation from someone at ${emailTargetWebsite} would be incredibly valuable to my application, and I would be grateful for any help you can provide.
  
Thank you for your time and consideration, and I look forward to hearing back from you soon.
  
Best regards,
Riyad Hasan
`;
  //   document.getElementById("ProgrammerEmail-message").innerText = emailOutput;
  document.getElementById("email-result").innerText = emailOutput;
  navigator.clipboard.writeText(emailOutput).then(
    function () {
      console.log("done")
    },
    function () {
      console.log("error")
    }
  );
};

//cover letter
const generatorCoverLetter = () => {
  let name = document.getElementById("emailFirstName").value;
  let profession = document.getElementById("profession").value;
  let emailTargetWebsite = document
    .getElementById("emailTargetWebsite")
    .value.split(".com")[0];
  //   JavaScript, TypeScript, HTML, CSS, Bootstrap, SASS, React.JS, Redux, React bootstrap, nodeJS, ExpressJS and MongoDB.
  const emailOutput = `Dear Hiring Manager,

  I am writing to express my interest in the Full Stack Software Engineer position at ${emailTargetWebsite}. With around 3 years of experience as a full stack developer, I am confident in my ability to contribute to your team and help drive the success of your company.
  
  My technical skills include proficiency in front-end and back-end development, along with experience in various programming languages such as HTML, CSS, JavaScript, React, Node.js, and MongoDB. I am also familiar with agile methodologies and have worked collaboratively with team members to develop and launch successful projects.
  
  What sets me apart is my passion for delivering high-quality software solutions that meet user needs and exceed expectations. I have a keen eye for detail, a strong work ethic, and excellent problem-solving abilities, which have helped me deliver outstanding results in my previous roles.
  
  I am particularly excited about the opportunity to join ${emailTargetWebsite} because of the company's reputation for innovation and excellence in software development. Your commitment to delivering cutting-edge solutions and your focus on building strong relationships with customers align with my own values and aspirations.
  
  I would welcome the opportunity to speak with you further about how I can contribute to your team and help drive your success. Thank you for your time and consideration.
  
  Sincerely,
  
  Riyad Hasan
  01852527707
`;
document.getElementById("email-result").innerText = emailOutput;
  navigator.clipboard.writeText(emailOutput).then(
    function () {
      console.log("done")
    },
    function () {
      console.log("error")
    }
  );
};

// accountant  mail massage generator
const generateJObMail = () => {
  let HRName = document.getElementById("HRName").value;

  let jobLocation = document.getElementById("jobLocation").value;

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

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
`;
  document.getElementById("email-message").innerText = emailOutput;
  navigator.clipboard.writeText(emailOutput).then(
    function () {
      alert("Copied successfully ");
    },
    function () {
      console.log("error")
    }
  );
};

function copyHRMail() {
  let HRName = document.getElementById("HRName").value;
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

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
   
   
`;
  document.getElementById("email-message").innerText = emailOutput;
  navigator.clipboard.writeText(emailOutput).then(
    function () {
      alert("Copied successfully ");
    },
    function () {
      console.log("error")
    }
  );
}

//programmer mail generator
const generateProgrammerJObMail = () => {
  let HRName = document.getElementById("ProgrammerHRName").value;
  let jobLocation = document.getElementById("ProgrammerJobLocation").value;
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;

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
`;
  document.getElementById("ProgrammerEmail-message").innerText = emailOutput;
  navigator.clipboard.writeText(emailOutput).then(
    function () {
      alert("Copied successfully ");
    },
    function () {
      alert("Fail to copy ");
    }
  );
};

function copyProgrammerHRMail() {
  let HRName = document.getElementById("ProgrammerHRName").value;

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

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
   
   
`;
  document.getElementById("ProgrammerEmail-message").innerText = emailOutput;
  navigator.clipboard.writeText(emailOutput).then(
    function () {
      alert("Copied successfully ");
    },
    function () {
      alert("Fail to copy ");
    }
  );
}

// check leap year
const checkLeapYear = () => {
  const year = document.getElementById("year-input").value;
  if (year < 4) {
    document.getElementById(
      "leapYear-result"
    ).innerText = `please enter valid year`;
  } else if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    document.getElementById(
      "leapYear-result"
    ).innerText = `${year}  is a leap year`;
  } else {
    document.getElementById(
      "leapYear-result"
    ).innerText = `${year}  is not not a leap year`;
  }
};
const checkFactorial = () => {
  const factorial = document.getElementById("factorial-input").value;
  let factorialNumber = 1;
  if (factorial < 1) {
    document.getElementById(
      "factorial-result"
    ).innerText = `enter a valid number`;
  } else {
    for (let i = 1; i <= factorial; i++) {
      factorialNumber = factorialNumber * i;
      document.getElementById("factorial-result").innerText = factorialNumber;
    }
  }
};
//check the  fibonacci number
const checkFibonacci = () => {
  const fibonacciNumber = document.getElementById("fibonacci-input").value;
  console.log(typeof fibonacciNumber);

  if (fibonacciNumber == " ") {
    document.getElementById("fibonacci-result").innerText =
      "please enter a valid number";
  } else {
    let initialNumbers = [0, 1];
    const fibonacciNumber = document.getElementById("fibonacci-input").value;
    for (let i = 2; i <= fibonacciNumber; i++) {
      initialNumbers[i] = initialNumbers[i - 1] + initialNumbers[i - 2];
    }
    document.getElementById("fibonacci-result").innerText = initialNumbers;
  }
};

//prime number checkered

const checkPrime = () => {
  const initialNumber = document.getElementById("prime-input").value;
  // let isPrime = true;

  if (initialNumber <= 1) {
    document.getElementById(
      "prime-result"
    ).innerText = `${initialNumber}  is neither prime nor composite number.`;
  } else if (initialNumber > 2) {
    for (let i = 2; i < initialNumber; i++) {
      if (initialNumber % i == 0) {
        document.getElementById(
          "prime-result"
        ).innerText = `${initialNumber} is not a prime number`;
        break;
      } else {
        document.getElementById(
          "prime-result"
        ).innerText = `${initialNumber} is a prime number`;
      }
    }
  } else {
    document.getElementById(
      "prime-result"
    ).innerText = `${initialNumber} is a prime number`;
  }
};
const conditionalSum = () => {
  for (let i = 0; i < array.length; i++) {
    const element1 = array[i];
    for (let i = 0; i < array.length; i++) {
      const element2 = array[i];
    }
    if (element1 + element2 === 30) {
      console.log(`the number is`);
    }
  }
};
//swap variable
const swapVariable = () => {
  let swapInputA = document.getElementById("swap-input-a").value;
  let swapInputB = document.getElementById("swap-input-b").value;
  // let emptySwap = swapInputA
  // swapInputA = swapInputB
  // swapInputB = emptySwap
  [swapInputA, swapInputB] = [swapInputB, swapInputA];
  document.getElementById(
    "swap-result"
  ).innerText = `A = ${swapInputA} B = ${swapInputB}`;
};
const checkRandomNumber = () => {
  const inputNumber = document.getElementById("random-input").value;
  const randomNumber = Math.random() * inputNumber;

  document.getElementById("random-result").innerText = Math.round(randomNumber);
};

const getMaximumNumber = () => {
  const number = getInputParsedNumber("user-number-input");
  let maxNum = number[0];
  number.forEach((num) => {
    if (num > maxNum) {
      maxNum = num;
    }
  });
  document.getElementById("maximum-result").innerText = maxNum;
};
const getSumNumber = () => {
  let number = getInputParsedNumber("user-sum-input");
  let sum = number[0];
  number.forEach((number) => {
    sum = sum + number;
  });
  document.getElementById("sum-result").innerText = sum;
};
//remove duplication form an array
const handleDuplicate = () => {
  let number = getInputParsedNumber("user-duplication-input");
  const uniqueNumber = [];
  number.forEach((number) => {
    if (uniqueNumber.indexOf(number) == -1) {
      uniqueNumber.push(number);
    }
  });
  document.getElementById("duplication-result").innerText = uniqueNumber;
};
//count word
const handleCountWords = () => {
  const words = document.getElementById("user-word-input").value;
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    const character = words[i];
    if (character == " " && words[i - 1] != " ") {
      count++;
    }
  }
  count++;
  document.getElementById("word-result").innerText = count;
};
//reverse string
const handleReverseString = () => {
  const reversString = document.getElementById("reverse-word-input").value;
  let newReversedString = "";
  for (let i = 0; i < reversString.length; i++) {
    const character = reversString[i];
    newReversedString = character + newReversedString;
  }
  document.getElementById("reverse-result").innerText = newReversedString;
};
//kilometer to meter
const handleKloToMeter = () => {
  const kilometer = document.getElementById("kilo-input").value;
  if (kilometer <= 0) {
    document.getElementById("meter-result").innerText =
      "kilometer can not be negative";
  } else {
    document.getElementById("meter-result").innerText =
      kilometer * 1000 + " meter";
  }
};
const handleBudgetCalculator = () => {
  const watchQuantity = getInputNumbers("watch-number");
  const phoneQuantity = getInputNumbers("phone-number");
  const laptopQuantity = getInputNumbers("laptop-number");
  if (watchQuantity <= 0 || phoneQuantity <= 0 || laptopQuantity <= 0) {
    document.getElementById("budget-calculation-result").innerText =
      "please enter a valid number";
  } else {
    document.getElementById("budget-calculation-result").innerText =
      watchQuantity * 50 + phoneQuantity * 100 + laptopQuantity * 500 + " tk";
  }
};
const getInputNumbers = (id) => {
  const userNumber = document.getElementById(id).value;
  return userNumber;
};

const getInputParsedNumber = (id) => {
  const inputNumber = document.getElementById(id).value;
  let stringNumbers = [];
  let NumberAfterString = [];
  stringNumbers.push(inputNumber);
  stringNumbers = stringNumbers.map((number) => number.split(","));
  stringNumbers[0].forEach((number) => {
    NumberAfterString.push(parseInt(number));
  });
  return NumberAfterString;
};
