function Die(props) {
	return (
		<button className="place-items-center rounded-md bg-white px-10 py-5 font-bold shadow-md md:text-xl lg:text-3xl">
			{props.value}
		</button>
	);
}

export default Die;
