import { motion } from 'framer-motion'
import BlogCard from './BlogCard'
import { blogs } from '../../constant'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay} from 'swiper/modules';
import { Shape26 } from '../../images/imgs';


const Blogs = () => {
    
  return (
    <div className="gradientBlack py-20 flex justify-center relative px-5 lg:px-10 flex-col gap-8">
      <p className="w-fit px-3 py-2 rounded-md text-slate-yellow relative text-xl font-medium after:yellowBgOpacity after:opacity-40">
        Our Blogs
      </p>
      <p className="max-sm:w-[90%] xl:text-5xl text-4xl text-white font-syne font-semibold font-syne">
        Latest Article
      </p>
      <div className="w-full relative flex flex-wrap justify-center gap-5">
      <motion.img 
        animate={{ rotate: [0, 360] }}
        transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
        src={Shape26} width={200} alt='shape-20' className='absolute z-[-1] left-[40%] top-[-20px]'/>
      <Swiper 
      slidesPerView={1} 
      spaceBetween={10}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }} 
      modules={[Autoplay]} 
      className="mySwiper"
      >
        {
            blogs.map((blog, index)=>(
                <SwiperSlide className='min-w-[370px] h-auto pt-20 flex-grow' key={index}>
                <BlogCard blog={blog}/>
                </SwiperSlide>
            ))
        }
      </Swiper>
      </div>
    </div>
  )
}

export default Blogs