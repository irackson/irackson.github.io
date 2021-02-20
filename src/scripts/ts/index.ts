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

/* ___          ___    ___  __      __   __   __   ___ 
/*  |  |  |\/| |__      |  /  \    /  ` /  \ |  \ |__  
/*  |  |  |  | |___     |  \__/    \__, \__/ |__/ |___ 
/*                                                      */
