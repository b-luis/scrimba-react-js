import { useState, useEffect } from "react";
import { Die, Header } from "../src/components";
import { nanoid } from "nanoid";

function App() {
	/**
	 * Challenge:
	 * 1. Add new state called `tenzies`, default to false. It
	 *    represents whether the user has won the game yet or not.
	 * 2. Add an effect that runs every time the `dice` state array
	 *    changes. For now, just console.log("Dice state changed").
	 */

	function allNewDice() {
		const newDice = [];
		for (let i = 0; i < 10; i++) {
			newDice.push({
				value: Math.ceil(Math.random() * 6),
				isHeld: false,
				id: nanoid()
			});
		}
		return newDice;
	}

	const [dice, setDice] = useState(allNewDice());
	const [tenzies, setTenzies] = useState(false);

	const rollDice = () => {
		setDice((prevDie) =>
			prevDie.map((die) => {
				return die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6), id: nanoid() };
			})
		);
	};

	const holdDice = (id) => {
		setDice((prevDie) =>
			prevDie.map((die) => {
				return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
			})
		);
	};

	useEffect(() => {
		console.log("Dice state changed");
	}, [dice]);

	const displayDieEl = dice.map((die) => (
		<Die key={die.id} {...die} onClick={() => holdDice(die.id)} />
	));

	return (
		<main className="container__center rounded-md bg-slate-200 p-5 md:p-16">
			<Header />
			<div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5">
				{displayDieEl}
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
