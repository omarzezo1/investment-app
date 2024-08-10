import { Check } from "../../images/svg";
import { Link } from "react-router-dom";

const PriceCard = ({price}) => {
  return (
    <div
    className={`min-w-[380px] flex-grow flex-wrap flex flex-col p-8 rounded-xl relative  ${
      price.title  === "Standard Plan" ? "after:gradientColorsBg after:opacity-5" : "gradientGray"
    }`}
  >
    <h4 className="text-xl text-white mb-6 font-semibold">
      {price.title}
    </h4>
    <p className="text-5xl font-medium mb-6 text-white">${price.price}</p>
    <button className="w-[200px] h-[60px] mb-8 bg-white hover:bg-slate-yellow/95 duration-300 rounded-full text-zinc-900 font-medium text-base">
      <Link to="">Get It Now</Link>
    </button>
    <div className="flex flex-col gap-3 pb-5 mb-8 border-b border-gray-400/40 text-white text-lg font-medium">
      <p>{price.accountsNumber} business account</p>
      <p>{price.daysNumber} Days Long</p>
    </div>
    <div className="">
      <h5 className="text-xl text-white font-semibold">
        Key Features :
      </h5>
      <ul className="mt-5">
        {
            price.features.map(fe=>(
            <li key={fe} className="text-gray-400 text-lg flex gap-1 items-center mb-3">
                <img width={30} src={Check} alt="check" />
                {fe}
            </li>
            ))
        }
      </ul>
    </div>
  </div>
  )
}

export default PriceCard