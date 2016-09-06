$(document).ready(function() {
console.log("se ha cargado la página");
var isTheGameOn = false;
var playerTurn = false;
var choices = ["green", "red", "yellow", "blue"];
var randomSequence = [];
var timesPlayer = 0;

$(".square").click(function() {
    if(!isTheGameOn) {
        isTheGameOn = true;
        $(".square").css("margin-left", "0.1em");
    }
    else {
        isTheGameOn = false;
        $(".square").css("margin-left", "-1.4em");
    }
});

})