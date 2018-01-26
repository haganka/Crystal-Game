$(document).ready(function () {
    
    var greenNum;
    var redNum;
    var blueNum;
    var purpleNum;
    var total;
    var matchRandom = false;

    var randNum = Math.floor((Math.random() * 100) + 1);
    console.log(randNum);
    $(".randomBox").text("Random Number: " + randNum);

    var randCrystalNum = function (){
        
    }

    $("#blueCrystal").on("click", randCrystalNum);
    $("#greenCrystal").on("click", randCrystalNum);
    $("#redCrystal").on("click", randCrystalNum);
    $("#purpleCrystal").on("click", randCrystalNum);

    //not working
    // var startGame = function(){

    
    // }

// startGame();




});