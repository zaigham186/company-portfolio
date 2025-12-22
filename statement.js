// console.log("grading system in js")
// function calculateGrade(score) {
//     if (score >= 100) {
//         return "A+";
//     } else if (score >= 90) {
//         return "A";
//     } else if (score >= 80) {
//         return "B";
//     } else if (score >= 70) {
//         return "C";
//     } else if (score >= 60) {
//         return "D";
//     }
//     else {
//         return "F";
//     }
// }

// console.log(calculateGrade(98)); // Output: B


// console.log("Age based Access checker")
// function checkAccess(age) {
//     if (age < 13) {
//         return "Child - Limited access";
//     } else if (age >= 13 && age < 18) {
//         return "Teen - Partial access";
//     } else if (age >= 18 && age < 65) {
//         return "Adult - Full access";
//     } else {
//         return "Senior - Special access";
//     }
// }

// console.log(checkAccess(45)); // Output: Adult - Full access
// console.log("done");

// 

// let fruit = "Kiwano";
// let message;

// switch(fruit) {
//     case "Apple":
//     case "Banana":
//     case "Orange":
//         message = "This is a common fruit";
//         break;
//     case "Dragonfruit":
//     case "Kiwano":
//         message = "This is an exotic fruit";
//         break;
//     default:
//         message = "Unknown fruit";
// }
// console.log(message);

// let num = "5";
// switch(num) {
//     case 5:
//         console.log("Number 5");
//         break;
//     case "5":
//         console.log("String '5'"); // This will execute
//         break;
// }

// let operator = '*';
// let num1 = 10, num2 = 5;
// let result;

// switch(operator) {
//     case '+':
//         result = num1 + num2;
//         break;
//     case '-':
//         result = num1 - num2;
//         break;
//     case '*':
//         result = num1 * num2;
//         break;
//     case '/':
//         result = num1 / num2;
//         break;
//     default:
//         result = "Invalid operator";
// }

// console.log(result); // Output: 15


//logical operator questions//
// let age= ("what is your age?")
// console.log(age)
// if(age>16 && age>20){
//     console.log("your age lie between 10 and 20")
// }
// else{
//      console.log("your age doesnot lie between 10 and 20")
// }

// let age=5;
// let result;
// switch(age){
//     case 1:
//         console.log("your age is 1")
//         break;
//         case 2:
//             console.log("your age is 2")
//             break;
//             case 3:
//                 console.log("your age is 3")
//                 break;
            
//                 case 4:
//                     console.log("your age is 4")
//                     break
//                     case 5:
//                         console.log("yor age is 5")
//                         break
//                         case 6:
//                             console.log("your age is 6")
//                             break
//                             default:
//                                 console.log("your age is not speciaL")
//                                 break
// }
// console.log(result);

// let num=("what is your age?")
// num= Number.parseInt(num)
// if(num % 2==0  && 3==0){
//     console.log("your number is divisible by 2 and 3")
// }
// else{
//     console.log("Your number is not divisible by 2 and 3")
// }
//terenary operator//
// let age=17
// let a= age>18 ? "you can drive": "you cannot drive"
// console.log(a)

// console.log("grading system in js")
// function CalculateGrade(score) {
//     if(score>=100){
//         console.log("A+")
//     }else if (score>=90){
//         console.log("A")
//     }else if(score >=80){
//         console.log("B+")
//     }else if(score>=70){
//         console.log("B-")
//     }else if(score>=60){
//         console.log("C")
//     }else if(score>=50){
//         console.log("D")
//     }else if(score>=40){
//         console.log("D+")
//     }else{
//         console.log("F")
//     }
// }
// console.log(CalculateGrade(78));

// console.log("Aged based checker system")
// function checkAccess(age){
//     if(age <13){
//         console.log("you are a child")
//     }else if(age>13 && age<18){
//         console.log("you are an teenager")
//     }else if(age>18 && age<60){
//         console.log("yoyu are an adult")
//     }else{
//         console.log("you are an senior citizen")
//     }
// }
// console.log(checkAccess(5));
// Function to check if a number is Armstrong using if-else and for loop
// function isArmstrongForLoop(number) {
//     let sum = 0;
//     const digits = String(number).split('');
//     const power = digits.length;
    
//     for (let i = 0; i < digits.length; i++) {
//         sum += Math.pow(parseInt(digits[i]), power);
//     }
    
//     if (sum === number) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // Function to check using while loop
// function isArmstrongWhileLoop(number) {
//     let sum = 0;
//     let temp = number;
//     const power = String(number).length;
    
//     while (temp > 0) {
//         const digit = temp % 10;
//         sum += Math.pow(digit, power);
//         temp = Math.floor(temp / 10);
//     }
    
//     return sum === number;
// }

// // Function to check using do-while loop
// function isArmstrongDoWhile(number) {
//     let sum = 0;
//     let temp = number;
//     const power = String(number).length;
    
//     do {
//         const digit = temp % 10;
//         sum += Math.pow(digit, power);
//         temp = Math.floor(temp / 10);
//     } while (temp > 0);
    
//     return sum === number;
// }

// // Function to demonstrate switch case
// function checkArmstrongWithSwitch(number) {
//     const methods = ['for', 'while', 'do-while'];
//     const randomMethod = methods[Math.floor(Math.random() * methods.length)];
//     let result;
    
//     switch (randomMethod) {
//         case 'for':
//             result = isArmstrongForLoop(number);
//             console.log(`Checked with for loop: ${number} is ${result ? '' : 'not '}an Armstrong number`);
//             break;
//         case 'while':
//             result = isArmstrongWhileLoop(number);
//             console.log(`Checked with while loop: ${number} is ${result ? '' : 'not '}an Armstrong number`);
//             break;
//         case 'do-while':
//             result = isArmstrongDoWhile(number);
//             console.log(`Checked with do-while loop: ${number} is ${result ? '' : 'not '}an Armstrong number`);
//             break;
//         default:
//             console.log('Invalid method');
//     }
    
//     return result;
// }

// // Test the functions
// const testNumber = 153; // Try with 153, 370, 371, 407, etc.

// console.log(`Testing Armstrong number check for ${testNumber}:`);
// console.log(`Using for loop: ${isArmstrongForLoop(testNumber)}`);
// console.log(`Using while loop: ${isArmstrongWhileLoop(testNumber)}`);
// console.log(`Using do-while loop: ${isArmstrongDoWhile(testNumber)}`);
// console.log('Using random method with switch:');
// checkArmstrongWithSwitch(testNumber);
// let sum=0;
// let n= ("enter the value of n")
// n= Number.parseInt(n)
// for(let i=0; i<n; i++){
//     sum +=(i+1)
//     console.log((i+1), "+")
// }
// console.log( "sum of first" +n+ " natural number is" +sum)

// let obj={
//     harry:90,
//     shubh:45,
//     shvika:56,
//     ritika:57,
//     shiv:67,
// }
// for(let a in obj){
//     console.log("marks of"+ a+"are" +obj[a])
// }
// //for of loop
// for(let b of "harry"){
//     console.log(b)
// }

// for (let i=0; i<88; i++){
//     console.log(i)
// }

// // let fruits=["Apple", "banana", "cherry"];
// // for (let i=0; i< fruits.length; i++){
// //     console.log(fruits[i]);
// // }

// // let person={ name:"ali", age: 25, city: "lahore"};

// // for (let key in person){
// //     console.log(key + ":" +person[key]);
// // }

// let fruits =["apple", "banana", "anar", "cherry"];
// for (let index in fruits){
//     console.log(index);
//     console.log(fruits[index]);
// }
// let fruits1 =["apple", "banana", "mango"];
// for (let fruit of fruits){
//    console.log(fruits1)
// }

// let name= "zaigham";
// for (let char of name){
//     console.log(char);
// }
// let i= 0;
// while(i<78){
//     console.log(i)
//     i++;
// }

// Number Guessing Game
// const secretNumber = Math.floor(Math.random() * 100) + 1;
// let attempts = 0;
// let guess;

// console.log("Welcome to the Number Guessing Game!");
// console.log("I'm thinking of a number between 1 and 100.");

// while (true) {
//   guess = parseInt(("Enter your guess:"));
//   attempts++;
  
//   if (guess === secretNumber) {
//     console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
//     break;
//   } else if (guess < secretNumber) {
//     console.log("Too low! Try again.");
//   } else {
//     console.log("Too high! Try again.");
//   }
  
//   if (attempts >= 10) {
//     console.log(`Game over! The number was ${secretNumber}.`);
//     break;
//   }
// }

// let i=1;
// while(i <=5){
//     console.log(i)
//     i++;
// }


// let j=1;
// do{
//     console.log(j)
//     j++;
// }while(j <= 5)

// for (let i=1; i<=10; i++){
//     if(i ==5){
//         break;
//     }
//     console.log(i);
// }

// for (let i=1; i <=5; i++){
//     if(i==3){
//         continue;
//     }
//     console.log(i);
// }

// const number =5;
// for (let i=1; i<=10; i++){
//     console.log(`${number} * ${i} = ${number * i}`);
// }

let addressBook = [
  { name: "Ali", phone: "03001234567", email: "ali@mail.com" },
  { name: "Sara", phone: "03211234567", email: "sara@mail.com" }
];

// Add new contact
addressBook.push({ name: "Ahmed", phone: "03121234567", email: "ahmed@mail.com" });

// Display contacts
for (let contact of addressBook) {
  console.log(`${contact.name} - ${contact.phone} - ${contact.email}`);
}

// Find a contact
function findContact(name) {
  for (let contact of addressBook) {
    if (contact.name === name) {
      return contact;
    }
  }
  return "Not found";
}

console.log(findContact("Sara"));
