import { Shape6, Shape7, Vector2, Shape5, Shape3 } from "../../images/imgs";
import { motion } from "framer-motion";
import Btn from "../../utils/Btn";
const About = () => {
  return (
    <div className="px-5 w-full h-auto xl:py-36 py-20 flex max-lg:flex-col justify-between">
      <div className="lg:w-[50%] max-sm:h-[400px] h-[600px] w-full relative">
        <img
          className="size-full opacity-40 object-cover absolute top-0 left-0"
          src={Shape6}
          alt="shape-6"
        />
        <img
          className="size-full object-center absolute top-0 left-0"
          src={Shape7}
          alt="shape-7"
        />
        <motion.img
          animate={{ rotate: [0, 360] }}
          transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
          className="absolute top-[19%] left-20"
          src={Shape5}
          alt="shape-5"
        />
        <motion.img
          animate={{ y: [0, 20, 20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute z-[1]"
          src={Vector2}
          alt="about-img"
        />
      </div>
      <div className="lg:w-[40%] w-full relative">
        <img className="absolute left-[-207px] top-[-50px] opacity-30 z-[-1]" width={300} src={Shape3} alt="shape"/>
        <div className="flex flex-col pt-14 gap-8">
        <p className="w-fit px-3 py-2 rounded-md text-slate-yellow relative text-xl font-medium after:yellowBgOpacity">
          About Us
        </p>
        <h1 className="font-syne text-4xl xl:text-5xl mt-10 font-semibold text-white">
        Integrity, Transparency, and Investor Satisfaction
        </h1>
        <p className="text-lg text-zinc-400 font-medium leading-9">
        Creating content for a High-Yield Investment Program (HYIP) website requires careful consideration of legal and ethical guidelines. HYIPs can be risky investments
        </p>
        <div className="w-[195px] h-[60px]">
            <Btn bgColor={"bg-slate-yellow"} hover={"hover:bg-white"} label={"more details"}/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
