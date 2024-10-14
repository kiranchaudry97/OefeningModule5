import { createInterface } from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

let userInput = createInterface({ input, output });

function vindTVSerieLocatie(serie) {
    let tvSeriesLocaties = {
        "The Simpson": "Springfield",
        "Barbie": "California",
        "Marvel": "Marvel Studios",
        "Friends": "New York City",
        "Iron man": "Universe (MCU) media",
        "Squid game": "Daejeon"
    };

    if (tvSeriesLocaties[serie]) {
        console.log("Deze TV-serie vind je in " + tvSeriesLocaties[serie] + ".");
    } else {
        console.log("Sorry, ik weet niet waar de serie " + serie + " zich afspeelt.");
    }

    userInput.close(); 
}

userInput.question("Welke TV-serie wil je zien: ", +serie+ {
    vindTVSerieLocatie(serie); 
});
