
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});







let kleinsteGetal = Math.min(10, 3, 5, 7, 2, 8);
console.log('Het kleinste getal is: ' + kleinsteGetal);

let grootsteGetal = Math.max(10, 3, 5, 7, 2, 8);
console.log('Het grootste getal is: ' + grootsteGetal);


process.exit();
