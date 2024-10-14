import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { get } from 'node:https';
const userInput = readline.createInterface({ input, output });

function vermenigvuldig(getal1, getal2) {
    if (getal1 < 1 || getal2 < 1) {
        console.error('Fout: Beide getallen moeten groter zijn dan of gelijk aan 1.');
    } else {
        let resultaat = getal1 * getal2;
        console.log('Het resultaat van ' + getal1 + ' vermenigvuldigd met ' + getal2 + ' is ' + resultaat);
    }
}

vermenigvuldig(1, 5);  
vermenigvuldig(2, 5); 
vermenigvuldig(0, 5);  
vermenigvuldig(3, 5); 
vermenigvuldig(-1, 4); 
vermenigvuldig(4, 5);  
vermenigvuldig(5, 5);  

process.exit();
