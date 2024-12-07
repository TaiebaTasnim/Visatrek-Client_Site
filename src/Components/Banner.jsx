import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa"; // Importing the right arrow icon
import "swiper/css";
import "swiper/css/autoplay";
import "animate.css"; // Animate.css for animations

const Banner = () => {
  const slides = [
    {
      image: "https://i.ibb.co/FJS11NC/visa-2.jpg",
      title: "Explore the World",
      description: "Find the best visa options to fulfill your travel dreams and embark on a journey of a lifetime.",
    },
    {
      image: "https://i.ibb.co/gjDHtZD/visa-3.jpg",
      title: "Seamless Visa Process",
      description: "Navigate visa applications with ease using our platform and simplify your travel plans effortlessly.",
    },
    {
      image: "https://i.ibb.co.com/2gmr2rD/visa-4.jpg",
      title: "Trusted by Thousands",
      description: "Join the growing community of happy travelers who trust us for their visa and immigration needs.",
    },
  ];

  return (
    <div className="relative ">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center px-6 md:px-16 lg:px-24">
                <div className="text-white max-w-lg animate__animated animate__fadeInRight">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-sm md:text-lg lg:text-xl mb-6 leading-relaxed">
                    {slide.description}
                  </p>
                  <button className="flex items-center gap-2 py-3 px-6 bg-[#e20934] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#e20934] to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  <span className="relative group-hover:text-white transition duration-500 ease-in-out">
                    Learn More
                    
                  </span>
                  <FaArrowRight className="text-lg hover:text-white" />
                </button>
                  {/* <button className="flex items-center gap-2 py-3 px-6 bg-[#e20934] text-white rounded-lg font-semibold hover:bg-black transition duration-300">
                    Learn More
                    <FaArrowRight className="text-lg" />
                  </button> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
