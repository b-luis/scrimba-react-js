function Die({ value }) {
	return (
		<button
			className="place-items-center rounded-md bg-white px-8 py-5 font-bold shadow-md md:px-6 md:py-5"
			value={value}
		>
			{value}
		</button>
	);
}

export default Die;
