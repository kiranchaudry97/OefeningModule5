import { createInterface } from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

// Functie om een willekeurig getal tussen min en max te genereren
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let userInput = createInterface({ input, output });
let goknummer = random(1, 10); 
let levens = 3; 

function kiesGetal() {
    if (levens > 0) {
      let nummer =  userInput.question("Raad een getal tussen 1 en 10: ", function(gok) {
            gok = parseInt(gok); 

            if (gok === goknummer) {
                console.log("Gefeliciteerd! Je hebt het juiste getal geraden.");
                userInput.close(); 
            } else {
                levens--; 
                if (gok > goknummer) {
                    console.log("Fout, het getal is lager.");
                } else {
                    console.log("Fout, het getal is hoger.");
                }

                if (levens > 0) {
                    console.log("Je hebt nog" + levens + "pogingen over.");
                    kiesGetal(); 
                } else {
                    console.log("Game Over! Je hebt geen levens meer.");
                    userInput.close(); 
                }
            }
        });
    }
}

kiesGetal();


