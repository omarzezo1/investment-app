import Btn from '../../utils/Btn'
import {Shape12, Shape14, Shape3, Shape6, Shape7, Vector3} from '../../images/imgs/index'
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  return (
    <div className="flex justify-between max-xl:items-center max-xl:flex-col max-md:gap-5 relative px-5 lg:px-10 py-20">
      <div className="xl:w-[38%] w-full flex flex-col gap-6">
        <motion.img
        animate={{width: [250, 220, 220, 250]}} 
        transition={{duration: 3, repeat: Infinity, ease: "linear"}}
        className='absolute left-[30%] top-32 z-[-1] opacity-30' width={250} src={Shape3} alt='shape-3'/>
        <p className="w-fit px-3 py-2 rounded-md text-slate-yellow relative text-xl font-medium after:yellowBgOpacity">
          Why Choose Us
        </p>
        <p className="xl:text-5xl text-4xl text-white font-semibold font-syne">
          Proven Track Record of Success
        </p>
        <p className="text-gray-400 text-lg leading-9">
          Creating content for a High-Yield Investment Program (HYIP) website
          requires careful consideration.
        </p>
        <div className="flex gap-3">
          <div className="xl:w-1/2 flex flex-col gap-2 rounded-xl w-full gradientGray px-3 py-5">
            <h4 className="text-2xl text-slate-yellow font-bold">No. 1</h4>
            <p className="text-lg font-medium text-gray-400">
              Transparent Reporting
            </p>
          </div>

          <div className="xl:w-1/2 flex flex-col gap-2 rounded-xl w-full gradientGray p-5">
            <h4 className="text-2xl text-slate-yellow font-bold">No. 2</h4>
            <p className="text-lg font-medium text-gray-400">
                Withdrawal Services
            </p>
          </div>
        </div>
        <div className="w-[195px] h-[60px] mt-5">
            <Btn label={"more details"} bgColor={"bg-slate-yellow"} hover={"hover:bg-white"} arrow={false}/>
        </div>
      </div>
      <div className='xl:w-[50%] h-[490px] w-full relative'>
        <img className='size-full absolute left-0 top-0 opacity-50' src={Shape6} alt='shape-6'/>
        <img className='size-full absolute left-0 top-0 opacity-80' src={Shape7} alt='vector-7'/>
        <img className='w-[80%] mx-auto absolute left-5 top-[23%] opacity-95' src={Shape12} alt='shape-14'/>
        <motion.img
        animate={{ y: [0, 10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className='absolute left-[35%] top-5 max-md:hidden' src={Shape14} alt='shape-14'/>
        <img className='absolute left-0 top-0' src={Vector3} alt='vector-3'/>
      </div>
    </div>
  );
};

export default WhyChooseUs;
