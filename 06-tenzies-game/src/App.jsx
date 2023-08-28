import { useState } from "react";
import { Die, Header } from "../src/components";
import { nanoid } from "nanoid";

function App() {
	/**
	 * Challenge: Update the `holdDice` function to flip
	 * the `isHeld` property on the object in the array
	 * that was clicked, based on the `id` prop passed
	 * into the function.
	 *
	 * Hint: as usual, there's > 1 way to accomplish this.
	 * I'll be using `dice.map()` and checking for the `id`
	 * of the die to determine which one to flip `isHeld` on,
	 * but you can do whichever way makes the most sense to you.
	 */

	// ? reference:
	// https://stackoverflow.com/questions/46056998/how-add-item-in-an-object
	const allNewDice = () => {
		const newDice = [];
		for (let i = 0; i < 10; i++) {
			newDice.push({
				value: Math.ceil(Math.random() * 6),
				isHeld: false,
				id: nanoid()
			});
		}
		return newDice;
	};

	const [dice, setDice] = useState(allNewDice());
	const rollDice = () => setDice(allNewDice());

	// const holdDice = (id) => {
	// 	setDice((oldDice) => {
	// 		return oldDice.map((die) => {
	// 			if (die.id === id) {
	// 				return { ...die, isHeld: !die.isHeld };
	// 			} else {
	// 				return die;
	// 			}
	// 		});
	// 	});
	// };

	const holdDice = (id) => {
		setDice((prevDie) =>
			prevDie.map((die) => {
				return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
			})
		);
	};

	return (
		<main className="container__center rounded-md bg-slate-200 p-5 md:p-16">
			<Header />
			<div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5">
				{dice.map((die) => (
					<Die key={die.id} {...die} onClick={() => holdDice(die.id)} />
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
