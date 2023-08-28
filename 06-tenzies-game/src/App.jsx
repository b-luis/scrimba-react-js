import { useState } from "react";
import { Die, Header } from "../src/components";
import { nanoid } from "nanoid";

function App() {
	/**
	 * Challenge: Create a function `holdDice` that takes
	 * `id` as a parameter. For now, just have the function
	 * console.log(id).
	 *
	 * Then, figure out how to pass that function down to each
	 * instance of the Die component so when each one is clicked,
	 * it logs its own unique ID property. (Hint: there's more
	 * than one way to make that work, so just choose whichever
	 * you want)
	 *
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

	const holdDice = (id) => {
		console.log(id);
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
