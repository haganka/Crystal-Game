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


    var startGame = function(){
        // totalVal = 0;
        // $(".total-num").text(totalVal);
        randNum = Math.floor(Math.random() * 102) + 19;
        console.log("random", randNum);
        $("#random-number").text(randNum);

        var crystalVal = [];
        for(var i = 0; i < 4; i++){
            crystalVal.push(Math.floor(Math.random() * 11) + 1);
            console.log(crystalVal);
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

            var winner = function(){
                wins++;
                $("#wins").append(wins);
        
            }
        
            var loser = function(){
                losses++;
                $("#losses").append(losses);
        
            }
        
        
            $('#blue').on ('click', function(){
                totalVal = parseInt(totalVal + blueVal);
                console.log("New totalb= " + totalVal);
                $('#total-num').text(totalVal); 
        
                    if (totalVal === randNum){
                      winner();
                    }
                    else if (totalVal > randNum){
                      loser();
                    }   
            });

            $("#green").on("click", function() {
                totalVal = totalVal + greenVal;
                console.log("New totalg= " + totalVal);
                $('#total-num').text(totalVal); 
        
                    if (totalVal === randNum){
                        winner();
                    }
                    else if (totalVal > randNum){
                        loser();
                    } 
            });

            $("#red").on("click", function() {
                totalVal = totalVal + redVal
                console.log("New totalr= " + totalVal);
                $('#total-num').text(totalVal); 
        
                    if (totalVal === randNum){
                        winner();
                    }
                    else if (totalVal > randNum){
                        loser();
                    } 
            });

            $("#purple").on("click", function() {
                totalVal = totalVal + purpVal
                console.log("New totalp= " + totalVal);
                $('#total-num').text(totalVal); 
        
                    if (totalVal === randNum){
                        winner();
                    }
                    else if (totalVal > randNum){
                        loser();
                    } 

            });

            $(".total-num").text(totalVal);

        };
    
    startGame();


});
