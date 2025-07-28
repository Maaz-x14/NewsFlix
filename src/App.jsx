import {
	Hero,
	NavBar,
	Business,
	CardDeal,
	Teshtimoninials,
	CTA,
	Footer,
	ScrollToTopButton
} from './components';
import AOS from 'aos';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1000, // ms
			once: true,     // animate only once
			offset: 100,    // when to trigger
		});
	}, []);

	return (
		<div className='w-full !bg-white !text-black min-h-screen overflow-y-auto pt-20'>
			<NavBar />
			<Hero />
			<Business />
			<CardDeal />
			<Teshtimoninials />
			<CTA />
			<Footer />
			<ScrollToTopButton />
		</div>
	);
}

export default App;


