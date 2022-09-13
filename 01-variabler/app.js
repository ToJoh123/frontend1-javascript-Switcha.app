// Installera dependencies
const prompt = require('prompt-sync')()

//Välkommen till frontend utveckling med JavaScript och Node.js, här kommer vi att lära oss att skriva JavaScript kod och köra den i Node.js
//Vi kommer att lära oss att skriva kod som beräknar och skriver ut saker i konsolen

console.log("Detta är modulen för variabler")

//Variabler är ett sätt att lagra data i JavaScript
//Vi kan skapa en variabel genom att skriva let följt av variabelnamnet
//Vi kan sedan tilldela ett värde till variabeln genom att skriva = följt av värdet
//Vi kan sedan skriva ut värdet i konsolen genom att skriva console.log() och skriva variabelnamnet inuti parentesen

//skapa en variabel med namnet name och tilldela värdet "Tom"
let name = "Tom"
//skriv ut värdet i konsolen
console.log(name)

//vi kan även skapa en variabel som innehåller värde från promten
//skapa en variabel med namnet age och tilldela värdet från promten
let age = prompt("Hur gammal är du? ")
//skriv ut värdet i konsolen
console.log(age)

//vi kan även kombinera variabler med text
//skapa en variabel med namnet text och tilldela värdet 
let text = "Jag heter " + name + " och är " + age + " år gammal"
//skriv ut värdet i konsolen
console.log(text)


