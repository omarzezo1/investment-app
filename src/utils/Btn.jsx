import { Link } from "react-router-dom"
import { ArrowUpRight } from "../images/svg"

const Btn = ({bgColor, hover, label, arrow}) => {
  return (
    <button className="size-full">
        <Link className={`flex items-center justify-center size-full uppercase text-base font-semibold rounded-md text-zinc-900 ${bgColor} cursor-pointer ${hover} duration-300`} to="#">
        {label}
        {arrow && <img className="ml-2" width={25} src={ArrowUpRight} alt="arrow-up"/>}
        </Link>
    </button>
  )
}

export default Btn