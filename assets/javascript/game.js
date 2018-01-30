$(document).ready(function () {
    
    var greenVal = 0;
    var redVal = 0;
    var blueVal = 0;
    var purpVal = 0;
    var randNum = 0;
    var totalVal = 0;
    var matchRandom = false;
    var counter = 0;
    var wins = 0;
    var losses = 0;
    var loseResult = "";
    var winResult = "";

    var resetCrystals = function(){
        blueVal = 0;
        greenVal = 0;
        purpVal = 0;
        redVal = 0;
        totalVal = 0;
        randNum = 0;
    }

    var startGame = function(){
        totalVal = 0;
        $('#total-num').text(totalVal);
        
        
        randNum = Math.floor(Math.random() * 102) + 19;
        $("#random-number").text(randNum);

        var crystalVal = [];
        for(var i = 0; i < 4; i++){
            crystalVal.push(Math.floor(Math.random() * 11) + 1);

        }
            blueVal = crystalVal[0];
            $("#blue").attr("data-value", blueVal);
            console.log("blue", blueVal);
            greenVal = crystalVal[1];
            $("#green").attr("data-value", greenVal);
            console.log("green", greenVal);
            redVal = crystalVal[2];
            $("#red").attr("data-value", redVal);
            console.log("red", redVal);
            purpVal = crystalVal[3];
            $("#purple").attr("data-value", purpVal);
            console.log("purp", purpVal);
        

            $('#blue').on('click', function(){
                totalVal += blueVal;
                $('#total-num').text(totalVal); 
        
            });

            $("#green").on("click", function() {
                totalVal += greenVal;
                $('#total-num').text(totalVal); 
        

            });

            $("#red").on("click", function() {
                totalVal += redVal;
                $('#total-num').text(totalVal); 

            });

            $("#purple").on("click", function() {
                totalVal += purpVal;
                $('#total-num').text(totalVal); 

            });

            $(".button").on("click", function(){
                if (totalVal === randNum){
                    winner();
                }
                else if (totalVal > randNum){
                    loser();
                } 
            });

        };

        var winner = function(){
            $(".button").off("click");
            wins++;
            console.log(wins);
            $("#wins").text(wins);
            // var winResult = ("<h3>" + "You won!" + "</h3>");
            // $(".stats").prepend(winResult);
            resetCrystals();
            startGame();
        }
    
        var loser = function(){
            $(".button").off("click");
            losses++;
            $("#losses").text(losses);
            // var loseResult = ("<h3>" + "You lost. Try again!" + "</h3>");
            // $(".stats").prepend(loseResult);
            resetCrystals();
            startGame();
        }
    
    startGame();


});
