import './App.css';
import {MyNav} from './Components/MyNav'
import { Slider } from './Components/Slider';
import { AboutUs } from './Components/AboutUs';
import { OurProducts } from './Components/OurProducts';
import { ContactUs } from './Components/ContactUs';
import { Footer } from './Components/Footer';
function App() {

  return (
    <>
     <MyNav/>
    <Slider/>
<OurProducts/>
 <ContactUs/>
    <AboutUs/> 
   
    <Footer/>
    </>
  )
}

export default App
