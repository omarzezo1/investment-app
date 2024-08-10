import { motion } from "framer-motion";
import { Shape27, Shape28, Shape31, Shape32, Shape33 } from "../images/imgs";
import Btn from "./Btn";
import { ArrowUpRightWhite } from "../images/svg";
import { Link } from "react-router-dom";
import { footerLinks, socialFooter } from "../constant";

const Footer = () => {
  return (
    <footer className="w-full relative bgImg pb-24">
      <img
        className="w-full absolute top-0 left-0 opacity-50"
        src={Shape31}
        alt="shape-31"
      />
      <div className="lg:w-[90%] w-full xl:pt-[210px] xl:pb-[120px] py-10 max-md:px-4 px-0 relative top-[50px] left-[50%] translate-x-[-50%] flex flex-col items-center gap-12">
        <motion.img
          animate={{ rotate: [0, 360] }}
          transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
          className="absolute left-0 top-[40%] max-lg:hidden"
          src={Shape32}
          alt="shape-32"
        />
        <motion.img
          animate={{ y: [0, 20, 20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute top-[14%] right-10 z-[-1] max-lg:hidden"
          src={Shape33}
          alt="shape-32"
        />
        <motion.img
          animate={{ width: [300, 250, 250, 300] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-1/2 translate-x-[-50%] z-[-1] max-xl:hidden"
          src={Shape27}
          alt="shape-27"
        />
        <h2 className="xl:text-7xl text-5xl leading-snug text-center font-syne font-bold text-white">
          Have a project in mind?
          <br /> Let’s get to work.
        </h2>
        <div className="w-[180px] h-[60px]">
          <Btn
            label={"Contact us"}
            bgColor={"bg-slate-yellow"}
            hover={"hover:bg-white"}
            arrow={false}
          />
        </div>
      </div>
      <div className="relative flex max-xl:flex-col gap-8 justify-between w-full mt-5 p-10">
        <div className="xl:w-1/3 w-full flex items-center flex-col gap-8">
          <p className="text-2xl leading-10 max-xl:text-center font-medium text-slate-100">
            Understanding Risk Management in High-Yield Investment Programs
            Investments: Tips for Success
          </p>
          <h2>
            <Link
              className="flex gap-2 lg:text-6xl text-4xl font-bold font-syne text-slate-100 hover:text-slate-yellow duration-300"
              to={"/"}
            >
              Let’s Chat
              <img width={40} src={ArrowUpRightWhite} alt="arrow-right" />
            </Link>
          </h2>
        </div>
        <div className="xl:w-1/3 w-full">
          <ul className="flex flex-col items-center gap-8">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  className="text-gray-400 text-lg font-medium hover:text-slate-yellow duration-300"
                  to={link.path}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="xl:w-1/3 w-full flex flex-col gap-10">
          <p className="text-slate-100  md:text-2xl text-sm font-semibold max-lg:text-center hover:text-slate-yellow duration-300">
            hipre.investment@example.com
          </p>
          <p className="text-gray-400 md:text-xl text-base leading-9 max-lg:text-center font-medium">
            4517 Washington Ave. Manchester, Kentucky 39495
          </p>
        </div>
      </div>
      <div className="lg:w-[90%] mx-auto w-full max-lg:gap-8 flex max-lg:flex-col items-center justify-between">
        <div className="xl:w-1/2 w-full">
          <p className="text-gray-400 max-lg:text-center text-lg font-medium font-syne">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/omar-abd-elaziz-9110b11a7/"
              target="_blank"
              className="hover:text-slate-yellow"
            >
              Omar Abd Elaziz
            </a>{" "}
            © 2024
          </p>
        </div>
        <div className="flex items-center gap-5">
          {socialFooter.map((social) => (
            <div key={social.name} className="size-10 flex justify-center items-center border border-gray-400 rounded-lg relative hover:gradientBackground">
                <a href={social.link}>
                    <img width={20} src={social.icon} alt={social.name}/>
                </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
