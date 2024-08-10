import Btn from "../../utils/Btn";
import { Play } from "../../images/svg";
import { Bitcoin1, Bitcoin3, Shape2, Shape3, Vector1 } from "../../images/imgs";
import { motion } from "framer-motion"

const Header = () => {


  return (
    <div className="top-0 left-0 w-full relative bg-header-img border-b-2 border-zinc-800">
      <motion.img
      width={200}
      animate={{scale: [1, 1.2, 1.2, 1]}}
      transition={{ease: "linear", repeat: Infinity, duration: 5}}
      className="absolute bottom-10 left-0" src={Shape2} alt="shape-3"
      />
      <motion.img
      width={400}
      animate={{rotate: [0, 360]}}
      transition={{ease: "linear", repeat: Infinity, duration: 20}}
      className="hidden lg:block absolute top-60 left-[35%]" src={Shape3} alt="shape-3"
      />
      <div className="size-full pt-[220px] px-0 pb-[140px] relative top-0 left-0 z-10 bg-zinc-800/5">
        <div className="xl:w-[80%] w-[95%] mx-auto flex flex-col items-center">
          <p className="px-3 py-2 rounded-md relative text-slate-yellow after:yellowBgOpacity text-xl font-medium">
            Trusted Investment
            <img
            className="hidden xl:block absolute left-[-20px] bottom-[-40px]" src={Bitcoin1} alt="bitcoin-1"
            />
          </p>
          <h1 className="relative font-syne text-5xl xl:text-7xl mt-10 text-center font-semibold text-white">
            Updates, Regulations, & Your Investment Journey
            <img className="hidden xl:block absolute right-32 top-20" src={Bitcoin3} alt="bitcoin-1"/>
          </h1>
          <div className="flex gap-5 items-center mt-16">
            <div className="w-[200px] h-[60px]">
              <Btn
                bgColor= "bg-slate-yellow"
                hover= "hover:bg-white"
                label= "GET STARTED"
                arrow = {true}
              />
            </div>
            <div className="size-16 flex items-center justify-center rounded-full cursor-pointer bg-red-500">
              <img width={20} src={Play} alt="play"/>
            </div>
          </div>
          <motion.div
          animate={{ y: [0, 20 , 20, 0]}}
          transition={{repeat: Infinity, duration: 2}}
          className="max-w-[870px] w-full mt-2"
          >
            <img src={Vector1} alt="vector-img"/>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
