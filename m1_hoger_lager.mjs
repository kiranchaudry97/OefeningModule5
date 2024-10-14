import { createInterface } from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let userInput = createInterface({ input, output });

let goknummer = random(1, 10);

let nummer = userInput.question("Raad een getal tussen 1 en 10: ", function(gok) {
    gok = parseInt(gok); 

    if (gok === goknummer) {
        console.log("Gefeliciteerd! Je hebt het juiste getal geraden.");
    } else if (gok > goknummer) {
        console.log("Fout, het getal is lager.");
    } else {
        console.log("Fout, het getal is hoger.");
    }

    userInput.close(); 
});

