function ClozeCard(text, cloze) {
	if (this instanceof ClozeCard) {
		this.text = text;
		this.cloze = cloze;
		this.partial = "_______";
	}
	else {
		return new ClozeCard(text, cloze);
	}
}

// creates the partial method and applies it to all programmer objects
// Programmer.prototype.partialText = function() {
//   console.log("Name: " + this.name + "\nPosition: " + this.position +
//   "\nAge: " + this.age + "\nLanguages: " + this.language);
//   console.log("---------------");
// };

// else {
//     for (var x = 0; x < 10; x++) {
//       programmerArray[x].printInfo();
//     }
//   }

module.exports = ClozeCard;

// var firstPresidentCloze = new BasicCard(
//     "George Washington was the first president of the United States.", "George Washington");

// // "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States.""
// console.log(firstPresidentCloze.partial);

// // "George Washington was the first president of the United States.""
// console.log(firstPresidentCloze.fullText);

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops");


// module.exports = ClozeCard;