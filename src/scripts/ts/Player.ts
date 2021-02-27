export default class Player {
	private name: string;

	private score: number;

	constructor(playerName: string, startingScore: number) {
		this.name = playerName;
		this.score = startingScore;
	}

	getName() {
		return this.name;
	}

	getScore() {
		return this.score;
	}

	setScore(newScore: number) {
		this.score = newScore;
	}
}
