export default class Player {
	private score: number;

	constructor(startingScore: number) {
		this.score = startingScore;
	}

	getScore() {
		return this.score;
	}

	setScore(newScore: number) {
		this.score = newScore;
	}
}
