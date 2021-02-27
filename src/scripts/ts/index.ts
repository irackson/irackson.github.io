/* eslint-disable */
require('../../styles/styles.scss');
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

//* use font-awesome
//* consider bootstrap

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

type OtdbParameters = {
	amount: string;
	category: string;
	difficulty: string;
	type: string;
};

const runQuiz = function (data: any): void {
	/* 	for (let i = 0; i < data.results.length; i++) {
		customLog(decodeURIComponent(data.results[i].question), 'info');
	} */
	// TODO: always decodeURIComponent(data.string) before doing anything
	//! run once
	//* create two new Player, player1 & player2
	//* instantiate match = new Match(quiz: data, players: {p1: player1, p2, player2})
	//* set match.max to calculateMax(match.data)
	//* p1.score/match.max to $p1ScoreText.text(), p2.score/match.max to #p2ScoreText.text(), $p1ScoreContainer().show(), $p1ScoreContainer().show()
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
		// https://cdn.aglty.io/3bikcueb/trivia-cases/boolean-questions.json
		// https://cdn.aglty.io/3bikcueb/trivia-cases/multiple-questions.json
		// https://cdn.aglty.io/3bikcueb/trivia-cases/boolean-multiple-questions.json

		url = 'https://cdn.aglty.io/3bikcueb/trivia-cases/boolean-questions.json';
	}

	$.ajax({
		url,
	}).then(
		(data) => {
			console.log(url);
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
				console.log(data);
				runQuiz(data);
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
		// add bounce animation to choose game mode...
	}
});
