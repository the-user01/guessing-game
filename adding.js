 // Play Button "#playBtn"
 // Sign In page "#signIn"
 // Sign Up page "#signUp"
 // Clicking "#playBtn" this will take to "#signIn"
 // After Clicking "#signIn" This will Enter to Game page
 // Clicking Sign up button will take to "#signUp" page

 // If the input fields are empty Show a message "Stupid"
 // Use If else






 /* This function is for play button */

function playBtn() {
    var firstPage = document.getElementById("firstPage");
    firstPage.style.display = "none";

    var signInPage = document.getElementById("signIn");
    signInPage.style.display = "block";
}


/* Login Button */


function loginButton() {
    var inputField = document.getElementById("inputField").value;
    var passField = document.getElementById("passField").value;

        if(inputField == "" || passField == ""){
            alert("Fill up the form first");

        }else{

            var signInPage = document.getElementById("signIn");
            signInPage.style.display = "none";

            var gamingPage = document.getElementById("gamingSection");
            gamingPage.style.display = "block"
        }

}  /* Function bracket  */





 /* Sign up button */

 function signUpButton() {
    var firstPage = document.getElementById("firstPage");
     firstPage.style.display = "none"
     
    var signInPage = document.getElementById("signIn");
    signInPage.style.display = "none";

    var signUpPage = document.getElementById("signUp");
    signUpPage.style.display = "block";
 }



 function confirmation() {

    var firstPage = document.getElementById("firstPage");
    firstPage.style.display = "none"
  
    var signUpPage = document.getElementById("signUp");
    signUpPage.style.display = "none";

    var signInPage = document.getElementById("signIn");
    signInPage.style.display = "block";
     
 }


    // var signUpPage = document.getElementById("signUp");
    // signUpPage.style.display = "none";

    // var signInPage = document.getElementById("signIn");
    // signInPage.style.display = "block";