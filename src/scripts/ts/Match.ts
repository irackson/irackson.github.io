import Player from './Player';

const calculateMax: (triviaData: any[]) => number = function (
	rounds: any[]
): number {
	let max = 0;

	for (let i = 0; i < rounds.length; i++) {
		let points: number = 0;

		if (rounds[i].difficulty === 'easy') {
			points = 1;
		} else if (rounds[i].difficulty === 'medium') {
			points = 2;
		} else if (rounds[i].difficulty === 'hard') {
			points = 3;
		}

		max += points;
	}

	return max;
};

export default class Match {
	currentRound: any;

	currentRoundNumber: number;

	totalRoundNumbers: number;

	rounds: any[];

	player1: Player;

	player2: Player;

	response: string[];

	maxScore: number;

	constructor(uglyData: any[], players: { p1: Player; p2: Player }) {
		const prettyData: any[] = [];
		for (let i = 0; i < uglyData.length; i++) {
			prettyData.push(JSON.parse(JSON.stringify(uglyData[i])));
		}
		this.maxScore = calculateMax(prettyData);
		this.currentRoundNumber = 1;
		this.totalRoundNumbers = prettyData.length;
		this.currentRound = prettyData.shift();

		this.rounds = prettyData;

		this.player1 = players.p1;
		this.player2 = players.p2;
		this.response = [];
	}

	processResponse(
		lockersName: string,
		correctAnswers: string[],
		incorrectAnswers: string[],
		credit: string
	): number {
		let pointsWon = 0;
		let multiplier = 0;

		if (this.currentRound.difficulty === 'easy') {
			multiplier = 1;
		} else if (this.currentRound.difficulty === 'medium') {
			multiplier = 2;
		} else if (this.currentRound.difficulty === 'hard') {
			multiplier = 3;
		}

		let numCorrect: number = 0;
		let numIncorrect: number = 0;
		for (let i = 0; i < correctAnswers.length + incorrectAnswers.length; i++) {
			if (correctAnswers.includes(this.response[i])) {
				numCorrect++;
			} else if (incorrectAnswers.includes(this.response[i])) {
				numIncorrect++;
			}
		}

		// ? math check
		/* console.log('CORRECT ANSWERS:');
		console.log(correctAnswers);
		console.log(correctAnswers.length);
		console.log('INCORRECT ANSWERS');
		console.log(incorrectAnswers);
		console.log(`rightLength: ${correctAnswers.length}`);
		console.log(`wrongLength: ${incorrectAnswers.length}`); */
		if (numCorrect > 0) {
			if (credit === 'single') {
				if (numCorrect === correctAnswers.length && numIncorrect === 0) {
					pointsWon = 1 * multiplier;
				}
			} else {
				pointsWon =
					(multiplier / correctAnswers.length) * (numCorrect - numIncorrect);
				if (pointsWon < 0) {
					pointsWon = 0;
				}
			}
		}
		// ? math check cont.
		/* console.log(`numCorrect: ${numCorrect}`);
		console.log(`numIncorrect: ${numIncorrect}`);
		console.log(`pointsWon: ${pointsWon}`); */

		if (this.player1.getName() === lockersName) {
			this.player1.setScore(this.player1.getScore() + pointsWon);
		}
		if (this.player2.getName() === lockersName) {
			this.player2.setScore(this.player2.getScore() + pointsWon);
		}
		this.currentRound = this.rounds.shift();
		this.currentRoundNumber++;
		this.response = [];

		return pointsWon;
	}

	getLeader(): string | null {
		console.log(this.player1.getScore());
		console.log(this.player2.getScore());
		if (this.player1.getScore() > this.player2.getScore()) {
			return this.player1.getName();
		}
		if (this.player2.getScore() > this.player1.getScore()) {
			return this.player2.getName();
		}
		return null;
	}
}
