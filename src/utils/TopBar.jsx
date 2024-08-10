import { Link } from "react-router-dom";
import { Logo } from "../images/imgs";
import { navLinks } from "../constant";
import Btn from "./Btn";
import { Close, Menu } from "../images/svg";
import { useState } from "react";

const TopBar = ({ fixedBar }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav
      className={`w-full xl:px-[140px] px-5 border-b-2 border-white/5 ${
        fixedBar ? "py-5" : "xl:py-[38px] py-5"
      } ${fixedBar ? "fixed" : "absolute"} ${
        fixedBar ? "bg-zinc-900" : "bg-transparent"
      } duration-300 top-0 left-0 z-[99]`}
    >
      <div className="flex items-center">
        <div className="w-[160px] h-[60px]">
          <a href="/">
            <img className="size-full" src={Logo} alt="logo" />
          </a>
        </div>
        <img
          className="lg:hidden block ml-auto"
          width={50}
          src={Menu}
          alt=""
          onClick={() => setShowMenu(true)}
        />
        {/* start Menu on small screens */}
        <div
          className={`fixed right-0 top-0 z-50 w-full h-screen bg-zinc-900 flex flex-col gap-5 items-center justify-start pt-10 ${
            showMenu ? "mr-0" : "mr-[-100%]"
          } duration-300`}
        >
          <img
            width={20}
            height={20}
            src={Close}
            alt="close"
            onClick={() => setShowMenu(false)}
          />
          <img
            width={200}
            src={Logo}
            alt="logo"
            className="mt-10 mb-16"
          />
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link className="text-white text-xl pb-2 border-b border-borderColor active:text-slate-yellow duration-300" href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* end Menu on small screens */}
        <ul className="max-lg:hidden w-1/2 ml-20 flex justify-between items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="uppercase text-base text-white font-semibold hover:text-slate-yellow duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="max-lg:hidden w-[160px] h-[60px] ml-auto">
          <Btn
            bgColor={"bg-white"}
            hover={"hover:bg-slate-yellow"}
            label={"GET STARTED"}
          />
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
