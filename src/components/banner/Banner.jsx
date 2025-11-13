import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router";

const slides = [
  {
    image:
      "https://hips.hearstapps.com/hmg-prod/images/shibainu-dog-royalty-free-image-1752089989.pjpeg?crop=1xw:1xh;center,top&resize=980:*?auto=format&fit=crop&w=1400&q=80", // ✅ Working dog image
    tagline: "Find Your Furry Friend Today!",
    subtitle: "Thousands of loving pets are waiting for their forever homes.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1400&q=80", // ✅ Cute cat
    tagline: "Adopt, Don’t Shop — Give a Pet a Home.",
    subtitle: "Be the reason a rescue pet smiles again.",
  },
  {
    image:
      "https://i.ibb.co.com/23QcdzK9/ja-san-miguel-QQuv-Aw-Q-0-unsplash.jpg?auto=format&fit=crop&w=1400&q=80", // ✅ Happy adopted dog
    tagline: "Because Every Pet Deserves Love and Care.",
    subtitle: "Your compassion can change a life forever.",
  },
];


export default function Banner() {
  return (
    <div className="w-full h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] ">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* ✅ Use img tag instead of background for guaranteed visibility */}
              <img
                src={slide.image}
                alt={slide.tagline}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-6">
                <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">
                  {slide.tagline}
                </h1>
                <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-2xl">
                  {slide.subtitle}
                </p>
                <Link to="/category/Pets" className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-full text-lg shadow-lg transition">
                  View Available Pets
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
