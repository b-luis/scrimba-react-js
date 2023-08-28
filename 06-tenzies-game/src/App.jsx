import { Die } from "../src/components";

function App() {
	return (
		<div className="container h-screen">
			<main className="container rounded-md bg-slate-200 p-10">
				<h1 className="text-2xl font-bold md:text-4xl">Tenzies</h1>
				<p className="mt-3 px-10 md:text-xl">
					Roll until all dice are the same. Click each die to freeze it at its current value between
					rolls.
				</p>
				<div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-2 md:gap-10 lg:grid-cols-5">
					<Die value={1} />
					<Die value={2} />
					<Die value={3} />
					<Die value={4} />
					<Die value={5} />
					<Die value={6} />
					<Die value={7} />
					<Die value={8} />
					<Die value={9} />
					<Die value={10} />
				</div>
			</main>
		</div>
	);
}

export default App;
