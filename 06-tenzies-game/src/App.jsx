import { useState, useEffect } from "react";
import { Die, Header } from "../src/components";
import { nanoid } from "nanoid";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function App() {
	const [dice, setDice] = useState(allNewDice());
	const [tenzies, setTenzies] = useState(false);
	const { width, height } = useWindowSize();

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

	/**
	 * Challenge: Allow the user to play a new game when the
	 * button is clicked and they've already won
	 */

	const rollDice = () => {
		if (tenzies) {
			setDice(allNewDice());
			setTenzies(false);
		} else {
			setDice((prevDie) =>
				prevDie.map((die) => {
					return die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6), id: nanoid() };
				})
			);
		}
	};

	const holdDice = (id) => {
		setDice((prevDie) =>
			prevDie.map((die) => {
				return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
			})
		);
	};

	useEffect(() => {
		// ? reference:
		// https://stackoverflow.com/questions/23604734/how-to-check-if-all-object-keys-has-false-values
		const diceVal = Object.values(dice).every(
			(die) => die.isHeld === true && die.value === die.value
		);

		if (diceVal) {
			setTenzies(true);
			console.log("You won!");
		}
	}, [dice]);

	const displayDieEl = dice.map((die) => (
		<Die key={die.id} {...die} onClick={() => holdDice(die.id)} />
	));

	return (
		<main className="container__center rounded-md bg-slate-200 p-5 md:p-16">
			{tenzies && <Confetti width={width} height={height} />}
			<Header />
			<div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5">
				{displayDieEl}
			</div>
			<button
				className="mt-5 rounded-md bg-blue-700 px-20 py-5 text-white shadow-md hover:bg-blue-900"
				onClick={rollDice}
			>
				{tenzies ? "New Game" : "Roll"}
			</button>
		</main>
	);
}

export default App;
