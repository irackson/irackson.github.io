import $ from 'jquery';
import _ from 'lodash';
import Match from './Match';
import Player from './Player';

require('../../styles/styles.scss');

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

//* top priority
// TODO: readme.md
/* explanations of the technologies used, the approach taken, a link to your live site, installation instructions, unsolved problems, etc.
 */
// TODO: onload / no mode selected response container --> welcome page (fri)
/* explain easy/medium/hard --> 1/2/3 points
explain indicator for partial credit means you will gain a fraction of a the total points awarded for a particular question and loose a fraction for each wrong answer selected */

const $playButton = $('#play-button');

const $inactiveGameContainer = $('.inactive-game-container');

const $activeGameContainer = $('.active-game-container');
const $p1ScoreText = $('#player-1-points');
const $p2ScoreText = $('#player-2-points');
const $maxPointsText = $('.max-points');
const $divisionSpacing = $('.division-spacing');
const $resultStatsContainer = $('result-stats-container');
const $winnerText = $('#winner-text');
const $visualContainer = $('.visual-container');
const $questionStatsContainer = $('.question-stats-container');
const $questionNumberText = $('#question-number-text');
const $partialCreditContainer = $('.partial-credit-container');
const $questionDifficultyText = $('#question-difficulty-text');

const $player1Button = $('#player-1-button');
const $player2Button = $('#player-2-button');

const $modeContainer = $('.mode-container');
const $includeButtons = $('.dev-option-container .dev-option-button');
const $includeAll = $('#all');
const $devRange = $('#max-question-text');

const $devSelectButton = $('#dev-select-button');
const $otdbDescriptionText = $('.otdb-description-text');
const $otdbSelectButton = $('#otdb-select-button');
const $promptText = $('#prompt');
const $promptContainer = $('.prompt-container');

const $devPregameContainer = $('.dev-pregame-container');

const $otdbPregameContainer = $('.otdb-pregame-container');
const otdbParametersForm: HTMLFormElement = document.getElementById(
	'otdb-parameters-form'
) as HTMLFormElement;

const $responseContainer = $('.response-container');

let gameOn: boolean = false;
let modeSelected: string | undefined;
const allQuestionTypes = ['boolean', 'multiple', 'fill', 'dropdown'];
let devPreferences: string[] = [];
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

$('body').show();

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

		match.response = ['False'];
	});

	$trueEl.on('click', function (e) {
		e.preventDefault();
		$falseEl.css('border', '1px solid black');
		$trueEl.css('border', '2px solid silver');
		$player1Button.css('color', 'white');
		$player2Button.css('color', 'white');

		match.response = ['True'];
	});

	$booleanButtonContainer.append($falseEl).append($trueEl);
	$booleanEl.append($booleanButtonContainer);
	return $booleanEl;
};

const makeMultiple = (
	options: string[],
	credit: string,
	datatype: string
): JQuery => {
	const $multipleEl = $('<div class="multiple-container" />');

	const $boxesContainer = $('<div class="boxes-container"></div>');

	const numOptions: string = options.length.toString();
	const minWidth: string = '280px';
	const minMargin: string = '2%';
	const maxWidth: string = '100%';
	const maxMargin: string = '5%';

	const paddingTop: string = `max((${minMargin} / 2), (${maxMargin} / 3))`;
	const paddingBottom: string = `max((${minMargin} / 2), (${maxMargin} / 3))`;
	const widthSize: string = `max((${minWidth} / ${numOptions}), (${maxWidth} / ${numOptions})`;
	const marginLeft: string = `max(${minMargin}, ${maxMargin})`;
	const marginRight: string = `max(${minMargin}, ${maxMargin})`;

	for (let i = 0; i < options.length; i++) {
		const $boxEl = $(`<div class="box-container" id="box-container-${i}">
		<div class="box-content" id="box-content-${i}">${options[i]}</div></div>`);

		$boxEl.css({
			'padding-top': `${paddingTop}`,
			'padding-bottom': `${paddingBottom}`,
			width: `${widthSize}`,
			'margin-left': `${marginLeft}`,
			'margin-right': `${marginRight}`,
		});

		if (datatype && datatype !== 'text') {
			if (datatype === 'color') {
				$boxEl.css({
					'background-color': `${options[i]}`,
					color: 'transparent',
					padding: '0',
					width: 'calc(5vw + 5vh)',
					height: 'calc(5vw + 5vh)',
					'font-size': '0px',
				});
			} else if (datatype === 'img') {
				$boxEl.css({
					'font-size': '0px',
					color: 'transparent',
					background: `url(${options[i]})`,
					'background-repeat': 'no-repeat, repeat',
					'background-position': 'center',
					'background-size': 'cover',
					padding: '0',
					width: 'calc(5vw + 5vh)',
					height: 'calc(5vw + 5vh)',
				});
			}
		}
		// eslint-disable-next-line @typescript-eslint/no-loop-func
		$boxEl.on('click', function (e) {
			e.preventDefault();
			$player1Button.css('color', 'white');
			$player2Button.css('color', 'white');
			if (credit === 'single') {
				$('.box-container').css('border', '1px solid black');
				$boxEl.css('border', '2px solid silver');
				match.response = [options[i]];
			} else {
				const currentBorderColor = $boxEl.css('borderColor');
				if (currentBorderColor === 'rgb(0, 0, 0)') {
					$boxEl.css('border', '2px solid silver');
					match.response.push(options[i]);
				} else {
					$boxEl.css('border', '1px solid black');
					match.response = match.response.filter((el) => el !== options[i]);
				}
			}
		});
		$boxesContainer.append($boxEl);
	}
	$multipleEl.append($boxesContainer);

	return $multipleEl;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const makeFill = (incomplete: string[], credit: string): JQuery => {
	const $fillEl = $('<div class="fill-container" />');

	const $sentenceContainer = $('<div class="sentence-container"></div>');

	const incompleteString = incomplete[0];
	const parsed: string[] = incompleteString.split(' ');
	let sentenceHTML = '<p>';
	for (let i = 0; i < parsed.length; i++) {
		if (parsed[i] !== '_') {
			sentenceHTML += ` ${parsed[i]}`;
		} else {
			sentenceHTML += `</p><span contenteditable="true" id="${i}" class="text-box"></span><br><p>`;
		}
	}
	sentenceHTML += '</p>';

	$sentenceContainer.html(sentenceHTML);
	const $sentenceSpans = $($sentenceContainer[0]).children('span');
	for (let i = 0; i < $sentenceSpans.length; i++) {
		const $thisSpan = $($sentenceSpans[i]);
		const thisID = parseInt($thisSpan[0].id, 10);

		// eslint-disable-next-line @typescript-eslint/no-loop-func
		$thisSpan.on('input', function (e) {
			e.preventDefault();
			$player1Button.css('color', 'white');
			$player2Button.css('color', 'white');

			if ($thisSpan.text() !== '') {
				$thisSpan.css('outline', 'goldenrod auto 3px');
			} else {
				$thisSpan.css('outline', 'silver auto 3px');
			}

			parsed[thisID] = $thisSpan.text();
			const responseString = parsed.join(' ').toLowerCase();
			match.response = [responseString];
		});
	}

	$fillEl.append($sentenceContainer);

	return $fillEl;
};

const makeDropdown = (options: string[][]): JQuery => {
	const $dropdownEl = $('<div class="dropdown-container" />');

	const $wordContainer = $('<div class="word-container"></div>');

	const $dropdownFormContainer = $(
		'<form onkeydown="return event.key != \'Enter\';" id="dropdown-form"></form>'
	);

	for (let i = 0; i < options.length; i++) {
		const $letterInput = $(`<select name='${i}' id='${i}'"></select>`);

		if (options[i].length === 1) {
			$letterInput.css({
				appearance: 'none',
				'-moz-appearance': 'none',
				'-webkit-appearance': 'none',
				'padding-left': '0.5vw',
				'padding-right': '2vw',
				'min-width': '35px',
				'min-height': '25px',
			});

			$letterInput.css('pointer-events', 'none');

			$letterInput.append(
				$(
					`<option value="${options[i][0]}">${options[
						i
					][0].toUpperCase()}</option>`
				)
			);
		} else {
			$letterInput.css({
				'max-height': '58px',
				'max-width:': '70px',
				'padding-right': '0.3vw',
			});
			$letterInput.append('<option value=""></option>');
			for (let l = 0; l < options[i].length; l++) {
				$letterInput.append(
					$(
						`<option value="${options[i][l]}">${options[i][
							l
						].toUpperCase()}</option>`
					)
				);
			}
		}

		// eslint-disable-next-line @typescript-eslint/no-loop-func
		$letterInput.on('change', function () {
			$player1Button.css('color', 'white');
			$player2Button.css('color', 'white');
			let responseString = '';

			$dropdownFormContainer
				.serializeArray()
				// eslint-disable-next-line no-return-assign
				.forEach((letter) => (responseString += letter.value));
			match.response = [responseString];
		});

		$dropdownFormContainer.append($letterInput);
	}
	$wordContainer.append($dropdownFormContainer);
	$dropdownEl.append($wordContainer);
	return $dropdownEl;
};

const runQuiz = function (triviaData: []): void {
	player1 = new Player('Player One', 0);
	player2 = new Player('Player Two', 0);

	if (modeSelected === 'dev') {
		const includeQuestionTypes = devPreferences;
		const maxQuestionPerType = parseInt($devRange.text(), 10);

		match = new Match(
			triviaData,
			{ p1: player1, p2: player2 },
			includeQuestionTypes,
			maxQuestionPerType
		);
	} else {
		match = new Match(triviaData, { p1: player1, p2: player2 });
	}

	if (match.currentRound.credit === 'partial') {
		$partialCreditContainer.fadeIn();
	}
	$p1ScoreText.text(Math.floor(match.player1.getScore()));
	$p2ScoreText.text(Math.floor(match.player2.getScore()));

	$maxPointsText.text(match.maxScore);

	let spaceString = '&nbsp;&nbsp;';
	for (let i = 0; i < match.maxScore.toString().split('').length; i++) {
		spaceString += '&nbsp;&nbsp;';
	}
	$divisionSpacing.html(spaceString);

	let {
		type, // boolean, multiple, rank, grid, blank, dropdown
		difficulty, // easy --> 1 point, medium --> 2, hard --> 3
		question, // prompt string
		correct_answer: correctAnswer, // string if 1, arr if many
		incorrect_answers: incorrectAnswers, // always arr
		options, // ! key only on type: dropdown
		datatype, // ? optional key. assume 'text' if undefined. can be text, link, img, color
		credit, // ? optional key indicating partial credit. assume single (no partial) if undefined
		category, // ? optional key describing category
	} = match.currentRound;

	function cleanData(): void {
		if (datatype === undefined) {
			datatype = 'text';
		}

		if (credit === undefined) {
			credit = 'single';
		}

		if (incorrectAnswers === undefined) {
			incorrectAnswers = [];
		}

		try {
			question = decodeURIComponent(question);

			if (typeof correctAnswer === 'string') {
				try {
					correctAnswer = decodeURIComponent(correctAnswer);
				} catch (error) {
					customLog(`${correctAnswer} decode error`, 'info');
					customLog(error, 'error');
				}
				correctAnswer = [correctAnswer];
			} else {
				for (let i = 0; i < correctAnswer.length; i++) {
					try {
						correctAnswer[i] = decodeURIComponent(correctAnswer[i]);
					} catch (error) {
						customLog(`${correctAnswer[i]} decode error`, 'info');
						customLog(error, 'error');
					}
				}
			}

			for (let i = 0; i < incorrectAnswers.length; i++) {
				try {
					incorrectAnswers[i] = decodeURIComponent(incorrectAnswers[i]);
				} catch (error) {
					customLog(`${incorrectAnswers[i]} decode error`, 'info');
					customLog(error, 'error');
				}
			}

			if (type === 'fill') {
				for (let i = 0; i < correctAnswer.length; i++) {
					correctAnswer[i] = correctAnswer[i].toLowerCase();
				}
			}

			if (category !== undefined) {
				try {
					category = decodeURIComponent(category);
				} catch (error) {
					customLog(`${category} decode error`, 'info');
					customLog(error, 'error');
				}
			}
		} catch (error) {
			customLog('cleanData() error', 'info');
			customLog(error, 'error');
		}
	}
	cleanData();

	const updateData: () => void = function (): void {
		type = match.currentRound.type;
		difficulty = match.currentRound.difficulty;
		question = match.currentRound.question;
		correctAnswer = match.currentRound.correct_answer;
		incorrectAnswers = match.currentRound.incorrect_answers;
		options = match.currentRound.options;
		datatype = match.currentRound.datatype;
		credit = match.currentRound.credit;
		category = match.currentRound.category;

		cleanData();
	};

	function handleGameOver(lastPlayerName: string) {
		match.processResponse(
			lastPlayerName,
			correctAnswer,
			incorrectAnswers,
			credit
		);

		$partialCreditContainer.hide();
		$questionStatsContainer.hide();
		$visualContainer.css('visibility', 'hidden');
		$promptText.text('Game Over!');
		$responseContainer.fadeOut();
		$player1Button.fadeOut();
		$player2Button.fadeOut();
		$p1ScoreText.text(Math.floor(match.player1.getScore()));
		$p2ScoreText.text(Math.floor(match.player2.getScore()));

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
			$player1Button.off();
			$player2Button.off();
			$player1Button.on('click', () => handleGameOver(player1.getName()));
			$player2Button.on('click', () => handleGameOver(player2.getName()));
		}

		$responseEl.detach();
		$p1ScoreText.text(Math.floor(match.player1.getScore()));
		$p2ScoreText.text(Math.floor(match.player2.getScore()));

		$promptText.text(question);
		$questionNumberText.text(
			`${match.currentRoundNumber}/${match.totalRoundNumbers}`
		);
		if (credit === 'partial') {
			$partialCreditContainer.fadeIn();
		} else {
			$partialCreditContainer.fadeOut();
		}

		$questionDifficultyText.text(difficulty);

		customLog(`Question: ${question}`, 'info');
		customLog('Correct Answers:', 'success');
		console.table(correctAnswer);
		customLog('Incorrect Answers:', 'error');
		console.table(incorrectAnswers);

		if (type === 'boolean') {
			$responseEl = makeBoolean();
		} else if (type === 'multiple') {
			$responseEl = makeMultiple(
				_.shuffle(_.concat(correctAnswer, incorrectAnswers)),
				credit,
				datatype
			);
		} else if (type === 'fill') {
			$responseEl = makeFill(incorrectAnswers, credit);
		} else if (type === 'dropdown') {
			$responseEl = makeDropdown(options);
		}

		$responseContainer.append($responseEl.eq(0));
	};
	updateDom();

	$player1Button.on('click', function (e) {
		e.preventDefault();
		if (match.response.length !== 0) {
			$player2Button.css('color', 'white');
			const pointsWon = match.processResponse(
				player1.getName(),
				correctAnswer,
				incorrectAnswers,
				credit
			);
			if (pointsWon === 0) {
				$player1Button.css('color', 'red');
			} else if (pointsWon > 0) {
				let multiplier = 0;

				if (difficulty === 'easy') {
					multiplier = 1;
				} else if (difficulty === 'medium') {
					multiplier = 2;
				} else if (difficulty === 'hard') {
					multiplier = 3;
				}
				if (pointsWon < multiplier) {
					$player1Button.css('color', 'yellow');
				} else {
					$player1Button.css('color', 'green');
				}
			}
			updateData();
			updateDom();
		}
	});

	$player2Button.on('click', function (e) {
		e.preventDefault();
		if (match.response.length !== 0) {
			$player1Button.css('color', 'white');
			const pointsWon = match.processResponse(
				player2.getName(),
				correctAnswer,
				incorrectAnswers,
				credit
			);
			if (pointsWon === 0) {
				$player2Button.css('color', 'red');
			} else if (pointsWon > 0) {
				let multiplier = 0;

				if (difficulty === 'easy') {
					multiplier = 1;
				} else if (difficulty === 'medium') {
					multiplier = 2;
				} else if (difficulty === 'hard') {
					multiplier = 3;
				}
				if (pointsWon < multiplier) {
					$player2Button.css('color', 'yellow');
				} else {
					$player2Button.css('color', 'green');
				}
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
		url = 'https://cdn.aglty.io/3bikcueb/trivia-cases/challenge.json';
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

$includeAll.on('click', function (e) {
	e.preventDefault();

	if ($includeAll.css('borderColor') === 'rgb(0, 0, 0)') {
		devPreferences = allQuestionTypes;
		$includeButtons.css('border', '1px solid black');
		$includeAll.css('border', '2px solid silver');
	} else {
		devPreferences = [];
		$includeAll.css('border', '1px solid black');
	}
});

$includeButtons.on('click', function (e) {
	e.preventDefault();

	const type: string = this.id;
	const $typeEl = $(this);

	if (devPreferences.length === allQuestionTypes.length) {
		$includeAll.css('border', '1px solid black');
		devPreferences = [];
	}

	if ($typeEl.css('borderColor') === 'rgb(0, 0, 0)') {
		if (devPreferences.length === allQuestionTypes.length - 1) {
			$includeButtons.css('border', '1px solid black');
			$includeAll.css('border', '2px solid silver');
		} else {
			$typeEl.css('border', '2px solid silver');
		}
		devPreferences.push(type);
	} else {
		devPreferences = devPreferences.filter((el) => el !== type);
		$typeEl.css('border', '1px solid black');
	}
});

$devSelectButton.on('click', function (e) {
	e.preventDefault();

	$promptText.text('');
	$promptContainer.hide();
	$player1Button.hide();
	$player2Button.hide();
	$otdbPregameContainer.hide();

	$otdbSelectButton.css('border', '1px solid black');
	$devSelectButton.css('border', '2px dashed silver');
	$devPregameContainer.show();

	$includeAll.css('border', '2px solid silver');
	$includeButtons.css('border', '1px solid black');
	devPreferences = allQuestionTypes;
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

	$otdbSelectButton.css('border', '2px dashed silver');
	$otdbDescriptionText.html(
		'Customize your match! Choose from over 4,000 verified questions housed in the <span class="nowrap">Open Trivia Database.</span>'
	);

	otdbParametersForm.reset();
	$otdbPregameContainer.show();

	modeSelected = 'otdb';
});

$playButton.on('click', function (e) {
	e.preventDefault();
	$partialCreditContainer.hide();

	if (gameOn) {
		// reset to reload state

		$winnerText.text('');
		$resultStatsContainer.hide();
		$questionNumberText.text('');
		$questionDifficultyText.text('');
		$questionStatsContainer.show();
		$visualContainer.css('visibility', 'visible');
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
	} else if (
		modeSelected === 'otdb' ||
		(modeSelected === 'dev' && devPreferences.length !== 0)
	) {
		$devPregameContainer.hide();
		$otdbPregameContainer.hide();
		$inactiveGameContainer.hide();
		$modeContainer.hide();

		$player1Button.show();
		$player2Button.show();
		$activeGameContainer.show();
		$promptContainer.show();
		$responseContainer.show();

		$playButton.css('border', '1px dotted silver');

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
	} else if (modeSelected === 'dev' && devPreferences.length === 0) {
		$includeButtons.fadeOut(500);
		$includeAll.fadeOut(400);
		$includeButtons.fadeIn(500);
		$includeAll.fadeIn(400);
	} else {
		$modeContainer.fadeOut();
		$modeContainer.fadeIn();
	}
});
