import "./style.css";

/* ======================================================================================================================
Index Properties
====================================================================================================================== */

// властивості, які можуть виникати з нашим кодом, коли є обєкти
// з якимись значеннями, але в цих обєктах немає сталого набору ключів

// унікальний інтерфейс для типізації обєктів
// interface List {
//   [key: string]: number | null;
// }

// type Fruits = {
//   apples: number;
//   bananas: number;
//   oranges: number;
// };

// const fruits: List = {
//   apples: 10,
//   bananas: 15,
//   oranges: 25,
//   pinaple: 10,
//   peach: null,
// };

// const electronic: List = {
//   phones: 20,
//   tablets: 10,
//   monitors: 23,
// };

/* ======================================================================================================================
Generics
====================================================================================================================== */

// Generics для масивів
// конструкція у typescript, яка динамічно підставляє тип даних
// в типізацію в момент того, як цей код використовується

// порібно опрацьовувати, як позитивні сценарії роботи, так і негативні

// function getFirstElement<T>(array: T[]): T | undefined {
//   // <T> - динамічний тип
//   return array[0];
// }

// const numberArray = [10, 20, 30];
// const stringArray = ["hello", "world", "typescript"];
// const objectArray = [{ name: "Alice" }, { name: "Bob" }];

// console.log(getFirstElement(numberArray)); // 10
// console.log(getFirstElement(stringArray)); // hello
// console.log(getFirstElement(objectArray)); // {name: 'Alice'}

// =========================================================

// Generics для обєктів (динамічни тип)

// 1. Є функція getProperty
// 2. Ця функція має два динамічних типи
//  - T - присвоюється до першого параметру,
//  - K - присвоюється до другого параметру
// 3. Ми розширюємо поведінку другого типу (extends keyof),
// за рахунок перевірки, чи К відноситься до ключів обєкта Т,
// тобто typescript буде перевіряти чи є в обєкті певний ключ

// // Завдання отримати динамічне значення властивості ключа обєкта
// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// const person = {
//   name: "John",
//   age: 30,
//   occupation: "Engineer",
// };

// const name = getProperty(person, "name");
// const age = getProperty(person, "age");
// const gender = getProperty(person, "gender"); // немає такого ключа в обєкті person

// console.log(name); // "John"
// console.log(age); // 30
// console.log(gender); // undefined

// ===========================================================

/* ======================================================================================================================
Додаткові інструменти, які розширюють базовий функціонал Generics
====================================================================================================================== */

// 1 Partial - перевикористовує ключі з обєкту (для зміни обєкту)

// interface UserProfile {
//   username: string;
//   email: string;
//   age: number;
// }

// const originalProfile: UserProfile = {
//   username: "john doe",
//   email: "john.doe@example.com",
//   age: 28,
// };

// function updateProfile(profile: UserProfile, updates: Partial<UserProfile>) {
//   return { ...profile, ...updates };
// }

// const updatedProfile = updateProfile(originalProfile, {
//   email: "new.john.doe@example.com",
//   age: 29,
// });

// --------------------

// 2. Readonly - захищає обєкт від змін

// interface User {
//   id: number;
//   name: string;
// }

// const user: Readonly<User> = {
//   id: 100,
//   name: "Bob",
// };

// user.id = 201; // Cannot assign to 'id' because it is a read-only property.

// -------------------------

// 3. Pick - для того, щоб типізувати return для витягання певних властивостей обєкта
// забирає з колекції шматочок і створює новий інтерфейс

// interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date;
// }

// const fullEmployeeInfo: Employee = {
//   id: 101,
//   name: "John Doe",
//   email: "joh.doe@example.com",
//   department: "Engineering",
//   hireDate: new Date("2020-01-10"),
// };

// Приймається на вхід обєкт з інтерфейсом Employee,
// а повертається обєкт з двома полями name та email

// function displayInfo(
//   fullEmployeeInfo: Employee
// ): Pick<Employee, "name" | "email"> {
//   return {
//     name: fullEmployeeInfo.name,
//     email: fullEmployeeInfo.email,
//   };
// }

// іний варіант

// interface BasicInfo {
//   name: string;
//   email: string;
// }

// function displayInfo(fullEmployeeInfo: Employee): BasicInfo {
//   return {
//     name: fullEmployeeInfo.name,
//     email: fullEmployeeInfo.email,
//   };
// }

// ------------------------------------

// 4. Omit - вирізає з обєкту значення і залишає все інше,
// тобто видаляє все, що не потрібне, а з того, що залишається
// створює новий інтерфейс

// interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date; // hide info
// }

// const fullEmployeeInfo: Employee = {
//   id: 101,
//   name: "John Doe",
//   email: "joh.doe@example.com",
//   department: "Engineering",
//   hireDate: new Date("2020-01-10"),
// };

// // Вивести всі поля, крім тих, які ми хочемо приховати
// function displayInfo(fullEmployeeInfo: Employee): Omit<Employee, "hireDate" | "id"> {
//   return {
//     name: fullEmployeeInfo.name,
//     email: fullEmployeeInfo.email,
//     department: fullEmployeeInfo.department,
//   };
// }

// -----------------------------------

// 5. Record це альтернатива запису нижче
// interface List {
//   [key: string]: number | null;
// }

// Record очікує обєкт з наступою структурою, де
// перший аргумент - це ключ, який буде мати тип стрінг,
// а другий аргумент описує значення, яке буде мати тип намбер

// Цей запис Record<string, number>
//  аналогічний цьому
// interface List {
//   [key: string]: number | null;
// }

// function recordTemperatures(temps: number[]): Record<string, number> {
//   // створимо порожній обєкт
//   let temperatureRecord: Record<string, number> = {};

//   temps.forEach((temp, index) => {
//     temperatureRecord[`day${index + 1}`] = temp;
//   });
//   return temperatureRecord;
// }

// const weeklyTemps = [22, 24, 23, 25, 24, 26, 27];
// const tempRecord = recordTemperatures(weeklyTemps);
// console.log(tempRecord);

// ===================================

interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  hireDate: Date; // hide info
}

// створмо новий інтерфейс, який буде мати усі значення,
// окрім дати найму
type EmployeeBasicInfo = Omit<Employee, "hireDate">;
