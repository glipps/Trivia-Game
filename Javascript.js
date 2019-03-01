
$(document).ready(function(){

var game = {
	current: 0,
	timerId: "",
	timerOn: 0,
	wrong: 0,
	right: 0,
	timer: 80,

/* Resetting/starting the game */
beginGame: function() {
	clearInterval(game.timerId);
	game.right = 0;
	game.wrong = 0;
	game.current = 0;

$("#game").display("");
$("#results").html("");

$("#timer").html(game.timer);
$("#start").remove();
$("#time-left").display();


if(!game.timerOn){
	game.timerId
}

game.firstQuestion();
},
firstQuestion: function (){
	game.timer = 10;
	$("#timer").removeClass("last-seconds");
	$("timer").html(game.timer);
},








/* Here are the questions, choices, and answers that will be in the quiz */

	{
		question1: "Britney Spears' first song was:",
		answers: {
			a: 'You Drive Me Crazy',
			b: 'Toxic',
      c: 'Baby One More Time',
      d: 'Sometimes'
		},
		correctAnswer: 'Baby One More Time'
	},
	{
		question2: "Which basketbal player was in 'Space Jam?'",
		answers: {
			a: 'Scotty Pippen',
			b: 'Dennis Rodman',
      c: 'Michael Jordan',
    	d: 'Tim Hardaway'
		},
		correctAnswer: 'Michael Jordan'
    },
    {
		question3: "What was Tommy's last name in 'Rugrats?'",
		answers: {
			a: 'Deville',
			b: 'Finster',
      c: 'Pickles',
      d: 'Daniels'
		},
		correctAnswer: 'Pickles'
	},
	{
		question4: "My Feeny was the teacher im which popular TV show?",
		answers: {
			a: 'Beverly Hills, 90210',
			b: 'Fresh Prince of Bel-air',
      c: 'Boy Meets World',
      d: 'Saved By The Bell'
		},
		correctAnswer: 'Saved By The Bell'
    },
    {
		question5: "Who wrote the book series 'Goosebumps?'",
		answers: {
			a: 'Lous Lowry',
			b: 'R.L. Stine',
      c: 'Dav Pilkey',
      d: 'Stephen King'
		},
		correctAnswer: 'R.L. Stine'
	},
	{
		question6: "NSYNC consisted of Justin Timberlake, Lance Bass, JC Chasez, Joey Fatone, and ________?",
		answers: {
			a: 'Brian Litrell',
			b: 'Jeff Timmons',
      c: 'Joey McIntyre',
      d: 'Chris Kirkpatrick'
		},
		correctAnswer: 'Chris Kirkpatrick'
    },
    {
		question7: "What was the boy's name in Pokemon?",
		answers: {
			a: 'Ash',
			b: 'Onix',
      c: 'Poli',
      d: 'Kai'
		},
		correctAnswer: 'Ash'
	},
	{
		question8: "Rocko from 'Rocko's Modern Life' was what kind of animal?",
		answers: {
			a: 'Dog',
			b: 'Armadillo',
      c: 'Kangaroo',
    	d: 'Wallaby'
		},
		correctAnswer: 'Wallaby'
	},










