
var butt = document.getElementById("pass-check");
var white = document.getElementById("pass-box");
var h1 = document.getElementById("myh1");


butt.addEventListener("click", function(){
var password = white.value;
if(password == "lanadelrey"){
        butt.style.display = "none";
        white.style.display = "none";
        h1.textContent = "You have unlocked the secret of the maze....The secret is: I am a vampire"
}

else if(password == ""){
    alert("Please enter a password");
}

else{
    h1.textContent = "Incorrect password";
}
});