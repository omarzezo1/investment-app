import { useState } from "react";
import Btn from "../../utils/Btn";
import { Shape17, Shape18, Shape6 } from "../../images/imgs";
import { faq } from "../../constant";

const Faq = () => {
  const [questionId, setQuestionId] = useState(0);

  return (
    <div className="py-20 xl:px-10 px-5 relative flex gap-10 max-lg:flex-col justify-between gradientGray overflow-hidden">
      <img
        className="size-full opacity-25 absolute z-[-1] top-0 left-0"
        src={Shape6}
        alt="shape-6"
      />
      <img className="max-xl:hidden absolute right-[-10%] top-0" src={Shape18} alt="shape-18"/>
      <img className="max-xl:hidden absolute left-[27%] bottom-12 z-[-1]" src={Shape17} alt="shape-17"/>
      <div className="xl:w-[30%] w-full flex flex-col gap-8">
        <p className="w-fit px-3 py-2 rounded-md text-slate-yellow relative text-xl font-medium after:yellowBgOpacity">
          FAQ
        </p>
        <p className="xl:text-5xl text-4xl text-white font-syne font-semibold font-syne">
          Frequently
          <br /> Asked Question
        </p>
        <p className="text-gray-400 text-lg leading-9">
          Holisticly predominate revolutionar value without robust manufacturey
          products credibly evisculate.
        </p>
        <div className="w-[180px] h-[60px]">
          <Btn
            label={"Contact us"}
            bgColor={"bg-slate-yellow"}
            hover={"hover:bg-white"}
            arrow={false}
          />
        </div>
      </div>
      <div className="xl:w-[60%] w-full flex flex-col gap-8">
        <ul className="w-full flex flex-col gap-5">
          {faq.map((fa, index) => (
            <li key={index}>
              <button className={`w-full text-left relative z-10 font-medium border-0 after:gradientColorsBg after:opacity-5 text-slate-100 cursor-pointer flex items-center pr-3 ${
                  questionId === index && "after:rounded-br-none after:rounded-bl-none"}`}>
                <h4
                  className="lg:text-2xl text-xl font-bold font-syne w-full px-3 py-6"
                  onClick={() => setQuestionId(index)}
                >
                  {fa.title}
                </h4>
                {questionId === index ? (
                  <span
                    className="text-2xl relative flex justify-center items-center font-bold text-slate-100 size-10 z-[-1] after:gradientColorsBg after:rounded-md after:opacity-100"
                  >
                    &#8722;
                  </span>
                ) : (
                  <span
                    className="text-2xl relative flex justify-center items-center font-bold text-slate-100 size-10 z-[-1] after:gradientColorsBg after:rounded-md after:opacity-20"
                    onClick={() => setQuestionId(5)}
                  >
                    &#43;
                  </span>
                )}
              </button>
              <div
                className={`relative after:gradientColorsBg after:opacity-5 py-7 px-3 ${
                  questionId === index ? "block after:rounded-tr-none after:rounded-tl-none" : "hidden"
                }`}
              >
                <span>
                  <p className="lg:text-lg max-sm:text-sm leading-9 text-slate-200">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humou, or words which don't look even
                    slightly believable.
                  </p>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faq;
