/* eslint-disable */
require('../../styles/styles.scss');
import $ from 'jquery';
import _ from 'lodash';
import Chance from 'chance';

const chance = new Chance();

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

// TODO: question endpoint: https://cdn.aglty.io/3bikcueb/trivia/trivia-questions.json
// TODO: each player has their own submit button
// TODO: timed, with option to choose seconds/question vs. not timed
// TODO: click to reveal hint if available
// TODO: display reference if available
// TODO: scores start at 100%
// TODO: mobile design is minimal, but as screen gets bigger instructions are added

/* display level of difficulty for each particular question: easy, medium, and hard. hover for definitions: medium and hard questions are worth twice as much as easy questions, and hard questions may given partial credit if there is more than one answer */

/* eslint-disable @typescript-eslint/no-unused-vars */
const $playButton = $('#play-button');

const $inactiveGameContainer = $('.inactive-game-container');
const $activeGameContainer = $('.active-game-container'); // hidden onload
const $player1Button = $('#player-1-button'); // hidden onload
const $player2Button = $('#player-2-button'); // hidden onload

const $modeContainer = $('.mode-container');
const $devSelectButton = $('#dev-select-button');
const $otdbSelectButton = $('#otdb-select-button');
const $promptContainer = $('.prompt-container');

const $devPregameContainer = $('.dev-pregame-container'); // hidden onload
const $otdbPregameContainer = $('.otdb-pregame-container'); // hidden onload
const $responseContainer = $('.response-container'); // hidden onload

/* eslint-enable @typescript-eslint/no-unused-vars */
let gameOn: boolean = false;
let modeSelected: string | undefined;

$devSelectButton.on('click', function (e) {
	e.preventDefault();
	$player1Button.hide();
	$player2Button.hide();
	$otdbPregameContainer.hide();
	$devPregameContainer.show();

	modeSelected = 'dev';
});

$otdbSelectButton.on('click', function (e) {
	e.preventDefault();
	$player1Button.hide();
	$player2Button.hide();
	$devPregameContainer.hide();
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

		gameOn = true;
		// call start game function...
	} else {
		console.log('hi');
		// add bounce animation to choose game mode...
	}
});
