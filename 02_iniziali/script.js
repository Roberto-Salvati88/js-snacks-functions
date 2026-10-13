/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
// 1. creo un array vuoto per il risultato
// 2. ciclo l'array ricevuto
// 3. di ogni nome prendo il carattere in posizione 0 e lo aggiungo al risultato
// 4. restituisco il NUOVO array (l'originale non lo tocco)
function getInitials(list) {
  const initials = [];

  for (let i = 0; i < list.length; i++) {
    const currentName = list[i];
    initials.push(currentName[0]);
  }

  return initials;
}

// versione arrow
const getInitialsArrow = list => {
  const initials = [];
  for (let i = 0; i < list.length; i++) {
    initials.push(list[i].charAt(0));
  }
  return initials;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(getInitials(names));
console.log(getInitialsArrow(names));

// Risultato atteso: ["A", "L", "M", "A", "G", "A"]
