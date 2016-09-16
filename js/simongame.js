$(document).ready(function() {

var isTheGameOn = false;
var playerTurn = false;
var strictMode = false;
var randomSequence = [];
var timesPlayer = 0;
var round = 0;

/////////// TURN ON AND OFF THE GAME ///////////

$(".square").click(function() {
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
    console.log(randomSequence);
    console.log(isTheGameOn);
    if(isTheGameOn && randomSequence.length == 0) {
        console.log("se ha pulsado start");
        blinkingLines();
    }
})

/////////// FUNCTION FOR PLAYER TURN ///////////

$(".colorButtons").click(function() {
    console.log("el jugador ha pulsado un botón");
    if(playerTurn) {
        console.log("entro en if porque playerTurn es " + playerTurn);
        timesPlayer++;
        console.log("------- cuántas veces a pulsado el jugador: " +  timesPlayer);
        if(this.id !== randomSequence[timesPlayer-1]) {
            console.log("el jugador se ha equivocado y ha pulsado " + this.id);
            if(strictMode) {
                resetGame();
                $("#counterLines").html("!!");
                blinkingLines();
            }
            else {
                playerTurn = false;
                highlightButton();
            }
        }
        else {
            console.log("el jugador ha acertado");
            if(timesPlayer >= randomSequence.length) {
                console.log("es igual");
                playerTurn = false;
                timesPlayer = 0;
                gameWorking();
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
    console.log("entro a highlightButton");
        var c = 0;
        var interval = setInterval(function() {
            console.log("toca iluminar " + randomSequence[c]);
            switch(randomSequence[c]) {
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
            console.log("ahora c vale " + c);
            c++;
            console.log("y después c vale " + c);
            setTimeout(function() {
                console.log("entro a apagar el botón");
            $("#green, #red, #blue, #yellow").removeAttr("style");
        }, 1000);
            if(c >= randomSequence.length) {
                console.log("c vale más o igual que la longitud de randomSequence");
                clearInterval(interval);
                playerTurn = true;
            }
        }, c * 500);
};

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

});
