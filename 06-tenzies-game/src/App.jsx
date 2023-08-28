import { useState } from "react";
import { Die, Header } from "../src/components";
import { nanoid } from "nanoid";

function App() {
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

	const rollDice = () => {
		setDice((prevDie) =>
			prevDie.map((die) => {
				return die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6), id: nanoid() };
			})
		);
	};

	/***
	 * Another solution to rolling dice while holding the values with isHeld:true,
	 * 
	 * - create another function called generateNewDie() that returns the object with properties: value, isHeld, id
	 * 
	 * ex.  
	 * 	function generateNewDie() {
	 * 		return {
	 * 			value: Math.ceil(Math.random() * 6),
	 * 			isHeld: false,
	 * 			id: nanoid()
	 * 		}
	 * 	}
	 * 
	 * - then call that function in the allNewDie(), and replace the current value that is being pushed.
	 * ex. newDice.push(generateNewDie())
	 */

	const holdDice = (id) => {
		setDice((prevDie) =>
			prevDie.map((die) => {
				return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
			})
		);
	};

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
