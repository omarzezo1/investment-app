import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../index.css";
import TopBar from "./utils/TopBar";
import Home from "./pages/Home";
import { ArrowUp } from "./images/svg";
import { useEffect, useState } from "react";
import Footer from "./utils/Footer";

function App() {
  const [fixedBar, setFixedBar] = useState(false)
  const [scrollToTopPosition, setScrollToTopPosition] = useState("top-[-20%]")

  useEffect(() => {
    window.addEventListener("scroll", ()=>{
      if (window.scrollY > 100) {
        setScrollToTopPosition("top-[85%]");
        setFixedBar(true)
      } else {
        setScrollToTopPosition("top-[-20%]");
        setFixedBar(false)
      }
    })
  }, []);

  const scrollToTop = ()=>{
    window.scrollTo(0,0)
  }

  return (
    <div>
      <div className={`size-14 fixed ${scrollToTopPosition} right-10 z-50 bg-slate-yellow rounded-full flex justify-center items-center cursor-pointer duration-700`} onClick={scrollToTop}>
        <img width={40} src={ArrowUp} alt="arrow-up" />
      </div>
      <BrowserRouter>
        <TopBar fixedBar={fixedBar}/>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
