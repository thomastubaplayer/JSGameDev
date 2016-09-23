var mainPlayer = {
    name: "Player", 
    rank: "Pawn",
    speed: 10,
    power: 1,

    messenger: function (messege) {
        alert("Is this correct" +messege);
    }
}

mainPlayer.name = prompt("Enter your name.");

alert("Welcome " + mainPlayer.name);

var phrases = [
    prompt("Please enter mother's maiden name."), 
    prompt("Enter your phone number."), 
    prompt("Enter your credit card number.")
];

for(var i = 0 ; i < phrases.length ; i++){
mainPlayer.messenger(phrases[i]); 
}