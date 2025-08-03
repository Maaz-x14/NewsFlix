import { features } from "../data/constant";
import CustomButton from "./Button";
import FeatureCard from "./FeatureCard";

function Business() {
  return (
    <div className="flex items-start justify-center text-black pg-primary paddingY">
      <div className="w-full xl:max-w-[1280px]">
        <section
          className="flex flex-col items-center gap-10 md:flex-row paddingX"
          data-aos="fade-up"
        >
          {/* Left Section: Text */}
          <div
            className="flex flex-col items-start flex-1"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h1 className="heading text-[#23B07C]">
              Planet Beyond
              <br className="hidden sm:block" /> Naam h aitemad ka.
            </h1>
            <p className="paragraph max-w-[520px] mt-8 text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              dignissimos maxime aliquam dolorum, officiis excepturi modi, rem
              unde delectus sed porro saepe odit, aspernatur ea!
            </p>

          </div>

          {/* Right Section: Feature Cards */}
          <div
            className="flex flex-col justify-center flex-1 gap-6"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {features.map((feature, index) => (
              <div
                key={feature.id}
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
              >
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Business;
