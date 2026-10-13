/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
// Due parametri: l'array e la lettera.
// Confronto in minuscolo, così funziona anche se passo 'a' invece di 'A'.
function filterByLetter(list, letter) {
  const result = [];

  for (let i = 0; i < list.length; i++) {
    const word = list[i];

    if (word[0].toLowerCase() === letter.toLowerCase()) {
      result.push(word);
    }
  }

  return result;
}

// versione arrow
const filterByLetterArrow = (list, letter) => {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].charAt(0).toLowerCase() === letter.toLowerCase()) {
      result.push(list[i]);
    }
  }
  return result;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(filterByLetter(names, 'A'));
console.log(filterByLetterArrow(names, 'l'));

// Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
