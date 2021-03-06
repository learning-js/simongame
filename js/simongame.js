$(document).ready(function() {

var isTheGameOn = false;
var playerTurn = false;
var strictMode = false;
var randomSequence = [];
var timesPlayer = 0;
var round = 0;
/////////// TURN ON AND OFF THE GAME ///////////

$(".square, .onOffChoice").click(function() {
    console.log("***************** EMPIEZA EL JUEGO *****************");
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

function addButtonClass() {
    $("#red").addClass("redActive");
    $("#blue").addClass("blueActive");
    $("#yellow").addClass("yellowActive");
    $("#green").addClass("greenActive");
}
function removeButtonClass() {
    $("#red").removeClass("redActive");
    $("#blue").removeClass("blueActive");
    $("#yellow").removeClass("yellowActive");
    $("#green").removeClass("greenActive");
}

$(".colorButtons").click(function() {
    if(playerTurn) {
        timesPlayer++;
        if(this.id !== randomSequence[timesPlayer-1]) {
            if(strictMode) {
                resetGame();
                $("#counterLines").html("!!");
                blinkingLines();
            }
            else {
                removeButtonClass();
                timesPlayer = 0;
                playerTurn = false;
                highlightButton();
            }
        }
        else {
            if(timesPlayer >= randomSequence.length) {
                console.log("Se acaba el turno del jugador");
                removeButtonClass();
                playerTurn = false;
                timesPlayer = 0;
                // gameWorking();
                setTimeout(function() {
                    gameWorking();
                }, 1000);
            }
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
    updateRound();
}

/////////// UPDATE COUNTER ROUND ///////////

function updateRound() {
    round++;
    if(round < 10) {
        $("#counterLines").html("0" + round);
    }
    if(round >= 10) {
        $("#counterLines").html(round);
    }
    addButtonClass();
    playerTurn = true;
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
    for(var i = 0; i < randomSequence.length; i++) {
        eachButton(i);
    }
    addButtonClass();
    playerTurn = true;
};

function eachButton(button) {
    var whichOne = randomSequence[button];
    setTimeout(function() {
        setTimeout(function() {
            console.log("Enciendo " + whichOne);
            //change background color via CSS class
            switch(whichOne) {
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
        }, button * 1000);

        setTimeout(function() {
            $("#" + whichOne).removeAttr("style");
            console.log("Apago " + randomSequence[button]);
        }, (button + 1) * 1000);
    }, button * 250);
}

/////////// FUNCTION THAT RESETS THE GAME ///////////

function resetGame() {
    removeButtonClass();
    isTheGameOn = false;
    playerTurn = false;
    randomSequence = [];
    timesPlayer = 0;
    strictMode = false;
    round = 0;
    $("#counterLines").html("--");
    $(".square, .counter p, .strict, #counterLines").removeAttr("style");
}

});
