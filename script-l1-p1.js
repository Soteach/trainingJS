
// ----------------базові арифметичні дії. виведення типів змінних------------------
// const x = 25;

// const y = 10;

// const z = x + y;

// console.log(z);

// const totalPrice = 200.76;

// console.log("Price:", totalPrice);

// const type = typeof "qwqwqw";

// console.log(type);

// -----------------------------оператор alert------------------------------

// console.log("До");
// alert("alert");
// console.log("після");

// const message = "Хочете продовжити підписку?";
// const shouldRenew = confirm(message);
// console.log(shouldRenew);

// let quantity = prompt("введіть кількість товару");
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);


// ----------------парси елементів і вказування знаків після  крапки---------------------

// let elementWith = "50px";
// elementWith = Number.parseInt(elementWith);

// console.log(elementWith);

// let elementHeight = "200.47px";
// elementHeight = Number.parseFloat(elementHeight);

// console.log(elementHeight);

// let salary = 1300.01212;
// salary = Number(salary.toFixed(3));

// console.log(salary);


// ----------------------зведення до степеня--------------------

// const base = 2;
// const power = 6;

// const result = Math.pow(base, power);

// console.log(base**power);

// let base = prompt("input number");

// base = Number(base);

// console.log(base);

// let power = prompt('get power');
// power = Number(power);

// console.log(power);

// const result = base ** power;
// console.log(result);

// ----------------вибір псевдовипадкового числа----------------

// const max = 80 ;
// const min = 30;

// const result = Math.random()*(max-min)+min

// console.log(Math.round(result));

// -------------довжина змінної------------

// const message = ("в цій стрічці n символів");

// console.log(message.length);

// ----------------конкантенація рядків--------------

// const firstName = "Chelsy";
// const lastName = "Emerald"
// const fullName = firstName + " " + lastName;

// console.log(fullName);

// const room = 716;
// const type = "VIP"
// const firstName = "Chelsy";
// const lastName = "Emerald"
// const welcomeMsg = "Гість:" + " " + firstName + " " + lastName + " " + "заселяється в " + type + " номер" + " " + room;
// console.log(welcomeMsg);

// ------- те ж саме, що і вище тільки з використанням шаблонного рядка-------

// const welcomeMsg = `Гість ${firstName} ${lastName} заселяється в номер ${type} ${room}`;
// console.log(welcomeMsg);


// ----------------------------нормалізація введення-------------------

// const brand = "Samsung";
// const normalizedBrand = brand.toLowerCase();
// console.log(normalizedBrand);

// --------------------нормалізація всіх літер окрім 1-ї (може бути замість 1 будь яка)-------------------

// let brand = prompt("введіть назву товару");
// console.log(brand[4]);
// console.log(brand.slice(1).toLowerCase());
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

// --------------------пошук в стрічці (входження)----------------

// const blackListedWord1 = "спам";
// const blackListedWord2 = "розпродаж";

// const string1 = "привіт, я принц Аблдул, це не спам, пропоную мільйон!";
// const string2 = "найбільший РОЗПРОДАЖ цієї неділі, не пропустіть!";
// const string3 = "рекламна кампанія #fatlivematter";

// console.log(string1.includes(blackListedWord1));
// console.log(string1.includes(blackListedWord2));

// console.log(string2.includes(blackListedWord1));
// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blackListedWord2));

// console.log(string3.includes(blackListedWord1));
// console.log(string3.includes(blackListedWord2));


// --------------------------- приведення типів до числа (операнди приводяться до числа)---------------------------

// const x = 10 <= 5;
// console.log(x);

// ------------------------------нестрога рівність/строга рівність--------------------------------


// const isEqual = 5 === "5";

// console.log(isEqual);


// ----------------------------------логічні оператори---------------------------------------------

// ----------------- приведення до булю(boolean)------------------------------------------------------

// console.log(Boolean(0))

// --------------------------------логічні оператори (and &&, or ||, not !)-----------------------------------------

// console.log(6 && 5 && "hello");

// console.log(5 || 7 || 10 || 15);

// console.log(!5);

// ----------------------------задача№1-----------------
// Напиши скрипт, що перевіряє входження числа у відрізок позначений х1 і х2;

// розвязок:
// 1. перевірка чисел що входять до х1
// 2. перевірка чисел, що йдуть після х2
// 3. перевірка діапазону від х1 до х2
// 4. до х1 або після х2



// const x1 = 10;
// const x2 = 30;
// const number = 50;

// console.log(`Число ${number} попадає в проміжок до ${x1}?`, number < x1);

// console.log(`Число ${number} попадає в проміжок від ${x2}?`, number > x2);

// const res = number > x1 && number < x2;

// nunber > x1 && number <x2;
// 50 > 10 && 50 < 30;
// true && false;
//false;

// 5 > 10 && 5 < 30;
// false && false;
//false (запинається на першому false);

// 15 > 10 && 15 < 50;
// true && true;
// true (виводить останнє true);

// console.log(`Число ${number} попадає в проміжок від ${x1} до ${x2}?`, res);


// ----перевіряємо умову число або < x1 або > x2;---------------------------
// const x1 = 10;
// const x2 = 30;
// const number = 15;

// console.log(`Число ${number} попадає в проміжок до ${x1}?`, number < x1);

// console.log(`Число ${number} попадає в проміжок від ${x2}?`, number > x2);

// const res1 = number > x1 && number < x2;

// console.log(`Число ${number} попадає в проміжок від ${x1} до ${x2}?`, res1);



// const res2 = number < x1 || number > x2;

// 150 < 10 || 150 > 30
// false || true
// true (запинається на першому true й виводить його або останнє значення)

// 25 < 10 || 25 > 30
// false || false
// false



// console.log(`Число ${number} попадає у відрізок до ${x1} або після ${x2} `, res2);


// --------------------------------- Задача 2-----------------------------------
// Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
// Дя цього користувач повинен бути:
// - другом
// - онлайн
// - без режиму "не турбувати"

// const isFriend = true;
// const isOnline = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd ;

// console.log(`Можна відкрити чат?`, canOpenChat);


// ----------------------------------------- Задача 3-----------------------------------
//     Напиши скрипт для перевірки підписки користувача при доступі до контенту.
// Є 3 типи  підписки free, pro, vip. Отримати доступ можуть тільки про і віп



// const sub = "pro";
// const canAccessContent = sub === "pro" || sub === "vip";
// // true || false => true (запинається на першому true)

// console.log("Є доступ до контенту?", canAccessContent);


// -----------------------------------Оператор розгалуження ------------------------------------
// if (0) {
//     console.log("bingo!")
// }

// ---------------------------if else-----------------------------------
// if (50 > 30) {
//     console.log("x > y");
// } else {
//     console.log("x < y");
// }

// ---------------------------else if-----------------------------------
// const salary = 4000;

// if (salary <= 500) {
//     console.log('Рівень1');
// } else if (salary > 500 && salary <= 1500) {
//     console.log('Рівень2');
// } else if (salary > 1500 && salary <= 3000) {
//     console.log('Рівень3');
// } else { console.log("Рівень4") };

// ------------------------------тернарний оператор----------------------
const balance = 1000;
// let message;

// if (balance >= 0) {
//     message = "Позитивний баланс";
// } else {
//     message = "Негативний баланс";
// }

// console.log(message);

// або з допомогою тернарного оператора
// const message = умова1? вираз1 : вираз2;

// const message = balance >= 0 ? "Позитивний баланс" : "Негативний баланс";

// console.log(message);


// ------------------------------- Блочна область видимості pvsyyb[---------------------------------
// if (true) {
//     const a = 5;
//     console.log(a);
// }

// -----------------------------------Задача4------------------------------------------
// Напиши скрипт обробки покупки в магазині
// Баланс користувача зберігається у змінній balance
// Сума покупки зберігається у змінній payment
// Перед перевіркою вивести повідомлення: "Загальна вартість замовлення [число] кредитів. Перевіряємо к-ть доступних коштів на рахунку"
// вирахувати із балансу суму покупки
// вивести повідомлення "На рахунку залишилось [число] кредитів"
// Якщо сума покупки перевищує баланс:
// Вивести на екран: "На рахунку недостатньо коштів для проведення операції!"
// в кінці вивести повідомлення "Операція завершена"

// let balance = 10000;
// const payment = 2000;

// Все добре. Списуємо кошти. Дякуємо за покупку!
