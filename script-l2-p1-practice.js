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

// const friends = ["Mango", "Poly", "Kiwi", "Alex"];
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
// const string = friends.join('-');

// console.log(string);


// -----------------------------Задача 6-------------------------------------
// написати скрипт, що заміняє регістр кожного символу в рядку на протилежний

// const string = 'JavaScript';

// const letters = string.split('');
// let invertedString = '';
// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

//     //     if (letter === letter.toLowerCase()) {
//     //         console.log('Ця буква в нижньому регістрі', letter);

//     //         invertedString += letter.toUpperCase();
//     //     } else {
//     //         invertedString += letter.toLowerCase();
//     //     }
//     // }
// // ------------------або за допомогою тернарного виразу------------------------------
//     invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() :letter.toLowerCase();
    
// }

// console.log(invertedString);

// -----------------------------Задача 7-------------------------------------
// робимо slug в URL з назви статті (наприклад на dev.to)
// заголовок статті складається тільки з букв та пробілів

// -нормалізуємо рядок
// -розбиваємо по словам
// -зшиваємо в рядок з роздільниками

// const title = 'Top 10 benefits of React framework';

// // const normalizedTitle = title.toLowerCase();
// // console.log(normalizedTitle);

// // const words = normalizedTitle.split(' ');
// // console.log(words);

// // const slug = words.join('-');
// // console.log(slug);

// // -------або так---------------
// const slug = title.toLowerCase().split(' ').join('-');

// console.log(slug);

// -----------------------------Задача 8-------------------------------------
// напиши скрипт який рахує суму елементів 2-х масивів

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// let total = 0;
// const numbers = array1.concat(array2);
// console.log(numbers);

// for (const number of numbers) {
//     total += number;
// }
// console.log(total);

// -----------------------------Задача 9-------------------------------------
// працюємо з колекцією карток в трелло
// метод splice
// видалити
// додати
// обновити

// const cards = ["Картка - 1", "Картка - 2", "Картка - 3", "Картка - 4", "Картка - 5", "Картка - 6",];

// console.table(cards);

// // -------------------видалення елементів по індексу indexOf()--------------------------------
// const cardToRemove = "Картка - 3";
// const index = cards.indexOf(cardToRemove);

// console.log(index);

// cards.splice(index, 1);
// console.table(cards);

// // ------------------додавання (добавка) елементів по індексу indexOf()------------------------

// // const cardToInsert = "Картка - 6";
// // const index = 3;

// // cards.splice(1, 0, 5, 10, 20);
// // console.table(cards);

// // ------------------оновлення  елементів по індексу ------------------------
// const cardToUpdate = "Картка - 4";

// const index = cards.indexOf(cardToUpdate);
// console.log(index);
// cards.splice(index, 1, "Оновлена картка - 4");

// console.table(cards);