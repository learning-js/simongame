$(document).ready(function() {

var isTheGameOn = false;
var playerTurn = false;
var randomSequence = [];
var timesPlayer = 0;


/////////// TURN ON AND OFF THE GAME ///////////

$(".square").click(function() {
    if(!isTheGameOn) {
        isTheGameOn = true;
        $(".square").css("margin-left", "0.1em");
        $(".counter p").css("color", "#f9320c");
    }
    else {
        isTheGameOn = false;
        playerTurn = false;
        randomSequence = [];
        timesPlayer = 0;
        $(".square, .counter p").removeAttr("style");
    }
});

/////////// FUNCTION THAT CHOOSES A COLOR ///////////

function newSequenceElement() {
    var choices = ["green", "red", "yellow", "blue"];
    var randomColor = choices[Math.floor(Math.random() * choices.length)];
    randomSequence.push(randomColor);
};

/////////// FUNCTION THAT HIGHLIGHTS THE SEQUENCE ///////////

function highlightButton() {

};

})