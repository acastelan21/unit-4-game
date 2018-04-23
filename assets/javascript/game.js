$(document).ready(function () {
    //generate random starting number between 19-120
    var random = Math.floor(Math.random() * 101) + 19;
    $("#number-to-guess").text(random);
    // user current score
    var userTotal = 0;
    //wins and loses
    var wins = 0;
    var losses = 0;


    // numbers for cystals/gems between 1 and 12 
    var num1 = Math.floor(Math.random() * 12) + 1;

    var num2 = Math.floor(Math.random() * 12) + 1;

    var num3 = Math.floor(Math.random() * 12) + 1;

    var num4 = Math.floor(Math.random() * 12) + 1;


    //click on image and assign value to it 

    $("#redGem").on("click", function () {
        userTotal = userTotal + num1;
        
        $(".userScore").text(userTotal);
        // when win and when loss code 
        if (userTotal === random) {
            win();
        }
        else if (userTotal > random) {
            loss();
        }
    });


    $("#purpleGem").on("click", function () {
        userTotal = userTotal + num2;
        
        $(".userScore").text(userTotal);
        // when win and when loss code  
        if (userTotal === random) {
            win();
        }
        else if (userTotal > random) {
            loss();
        }

    });
    $("#greenGem").on("click", function () {
        userTotal = userTotal + num3;
        
        $(".userScore").text(userTotal);
        // when win and when loss code
        if (userTotal === random) {
            win();
        }
        else if (userTotal > random) {
            loss();
        }

    });
    $("#blueGem").on("click", function () {
        userTotal = userTotal + num4;
        
        $(".userScore").text(userTotal);
        //when win and when loss code
        if (userTotal === random) {
            win();
        }
        else if (userTotal > random) {
            loss();
        }

    });

    // win and lose rules 

    function win() {
        wins++;
        $(".wins").text("Wins: " + wins);
        reset();



    };

    function loss() {
        losses++;
        $(".loses").text("Losses: " + losses);
        reset(); 

    };
    // function to reset the game 
    function reset() {
        random = Math.floor(Math.random() * 101) + 19;
        $("#number-to-guess").text(random)
        userTotal = 0
        num1 = Math.floor(Math.random() * 12) + 1;
        num2 = Math.floor(Math.random() * 12) + 1;
        num3 = Math.floor(Math.random() * 12) + 1;
        num4 = Math.floor(Math.random() * 12) + 1;
        $(".userScore").text(userTotal)
    };

});