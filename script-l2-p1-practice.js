// ---------------------------------------Задача1---------------------------------------
//порахувати загальну суму покупок в кошику

// const cart = [54, 28, 105, 70, 92, 17, 120];
// // // 2.
// let total = 0;
// // 1.перебрати масив
// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);
//     total += cart[i];
//     // total = total+cart[i];
// }
// // // 2.Зробити змінну total до циклу

// console.log("total :",total);
// // 3. Кожен елемент додати до total

// Додати податок

// for (let i = 0; i < cart.length; i = +1) {
//     cart[i] = Math.round(cart[i] * 1.1);
// }
// console.log(cart);

// for (let value of cart) {
//     total += value;
// }
// console.log("total :",total);
// ---------------------------------------Задача2---------------------------------------

// Напиши скрипт, що підраховує суму всіх парних чисел в масиві

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11,22];

// // 1 Визначити змінну тотал
// let total = 0;
// 2.Перебрати масив
// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);

//     // 3. На кожній ітерації перевірити елемент на парність
//     if (numbers[i] % 2 === 0) {
//         console.log('Парне!');
//         // 4.Якщо парний додаємо до тотал
//         total += numbers[i];
//     }
// }
// ----за допомогою for of---------------
// for (const number of numbers) {
//     console.log(number);

//     if (number % 2 === 0) {
//         console.log("Парне!");
//         total += number;
//     }
// }

// console.log(`Total: `,total)


// ----------------------Задача3--------------------------
// Напиши скрипт пошуку логіна.
// Якщо логіна немає, вивести повідомлення: "Користувач [логін] не знайдений"
// Якщо знайшли логін, вивести повідомлення: "Користувач [логін] знайдено"

// спочатку через for
// потім через for...of
// логіка break
// метод includes() з тернарним оператором

// const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
// const loginToFind = "poly1scute";
// let message = ''

// for (let i = 0; i < logins.length; i += 1){
//     const login = logins[i];
//     console.log(`Login: `, login);

//     // if (login !== loginToFind) {
//     //     message = `користувач ${loginToFind} не знайдений`;
//     // від зворотного
//         if (login === loginToFind) {
//         message = `користувач ${loginToFind} знайдений`;
//         break
//     }
//     message = `користувач ${loginToFind} не знайдений`;
// }
    // console.log(login);

// ----------------------З використанням for ... of-------------------------
// for (const login of logins) {
//     console.log(`Login: `, login);
//     if (login === loginToFind) {
//         message = `користувач ${loginToFind} знайдений`;
//         break
//     }
// }

// console.log(message);

// ---------------------------------includes-------------------------------
// console.log(logins.includes(loginToFind));

// -------------------------додаємо тернарник------------------------
// const message = logins.includes(loginToFind) ? "так" : "ні";
// console.log(message);

// -----------------------------Задача 4-------------------------------------
// Напиши скрипт пошуку самого маленького числа в масиві
// при умові, що числа унікальні - не повторюються

// const numbers = [51, 18, 13, 24, 7, 85, 19];

// let smallestNumber = numbers[0];


// for (const number of numbers) {
//     console.log(number);

//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log(`найменшим з ${numbers} є число`, smallestNumber);

// -----------------------------Задача 4-------------------------------------
// Напиши скрипт пошуку самого великого числа в масиві
// при умові, що числа унікальні - не повторюються

// const numbers = [51, 18, 13, 24, 7, 85, 19];

// let biggestNumber = numbers[0];


// for (const number of numbers) {
//     console.log(number);

//     if (number > biggestNumber) {
//         biggestNumber = number;
//     }
// }
// console.log(`найбільшим з ${numbers} є число`, biggestNumber);


// -----------------------------Задача 5-------------------------------------
// Напиши скрипт, що обєднує всі елементи масиву в одне - рядкове значення
// Елементів може бути довільна кількість
// спочатку черезfor
// потім через join

const friends = ["Mango", "Poly", "Kiwi", "Alex"];
// let string = '';

// // цикл for
// for (let i = 0; i < friends.length; i += 1){
//     string += i;
// };
// console.log(friends);

// for ...of
// for (const friend of friends) {
//     string += friend + ",";
    
// }
// string = string.slice(0, string.length - 1);
// console.log(string);

// ------------------------------Join------------------------------------
const string = friends.join('-');

console.log(string);