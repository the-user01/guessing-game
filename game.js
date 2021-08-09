//Guessing Game
        //take a guessed number from the user 1-10
        //make random number
        //show the details of win or lose
        //show the total amount of win or lose
        //if you can add some styles


        var totalWin = 0;

        function submissionButton(){
            var legendText = document.getElementById("legendTag");
            var publishingNumber = document.getElementById("numberPublishing");
            var scoreResult = document.getElementById("scoreText");
            var guessedNumber = document.getElementById("numberTaker").value;

            var guessedNumber = parseInt(guessedNumber);          

            var randomNumber = Math.round(Math.random()*10);

            
            if ( guessedNumber < 0 || guessedNumber > 10) {

                alert("Enter between number 1-10 ")

            } else{

                if (guessedNumber === randomNumber) {

                    legendText.innerText = "Matched";
    
                    publishingNumber.innerHTML = "<h2 style =' color:red; '>Congrats</h2>";
    
                    totalWin++;
    
                    scoreResult.innerHTML = "Your score is: " + totalWin;
    
                } else{
    
                    legendText.innerText = "Didn't Match";
    
                    publishingNumber.innerHTML = "The random number was: " + randomNumber;
    
                    totalWin--;
    
                    scoreResult.innerHTML = "Your score is: " + totalWin;
    
                } //If Else
    

            } /* If eLse Returns */
            

            
        }; //Button function     

        function refreshBtn() {

            var firstPage = document.getElementById("firstPage");
            firstPage.style.display = "none";

            var gamingPage = document.getElementById("gamingSection");
            gamingPage.style.display = "block"

            document.location.reload();
        };

   