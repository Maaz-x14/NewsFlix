import CustomButton from './Button';

function CTA() {
  return (
    <div className='flex items-center justify-center text-black pg-primary paddingY'>
      <div className='w-full xl:max-w-[1280px]'>
        <section
          className='flex flex-col paddingX'
          data-aos='fade-up'
        >
          <div
            className='flex flex-col items-center justify-between px-6 py-6 rounded-lg md:flex-row sm:py-14 sm:px-16 bg-[#23B07C]'
            data-aos='zoom-in-up'
            data-aos-delay='100'
          >
            {/* Text Section */}
            <div data-aos='fade-right' data-aos-delay='200'>
              <h2 className='heading'>Come try our service now!</h2>
              <p className='paragraph max-w-[500px] mt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, rem!
              </p>
            </div>

            {/* Button */}
            <CustomButton
              style={'mt-10 self-start bg-white text-[#23B37C] hover:shadow-[0_4px_15px_white]'}
              data-aos='fade-left'
              data-aos-delay='300'
            >
              Get Started
            </CustomButton>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CTA;
