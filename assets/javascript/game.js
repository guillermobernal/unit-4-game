$(document).ready(function() {
    var scoreToGet;
    var wins = 0;
    var loses = 0;
    var randomNumber;

    var crysOne = $("#crystal1");
        //crysOne = 0;
    var crysTwo = $("#crystal2");
    var crysThree = $("#crystal3");
    var crysFour = $("#crystal4");

    var yourScore = function(){
        randomNumber = Math.floor(Math.random() *12) + 1;
        console.log(randomNumber)

    
    
    $("#crystal1").on("click", function(){
        crysOne += yourScore;
        console.log(crysOne);
    })

    $("#crystal2").on("click", function(){
        crysTwo = Math.floor(Math.random()*12)+1;
        console.log(crysTwo);
    })

    $("#crystal3").on("click", function(){
        crysThree = Math.floor(Math.random()*12)+1;
        console.log(crysThree);
    })

    $("#crystal4").on("click", function(){
        crysFour = Math.floor(Math.random()*12)+1;
        console.log(crysFour);
    });
    }


    //generates random score to match

    var game = function () {
        scoreToGet = Math.floor(Math.random()*102)+19;
        console.log(scoreToGet);
    $("#scoreMatch").text("Match This Number: " + scoreToGet);
    
    }


    game();
    })
    
    