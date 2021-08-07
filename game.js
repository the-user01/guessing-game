  //Guessing Game
        //take a guessed number from the user 1-10
        //make random number
        //show the details of win or lose
        //show the total amount of win or lose
        //if you can add some styles

        var totalWin = 0;
        var totalLose = 0;


        for (var i = 0; i <= 4; i++) {
         
            var guessedNumber = parseInt(prompt("Enter your guessing number from 1-10: ")); //this will take users guessed number

            var randomNumber = Math.round(Math.random() * 10); //this is the random number 

            //here this command will match user and random number

            if(guessedNumber === randomNumber){

             document.write("<span style = 'color:hsl(0, 0%, 95%); font-weight:bold;'>Congrats This number has successfully matched!</span> Your number was: " + randomNumber + "<br>");

             totalWin++;

            } else{

            document.write("Number didn't match! The random number was: " + randomNumber + "<br>");

            totalLose++    

            }

        }


        if(totalWin < 2){
            document.write("<h3 style = 'color:red; text-align:center; border:2px solid grey; height:40px; width:250px; border-radius:5px;align-items:center; padding-top:18px'>You have won: " + totalWin + "  time</h3>");
        }else{
            document.write("<h3 style = 'color:red; text-align:center; border:2px solid grey; height:40px; width:250px; border-radius:5px;align-items:center; padding-top:18px'>You have won: " + totalWin + "  times</h3>");
        }

        // document.write("<h3 style = 'color:red; text-align:center; border:2px solid grey; height:40px; width:250px; border-radius:5px;align-items:center; padding-top:18px'>You have won: " + totalWin + "  times</h3>");


        if(totalLose < 2){
            document.write("<h3 style = 'color:red; text-align:center; border:2px solid grey; height:40px; width:250px; border-radius:5px;align-items:center; padding-top:18px'>You have lost: " + totalLose + "  time</h3>" + "<br>");
        }else{
            document.write("<h3 style = 'color:red; text-align:center; border:2px solid grey; height:40px; width:250px; border-radius:5px;align-items:center; padding-top:18px'>You have lost: " + totalLose + "  times</h3>" + "<br>");
        }


        // document.write("<h3 style = 'color:red; text-align:center; border:2px solid grey; height:40px; width:250px; border-radius:5px;align-items:center; padding-top:18px'>You have lost: " + totalLose + "  times</h3>" + "<br>");

        if(totalWin > totalLose){
            document.write("<h1 style = ' font-style:italic; margin-top:5px; text-align:center;'>Congrats! Your brain is very sharp</h1>");
        }else{
            document.write("<h1 style = ' font-style:italic; margin-top:5px; text-align:center;'>Better luck next time!</h1>");
        }

        document.write("<button onclick = 'refreshPage()' style = 'background:hsl(179, 100%, 13%); color:hsl(0, 0%, 95%); font-size:15px; font-weight:bold; justify-content:center; text-align:center; margin-top:5px; height:35px; width:100px; border:2px solid grey; border-radius:5px; outline:none; cursor:pointer;'>Play Again</button>")

        function refreshPage() {
            location.reload();
        }

