import arrowUp from '../assets/arrow-up.svg';
function GetStarted() {
	return (
		<div className='transition duration-300 rounded-full ss:p-6 flex items-center justify-center p-[3px] w-[140px] h-[140px]  bg-[#23B07C] cursor-pointer hover:shadow-[0_4px_15px_#23B37C]'>
			<div className='flex items-center justify-center w-full h-full rounded-full bg-[#23B07C]'>
				<div className='flex flex-col text-lg'>
					<div className='flex items-center gap-2'>
						<p className='text-white'>Start</p> <img src={arrowUp} />
					</div>
					<p className='text-white'>Demo</p>
				</div>
			</div>
		</div>	
	);
}

export default GetStarted;
