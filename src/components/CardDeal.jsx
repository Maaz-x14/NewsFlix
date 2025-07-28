import CustomButton from "./Button";
import PBimg from "../assets/PB.png";

function CardDeal() {
  return (
    <div className="flex items-start justify-center pg-primary paddingY">
      <div className="w-full xl:max-w-[1280px]">
        <section
          className="flex flex-col-reverse items-center gap-10 md:flex-row-reverse paddingX"
          data-aos="fade-up"
        >
          {/* Image Section */}
          <div
            className="flex-1"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img
              src={PBimg}
              className="w-[100%] h-[100%] rounded-3xl"
              alt="PB"
            />
          </div>

          {/* Text Section */}
          <div
            className="flex flex-col items-start flex-1"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2 className="heading text-[#23B07C]">
              Lorem, ipsum dolor lorem <br className="hidden sm:block" />
              Lorem, ipsum dolor.
            </h2>
            <p className="paragraph max-w-[520px] mt-8 text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              perspiciatis odio deleniti dolores, atque veniam hic temporibus
              vitae exercitationem? Repudiandae.
            </p>
            <CustomButton style={"mt-10 text-white"}>Get Started</CustomButton>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CardDeal;
