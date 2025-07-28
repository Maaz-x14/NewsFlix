function FeatureCard({ feature }) {
	const { icon, title, content } = feature;

	return (
		<div className='group hover:text-white flex flex-row items-center gap-4 p-3 transition duration-300 rounded-lg cursor-pointer ss:p-6 feature-card'>
			<div className='flex items-center justify-center flex-shrink-0 w-16 h-16 rounded-full bg-[#23B07C] group-hover:bg-white transition-colors duration-300'>
				<img src={icon} alt="feature icon" className="w-[26px] h-[26px]" />
			</div>
			<div className='flex flex-col gap-4'>
				<h4 className='text-lg font-semibold'>{title}</h4>
				<p className='max-w-sm mb-1 text-base'>{content}</p>
			</div>
		</div>
	);
}

export default FeatureCard;
