import { Icon7 } from "../../images/imgs";
import { Quote, Star } from "../../images/svg";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="w-full h-[500px] relative py-9 px-7 gradientGray rounded-xl border border-transparent hover:border-slate-yellow duration-300 hover:translate-y-[-20px]">
      <div className="flex items-center">
        <img className="opacity-90" width={70} src={Icon7} alt="quote" />
      </div>
      <p className="text-slate-100 mt-8 leading-9 text-2xl font-medium ">
        {testimonial.body}
      </p>
      <div className="flex flex-col gap-5 absolute bottom-5">
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star, index) => (
            <img key={index} width={28} src={Star} alt="star" />
          ))}
        </div>
        <h3 className="text-slate-100 text-2xl font-syne font-semibold">
          {testimonial.name}
        </h3>
        <span className="text-gray-400 text-xl font-medium">
          {testimonial.jobTitle}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;
