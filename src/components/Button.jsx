function CustomButton({ children, style }) {
	return (
		<button
			type='button'
			className={`px-6 py-4 transition duration-300 rounded-lg cursor-pointer ss:p-6 hover:scale-105 hover:ease-out hover:text-pink-400 font-medium text-[#23B07C] outline-none bg-white text-lg ${style}`}
		>
			{children}
		</button>
	);
}

export default CustomButton;
