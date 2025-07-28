import { useState, useRef } from "react";
import GetStarted from "./GetStarted";
import songVideo from "../assets/videos/song.mp4";

function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  function togglePlayback() {
    if (!videoRef.current) return;  // Checks if the video element is available
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);  // When toggled, it changes state to opposite
  }

  return (
    <div className="flex justify-center items-start pg-primary text-black">
      <div className="w-full xl:max-w-[1280px]">
        <section
          id="home"
          className="flex flex-col md:flex-row py-16 md:py-4 gap-10 md:gap-4"
          data-aos="fade-right"
        >
          {/* Left Side: Text Content */}
          <div
            className="flex-1 flex flex-col justify-center items-start paddingX xl:px-0 w-full"
            data-aos="fade-right"
          >
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="text-[52px] ss:text-[62px] font-semibold">
                The Next <br className="sm:block hidden" />
                <span className="text-[#23B07C]">Level</span>
              </h1>
              <div className="hidden ss:flex">
                <GetStarted />
              </div>
            </div>

            <h1 className="text-[52px] text-[#23B07C] ss:text-[62px] font-semibold">
              Frontend Application
            </h1>

            <p className="text-black paragraph mt-6 max-w-[500px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              doloremque voluptatum at sequi iure nulla necessitatibus vitae
              veniam ipsa provident!
            </p>
          </div>

          {/* Right Side: Video */}
          <div
            className="flex-1 relative flex justify-center items-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="group relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-[0_4px_15px_#23B37C] transition-shadow duration-300">
              <video
                ref={videoRef}
                src={songVideo}
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Play/Pause Button */}
              <button
                onClick={togglePlayback}
                className="absolute bottom-4 right-4 z-20 bg-white/80 hover:bg-white text-black text-sm px-3 py-1 rounded-full shadow-lg backdrop-blur"
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
            </div>
          </div>

          <div className="flex ss:hidden mx-auto" data-aos="fade-up">
            <GetStarted />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
