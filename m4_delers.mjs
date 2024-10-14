import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


function somVanDelers(getal) {
    let som = 0;

    for (let i = 1; i < getal; i++) {
        if (getal % i === 0) {
            som += i; 
        }
    }

    console.log(" De som van de delers van " +getal+ " is " + som);
}

somVanDelers(12);  
process.exit()