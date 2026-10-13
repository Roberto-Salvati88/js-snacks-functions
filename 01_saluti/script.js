/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

// Dichiara la funzione qui.
// 1. la funzione riceve un nome (parametro)
// 2. costruisce la stringa del saluto con un template literal
// 3. la RESTITUISCE con return (la stampa la fa chi la invoca)
function greet(name) {
  return `Ciao ${name}`;
}

// versione arrow
const greetArrow = name => `Ciao ${name}`;

// Invoca la funzione qui e stampa il risultato in console
// userName è l'ARGOMENTO, name nella definizione è il PARAMETRO
const greeting = greet(userName);
console.log(greeting);
console.log(greetArrow(userName));

// Risultato atteso se si passa 'Mario': // ciao Mario
