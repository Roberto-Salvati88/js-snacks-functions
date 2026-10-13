/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
// 1. preparo l'elenco delle vocali (una stringa basta)
// 2. contatore che parte da 0
// 3. ciclo ogni carattere: se è una vocale, contatore + 1
// 4. restituisco il contatore
function countVowels(text) {
  const vowels = 'aeiou';
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();

    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// versione arrow
const countVowelsArrow = text => {
  const vowels = 'aeiou';
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i].toLowerCase())) count++;
  }
  return count;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels(word));
console.log(countVowelsArrow('Boolean'));

// Risultato atteso se si passa 'javascript': 3 (a, a, i)
