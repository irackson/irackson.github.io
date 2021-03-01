/* eslint-disable */
require('../../styles/styles.scss');
import Match from './Match';
import Player from './Player';

import $ from 'jquery';
import _ from 'lodash';

/* eslint-enable */
function customLog(message: any, color = 'black'): void {
	switch (color) {
		case 'success':
			color = 'Green';
			break;
		case 'info':
			color = 'Blue';
			break;
		case 'error':
			color = 'Red';
			break;
		case 'warning':
			color = 'Orange';
			break;
		default:
			color = color;
	}
	console.log(`%c${message}`, `color:${color}`);
}
function randomIntFromInterval(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

customLog(
	'This project uses Typescript, jQuery, Sass, Webpack, ESLint & Prettier',
	`rgb(${randomIntFromInterval(0, 255)},
		${randomIntFromInterval(0, 255)},
		${randomIntFromInterval(0, 255)})`
);

//! ___          ___    ___  __      __   __   __   ___
//!  |  |  |\/| |__      |  /  \    /  ` /  \ |  \ |__
//!  |  |  |  | |___     |  \__/    \__, \__/ |__/ |___

// TODO: each player has their own submit button
// TODO: timed, with option to choose seconds/question vs. not timed
// TODO: click to reveal hint if available
// TODO: display reference if available
// TODO: scores start at 100%
// TODO: mobile design is minimal, but as screen gets bigger instructions are added
// TODO: fix fontawesome link bug
// TODO: add bounce animation to CHOOSE and/or GAME MODE after play click w/out mode selected
// TODO: add cool animation question mark to response container when game is inactive and no mode is selected thats visible on load
// TODO: deal with error: otdp 'response_code: 1'... no trivia available. app should alert user and return them to otdp start page!!!
// TODO: swap every 2nd &rdquo with &ldquo

/* display level of difficulty for each particular question: easy, medium, and hard. hover for definitions: medium and hard questions are worth twice as much as easy questions, and hard questions may given partial credit if there is more than one answer */

/* eslint-disable @typescript-eslint/no-unused-vars */
const $playButton = $('#play-button');

const $inactiveGameContainer = $('.inactive-game-container');

const $activeGameContainer = $('.active-game-container'); // hidden onload
const $ratioContainer = $('.ratio-container');
const $p1ScoreText = $('#player-1-points');
const $p2ScoreText = $('#player-2-points');
const $maxPointsText = $('.max-points');
const $divisionSpacing = $('.division-spacing');
const $statContainer = $('.stat-container');
const $resultStatsContainer = $('result-stats-container');
const $winnerText = $('#winner-text');
const $questionStatsContainer = $('.question-stats-container');
const $questionNumberText = $('#question-number-text');
const $questionDifficultyText = $('#question-difficulty-text');

const $player1Button = $('#player-1-button'); // hidden onload
const $player2Button = $('#player-2-button'); // hidden onload

const $modeContainer = $('.mode-container');
const $devSelectButton = $('#dev-select-button');
const $otdbDescriptionText = $('.otdb-description-text');
const $otdbSelectButton = $('#otdb-select-button');
const $promptText = $('#prompt');
const $promptContainer = $('.prompt-container');

const $devPregameContainer = $('.dev-pregame-container'); // hidden onload

const $otdbPregameContainer = $('.otdb-pregame-container'); // hidden onload
const otdbParametersForm: HTMLFormElement = document.getElementById(
	'otdb-parameters-form'
) as HTMLFormElement;

const $responseContainer = $('.response-container'); // hidden onload

/* eslint-enable @typescript-eslint/no-unused-vars */
let gameOn: boolean = false;
let modeSelected: string | undefined;
let match: Match;
let player1: Player;
let player2: Player;

let $responseEl = $('<div/>');

/* game globals */

type OtdbParameters = {
	amount: string;
	category: string;
	difficulty: string;
	type: string;
};

const makeBoolean = (): JQuery => {
	const $booleanEl = $('<div class="boolean-container"/>');

	const $booleanButtonContainer = $(
		'<div class="boolean-button-container"></div>'
	);
	const $falseEl = $(
		'<div class="button boolean-button" id="false-select">FALSE</div>'
	);
	const $trueEl = $(
		'<div class="button boolean-button" id="true-select">TRUE</div>'
	);

	$falseEl.on('click', function (e) {
		e.preventDefault();
		$trueEl.css('border', '1px solid black');
		$falseEl.css('border', '2px solid silver');
		$player1Button.css('color', 'white');
		$player2Button.css('color', 'white');

		match.response = 'False';
	});

	$trueEl.on('click', function (e) {
		e.preventDefault();
		$falseEl.css('border', '1px solid black');
		$trueEl.css('border', '2px solid silver');
		$player1Button.css('color', 'white');
		$player2Button.css('color', 'white');

		match.response = 'True';
	});

	$booleanButtonContainer.append($falseEl).append($trueEl);
	$booleanEl.append($booleanButtonContainer);
	return $booleanEl;
};

const makeMultiple = (): JQuery => {
	const $multipleEl = $(
		'<div class="multiple-container"><p>multiple choices here</p></div>'
	);
	return $multipleEl;
};

const runQuiz = function (triviaData: []): void {
	/* 	for (let i = 0; i < data.results.length; i++) {
		customLog(decodeURIComponent(data.results[i].question), 'info');
	} */
	// TODO: always decodeURIComponent(data.string) before doing anything
	//! run once
	// create two new Player, player1 & player2
	// instantiate match = new Match(quiz: data, players: {p1: player1, p2, player2})
	// set match.max to calculateMax(match.data)
	// p1.score/match.max to $p1ScoreText.text(), p2.score/match.max to #p2ScoreText.text(), $p1ScoreContainer().show(), $p1ScoreContainer().show()
	//* while questions.length > 0...
	//! BEFORE lock
	//* question to $promptText.text()
	//* difficulty to #difficultyText.text()
	//* if credit defined... credit to $creditText.text(), $creditContainer.show()
	//* all answers to .response-container
	//! AFTER lock
	//* lockers score += Math.floor(credit <right/wrong> * difficulty <1|2|3>)
	//* questions.pop();
	//* creditContainer.hide();
	//! AFTER loop
	//* determine and set winner
	//* $promptContainer.text(match.winner)
	//* $player1Button.hide(), $player2Button.hide()
	//* show wrong questions and right answers for each player in $responseContainer

	/* CODE HERE */
	player1 = new Player('Player One', 0);
	player2 = new Player('Player Two', 0);
	match = new Match(triviaData, { p1: player1, p2: player2 });

	$p1ScoreText.text(player1.getScore());
	$p2ScoreText.text(player2.getScore());
	$maxPointsText.text(match.maxScore);

	let spaceString = '';
	for (let i = 0; i < match.maxScore.toString().split('').length; i++) {
		spaceString += '&nbsp;&nbsp;';
	}
	$divisionSpacing.html(spaceString);

	customLog('new match started', 'info');
	console.log(match);

	//* for each round...
	/* eslint-disable @typescript-eslint/no-unused-vars */

	let {
		type, // boolean, multiple, rank, grid, blank, dropdown
		difficulty, // easy --> 1 point, medium --> 2, hard --> 3
		question, // prompt string
		correct_answer: correctAnswer, // string if 1, arr if many
		incorrect_answers: incorrectAnswers, // always arr
		expression, // ! key only on type: blank
		options, // ! key only on type: dropdown
		datatype, // ? optional key. assume 'text' if undefined. can be text, link, img, color
		credit, // ? optional key indicating partial credit. assume single (no partial) if undefined
		case: testingCase, // ? optional key on questions used to test code
		hint, // ? optional key on some questions
		reference, // ? optional key on some questions for answer source
		category, // ? optional key describing category
	} = match.currentRound;

	const updateData: () => void = function (): void {
		type = match.currentRound.type;
		difficulty = match.currentRound.difficulty;
		question = match.currentRound.question;
		correctAnswer = match.currentRound.correct_answer;
		incorrectAnswers = match.currentRound.incorrect_answers;
		expression = match.currentRound.expression;
		options = match.currentRound.options;
		datatype = match.currentRound.datatype;
		credit = match.currentRound.credit;
		testingCase = match.currentRound.case;
		hint = match.currentRound.hint;
		reference = match.currentRound.reference;
		category = match.currentRound.category;
	};
	/* eslint-enable @typescript-eslint/no-unused-vars */

	function handleGameOver() {
		console.log('handleGameListener called');
		$questionStatsContainer.hide();
		$promptText.text('Game Over!');
		$responseContainer.fadeOut();
		$player1Button.fadeOut(); // TODO change animation time so user sees last question border
		$player2Button.fadeOut(); // TODO change animation time so user sees last question border
		$p1ScoreText.text(player1.getScore());
		$p2ScoreText.text(player2.getScore());
		const winner: string | null = match.getLeader();

		if (winner === null) {
			$winnerText.text('Game ends in tie.');
		} else {
			$winnerText.text(`${winner} wins!`);
		}
		$resultStatsContainer.show();
	}

	const updateDom: () => void = function (): void {
		if (match.rounds.length === 0) {
			console.log('handleGameOver listener added');

			$player1Button.off();
			$player2Button.off();
			$player1Button.on('click', () => handleGameOver());
			$player2Button.on('click', () => handleGameOver());
		}

		$responseEl.detach();
		$p1ScoreText.text(match.player1.getScore());
		$p2ScoreText.text(match.player2.getScore());
		$promptText.text(decodeURIComponent(question));
		$questionNumberText.text(
			`${match.currentRoundNumber}/${match.totalRoundNumbers}`
		);
		$questionDifficultyText.text(decodeURIComponent(difficulty));

		if (type === 'boolean') {
			$responseEl = makeBoolean();
		} else if (type === 'multiple') {
			$responseEl = makeMultiple();
		}
		$responseContainer.append($responseEl.eq(0));
	};
	updateDom();

	$player1Button.on('click', function (e) {
		e.preventDefault();
		if (match.response !== null) {
			$player2Button.css('color', 'white');
			const pointsWon = match.processResponse(player1.getName());
			if (pointsWon === 0) {
				$player1Button.css('color', 'red');
			} else {
				$player1Button.css('color', 'greenyellow');
			}

			updateData();
			updateDom();

			// if (match.rounds.length === 0) {
			// 	$promptText.text('Game Over!');
			// 	$responseContainer.fadeOut();
			// }
		}
		// else if (match.rounds.length === 0) {

		// }
	});

	$player2Button.on('click', function (e) {
		e.preventDefault();
		if (match.response !== null) {
			$player1Button.css('color', 'white');
			const pointsWon = match.processResponse(player2.getName());
			if (pointsWon === 0) {
				$player2Button.css('color', 'red');
			} else {
				$player2Button.css('color', 'greenyellow');
			}

			updateData();
			updateDom();
		}
	});
};

const playTrivia = function (otdbParameters?: OtdbParameters): void {
	let url: string;
	if (otdbParameters) {
		const { amount, category, difficulty, type } = otdbParameters;
		url = `https://opentdb.com/api.php?amount=${amount}${
			category !== 'any' ? `&category=${category}` : ''
		}${difficulty !== 'any' ? `&difficulty=${difficulty}` : ''}${
			type !== 'any' ? `&type=${type}` : ''
		}&encode=url3986`;
	} else {
		//* trivia-cases hosting links
		url = 'https://cdn.aglty.io/3bikcueb/trivia-cases/boolean-questions.json';
		// url = 'https://cdn.aglty.io/3bikcueb/trivia-cases/multiple-questions.json'
		// url =
		// 	'https://cdn.aglty.io/3bikcueb/trivia-cases/boolean-multiple-questions.json';
	}

	$.ajax({
		url,
	}).then(
		(data) => {
			if (otdbParameters && data.response_code !== 0) {
				gameOn = false;

				$player1Button.hide();
				$player2Button.hide();
				$activeGameContainer.hide();
				$promptContainer.hide();
				$responseContainer.hide();

				$otdbDescriptionText.text(
					'Sorry! No quiz in the Database matched these parameters. Try less questions and/or less specificity...'
				);

				$modeContainer.show();
				$inactiveGameContainer.show();
				$otdbPregameContainer.show();

				$playButton.css('border', '1px solid goldenrod');
			} else {
				runQuiz(data.results);
			}
		},
		(error) => {
			console.log('bad request', error);

			$player1Button.hide();
			$player2Button.hide();
			$activeGameContainer.hide();
			$responseContainer.hide();

			$inactiveGameContainer.show();
			$modeContainer.show();

			$devSelectButton.css('border', '1px solid black');
			$otdbSelectButton.css('border', '1px solid black');
			$playButton.css('border', '1px solid goldenrod');

			$promptText.text(
				'Sorry! Server error. Please check your internet connection or try a different game mode.'
			);
			$promptText.fadeIn();

			gameOn = false;
			modeSelected = undefined;
		}
	);
};

$devSelectButton.on('click', function (e) {
	e.preventDefault();
	$promptText.text('');
	$promptContainer.hide();
	$player1Button.hide();
	$player2Button.hide();
	$otdbPregameContainer.hide();

	$otdbSelectButton.css('border', '1px solid black');
	$devSelectButton.css('border', '3px solid silver');
	$devPregameContainer.show();

	modeSelected = 'dev';
});

$otdbSelectButton.on('click', function (e) {
	e.preventDefault();

	$promptText.text('');
	$promptContainer.hide();
	$player1Button.hide();
	$player2Button.hide();
	$devPregameContainer.hide();

	$devSelectButton.css('border', '1px solid black');
	$otdbSelectButton.css('border', '3px solid silver');
	$otdbDescriptionText.html(
		'Customize your match! Choose from over 4,000 verified questions housed in the <span class="nowrap">Open Trivia Database!</span>'
	);

	otdbParametersForm.reset();
	$otdbPregameContainer.show();

	modeSelected = 'otdb';
});

$playButton.on('click', function (e) {
	e.preventDefault();

	if (gameOn) {
		// reset to reload state

		$winnerText.text('');
		$resultStatsContainer.hide();
		$questionNumberText.text('');
		$questionDifficultyText.text('');
		$questionStatsContainer.show();
		$responseEl.detach();
		$player1Button.off();
		$player2Button.off();
		$player1Button.css('color', 'white');
		$player2Button.css('color', 'white');
		$player1Button.hide();
		$player2Button.hide();
		$activeGameContainer.hide();
		$promptContainer.hide();
		$responseContainer.hide();

		$inactiveGameContainer.show();
		$modeContainer.show();

		$devSelectButton.css('border', '1px solid black');
		$otdbSelectButton.css('border', '1px solid black');
		$playButton.css('border', '1px solid goldenrod');

		gameOn = false;
		modeSelected = undefined;
	} else if (modeSelected !== undefined) {
		// add condition for modeSelected === "otdb" & params not filled in by user
		$devPregameContainer.hide();
		$otdbPregameContainer.hide();
		$inactiveGameContainer.hide();
		$modeContainer.hide();

		$player1Button.show();
		$player2Button.show();
		$activeGameContainer.show();
		$promptContainer.show();
		$responseContainer.show();

		$playButton.css('border', '1px solid silver');

		gameOn = true;

		if (modeSelected === 'dev') {
			playTrivia();
		}
		if (modeSelected === 'otdb') {
			const otdbParameters: OtdbParameters = {
				amount: '',
				type: '',
				difficulty: '',
				category: '',
			};
			const params = $('#otdb-parameters-form').serializeArray();
			for (let i = 0; i < params.length; i++) {
				if (params[i].name === 'otdb-num-input') {
					otdbParameters.amount = params[i].value;
				}
				if (params[i].name === 'otdb-format-input') {
					otdbParameters.type = params[i].value;
				}
				if (params[i].name === 'otdb-diff-input') {
					otdbParameters.difficulty = params[i].value;
				}
				if (params[i].name === 'otdb-cat-input') {
					otdbParameters.category = params[i].value;
				}
			}

			playTrivia(otdbParameters);
		}
	} else {
		console.log('CHOOSE should bounce');
		$modeContainer.fadeOut();
		$modeContainer.fadeIn();
		// add bounce animation to choose game mode...
	}
});
