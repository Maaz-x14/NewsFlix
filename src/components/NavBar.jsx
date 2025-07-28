import newsFlix from '../assets/newsFlix.svg';
import NavLinks from './NavLinks';

const NavBar = () => {
	return (
		<nav className="fixed top-0 left-0 w-full z-50 bg-[#23B07C] shadow-md">
			<div className="flex items-center justify-between max-w-screen-xl mx-auto px-6 py-3">
				<div className="flex items-center space-x-2">
					<div className="bg-white rounded-full p-1 w-12 h-12 flex items-center justify-center">
						<img src={newsFlix} alt="Logo" className="w-10 h-10 object-contain" />
					</div>
					<h1 className="text-white font-semibold text-lg hidden sm:block">NewsFlix</h1>
				</div>

				<ul className="hidden ss:flex gap-10 items-center text-white font-medium">
					<NavLinks />
				</ul>

			</div>
		</nav>
	);
};

export default NavBar;
