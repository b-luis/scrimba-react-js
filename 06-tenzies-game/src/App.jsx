import { Die, Header } from "../src/components";

function App() {
	return (
		<main className="container__center flex-col rounded-md bg-slate-200 p-10">
			<Header />
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
	);
}

export default App;
