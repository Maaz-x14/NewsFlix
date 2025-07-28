import { navLinks } from '../data/constant';

function NavLinks() {
	return (
		<>
			{navLinks.map(({ title, id }) => (
				<li key={id} className='font-medium cursor-pointer transition-all duration-300 ease-in-out relative after:content-[""] after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:origin-left hover:after:scale-x-100'>
					<a href={`#${id}`}>{title}</a>
				</li>
			))}
		</>
	);
}

export default NavLinks;
