import Header from '../components/Home/Header'
import ClientsSlider from '../components/Home/ClientsSlider'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import Statistics from '../components/Home/Statistics'
import PricingPlan from '../components/Home/PricingPlan'
import Faq from '../components/Home/Faq'
import Testimonials from '../components/Home/Testimonials'
import Blogs from '../components/Home/Blogs'

const Home = () => {
  return (
    <div>
        <Header/>
        <ClientsSlider/>
        <About/>
        <Services/>
        <WhyChooseUs/>
        <Statistics/>
        <PricingPlan/>
        <Faq/>
        <Testimonials/>
        <Blogs/>
    </div>
  )
}

export default Home