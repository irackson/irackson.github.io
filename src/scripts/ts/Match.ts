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
	currentRound: number;

	rounds: [];

	player1: Player;

	player2: Player;

	maxScore: number;

	constructor(triviaData: [], players: { p1: Player; p2: Player }) {
		this.currentRound = 0;
		this.rounds = triviaData;
		this.player1 = players.p1;
		this.player2 = players.p2;

		this.maxScore = calculateMax(triviaData);
	}

	getCurrentRoundData() {
		const round = this.rounds[this.currentRound];
		return JSON.parse(JSON.stringify(round));
	}

	getMaxScore(): number {
		return this.maxScore;
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
