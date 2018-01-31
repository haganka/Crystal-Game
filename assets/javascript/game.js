$(document).ready(function () {

    var randNum = 0;
    var totalVal = 0;
    var wins = 0;
    var losses = 0;

    var resetCrystals = function(){
        totalVal = 0;
        randNum = 0;
    }

    var startGame = function(){
        totalVal = 0;
        // var blueVal = 0;
        // var greenVal = 0;
        // var purpVal = 0;
        // var redVal = 0;
        $('#total-num').text(totalVal);
    
        
        randNum = Math.floor(Math.random() * 102) + 19;
        $("#random-number").text(randNum);

        var crystalVal = [];
        for(var i = 0; i < 4; i++){
            crystalVal.push(Math.floor(Math.random() * 11) + 1);

        }
            var blueVal = crystalVal[0];
            $("#blue").data("value", blueVal);
            console.log("blue", blueVal);
            var greenVal = crystalVal[1];
            $("#green").data("value", greenVal);
            console.log("green", greenVal);
            var redVal = crystalVal[2];
            $("#red").data("value", redVal);
            console.log("red", redVal);
            var purpVal = crystalVal[3];
            $("#purple").data("value", purpVal);
            console.log("purp", purpVal);
        

            $('.button').on('click', function(){
                // totalVal += blueVal;
                var value = $(this).data("value");
                totalVal += $(this).data("value");
                console.log("total", totalVal);
                $('#total-num').text(totalVal); 

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
            
            swal({
                title: "You won!",
                text: "Click OK to play again",
                icon: "success",
                button: "OK!",
              }).then(function() {
                  resetCrystals();
                  startGame();
                  
            });

        }
    
        var loser = function(){
            $(".button").off("click");
            losses++;
            $("#losses").text(losses);
            swal({
                title: "You lost.",
                text: "Click OK to play again",
                icon: "error",
                button: "OK!",
              }).then(function() {
                resetCrystals();
                startGame();
              });

        }
    
    startGame();


});
