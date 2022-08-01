// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity*pricePerItem;

//   // Change code above this line
//   return totalPrice;
// };

// console.log(calculateTotalPrice(12, 70));


// ----------------------------p 1-12--------------------------------------
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
// const makeOrderMessage = orderedQuantity*pricePerDroid+deliveryFee;
// const message = `You ordered droids worth ${makeOrderMessage} credits. Delivery (${deliveryFee} credits) is included in total price.`;


//   // Change code above this line
//   return message;
// }

// console.log (makeOrderMessage(2, 100, 50));
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);

// ----------------------------p 1-13--------------------------------------
// function isAdult(age) {
//   // Change code below this line
//   const passed = age >=18 ;

//   // Change code above this line
//   return passed;
// }

// console.log(isAdult(32));
// // isAdult(14);
// isAdult(8);
// isAdult(37);

// ----------------------------p 1-14--------------------------------------

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = SAVED_PASSWORD===password;

//   // Change code above this line
//   return isMatch;
// }

// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword("jqueryismyjam"));

// ----------------------------p 1-15--------------------------------------
// function checkAge(age) {
//   let message;

//   if (age >=18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }
// console.log(checkAge(5));
// console.log(checkAge(25));

// ----------------------------p 1-16--------------------------------------
// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//     if (available < ordered ) {
//         message = "Not enough goods in stock!";
        
//         return message;
//     }
//     else  {
//         // Change code above this line
//         message = "Order is processed, our manager will contact you.";
//     return message;
//     }
// }
// console.log(checkStorage(160,170));

// ----------------------------p 1-17--------------------------------------
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;


// console.log(a);

// ----------------------------p 1-18--------------------------------------
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//     let totalPrice = pricePerDroid * orderedQuantity;
//     // Change code above this line
//     if (customerCredits < totalPrice) {
//         message = "Insufficient funds!";
//         return message;
//     }
      
//     else {
//         message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//           return message;
//     }
// }

// console.log(makeTransaction(5000, 10, 80000));

// ----------------------------p 1-19--------------------------------------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password===null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password===ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword(null));

// ----------------------------p 1-20--------------------------------------
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// if(ordered===0){
//   message = "There are no products in the order!";
//    return message;
// }
//   // Change code above this line
//   else if(available < ordered){
//     message = "Your order is too large, there are not enough items in stock!";
//     return message;
//   }
  

// else {
//     message = "The order is accepted, our manager will contact you";
//   return message;
// }
// }

// console.log(checkStorage(100, 0));

// ----------------------------p 1-21--------------------------------------

// function isNumberInRange(start, end, number) {
//     let message;
//     if (number >= start && number <= end) { // Change this line
//         message = `число ${number} входить в проміжок від ${start} до ${end}`;
//           return message;
//     }
// else {
//             message = `число ${number} не входить в проміжок від ${start} до ${end}`;
//             return message;
//         }
//     }

// console.log(isNumberInRange(0,5,8));

// ----------------------------p 1-22--------------------------------------
// function checkIfCanAccessContent(subType) {
//     let message;
//     if (subType === "pro" || subType === "vip") {// Change this line
//         message = `Ваш доступ ${subType} підтверджено. Ласкаво просимо!`;
//         return message;
//     }
//     else {
//         message = `Ваш доступ ${subType} недостатній для входу!`;
//          return message;
//     }
  
// }

// console.log(checkIfCanAccessContent("pro"));

// ----------------------------p 1-23--------------------------------------

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange ; // Change this line

//   return isNotInRange;
// }


// ----------------------------p 1-24--------------------------------------
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//     let discount;
//     let message;
//   // Change code below this line
//     if (totalSpent >= 50000) {
//         discount = GOLD_DISCOUNT;
//         message=`Твоя знижка ${discount*100} %`;
//         return message;
//     } else if (totalSpent >= 20000 && totalSpent < 50000) {
//         discount = SILVER_DISCOUNT;
//         message = `Твоя знижка ${discount*100}%`;
//         // Change code above this line
//         return message;
//     }
//     else if (totalSpent >= 5000 && totalSpent < 20000) {
//         discount = BRONZE_DISCOUNT;
//         message = `Твоя знижка ${discount*100} %`;
//         // Change code above this line
//         return message;
//     }
//     else {
//         discount = BASE_DISCOUNT;
//         message = `Твоя знижка ${discount} %`;
//         // Change code above this line
//         return message;}
// }

// console.log(getDiscount(25000));

// ----------------------------p 1-25--------------------------------------
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   // if (ordered > available) {
//   //   message = "Not enough goods in stock!";
//   // } else {
//   //   message = "The order is accepted, our manager will contact you";
//   // }
// message = (available<ordered)? "Not enough goods in stock!":"The order is accepted, our manager will contact you";

//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 110));

// ----------------------------p 1-26--------------------------------------
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   // if (ordered > available) {
//   //   message = "Not enough goods in stock!";
//   // } else {
//   //   message = "The order is accepted, our manager will contact you";
//   // }
// message = (available<ordered)? "Not enough goods in stock!":"The order is accepted, our manager will contact you";

//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 110));

// ----------------------------p 1-26--------------------------------------
// function checkPassword(password) {
    
//     const ADMIN_PASSWORD = "jqueryismyjam";
    
//   let message;
//   // Change code below this line
// message = (password===ADMIN_PASSWORD)?"Access is allowed":"Access denied, wrong password!";

//   // Change code above this line
//   return message;
// }
// console.log(checkPassword("jqueryismyjam"));

// ----------------------------p 1-27--------------------------------------
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50 ; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// console.log(getSubscriptionPrice("professional"));

// ----------------------------p 1-28--------------------------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   // if (password === null) {
//   //   message = "Canceled by user!";
//   // } else if (password === ADMIN_PASSWORD) {
//   //   message = "Welcome!";
//   // } else {
//   //   message = "Access denied, wrong password!";
//   // }

//   switch(password){
//     case null:
//       message = "Canceled by user!";
//       break;
    
//     case ADMIN_PASSWORD:
//     message = "Welcome!";
//     break;
      
//       default:
//           message = "Access denied, wrong password!";
    
//   }

//   // Change code above this line
//   return message;
// }
// console.log(checkPassword("jqueryismyjam"));


// ----------------------------p 1-29--------------------------------------
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
// switch(country){
//   case "China":
//   message = "Shipping to China will cost 100 credits";
//   break;
//   case "Chile":
//   message = "Shipping to Chile will cost 250 credits";
//   break;
//   case "Australia":
//   message = "Shipping to Australia will cost 170 credits";
//   break;
//   case "Jamaica":
//   message = "Shipping to Jamaica will cost 120 credits";
//   break;

//   default:
//   message = "Sorry, there is no delivery to your country";
// }

//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost("China"));

// ----------------------------p 1-30--------------------------------------

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }
// console.log(getNameLength("joe"));

// ----------------------------p 1-31--------------------------------------

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length ;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length-1];


// console.log(courseTopic.length); // "R"
// console.log(courseTopic[0]); // "r"
// console.log(courseTopic[courseTopic.length-1]);
// // Change code above this line


// ----------------------------p 1-32--------------------------------------
// function getSubstring(string, length) {
//   const substring = (string.slice(0,length)); // Change this line

//   return substring;
// }
// console.log(getSubstring('Hello world', 3));

// ----------------------------p 1-33--------------------------------------

// function formatMessage(message, maxLength) {
//   let result =
//     message.length <= maxLength
//       ? message
//       : message.slice(0, maxLength) + "...";
//   console.log(result);
//   return result;
// }
// console.log(formatMessage("Curabitur ligula sapien", 23))

// ----------------------------p 1-34--------------------------------------

// function normalizeInput(input) {
//   const normalizedInput =input.toLowerCase (); // Change this line

//   return normalizedInput;
// }
// console.log(normalizeInput("This ISN'T SpaM"));

// ----------------------------p 1-35--------------------------------------

// function checkForName(fullName, name) {
//  const result = (fullName.includes(name)); // Change this line
//   return result;
// }
// console.log(checkForName("Sergij Supr", 'Ser'));

// ----------------------------p 1-36--------------------------------------
// function checkForSpam(message) {
//     let result;
    
//     //   Change code below this line
//     // result = false;
//     // if (message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")) {
//     //     result = true;
        
//     // }
//     // return result;

//     result = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale");
        
//     return result;
//     // Change code above this line
// }

// console.log(checkForSpam("Amazing SalE, only tonight!"));
