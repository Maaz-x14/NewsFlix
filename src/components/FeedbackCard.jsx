function FeedbackCard({ feedback }) {
	const { name, content, title, img } = feedback;

	return (
		<div className="group bg-white text-black border border-gray-200 shadow-md rounded-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] hover:border-transparent hover:bg-white/80 backdrop-blur-md hover:backdrop-blur-lg px-10 py-12 max-w-[370px] cursor-pointer min-h-[347px]">
			<p className="my-10 text-lg font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
				{content}
			</p>
			<div className="flex items-center gap-4">
				<img
					src={img}
					className="object-cover w-12 h-12 rounded-full border border-gray-300 group-hover:scale-105 transition-all duration-300"
					alt="person"
				/>
				<div>
					<h4 className="text-[20px] font-semibold group-hover:text-black">{name}</h4>
					<p className="text-base text-gray-600 group-hover:text-gray-800">{title}</p>
				</div>
			</div>
		</div>
	);
}

export default FeedbackCard;
