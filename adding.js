 // Play Button "#playBtn"
 // Sign In page "#signIn"
 // Sign Up page "#signUp"
 // Clicking "#playBtn" this will take to "#signIn"
 // After Clicking "#signIn" This will Enter to Game page
 // Clicking Sign up button will take to "#signUp" page

 var firstPage = document.getElementById("firstPage");
 var signInPage = document.getElementById("signIn");
 var signUpPage = document.getElementById("signUp");
 var loginBtn = document.getElementById("loginBtn");
 var signUpBtn = document.getElementById("signUpBtn")
 const signInLink = document.getElementById("loginLink");
 const signUpLink = document.getElementById("signUpLink");

 /* This function is for play button */

function playBtn() {
    var firstPage = document.getElementById("firstPage");
    firstPage.style.display = "none";

    var signInPage = document.getElementById("signIn");
    signInPage.style.display = "block";
}


/* Login Button */
function loginButton() {
    var signInPage = document.getElementById("signIn");
    signInPage.style.display = "none";
}

 /* Sign up button */

 function signUpButton() {
    var signInPage = document.getElementById("signIn");
    signInPage.style.display = "none";

    var signUpPage = document.getElementById("signUp");
    signUpPage.style.display = "block";
 }

 function confirmation() {
    var signUpPage = document.getElementById("signUp");
    signUpPage.style.display = "none";

    var signInPage = document.getElementById("signIn");
    signInPage.style.display = "block";

 }


