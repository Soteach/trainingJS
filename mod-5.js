// function showThis() {
//   console.log("this in showThis: ", this);
// }

// // Викликаємо у глобальному контексті
// showThis();


// function showThis() {
//   console.log("this in showThis: ", this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // this in showThis: Window

// const user = {
//   username: "Mango",
// };

// // Записуємо посилання на функцію у властивість об'єкта
// // Зверніть увагу, що це не виклик - немає ()
// user.showContext = showThis;

// // Викликаємо функцію в контексті об'єкта
// // this буде вказувати на поточний об'єкт, в контексті
// // якого здійснюється виклик, а не на глобальний об'єкт.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}
