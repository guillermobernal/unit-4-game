$(document).ready(function() {
    var scoreToGet;
    var wins=0;
    var loses=0;
    var yourScore=0;

    var crysOne = $("#crystal1");
    var crysTwo = $("#crystal2");
    var crysThree = $("#crystal3");
    var crysFour = $("#crystal4");
    
    $("#crystal1").on("click", function(){
        crysOne = Math.floor(Math.random()*12)+1;
        console.log(crysOne);
    })

    //repeat ^^ 3 times - once for each crystal image

    //generates random score to match

    $("#crystal1").on("click", function(){
         = Math.floor(Math.random()*12)+1;
        console.log(crysOne);
    })
    
    
})