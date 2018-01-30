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


    var startGame = function(){
        totalVal = 0;
        // $("#wins").text("");
        // $("#losses").text("");
        // $(loseResult).remove();
        // $(winResult).remove();
        $('#total-num').text(totalVal);
        randNum = Math.floor(Math.random() * 102) + 19;
        $("#random-number").text(randNum);

        var crystalVal = [];
        for(var i = 0; i < 4; i++){
            crystalVal.push(Math.floor(Math.random() * 11) + 1);

        }
            var blueVal = crystalVal[0];
            $("#blue").attr("data-value", blueVal);
            console.log("blue", blueVal);
            var greenVal = crystalVal[1];
            $("#green").attr("data-value", greenVal);
            console.log("green", greenVal);
            var redVal = crystalVal[2];
            $("#red").attr("data-value", redVal);
            console.log("red", redVal);
            var purpVal = crystalVal[3];
            $("#purple").attr("data-value", purpVal);
            console.log("purp", purpVal);


            $('#blue').on ('click', function(){
                totalVal = totalVal + blueVal;
                console.log("New totalb= " + totalVal);
                $('#total-num').text(totalVal); 
        
            });

            $("#green").on("click", function() {
                totalVal = totalVal + greenVal;
                console.log("New totalg= " + totalVal);
                $('#total-num').text(totalVal); 
        

            });

            $("#red").on("click", function() {
                totalVal = totalVal + redVal
                console.log("New totalr= " + totalVal);
                $('#total-num').text(totalVal); 

            });

            $("#purple").on("click", function() {
                totalVal = totalVal + purpVal;
                console.log("New totalp= " + totalVal);
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
            wins++;
            console.log(wins);
            $("#wins").text(wins);
            // var winResult = ("<h3>" + "You won!" + "</h3>");
            // $(".stats").prepend(winResult);
            startGame();
        }
    
        var loser = function(){
            losses++;
            $("#losses").append(losses);
            // var loseResult = ("<h3>" + "You lost. Try again!" + "</h3>");
            // $(".stats").prepend(loseResult);
            startGame();
        }
    
    startGame();


});
