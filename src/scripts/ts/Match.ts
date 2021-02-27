import Player from './Player';

export default class Match {
	player1: Player;

	player2: Player;

	constructor(p1: Player, p2: Player) {
		this.player1 = p1;
		this.player2 = p2;
	}

	compareScores() {
		if (this.player1.getScore() > this.player2.getScore()) {
			return this.player1.getScore();
		}
		if (this.player2.getScore() > this.player1.getScore()) {
			return this.player2.getScore();
		}
		return -1;
	}
}
