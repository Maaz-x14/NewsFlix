import newsFlix from '../assets/newsFlix.svg';
import { footerLinks } from '../data/constant';
import SocialLinks from './SocialLinks';
function Footer() {
	return (
		<div className='flex items-center justify-center py-6 text-black pg-primary sm:py-16 paddingX'>
			<div className='w-full max-w-[1280px]  '>
				<section className='flex flex-col'>
					<div className='flex flex-col flex-wrap w-full space-x-10 space-y-10 md:flex-row'>
						<div className='flex flex-col gap-4'>
							<img src={newsFlix} className='max-w-[200px]' />
							<p className='max-w-sm text-base text-black'>
								A PlanetBeyond Project
							</p>
						</div>
						<footer className='flex flex-wrap flex-1 gap-6 md:justify-end'>
							{footerLinks.map((category) => {
								return (
									<div
										key={category.title}
										className='flex flex-col gap-6 min-w-[200px]'>
										<h5 className='font-bold'>{category.title}</h5>
										<div className='flex flex-col gap-4 text-black'>
											{category.links.map((link) => {
												return (
													<a
														key={link.name}
														href={link.link}
														className='hover:text-green'>
														{link.name}
													</a>
												);
											})}
										</div>
									</div>
								);
							})}
						</footer>
					</div>
					<SocialLinks />
				</section>
			</div>
		</div>
	);
}

export default Footer;
