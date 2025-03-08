import "./style.css";

/* ======================================================================================================================
Index Properties
====================================================================================================================== */

// властивості, які можуть виникати з нашим кодом, коли є обєкти
// з якимись значеннями, але в цих обєктах немає сталого набору ключів

// унікальний інтерфейс для типізації обєктів
interface List {
  [key: string]: number | null;
}

type Fruits = {
  apples: number;
  bananas: number;
  oranges: number;
};

const fruits: List = {
  apples: 10,
  bananas: 15,
  oranges: 25,
  pinaple: 10,
  peach: null,
};

const electronic: List = {
  phones: 20,
  tablets: 10,
  monitors: 23,
};
