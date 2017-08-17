var inquirer = require("inquirer");

var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

// Allows the user to type "basic" or "cloze" depending on which Flashcards they would like to use.  See if statements at end of this script.
var roleArg = process.argv[2];


// var theCloze = new ClozeCard();




var bq1a1 = new BasicCard("In the original 'The Legend of Zelda' NES game, what is the name of the final boss?", "Ganon");
var bq2a2 = new BasicCard("In NES's 'Megaman 2,' which level boss do you encounter in the clouds?", "Air Man");
var bq3a3 = new BasicCard("Which boxer wore a crown in NES's 'Punch-Out?'", "King Hippo");
var bq4a4 = new BasicCard("What is the hero’s name in 'Castlevania?'", "Simon Belmont");
var bq5a5 = new BasicCard("In the original 'Final Fantasy' NES game, which character/class used dark magic?", "Black Mage");
var bq6a6 = new BasicCard("Before fighting Mother Brain in the original 'Metroid' NES game, you must defeat bosses Kraid and....?", "Ridley");
var bq7a7 = new BasicCard("Which character can jump the highest in 'Super Mario Bros. 2?'", "Luigi");
var bq8a8 = new BasicCard("How many levels must you reach in order to face the first boss in NES's 'Bubble Bobble?'", "100");
var bq9a9 = new BasicCard("In NES's 'Kid Icarus,' you can retrieve the sacred treasure _____ Arrow from a fortress.", "Light");
var bq10a10 = new BasicCard("The heroes in the original 'Contra' are Lance and....?", "Bill");

var basicArray = [bq1a1, bq2a2, bq3a3, bq4a4, bq5a5, bq6a6, bq7a7, bq8a8, bq9a9, bq10a10];

		
var cq1a1 = new ClozeCard("In the original 'The Legend of Zelda' NES game, " + partial + " is the final boss.", "Ganon");
var cq2a2 = new ClozeCard("In NES's 'Megaman 2,' you'll encounter the boss Air Man in the clouds.", "Air Man");
var cq3a3 = new ClozeCard("King Hippo wore a crown in NES's 'Punch-Out.'", "King Hippo");
var cq4a4 = new ClozeCard("Simon Belmont is the hero in 'Castlevania.'", "Simon Belmont");
var cq5a5 = new ClozeCard("In the original 'Final Fantasy' NES game, a Black Mage used dark magic.", "Black Mage");
var cq6a6 = new ClozeCard("Before fighting Mother Brain in the original 'Metroid' NES game, you must defeat bosses Kraid and Ridley.", "Ridley");
var cq7a7 = new ClozeCard("Luigi can jump the highest in 'Super Mario Bros. 2.'", "Luigi");
var cq8a8 = new ClozeCard("You must reach level 100 in order to face the first boss in NES's 'Bubble Bobble.'", "100");
var cq9a9 = new ClozeCard("In NES's 'Kid Icarus,' you can retrieve the sacred treasure Light Arrow from a fortress.", "Light");
var cq10a10 = new ClozeCard("The heroes in the original 'Contra' are Lance and Bill.", "Bill");

var clozeArray = [cq1a1, cq2a2, cq3a3, cq4a4, cq5a5, cq6a6, cq7a7, cq8a8, cq9a9, cq10a10];

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

// cloze
// partial
// fullText



var count = 0;
var points = 0;


var askBasicQuestions = function() {

if (count < 10){
	console.log(basicArray[count].front);
	inquirer.prompt([
      {
      	type: "input",
        name: "trivia",
        message: "Answer: "
      }
    ]).then(function(answers) {
      	if (answers.trivia === basicArray[count].back) {
      		console.log("Correct!");
      		console.log("------------------------");
    		points++;
    		count++;
    		askBasicQuestions();
    	}
    	else {
    		console.log("WRONG!");
    		console.log("The answer was: " + basicArray[count].back);
    		console.log("------------------------");
    		count++;
    		askBasicQuestions();
    	}
      });
}

else {
	console.log("-------GAME OVER--------")
	console.log("You scored " + points + "/10 points!")
	if (points > 7) {
		console.log("Nice work!  You know your NES trivia!")
		console.log("------------------------")
	}
	else if (points < 7) {
		console.log("You may need to sharpen your NES trivia skills...")
		console.log("------------------------")
	}
}
};

// askBasicQuestions();





var askClozeQuestions = function() {

if (count < 10){
	console.log(clozeArray[count].text);
	inquirer.prompt([
      {
      	type: "input",
        name: "trivia",
        message: "Answer: "
      }
    ]).then(function(answers) {
      	if (answers.trivia === clozeArray[count].cloze) {
      		console.log("Correct!");
      		console.log("------------------------");
    		points++;
    		count++;
    		askClozeQuestions();
    	}
    	else {
    		console.log("WRONG!");
    		console.log("The answer was: " + clozeArray[count].cloze);
    		console.log("------------------------");
    		count++;
    		askClozeQuestions();
    	}
      });
}

else {
	console.log("-------GAME OVER--------")
	console.log("You scored " + points + "/10 points!")
	if (points > 7) {
		console.log("Nice work!  You know your NES trivia!")
		console.log("------------------------")
	}
	else if (points < 7) {
		console.log("You may need to sharpen your NES trivia skills...")
		console.log("------------------------")
	}
}
};

// askClozeQuestions();


if (roleArg === "basic") {
	askBasicQuestions();
}
if (roleArg === "cloze") {
	askClozeQuestions();
}