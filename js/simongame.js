$(document).ready(function() {

var isTheGameOn = false;
var playerTurn = false;
var strictMode = false;
var randomSequence = [];
var timesPlayer = 0;
var round = 0;


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
        strictMode = false;
        $(".square, .counter p, .strict").removeAttr("style");
    }
});

/////////// TURN ON AND OFF THE STRICT MODE ///////////

$(".strict").click(function() {
    if(isTheGameOn) {
        if(!strictMode) {
            strictMode = true;
            $(".strict").css({
                "background-color" : "#ffea00",
                "box-shadow" : "0px 2px 5px #ffea00",
                "border" : "2px solid #ffd800"
            });
        }
        else {
            strictMode = false;
            $(".strict").removeAttr("style");
        }
    }
});

/////////// PUSH START BUTTON ///////////

$(".start").click(function() {
    if(isTheGameOn && randomSequence.length == 0) {
        blinkingLines();
        gameWorking();
    }
})

/////////// GAME WORKING ///////////

function gameWorking() {
    newSequenceElement();
    round++;
    /// Para actualizar el marcador
    /*if(round < 10) {
        $("#counterLines").html("0" + round);
    }
    else {
        $("#counterLines").html(round);
    }*/
}

/////////// FUNCTION THAT BLINKS COUNTER LINES ///////////
function blinkingLines() {
    $("#counterLines").delay(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

/////////// FUNCTION THAT CHOOSES A COLOR ///////////

function newSequenceElement() {
    var choices = ["green", "red", "yellow", "blue"];
    var randomColor = choices[Math.floor(Math.random() * choices.length)];
    randomSequence.push(randomColor);
    console.log(randomSequence);
};

/////////// FUNCTION THAT HIGHLIGHTS THE SEQUENCE ///////////

function highlightButton() {
    for (var i = 0; i < randomSequence.length; i++) {

    };
};

})