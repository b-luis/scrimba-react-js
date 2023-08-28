function Die(props) {
	return (
		<button className="place-items-center rounded-md bg-white px-20 py-10 font-bold shadow-md md:py-14 md:text-2xl lg:text-3xl">
			{props.value}
		</button>
	);
}

export default Die;
