// Esercizi fatti in classe il 07/02 (cartella ex-class)
const numbers = [4, 9, 2, 9, 7, 1];

// 1) numero più grande: parto dal primo e lo sostituisco se ne trovo uno maggiore
function findMax(list) {
  let max = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i];
    }
  }
  return max;
}

// 2) numero più piccolo: stessa logica, confronto rovesciato
function findMin(list) {
  let min = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i];
    }
  }
  return min;
}

// 3) posizione di un numero, -1 se non c'è: appena lo trovo esco con return
function findIndex(list, target) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      return i;
    }
  }
  return -1;
}

// 4) somma degli elementi: accumulatore che parte da 0
function sum(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}

// 5) inverti una stringa: ciclo dall'ultimo carattere al primo
function reverseString(text) {
  let reversed = '';
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  return reversed;
}

// 6) inverti un array SENZA reverse(): il docente vuole il ciclo scritto da voi
function reverseArray(list) {
  const reversed = [];
  for (let i = list.length - 1; i >= 0; i--) {
    reversed.push(list[i]);
  }
  return reversed;
}

// 7) occorrenze di un numero, -1 se non c'è mai
function countOccurrences(list, target) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      count++;
    }
  }
  return count === 0 ? -1 : count;
}

console.log(findMax(numbers));             // 9
console.log(findMin(numbers));             // 1
console.log(findIndex(numbers, 7));        // 4
console.log(findIndex(numbers, 100));      // -1
console.log(sum(numbers));                 // 32
console.log(reverseString('Boolean'));     // naelooB
console.log(reverseArray(numbers));        // [1, 7, 9, 2, 9, 4]
console.log(countOccurrences(numbers, 9)); // 2
console.log(countOccurrences(numbers, 3)); // -1
