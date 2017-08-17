function ClozeCard(text, cloze) {
	if (this instanceof ClozeCard) {
		this.fullText = text;
		this.cloze = cloze;
		this.partial = this.fullText.replace(cloze, "_______");

		this.errorMessage = function(err) {
			var brokenCloze = new ClozeCard("This doesn't work", "oops");
			if(err) {
				console.log(brokenCloze);
			}
		
  		};
	}
	else {
		return new ClozeCard(text, cloze);
	}
};


module.exports = ClozeCard;
