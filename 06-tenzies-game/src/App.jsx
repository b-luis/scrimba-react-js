import { useState } from "react";
import { Die, Header } from "../src/components";

function App() {
	/**
	 * Challenge:
	 *
	 * Create state to hold our array of numbers. (Initialize
	 * the state by calling our `allNewDice` function so it
	 * loads all new dice as soon as the app loads)
	 *
	 * Map over the state numbers array to generate our array
	 * of Die elements and render those in place of our
	 * manually-written 10 Die elements.
	 */

	const [dice, setDice] = useState(allNewDice());

	//! alternative way of generating an array with random numbers
	// const allNewDice = Array.from({ length: 10 }, () => Math.floor(Math.random() * 6) + 1);
	function allNewDice() {
		const arrOfRandNum = [];
		for (let i = 0; i < 10; i++) {
			arrOfRandNum.push(Math.ceil(Math.random() * 6));
		}
		return arrOfRandNum;
	}

	const diceElements = dice.map((value, i) => <Die key={i} value={value} />);

	return (
		<main className="container__center flex-col rounded-md bg-slate-200 p-10">
			<Header />
			<div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-2 md:gap-10 lg:grid-cols-5">
				{diceElements}
			</div>
		</main>
	);
}

export default App;
