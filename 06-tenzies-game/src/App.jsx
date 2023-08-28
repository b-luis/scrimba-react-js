import { useState, useEffect } from "react";
import { Die, Header } from "../src/components";
import { nanoid } from "nanoid";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function App() {
	/**
	 * Challenge: Tie off loose ends!
	 * 1. If tenzies is true, Change the button text to "New Game"
	 * 2. If tenzies is true, use the "react-confetti" package to
	 *    render the <Confetti /> component 🎉
	 *
	 *    Hint: don't worry about the `height` and `width` props
	 *    it mentions in the documentation.
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
	const { width, height } = useWindowSize();
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
				{tenzies ? "New Game" : "Roll"}
			</button>
			{tenzies ? <Confetti width={width} height={height} /> : ""}
		</main>
	);
}

export default App;
