import Die from "./components/Die";

function App() {
	return (
		<main className="flex max-h-[800px] min-h-screen items-center justify-center rounded-md bg-slate-200">
			<div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-10">
				<Die value={1} />
				<Die value={1} />
				<Die value={1} />
				<Die value={1} />
				<Die value={1} />
				<Die value={1} />
				<Die value={1} />
				<Die value={1} />
				<Die value={1} />
				<Die value={1} />
			</div>
		</main>
	);
}

export default App;
