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
    
        var assignNum1 = function(){
            var greenVal = Math.floor(Math.random() * 11) + 1;
            console.log("newgreen", greenVal);
            $("#green").attr("data-value", greenVal);
        
            return greenVal;

        }
        assignNum1();

        var assignNum2 = function(){
            var blueVal = Math.floor(Math.random() * 11) + 1;
            console.log("newblue", blueVal);
            $("#blue").attr("data-value", blueVal);

            return blueVal;

        }
        assignNum2();

        var assignNum3 = function(){
            var redVal = Math.floor(Math.random() * 11) + 1;
            console.log("newpurp", redVal);
            $("#red").attr("data-value", redVal);

            return redVal;

        }
        assignNum3();

        var assignNum4 = function(){
            var purpVal = Math.floor(Math.random() * 11) + 1;
            console.log("newpurp", purpVal);
            $("#purple").attr("data-value", purpVal);

            return purpVal;

        }
        assignNum4();


        $(".button").on("click", function() {
            totalVal = totalVal += blueVal + purpVal + redVal + greenVal;
            console.log("totalo", totalVal)
            return totalVal; //total val is bringing in the global variables declared at beginning, not those delcared above
    
        });

    }


    startGame();


//not working
    var crystalVal = function(){
        console.log("this works");
        var crystalAmount = Math.floor(Math.random() * 11) + 1;
        // if (otherCrystalChosen)
        return crystalAmount;
        $(".button").on("click", crystalVal);
        console.log("crystal val", crystalVal);
  
    }

    // var crystalNumGen = function() {
    //     $("#blueCrystal").on("click", randCrystalNum);
    //     var randCrystalNum = Math.floor((Math.random() * (12 - 1)) + 1);
    //     console.log(crystalNum);
    //     $("#blueCrystal").attr("data-value", randCrystalNum);
  
    // };

    // var crystalNum = crystalNumGen();
    // console.log(crystalNum);

// add conditionals - if green button has been clicked (check data-value and if = 0 don't add, if it's over 0 add)
// also need to freeze random

// //this is not working
//     var getTotal = function (){
//         totalVal = blueVal + greenVal;
//         console.log("total", totalVal);
//         totalVal = ($(this).attr("data-value"));
//         totalVal = parseInt(totalVal);
//         counter += totalVal;
//         return totalVal;

//     }
//     getTotal();
//     console.log("total", getTotal);



    //need to test once counter is working
        if (counter === randNum){
            wins++;
            $(".stats").append(wins);
            // randNum = Math.floor(Math.random() * 102) + 19;
            $(".randomBox").text("Random Number: " + randNum);



        }else if (counter > randNum){
            losses++;
            $(".stats").append("<h3>"+ "Losses: " + losses + "</h3>");
            // randNum = Math.floor(Math.random() * 102) + 19;
            $(".randomBox").text("Random Number: " + randNum);
        }

    // $(".start-button").on("click", startGame)
    $(".stats").append("<h3>"+ "Losses: " + losses + "</h3>");
    $(".stats").append("<h3>"+ "Wins: " + wins + "</h3>");

});
