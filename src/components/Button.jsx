function CustomButton({ children, style }) {
	return (
		<button
			type='button'
			className={`px-6 py-4 transition duration-300 rounded-lg cursor-pointer ss:p-6 hover:scale-105 hover:ease-out font-medium  outline-none hover:shadow-[0_4px_15px_#23B37C] text-lg ${style}`}
		>
			{children}
		</button>
	);
}

export default CustomButton;
