const prompt = require("prompt-sync") ();
const answer = prompt("Would you like to play (y/n)? ");

if (answer.toLowerCase() === "y") {
    const answer2 = prompt("Choose a path. s for south / n for north: ")
    if (answer.toLowerCase() === "s") {
        
    }
} else {
    console.log("You missed something interesting.")
}