$(document).ready(function () {
    //generate random starting number between 19-120
    var random = Math.floor(Math.random() * 101 + 19);
    $("#number-to-guess").text(random);
    // user current score
    var userTotal = 0;
    //wins and loses
    var wins = 0;
    var losses = 0;


    // numbers for cystals/gems between 1 and 12 
    var num1 = Math.floor(Math.random() * 11 + 1);
   
    
    var num2 = Math.floor(Math.random() * 11+ 1);
  
    var num3 = Math.floor(Math.random() * 11 + 1);
    
    var num4 = Math.floor(Math.random() * 11 + 1);
    

    //click on image and assign value to it

    $("#redGem").on("click", function () {
        userTotal = userTotal + num1;
        $(".userScore").text(userTotal);

    });


    $("#purpleGem").on("click", function () {
        userTotal = userTotal + num2;
        $(".userScore").text(userTotal);

    });
    $("#greenGem").on("click", function () {
        userTotal = userTotal + num3;
        $(".userScore").text(userTotal);

    });
    $("#blueGem").on("click", function () {
        userTotal = userTotal + num4;
        $(".userScore").text(userTotal);

    });




























});