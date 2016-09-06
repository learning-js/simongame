$(document).ready(function() {

var isTheGameOn = false;
var playerTurn = false;
//esta variable podría ir dentro de la función random
var choices = ["green", "red", "yellow", "blue"];
var randomSequence = [];
var timesPlayer = 0;


/////////// TURN ON AND OFF THE GAME
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

})