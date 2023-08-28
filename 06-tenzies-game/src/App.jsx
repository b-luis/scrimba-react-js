import { useState } from "react";
import { Die, Header } from "../src/components";

function App() {
	/**
	 * Challenge: Create a `Roll Dice` button that will re-roll
	 * all 10 dice
	 *
	 * Clicking the button should generate a new array of numbers
	 * and set the `dice` state to that new array (thus re-rendering
	 * the array to the page)
	 */

	const allNewDice = () => {
		const arrOfRandNum = [];
		for (let i = 0; i < 10; i++) {
			arrOfRandNum.push(Math.ceil(Math.random() * 6));
		}
		return arrOfRandNum;
	};

	const [dice, setDice] = useState(allNewDice());
	const diceElements = dice.map((value, i) => <Die key={i} value={value} />);

	const rollDice = (e) => {
		e.preventDefault();
		setDice(allNewDice());
	};

	return (
		<main className="container__center rounded-md bg-slate-200 p-5 md:p-16">
			<Header />
			<div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5">
				{diceElements}
			</div>
			<button
				className="mt-5 rounded-sm bg-blue-700 px-20 py-5 text-white shadow-md hover:bg-blue-900"
				onClick={rollDice}
			>
				Roll
			</button>
		</main>
	);
}

export default App;
