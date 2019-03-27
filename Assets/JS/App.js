$("#game").display("");
$("#results").html("");

$("#timer").html(game.timer);
$("#start").remove();
$("#time-left").display();



i = 60;
function onTimer() {
document.getElementById('timer').innerHTML = i;
i--;
if (i < 0) {
alert('Times Up');
}
else {
setTimeout(onTimer, 1000);
}

onTimer();


$("#start").on("click", function () {
    displayQuestion(currentQuestion);
});

     var start = function() {
       var correctAnswer = 0;
       var incorrectAnswer = 0;
       var questionAsked = "none";
       var userInput = "none";
       var answer = "none";
     }
    
     var askQuestion = function () {
       userInput = prompt (question);
     };
    
     var userScore = function () {
       if(userInput == answer) {
         correctAnswer = correctAnswer + 1;
         alert ("You got it !");
       }
        else{
          incorrectAnswer = incorrectAnswer + 1;
          alert(" Sorry, but that's incorrect.");
        }  
     }}