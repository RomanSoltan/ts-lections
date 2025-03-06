import "./style.css";

// let isDone: boolean = false;
// console.log(isDone);

// const name: string = "Bob";
// const lastName: string = "Jonson";
// const age: number = 22;
// const isHappy: boolean = true;
// const budget: null = null;
// const status: undefined = undefined;

// ======================

// Create a typescript function named displayUserProfile that takes
// a user profile object as an argument.The user profile object should
// have the following properties: username(string), age(number), and
// isActive(boolean). The function should return a string summarizing
// the user's profile details

// Типізація обєкту

// // Створимо тип під обєкт із типізацією полів обєкта
// type userProfile = {
//   userName: string;
//   age: number;
//   isActive: boolean;
// };

// // Типізуємо параметр цієї функції
// function displayUserProfile(user: userProfile) {
//   return `User name is ${user.userName}, he is ${user.age} years old, he is ${user.isActive}`;
// }
// const user = {
//   userName: "Bob",
//   age: 22,
//   isActive: true,
// };
// console.log(displayUserProfile(user));

// function logName(name: string) {
//   return `${name}`;
// }
// console.log(logName("Roman"));

// ==========================

// Типізація масиву

// function calcTotal(arr: number[]) {
//   return arr.reduce((acc, el) => acc + el, 0);
// }

// const numbersArray = [10, 20, 30, 40];
// console.log(calcTotal(numbersArray)); // 100

// =====================

// Типізація масива обєктів

// type User = {
//   name: string;
//   age: number;
// };

// function calcTotal(arr: User[]) {
//   // return arr.reduce((acc, el) => acc + el, 0);
// }

// const user = [
//   { name: "Roman", age: 22 },
//   { name: "Roma", age: 32 },
//   { name: "oman", age: 42 },
// ];

// console.log(calcTotal(user));
