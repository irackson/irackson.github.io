# [Ian's Trivia Game](https://irackson.github.io/dist/index.html)

##### _A front-end project that allows two players or teams to compete for trivia points_

### Checkout my walk-through!

<div class="iframe-container"><iframe src="https://www.youtube-nocookie.com/embed/vxnP-gJYzcs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

---

## **Technology**

<br>

####  <u>Languages</u>

- HTML

- SCSS

- TypeScript

#### <u>Bundlers</u>

- webpack

#### <u>Libraries</u>

- jQuery

- AJAX

- Lodash

#### <u>Formatters</u>

- ESLint (Airbnb style guide)

- Prettier

---

## **Features**

<br>

####  <u>Responsive Design</u>

- Equally enjoyable on every device

- Fully playable and fully readable regardless of window height and width

#### <u>Style</u>

- Consistent color schemes

- Advanced animations

- Themed fonts

- Font Awesome icons

- Principled graphic design

- High rule specificity

- CSS / SCSS concepts

- Gradients

- Font sizing based on vmax and em ratios

- Flexible Box Layout

- Grid Layout

- Media queries

- Pseudo-elements

- Cross browser compatibility

#### <u>User Experience</u>

- Immersive! No need to ever reload when...

- Switching between multiple game modes

- Starting a new quiz before finishing a round

- Playing with different quiz preferences

- Choosing quiz preferences that cannot be met by the database

- Encountering the rare server error

- Easy to pick up! No instructions needed as...

- Gameplay is intuitive

- Every action results in a visible change

---

## **Product Highlights**

<br>

####  <u>Question Types Supported</u>

- True / False

- Multiple Choice

- Handles text, gifs & colors

- Fill-in The Blank

- Handles unlimited fields

- Dropdown Selection

- Handles unlimited sections

#### <u>Multiple Game Modes</u>

- Dev's Challenge

- Pick question types

- Limit number of questions per type

- Trivia Database

- Select number of questions

- Select format

- Select difficulty

- Select category

---

## **Key Code**

<br>

####  <u>Getting & Handling the Right Trivia Data with AJAX</u>
<!-- ![Getting & Handling the Right Trivia Data with AJAX](https://i.imgur.com/CMnzlS1.png) -->
<pre><code class="language-javascript">
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
</code></pre>

#### <u>Producing Question Elements</u>

##### Requesting the Appropriate Display
<!-- ![Getting the Appropriate Display](https://i.imgur.com/fT0zgVd.png) -->
<pre><code class="language-javascript">
const updateDom: () => void = function (): void {
// refer to github for entire function... below is just the key code
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
</code></pre>

<!-- ##### Returning the Appropriate Response -->

<!-- ###### _True / False_ -->
<!-- ![True / False](https://i.imgur.com/w4sQyMy.png) -->

<!-- ###### _Multiple Choice_ -->
<!-- ![Multiple Choice](https://i.imgur.com/B3Y3JwB.png) -->

<!-- ###### _Fill-in The Blank_ -->
<!-- ![Fillin The Blank](https://i.imgur.com/XNEDDcp.png) -->

<!-- ###### _Dropdown_ -->
<!-- ![Dropdown](https://i.imgur.com/Dq2yisg.png) -->

#### <u>Calculating Points Won & Updating State </u>
<!-- ![Processing User Answer](https://i.imgur.com/cNsSjFm.png) -->
<pre><code class="language-js">
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

    if (numCorrect > 0) {
        if (credit === 'single') {
            if (numCorrect === correctAnswers.length && numIncorrect === 0) {
                pointsWon = 1 *multiplier;
            }
        } else if (this.currentRound.type === 'dropdown') {
            pointsWon = multiplier;
        } else {
            pointsWon =
(multiplier / correctAnswers.length)* (numCorrect - numIncorrect);
            if (pointsWon < 0) {
                pointsWon = 0;
            }
        }
    }

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
</code></pre>

#### <u>Coolest Algorithm</u>

##### Filtering JSON Object by Property: 'type'

<pre><code class="language-javascript">
if (includeQuestionTypes && maxQuestionsPerType) {
    const separatedQuestions: any[][] = [];

    for (let t = 0; t < includeQuestionTypes.length; t++) {
        separatedQuestions[t] = prettyData;
    }

    prettyData = [];

    separatedQuestions.forEach(function (arr, index) {
        separatedQuestions[index] = arr
            .filter(function (anyQuestion) {
                if (anyQuestion.type === includeQuestionTypes[index]) {
                    return true;
                }
                return false;
            })
            .slice(0, maxQuestionsPerType);

        for (let i = 0; i < separatedQuestions[index].length; i++) {
            prettyData.push(separatedQuestions[index][i]);
        }
    });
}
</code></pre>
