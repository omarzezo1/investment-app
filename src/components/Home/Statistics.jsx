import { statistics } from "../../constant";

const Statistics = () => {
  return (
    <div className="py-16 md:mt-10 justify-between flex flex-wrap gap-14 gradientBlack">
      {statistics.map((stat) => (
        <div key={stat.title} className="min-w-[290px] flex-grow justify-center items-center flex flex-col gap-5 relative after:statBorder last:after:hidden">
          <p className="flex items-center justify-center font-bold text-5xl text-white">
            {stat.number} <span className="text-slate-yellow ml-1">{stat.sign}</span>
          </p>
          <h4 className="capitalize text-gray-400 font-medium text-2xl text-center">
            {stat.title}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
