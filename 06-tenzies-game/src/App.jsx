import { useState } from "react";
import { Die, Header } from "../src/components";

function App() {
	/**
	 * Challenge: Update the array of numbers in state to be
	 * an array of objects instead. Each object should look like:
	 * { value: <random number>, isHeld: false }
	 *
	 * Making this change will break parts of our code, so make
	 * sure to update things so we're back to a working state
	 */

	// ? reference:
	// https://stackoverflow.com/questions/46056998/how-add-item-in-an-object

	const allNewDice = () => {
		const newDice = [];
		for (let i = 0; i < 10; i++) {
			newDice.push({
				value: Math.ceil(Math.random() * 6),
				isHeld: false
			});
		}
		return newDice;
	};

	const [dice, setDice] = useState(allNewDice());

	const rollDice = (e) => {
		e.preventDefault();
		setDice(allNewDice());
	};

	return (
		<main className="container__center rounded-md bg-slate-200 p-5 md:p-16">
			<Header />
			<div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5">
				{dice.map((die, i) => (
					<Die key={i} value={die.value} isHeld={die.isHeld} />
				))}
			</div>
			<button
				className="mt-5 rounded-md bg-blue-700 px-20 py-5 text-white shadow-md hover:bg-blue-900"
				onClick={rollDice}
			>
				Roll
			</button>
		</main>
	);
}

export default App;
