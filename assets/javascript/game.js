var numberToGuess;
var totalScore = 0;
var wins = 0;
var losses = 0;
var crystalValue;

//generate number 19-120 as goal
function numberGenerator() {
	numberToGuess = Math.floor((Math.random() * (120 - 19 + 1)) + 19);
};

//generate number between 1-12 for value of crystal
function crystalValueGenerator() {
	crystalValue = Math.floor((Math.random() * 12) + 1);
}

//push value of crystal and store in html attribute value
function pushValues() {
	crystalValueGenerator();
	$("#emerald").attr("value", crystalValue);
	crystalValueGenerator();
	$("#diamond").attr("value", crystalValue);
	crystalValueGenerator();
	$("#amethyst").attr("value", crystalValue);
	crystalValueGenerator();
	$("#sapphire").attr("value", crystalValue);
}

//function to start/reset game
function resetGame() {
	numberGenerator();
	crystalValueGenerator();
	pushValues();
}

//start game when page loads
resetGame();

//display stats on start
$("#random-number").html(numberToGuess);
$("#total-score").html(totalScore);
$("#wins").html(wins);
$("#losses").html(losses);


//on crystal clicks, game resets if number is achieved or guess goes over
//otherwise user keeps guessing
//stats are updated after every click
$("#emerald").on("click", function(){
	totalScore += parseInt($("#emerald").attr("value"));
	if (totalScore === numberToGuess) {
		wins++;
		totalScore = 0;
		resetGame()
	} else if (totalScore > numberToGuess) {
		losses ++;
		totalScore = 0;
		resetGame()
	}
	$("#random-number").html(numberToGuess);
	$("#total-score").html(totalScore);
	$("#wins").html(wins);
	$("#losses").html(losses);
	console.log($("#emerald").val());
});

$("#diamond").on("click", function(){
	totalScore += parseInt($("#diamond").attr("value"));
	if (totalScore === numberToGuess) {
		wins++;
		totalScore = 0;
		resetGame()
	} else if (totalScore > numberToGuess){
		losses ++;
		totalScore = 0;
		resetGame()
	}
	$("#random-number").html(numberToGuess);
	$("#total-score").html(totalScore);
	$("#wins").html(wins);
	$("#losses").html(losses);
});

$("#amethyst").on("click", function(){
	totalScore += parseInt($("#amethyst").attr("value"));
	if (totalScore === numberToGuess) {
		wins++;
		totalScore = 0;
		resetGame()
	} else if (totalScore > numberToGuess) {
		losses ++;
		totalScore = 0;
		resetGame()
	}
	$("#random-number").html(numberToGuess);
	$("#total-score").html(totalScore);
	$("#wins").html(wins);
	$("#losses").html(losses);
});

$("#sapphire").on("click", function(){
	totalScore += parseInt($("#sapphire").attr("value"));
	if (totalScore === numberToGuess) {
		wins++;
		totalScore = 0;
		resetGame()
	} else if (totalScore > numberToGuess) {
		losses ++;
		totalScore = 0;
		resetGame()
	}
	$("#random-number").html(numberToGuess);
	$("#total-score").html(totalScore);
	$("#wins").html(wins);
	$("#losses").html(losses);
});












