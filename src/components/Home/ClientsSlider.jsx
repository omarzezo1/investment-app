import { Clients } from "../../constant";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay} from 'swiper/modules';

const ClientsSlider = () => {
  return (
    <div div className="py-14 md:px-16 border-b-2 border-zinc-800">
      <Swiper 
      slidesPerView={1} 
      spaceBetween={10}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }} 
      modules={[Autoplay]} 
      className="mySwiper"
      >
        {Clients.map((client) => (
          <SwiperSlide key={client.name} className="flex justify-center">
            <a href="" className="flex justify-center">
                <img className="grayscale opacity-10 hover:grayscale-0 hover:opacity-100 duration-300" src={client.img} alt={client.name} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientsSlider;
