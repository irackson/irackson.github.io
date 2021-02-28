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
	gameOver: boolean;

	currentRound: any;

	rounds: any[];

	player1: Player;

	player2: Player;

	response: string | string[] | null;

	maxScore: number;

	constructor(uglyData: any[], players: { p1: Player; p2: Player }) {
		const prettyData: any[] = [];
		for (let i = 0; i < uglyData.length; i++) {
			prettyData.push(JSON.parse(JSON.stringify(uglyData[i])));
		}
		this.maxScore = calculateMax(prettyData);
		this.currentRound = prettyData.shift();
		if (this.currentRound === undefined) {
			this.gameOver = true;
		} else {
			this.gameOver = false;
		}
		this.rounds = prettyData;

		this.player1 = players.p1;
		this.player2 = players.p2;
		this.response = null;
	}

	processResponse(lockersName: string): number {
		let pointsWon = 0;
		let multiplier = 0;
		const validRatio = 1; //! handle partial credit (change to let)
		if (this.currentRound.difficulty === 'easy') {
			multiplier = 1;
		} else if (this.currentRound.difficulty === 'medium') {
			multiplier = 2;
		} else if (this.currentRound.difficulty === 'hard') {
			multiplier = 3;
		}

		if (this.response === this.currentRound.correct_answer) {
			pointsWon = validRatio * multiplier;
		}

		if (this.player1.getName() === lockersName) {
			this.player1.setScore(this.player1.getScore() + pointsWon);
		}
		if (this.player2.getName() === lockersName) {
			this.player2.setScore(this.player2.getScore() + pointsWon);
		}
		this.currentRound = this.rounds.shift();
		if (this.currentRound === undefined) {
			this.gameOver = true;
		}
		this.response = null;

		return pointsWon;
	}

	getLeader(): string | null {
		if (this.player1.getScore() > this.player2.getScore()) {
			return this.player1.getName();
		}
		if (this.player2.getScore() > this.player1.getScore()) {
			return this.player2.getName();
		}
		return null;
	}
}
