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

// Хардкод, теж не найкращий варіант
// function calcTotal(arr: {name: string; age: number}[]) {
//   // return arr.reduce((acc, el) => acc + el, 0);
// }

// Вказали, що буде обєкт, але не вказали структуру цього обєкта
// function calcTotal(arr: object[]) {
//   // return arr.reduce((acc, el) => acc + el, 0);
// }

// Найкращий варіант
// function calcTotal(arr: User[]) {
//   // return arr.reduce((acc, el) => acc + el, 0);
// }

// const user = [
//   { name: "Roman", age: 22 },
//   { name: "Roma", age: 32 },
//   { name: "oman", age: 42 },
// ];

// console.log(calcTotal(user));

// =====================================

// Специфічні типи
// Типізація параметрів

// unknown,
// коли невідомо, що буде повертатися

// function safelyParseJson(JsonString: string): unknown {
//   try {
//     const result: unknown = JSON.parse(JsonString);
//     if (typeof result === "object" && result !== null) {
//       return result; // Type is verified as an object (non-null)
//     }
//   } catch (error) {
//     console.log("Failed to parse JSON:", error);
//   }
//   return null; //Return null if parsing fails or type is incorect
// }

// ==============================================

// any
// виключає строгу типізацію typescript і дає
// можливість передавати будь-який тип

// function logDetails(value: any) {
//   console.log(`Value: ${value}, Type of value: ${typeof value}`);
// }

// ==========================

// enum (дуже схожий на обєкт)
// це словник конкретних сталих данних, з якими працюєш

// enum VehicleType {
//   Car = "Car",
//   Truck = "Truck",
//   Motocycle = "Motocycle",
// }

// function getVehicleType(vehicle: VehicleType): string {
//   return `The vehicle type is: ${vehicle}`;
// }

// // Example usage
// console.log(getVehicleType(VehicleType.Car)); // The vehicle type is: Car
// console.log(getVehicleType(VehicleType.Motocycle)); // The vehicle type is: Motocycle

// =======================================

// Union Types
// одне значення може мати кілька типів
// можна вказати, який тип данних буде валідним для функції і тд
// function formatInput(input: string | number) {
//   if (typeof input === "number") {
//     return input.toFixed(2); // Formats the number to two decimal places
//   } else {
//     return input.toUpperCase(); //Converts the string to uppercase
//   }
// }

// ============================================

// Literal
// перевіряє не тільки тип, а й значення цього типу

// function lightHouse(color: "green" | "yellow" | "red") {
//   if (color === "green") {
//     console.log("walk");
//   } else if (color === "yellow") {
//     console.log("attention");
//   } else if (color === "red") {
//     console.log("stop");
//   }
// }

// lightHouse("pink");

// =============================================

// Типізація повернення return

// ми будемо приймати і повертати рядок
// якщо будемо зберігати результат фукції у змінну,
// то нам не потрібно її типізовувати. Типізовано вже при поверненні

// Найчастіше типізація повернення відбувається при роботі з бекендом

// function logName(name: string): string {
//   return `${name}`;
// }

// ================================================

// void
// коли функція нічого не повертає

// function logName(name: string): void {
//   console.log(`${name}`);
// }

// ===============================================

// never
// використовується всередині функцій, коли повертається помилка і
// її потрібно прокинути.

// function errorHandler(message: string): never {
//   throw new Error(message);
// }

// errorHandler("Critical error");

// ===========================================

// interface

// Описує структуру, дуже схоже на type
// Можна описати класи, а через type класи описати не можна
// Можна використовувати опціональні ключі

// interface User {
//   name: string;
//   age: number;
//   lastName?: string; // опціональний ключ
// }

// ===============================================

// Типізація обєкта за допомогою  interface

// interface User {
//   name: string;
//   age: number;
//   lastName?: string; // опціональний ключ
//   sayHello(): string;
//   sayGoodbye(): void;
//   showAge(userAge: number): string;
// }

// const user: User = {
//   name: "Bob",
//   age: 22,
//   sayHello() {
//     return "Hello";
//   },
//   sayGoodbye() {
//     console.log("Bye");
//   },
//   showAge(userAge) {
//     return `My age is ${userAge}`;
//   },
// };
