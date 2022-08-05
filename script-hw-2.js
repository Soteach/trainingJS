// ------------------------Задача - 1-----------------------------------
// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// console.log(checkAge(18));

// ------------------------Задача - 2-----------------------------------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line


//   if (password === ADMIN_PASSWORD) {
//    return "Welcome!";
//     }
//     return "Access denied, wrong password!";
//   }

// console.log(checkPassword("jqueryismyjam"));
//   // Change code above this line

// ---------------------------------Задача - 3--------------------------------

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//      return "Your order is empty!";
       
//     }
    
//   if (ordered > available) {
//       return "Your order is too large, not enough goods in stock!";
    
//     }

//     return "The order is accepted, our manager will contact you";
//   }

//   // Change code above this line

// console.log(checkStorage(150, 100));

// ------------------------------------Задача 4-------------------------------------
// const fruits = ["apple", "plum", "pear", "orange"]

// console.log(fruits);

// ------------------------------------Задача5-----------------------------------------
// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// console.log(lastElement);

// ------------------------------------Задача6-----------------------------------------
// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana"

// console.log(fruits);
// ------------------------------------Задача7-----------------------------------------
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

// ------------------------------------Задача8-----------------------------------------
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];


// console.log(lastElementIndex);
// console.log(lastElement);

// ------------------------------------Задача9-----------------------------------------
// function getExtremeElements(array) {
//   // Change code below this line
//     const massive = [array[0],array[array.length-1]];
//   return massive;

//   // Change code above this line
// }
// function getExtremeElements(array) {
//     // Change code below this line

//     return [array[0], array[array.length - 1]];

//     // Change code above this line
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
//     console.log(getExtremeElements([1, 2, 3, 4, 5]));

// // ------------------------------------Задача10-----------------------------------------
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//     words = message.split(delimeter);
    
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));

// ------------------------------------Задача11-----------------------------------------
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     let words;
//     let total;
//     words = message.split(" ");
//     console.log(words);
//     total = Number(words.length) * Number(pricePerWord);
//     console.log(total);
//     return total;

//    // Change code above this line
// }
// calculateEngravingPrice("Web-development is creative work", 10)

// ------------------------------------Задача12-----------------------------------------
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line

//     string = array.join(delimeter);
// console.log(string);
//   // Change code above this line
//   return string;
// }

// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");

// ------------------------------------Задача13-----------------------------------------
// function slugify(title) {
//   // Change code below this line
//     let slug;
//     let string;
//     // return title.toLowerCase().split(" ").join("-"); можна так
//     title = title.toLowerCase();
//     console.log(title);
//     slug = title.split(" ");
//     console.log(slug);
//     string = slug.join("-");
//     return string;
    

//   // Change code above this line
// }
// console.log(slugify("Arrays for begginers"));

// ------------------------------------Задача14-----------------------------------------
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// ------------------------------------Задача15-----------------------------------------
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);

// ------------------------------------Задача16-----------------------------------------
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
         
//    const allArray = firstArray.concat(secondArray);
//     if (allArray.length > maxLength) {
//         return allArray.slice(0, maxLength);
//     }
//     return allArray;
    
//   }


// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 1));

// ------------------------------------Задача17-----------------------------------------
// const start = 3;
// const end = 7;

// for (let i = start; i <= end ; i += 1) { // Change this line
//   console.log(i);
// }

// ------------------------------------Задача18-----------------------------------------
// function calculateTotal(number) {
//  // Change code below this line
//     let sum = 0;
//     for (let i = 0; i <= number; i += 1){
//         sum += i;
//         // sum=sum+i;
//         console.log(sum);
//     }
// return sum

//   // Change code above this line
// }
// console.log(calculateTotal(24));

// ------------------------------------Задача19-----------------------------------------

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0 ; i<fruits.length; i+=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//     console.log(fruit);
// }


// ------------------------------------Задача20-----------------------------------------
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//     for (let i = total; i<order.length; i += 1) {
//         total += order[i];
//     }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// ------------------------------------Задача21-----------------------------------------
// function findLongestWord(string) {
//   // Change code below this line
//     let words = string.split(" ");
//     let longestWord = words[0];
//     for (let i = 0; i < words.length; i += 1){
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumpedhhh over the lazy dog"));

// ------------------------------------Задача22-----------------------------------------
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//     for (let i = min-1; i < max; i += 1){
//         numbers.push(i+1);
//     }

//   // Change code above this line
//   return numbers;
// }


// console.log(createArrayOfNumbers(14, 17));

// ------------------------------------Задача23-----------------------------------------
// function filterArray(numbers, value) {
//    // Change code below this line
//     const newArr = [];
//     for (let i = 0; i < numbers.length; i += 1){
    
//         if (numbers[i] > value) {
//             newArr.push(numbers[i])
//         }
//     }
//     return newArr;

//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// -------------------------------------Задача24-----------------------------------------------
// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
    
//     return fruits.includes(fruit);
// }
// -------------------------------------Задача25-----------------------------------------------
// function getCommonElements(array1, array2) {
//   // Change code below this line
//     let newArr = [];
//     for (let element of array1) {
//         if (array1.includes(element) && array2.includes(element)) {
//             newArr.push(element)
//         }
//     } return newArr;



//  // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));

// --------------------------------або так через перебір елеменнтів масиву---------------------------------

// function getCommonElements(array1, array2) {
//   // Change code below this line
//     let newArr = [];
    
//     for (let i = 0; i < array1.length;i+=1){
//     if (array2.includes(array1[i])) {
//         newArr.push(array1[i]);
//         }
//     }
//     return newArr;
//     }



//  // Change code above this line


// console.log(getCommonElements([1, 2, 4], [2, 4]));

// -------------------------------------Задача26-----------------------------------------------

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

// //   for (let i = 0; i < order.length; i += 1) {
// //     total += order[i];
// //     }
    
//     for (const price of order) {
//         total += price;
//     }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// -------------------------------------Задача27-----------------------------------------------
// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];

//     //   for (let i = 0; i < numbers.length; i += 1) {
//     //     const number = numbers[i];

//     //     if (number > value) {
//     //       filteredNumbers.push(number);
//     //     }
//     //   }
    
//     for (const number of numbers) {
//         if (number > value) {
//             filteredNumbers.push(number);
//             //     }
//         }

        
//         // Change code above this line
//     }return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// -------------------------------------Задача28-----------------------------------------------
// const a = 3 % 3 ;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// -------------------------------------Задача29-----------------------------------------------
// function getEvenNumbers(start, end) {
//    // Change code below this line
//     let evenNumArr = [];

    
//     for (let i = start; i <= end; i += 1) {
        

//         if (i % 2 === 0) {
//             evenNumArr.push(i);
//         }
//     }
//     return evenNumArr;

//     // Change code above this line
//   }

// console.log(getEvenNumbers(2, 5));

// -------------------------------------Задача30-----------------------------------------------

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//       number = i;
//       break;
//   }
// }

// -------------------------------------Задача31-----------------------------------------------
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return  i;
//       }
//   }

//   return number;
//   // Change code above this line
// }


// -------------------------------------Задача32-----------------------------------------------
// function includes(array, value) {
//   // Change code below this line
//     for (let i = 0; i < array.length; i += 1){
//         if (array[i] === value) {
//             return true;
//         }
//     } return false;
        
//   // Change code above this line
// }

