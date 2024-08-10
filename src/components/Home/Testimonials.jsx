import { motion } from 'framer-motion'
import { Shape20 } from '../../images/imgs'
import TestimonialCard from './TestimonialCard'
import { testimonials } from '../../constant'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination} from 'swiper/modules';

const Testimonials = () => {
    
  return (
    <div className="xl:py-32 py-20 flex justify-center relative items-center flex-col gap-8">
        <motion.img 
        animate={{width: [400, 350, 350, 400]}} 
        transition={{duration: 3, repeat: Infinity, ease: "linear"}}
        src={Shape20} alt='shape-20' className='absolute left-[8%] top-5 max-xl:hidden'/>
      <p className="w-fit px-3 py-2 rounded-md text-slate-yellow relative text-xl font-medium after:yellowBgOpacity">
        Testimonials
      </p>
      <p className="max-sm:w-[90%] text-center xl:text-5xl text-4xl text-white font-syne font-semibold font-syne">
        Our Clients Feedback
      </p>
      <div className="w-full flex flex-wrap justify-center px-5 gap-5 md:mt-5">
      <Swiper 
      slidesPerView={1} 
      spaceBetween={10}
      loop={true}
      pagination={{clickable: true}}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }} 
      modules={[Autoplay, Pagination]} 
      className="mySwiper testimonials"
      >
        {
            testimonials.map((testimonial, index)=>(
                <SwiperSlide className='min-w-[370px] pt-20 flex-grow' key={index}>
                    <TestimonialCard testimonial={testimonial}/>
                </SwiperSlide>
            ))
        }
      </Swiper>
      </div>
    </div>
  )
}

export default Testimonials