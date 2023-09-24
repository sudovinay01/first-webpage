 var randomNumber = Math.floor(Math.random() * 100) + 1;
 var guesses = document.getElementById("guesses");
 var lastResult = document.getElementById("lastResult");
 var lowOrHi = document.getElementById("lowOrHi");
 var guessSubmit = document.getElementById("guessSubmit");
 var guessField = document.getElementById("guessField");
 var guessCount = 1;
 function checkGuess()
 {
   var userGuess = Number(guessField.value);

   if(guessCount == 100) 
   {
     lastResult.innerHTML = "!!!GAME OVER!!!";
     disableForm();
   }
   else
   {
    if(userGuess == randomNumber) 
    {
     lowOrHi.innerHTML =  randomNumber+" is my guess .......";
       lastResult.innerHTML = " you won in "+guessCount+" tries..";
      guesses.innerHTML =  "Congratulations! You got it right!";
end.innerHTML="(please comment guessed number and number of tries in next page...)";  
disableForm();
    }
    else
    {
      guesses.innerHTML = "Wrong!";
      if(userGuess < randomNumber) 
      {
       lowOrHi.innerHTML +=" '' "+userGuess+" < N '' \n"; 
          lastResult.innerHTML = "try greater value in next try..";     
} 
      else
      if(userGuess > randomNumber) 
      {
       lowOrHi.innerHTML +=" '' "+userGuess+" > N '' \n";
  lastResult.innerHTML = "try lesser value in next try..";  
      }
    }
    guessCount++;
    guessField.value = "";
 
  }
}
function disableForm() 
{
  var wholeForm = document.querySelector(".form");
  wholeForm.style.opacity = 0.5;
  guessField.setAttribute("disabled", "disabled");
  guessSubmit.setAttribute("disabled", "disabled");
}
guessSubmit.onclick = checkGuess;
