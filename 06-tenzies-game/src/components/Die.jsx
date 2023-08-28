function Die(props) {
	return (
		<button
			onClick={props.onClick}
			className={`place-items-center rounded-md ${
				props.isHeld ? "bg-[#59E391]" : "bg-white"
			} px-10 py-5 font-bold shadow-md md:text-xl lg:text-3xl`}
		>
			{props.value}
		</button>
	);
}

export default Die;
