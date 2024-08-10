import { Link } from "react-router-dom";
import { services } from "../../constant";
import { ArrowRight } from "../../images/svg";

const Services = () => {
  return (
    <div className="w-full">
      <div className="w-full py-20 flex flex-col items-center gap-8 gradientBlack">
        <p className="w-fit px-3 py-2 rounded-md text-slate-yellow relative text-xl font-medium after:yellowBgOpacity">
          Our Services
        </p>
        <h2 className="text-5xl text-center font-medium text-white">
          Our Advisory Services
        </h2>
        <div className="w-full flex gap-5 px-5 flex-wrap">
          {services.map((service) => (
            <div key={service.title} className="min-w-[333px] h-auto rounded-3xl mb-8 flex-1 bg-zinc-700/5 relative hover:after:gradientOverlay hover:bg-transparent duration-400">
              <img
                className="absolute top-5 right-5"
                width={200}
                src={service.iconPng}
                alt={service.title}
              />
              <div className="flex flex-col relative gap-8 px-10 pt-12 pb-10">
                <img width={84} height={84} src={service.iconSvg} alt="" />
                <div className="flex flex-col gap-5 relative z-10 top-0 left-0">
                  <h3>
                    <Link
                      className="text-[28px] font-medium text-white hover:text-slate-yellow duration-300 font-syne"
                      to=""
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-gray-500 text-lg font-medium mb-10">
                    {service.text}
                  </p>
                  <Link className="text-white w-fit text-lg flex gap-1 hover:text-slate-yellow duration-300 font-semibold font-syne" to={service.link}>
                  View Details
                <img className="hover:fill-slate-yellow duration-300" width={20} src={ArrowRight} alt="arrow-right"/>
                </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
