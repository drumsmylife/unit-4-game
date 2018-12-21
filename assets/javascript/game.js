// create crystal variables
var crystals = {
    blue: 
    {
        name: "Blue",
        value: 0
    },
    green:
    {
        name: "Green",
        value: 0
    },
    red:
    {
        name: "Red",
        value: 0
    },
    yellow:
    {
        name: "Yellow",
        value: 0
    }
    };
    
      




// scores (user and target)
var userScore = 0;
var targetScore = Math.floor(Math.random() * 120) + 19;

//wins and losses
var wins = 0;
var losses = 0;




//functions

//function for random number
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//starts the game and restarts the game
var startGame = function() {
    userScore = 0;
    targetScore = getRandom(19, 120);
    crystals.blue.value = getRandom(1, 12);
    crystals.red.value = getRandom(1, 12);    
    crystals.green.value = getRandom(1, 12);    
    crystals.yellow.value = getRandom(1, 12);    
}

//change the html to reflect changes
$(document).ready(function() {
    $("#userScore").text("userScore " + userScore);
    $("#targetScore").text("targetScore " + targetScore);
    // starts the game the first time
    startGame();

    $("#blueCrystal").click(function() {
        addValues(crystals.blue);
    });
    $("#redCrystal").click(function() {
        addValues(crystals.red);
    });
    $("#greenCrystal").click(function() {
        addValues(crystals.green);
    });
    $("#yellowCrystal").click(function() {
        addValues(crystals.yellow);
    });
});
// check if user won or lost

var checkWin = function() {
    if(userScore > targetScore) {
        alert("sorry, you lost!")
        losses++;
    $("#losses").text("losses " + losses);
    startGame();
    }
    else if(userScore === targetScore) {
        alert("you win!");
        wins++;
    $("#wins").text("wins " + wins);
    startGame();
    }
};

// respond to clicks on the crystals
var addValues = function(crystals) {
    userScore += crystals.value;
    $("#userScore").text("userScore " + userScore);
    checkWin();
    $("#targetScore").text("targetScore " + targetScore);
};



