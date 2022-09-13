/**
 * i Java script finns det en inbyggd funktion som heter require
 * require är en funktion som kan användas för att ladda in kod från andra filer
 * require tar en sträng som innehåller sökvägen till den fil vi vill ladda in
 */

 const prompt = require('prompt-sync')();

 /**
  * subfolders är bara för att visa vilka mappar som finns i den här mappen
  */
 // Skapa en array med namn till olika moduler
const subfolders = [
    'Variabler',
    'if switchar ',
    'Funktioner'
  ]
/**
 * For loopen går igenom alla element i arrayen subfolders, och skriver ut dem i konsolen
 * detta är bara för underlätta val av modul
 */
  //skapa en loop som visar vilka moduler som finns
  for (let i = 0; i < subfolders.length; i++) {
      console.log(i + 1 + ". " + subfolders[i])
      }
  

//skapa en variabel med namnet module och tilldela värdet från prompten
let subfolder = prompt("Välj en modul att köra (1-3): ")


/**
 * När väljer exempelvis 1, så kommer värdet i require att bli "./01-variabler/app.js"
 * den kommer då att ladda in koden från filen app.js i mappen 01-variabler
 * variabel subfolder är namnet på den variabel som vi skapade ovan, det enda den raden gör är att skriva ut värdet i konsolen
 */
switch (subfolder) {
    case "1":
        console.log("Du har valt " + subfolders[0]);
        require("./01-variabler/app.js");
        break;
    case "2":
        console.log("Du har valt " + subfolders[1]);
        require("./02-if-switch/app.js");
        break;
    case "3":
        console.log("Du har valt " + subfolders[2]);
        require("./03-funktioner/app.js");
        break;
    default:
        console.log("Välj en modul mellan 1-3");
}

//write yay it works with ascii art here
console.log("Yay it works!");
console.log("   _~_    ");
console.log("  (o o)   ");
console.log(" /  V  \\  ");
console.log("/(  _  )\\ ");
console.log("  ^^ ^^   ");
/**
 * som man ser här så kommer du tillbaka till denna fil efteråt. 
 */


