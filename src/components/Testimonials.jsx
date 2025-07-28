import FeedbackCard from './FeedbackCard';
import { feedback } from '../data/constant';

function Teshtimoninials() {
	return (
		<div
			className='flex items-center justify-center py-6 sm:py-16 bg-[#23B07C] text-white'
			data-aos='fade-up'
		>
			<div className='w-full xl:max-w-[1280px]'>
				<section className='flex flex-col px-4 md:px-10'>
					<div
						className='flex flex-col items-center justify-between mb-6 sm:flex-row sm:mb-16'
						data-aos='fade-down'
					>
						<h2 className='font-semibold xs:text-[48px] text-[30px] xs:leading-[76.8px] leading-[66.8px] text-white'>
							What people are <br className='hidden sm:block' /> saying about us
						</h2>
						<p className='max-w-[520px] text-white text-base opacity-90 mt-4 sm:mt-0'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quisquam.
						</p>
					</div>
					<div className='flex flex-wrap justify-center gap-6'>
						{feedback.map((item, index) => (
							<div
								key={item.id}
								data-aos='zoom-in'
								data-aos-delay={index * 100}
								className='transition-transform duration-300 transform hover:scale-105'
							>
								<FeedbackCard feedback={item} />
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}

export default Teshtimoninials;
