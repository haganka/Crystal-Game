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


    var startGame2 = function(){
        totalVal = 0;
        $(".total-score").text("Your total: " + totalVal);
        randNum = Math.floor(Math.random() * 102) + 19;
        $(".randomBox").text("Random Number: " + randNum);

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

    }
    startGame2();

    console.log("BLUE", blueVal);


    $("#blue").on("click", function() {
        parseInt(totalVal = totalVal + blueVal);
        console.log("totalb", totalVal)
        return totalVal; //total val is bringing in the global variables declared at beginning, not those delcared above

    });
    $("#green").on("click", function() {
        parseInt(totalVal = totalVal + greenVal);
        console.log("totalg", totalVal)
        return totalVal; //total val is bringing in the global variables declared at beginning, not those delcared above

    });
    $("#red").on("click", function() {
        parseInt(totalVal = totalVal + redVal);
        console.log("totalr", totalVal)
        return totalVal; //total val is bringing in the global variables declared at beginning, not those delcared above

    });
    $("#purple").on("click", function() {
        parseInt(totalVal = totalVal + purpVal);
        console.log("totalp", totalVal)
        return totalVal; //total val is bringing in the global variables declared at beginning, not those delcared above

    });

    
    var compareVals = function(){

        if (totalVal === randNum){
            wins++;
            $(".stats").append(wins);
            // randNum = Math.floor(Math.random() * 102) + 19;
            $(".randomBox").text("Random Number: " + randNum);

        }else if (totalVal < randNum){
            totalVal += parseInt(this.value);
            losses++;
            $(".stats").append("<h3>"+ "Losses: " + losses + "</h3>");
            // randNum = Math.floor(Math.random() * 102) + 19;
            $(".randomBox").text("Random Number: " + randNum);
        }
    }

    compareVals();

    });


    //need to test once counter is working
        // if (totalVal === randNum){
        //     wins++;
        //     $(".stats").append(wins);
        //     // randNum = Math.floor(Math.random() * 102) + 19;
        //     $(".randomBox").text("Random Number: " + randNum);



        // }else if (counter > randNum){
        //     losses++;
        //     $(".stats").append("<h3>"+ "Losses: " + losses + "</h3>");
        //     // randNum = Math.floor(Math.random() * 102) + 19;
        //     $(".randomBox").text("Random Number: " + randNum);
        // }

    // $(".start-button").on("click", startGame)
    $(".stats").append("<h3>"+ "Losses: " + losses + "</h3>");
    $(".stats").append("<h3>"+ "Wins: " + wins + "</h3>");


