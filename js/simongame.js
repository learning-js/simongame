$(document).ready(function() {

var isTheGameOn = false;
var playerTurn = false;
var strictMode = false;
var randomSequence = [];
var timesPlayer = 0;
var round = 0;
var highlightColors = {
    "blue" : "#39eaff",
    "yellow" : "#fffd3a",
    "red" : "#ff4403",
    "green" : "#aeff92"
}

/////////// TURN ON AND OFF THE GAME ///////////

$(".square").click(function() {
    if(!isTheGameOn) {
        isTheGameOn = true;
        $(".square").css("margin-left", "0.1em");
        $(".counter p").css("color", "#f9320c");
    }
    else {
        resetGame();
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
    }
})

/////////// FUNCTION FOR PLAYER TURN ///////////

$(".colorButtons").click(function() {
    console.log("el jugador ha pulsado un botón");
    if(playerTurn) {
        console.log("entro en if porque playerTurn es " + playerTurn);
        timesPlayer++;
        if(this.id !== randomSequence[timesPlayer-1]) {
            console.log(this.id);
            if(strictMode) {
                resetGame();
                $("#counterLines").html("!!");
            }
        }
        else {
            console.log("es igual");
            playerTurn = false;
            gameWorking();
        }
    }
});

/////////// FUNCTION THAT BLINKS COUNTER LINES ///////////
function blinkingLines() {
    /*$("#counterLines").delay(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);*/
    var times = 0;
    var blinkingIn = setInterval(function() {
        $(".counter p").css("color", "#255c70");
        var blinkingOut = setTimeout(function() {
           $(".counter p").css("color", "#f9320c");
           times++;
            if(times == 2) {
                clearInterval(blinkingIn);
            };
       }, 250);
    }, 500);

    setTimeout(function() {
        gameWorking();
    }, 2000);
}

/////////// GAME WORKING ///////////

function gameWorking() {
    newSequenceElement();
    highlightButton();
    round++;
    setTimeout(function() {
        if(round < 10) {
            $("#counterLines").html("0" + round);
        }
        if(round >= 10) {
            $("#counterLines").html(round);
        }
        playerTurn = true;
    }, 1000);
}

/////////// FUNCTION THAT CHOOSES A COLOR ///////////

function newSequenceElement() {
    var choices = ["green", "red", "yellow", "blue"];
    var randomColor = choices[Math.floor(Math.random() * choices.length)];
    randomSequence.push(randomColor);
};

/////////// FUNCTION THAT HIGHLIGHTS THE SEQUENCE ///////////

function highlightButton() {
    function doSetTimeout(i) {
      setTimeout(function() {
            console.log(randomSequence);
            console.log(i);
            console.log("ilumino " + randomSequence[i]);
            if(randomSequence[i] == "blue" || randomSequence[i] == "red") {
                $("#" + randomSequence[i]).css({
                    "border" : "20em solid" + highlightColors[randomSequence[i]],
                    "border-top" : "none",
                    "border-left" : "none",
                    "border-bottom-right-radius" : "20em"
                });
            }
            if(randomSequence[i] == "green" || randomSequence[i] == "yellow") {
                $("#" + randomSequence[i]).css({
                    "border" : "20em solid" + highlightColors[randomSequence[i]],
                    "border-top" : "none",
                    "border-left" : "none",
                    "border-bottom-left-radius" : "20em"
                });
            }
        }, 500);
        setTimeout(function() {
            $("#green, #red, #blue, #yellow").removeAttr("style");
        }, 1000);
    }

    for (var i = 0; i < randomSequence.length; ++i) {
      doSetTimeout(i);
    }
   /* for (var i = 0; i < randomSequence.length; i++) {
        console.log("entro a iluminar el botón que es el " + randomSequence[i]);
        console.log(i);

        setTimeout(function() {
            console.log(randomSequence);
            console.log(i);
            console.log("ilumino " + randomSequence[i]);
            $("#" + randomSequence[i]).css({
                "border" : "20em solid" + highlightColors[randomSequence[i]],
                "border-top" : "none",
                "border-left" : "none",
                "border-bottom-right-radius" : "20em"
            });
        }, 500);*/
        /*switch(randomSequence[i]) {
            case "blue" :
                $("#blue").css({
                    "border" : "20em solid #39eaff",
                    "border-top" : "none",
                    "border-left" : "none",
                    "border-bottom-right-radius" : "20em"
                    });
                break;
            case "yellow" :
                $("#yellow").css({
                    "border" : "20em solid #fffd3a",
                    "border-top" : "none",
                    "border-right" : "none",
                    "border-bottom-left-radius" : "20em"
                    });
                break;
            case "red" :
                $("#red").css({
                    "border" : "20em solid #ff4403",
                    "border-bottom" : "none",
                    "border-left" : "none",
                    "border-top-right-radius" : "20em"
                    });
                break;
            case "green" :
                $("#green").css({
                    "border": "20em solid #aeff92",
                    "border-bottom" : "none",
                    "border-right" : "none",
                    "border-top-left-radius" : "20em"
                    });
                break;
        }
        setTimeout(function() {
            $("#green, #red, #blue, #yellow").removeAttr("style");
        }, 1000);
    };*/
};

})

/////////// FUNCTION THAT RESETS THE GAME ///////////

function resetGame() {
    isTheGameOn = false;
    playerTurn = false;
    randomSequence = [];
    timesPlayer = 0;
    strictMode = false;
    round = 0;
    $("#counterLines").html("--");
    $(".square, .counter p, .strict, #counterLines").removeAttr("style");
}
